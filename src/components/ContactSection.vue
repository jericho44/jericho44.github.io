<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  MapPin,
} from 'lucide-vue-next'
import { profileData } from '../data/portfolioData'

const isEmailCopied = ref(false)
const senderName = ref('')
const senderSubject = ref('')
const senderMessage = ref('')

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profileData.email)
    isEmailCopied.value = true
    setTimeout(() => {
      isEmailCopied.value = false
    }, 2500)
  } catch (e) {
    console.error('Failed to copy email', e)
  }
}

const sendInquiry = (method: 'email' | 'whatsapp') => {
  const subject = encodeURIComponent(senderSubject.value || 'Hello from Portfolio')
  const body = encodeURIComponent(
    `Hi Rico,\n\nMy name is ${senderName.value || 'Visitor'}.\n\n${senderMessage.value || 'I would like to discuss an opportunity.'}\n\nBest,`
  )

  if (method === 'whatsapp') {
    const waText = encodeURIComponent(
      `Hi Rico, my name is ${senderName.value || 'Visitor'}. ${senderMessage.value || 'I would like to discuss an opportunity.'}`
    )
    window.open(`https://wa.me/6285604533743?text=${waText}`, '_blank')
  } else {
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`
  }
}
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Have an inquiry, role opening, or want to discuss a project? Feel free to reach out.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Left: Direct Channels -->
        <div class="contact-info-col">
          <!-- Email Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box">
              <Mail :size="20" />
            </div>
            <div class="card-details">
              <span class="card-label">Email</span>
              <a :href="'mailto:' + profileData.email" class="card-value">
                {{ profileData.email }}
              </a>
            </div>
            <button
              @click="copyEmail"
              class="copy-btn"
              :class="{ copied: isEmailCopied }"
              :title="isEmailCopied ? 'Copied' : 'Copy email address'"
            >
              <Check v-if="isEmailCopied" :size="14" class="text-emerald" />
              <Copy v-else :size="14" />
              <span>{{ isEmailCopied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>

          <!-- WhatsApp Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box">
              <MessageCircle :size="20" />
            </div>
            <div class="card-details">
              <span class="card-label">WhatsApp</span>
              <a
                :href="profileData.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="card-value"
              >
                {{ profileData.phone }}
              </a>
            </div>
            <a
              :href="profileData.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary btn-sm"
            >
              Chat
            </a>
          </div>

          <!-- Location Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box">
              <MapPin :size="20" />
            </div>
            <div class="card-details">
              <span class="card-label">Location</span>
              <span class="card-value-text">{{ profileData.location }}</span>
              <span class="card-subtext">Open to Remote / Hybrid / On-site</span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="social-links-grid">
            <a
              :href="profileData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-tile glass-card"
            >
              <Github :size="18" />
              <span>GitHub</span>
            </a>
            <a
              :href="profileData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-tile glass-card"
            >
              <Linkedin :size="18" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right: Message Form -->
        <div class="contact-form-card glass-card">
          <h3 class="form-title">Send a Message</h3>
          <p class="form-desc">
            You can compose a quick message here to open via email or direct WhatsApp chat.
          </p>

          <form @submit.prevent="sendInquiry('email')" class="form-body">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input
                id="name"
                v-model="senderName"
                type="text"
                class="form-input"
                placeholder="Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input
                id="subject"
                v-model="senderSubject"
                type="text"
                class="form-input"
                placeholder="Subject / Role / Project"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="senderMessage"
                rows="4"
                class="form-textarea"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div class="form-buttons">
              <button type="submit" class="btn btn-primary flex-1">
                <Send :size="14" />
                <span>Send via Email</span>
              </button>
              <button
                type="button"
                @click="sendInquiry('whatsapp')"
                class="btn btn-secondary flex-1"
              >
                <MessageCircle :size="14" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-card {
  padding: 1.15rem 1.35rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon-box {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
}

.card-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-label {
  font-size: 0.725rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  margin-bottom: 0.1rem;
}

.card-value {
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text-main);
}

.card-value:hover {
  color: var(--accent-primary);
}

.card-value-text {
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text-main);
}

.card-subtext {
  font-size: 0.775rem;
  color: var(--text-dim);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  color: var(--text-main);
  border-color: var(--border-medium);
}

.copy-btn.copied {
  color: var(--accent-emerald);
}

.social-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.social-tile {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: all var(--transition-normal);
}

.social-tile:hover {
  color: var(--text-main);
  border-color: var(--border-medium);
}

/* Form Card */
.contact-form-card {
  padding: 2rem;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.form-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-md);
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--border-medium);
}

.form-textarea {
  resize: vertical;
}

.form-buttons {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

@media (max-width: 500px) {
  .form-buttons {
    flex-direction: column;
  }
}

.flex-1 {
  flex: 1;
}
</style>
