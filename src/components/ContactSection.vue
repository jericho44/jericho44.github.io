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
  Sparkles,
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
  const subject = encodeURIComponent(senderSubject.value || 'Project Inquiry / Collaboration')
  const body = encodeURIComponent(
    `Hello Rico,\n\nMy name is ${senderName.value || 'Visitor'}.\n\nMessage:\n${senderMessage.value || 'I am interested in collaborating with you.'}\n\nBest regards,`
  )

  if (method === 'whatsapp') {
    const waText = encodeURIComponent(
      `Hello Rico, my name is ${senderName.value || 'Visitor'}. ${senderMessage.value || 'I would like to discuss an opportunity.'}`
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
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <Sparkles :size="14" />
          <span>Get In Touch</span>
        </div>
        <h2 class="section-title">
          Let's Build Something
          <span class="text-gradient">Exceptional Together</span>
        </h2>
        <p class="section-subtitle">
          Open for fullstack engineering roles, enterprise system architecture, and impactful software collaborations.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="contact-grid">
        <!-- Left: Quick Direct Channels -->
        <div class="contact-info-col">
          <!-- Email Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box email-icon">
              <Mail :size="24" />
            </div>
            <div class="card-details">
              <span class="card-label">Direct Email</span>
              <a :href="'mailto:' + profileData.email" class="card-value">
                {{ profileData.email }}
              </a>
            </div>
            <button
              @click="copyEmail"
              class="copy-btn"
              :class="{ copied: isEmailCopied }"
              :title="isEmailCopied ? 'Copied!' : 'Copy to clipboard'"
            >
              <Check v-if="isEmailCopied" :size="16" class="text-emerald" />
              <Copy v-else :size="16" />
              <span>{{ isEmailCopied ? 'Copied!' : 'Copy' }}</span>
            </button>
          </div>

          <!-- WhatsApp Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box wa-icon">
              <MessageCircle :size="24" />
            </div>
            <div class="card-details">
              <span class="card-label">WhatsApp Direct</span>
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

          <!-- Location & Availability Card -->
          <div class="contact-card glass-card">
            <div class="card-icon-box loc-icon">
              <MapPin :size="24" />
            </div>
            <div class="card-details">
              <span class="card-label">Location &amp; Work Mode</span>
              <span class="card-value-text">{{ profileData.location }}</span>
              <span class="card-subtext">On-site / Hybrid / Full Remote</span>
            </div>
          </div>

          <!-- Social Links Grid -->
          <div class="social-links-grid">
            <a
              :href="profileData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-tile glass-card"
            >
              <Github :size="22" />
              <span>GitHub</span>
            </a>
            <a
              :href="profileData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-tile glass-card"
            >
              <Linkedin :size="22" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right: Fast Inquiry Form -->
        <div class="contact-form-card glass-card">
          <h3 class="form-title">Send a Quick Message</h3>
          <p class="form-desc">
            Fill in the details below to dispatch an email or initiate an instant WhatsApp conversation.
          </p>

          <form @submit.prevent="sendInquiry('email')" class="form-body">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input
                id="name"
                v-model="senderName"
                type="text"
                class="form-input"
                placeholder="e.g. Alex Johnson"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject / Purpose</label>
              <input
                id="subject"
                v-model="senderSubject"
                type="text"
                class="form-input"
                placeholder="e.g. Fullstack Engineer Role or Project Discussion"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message Details</label>
              <textarea
                id="message"
                v-model="senderMessage"
                rows="4"
                class="form-textarea"
                placeholder="Tell me about your system requirements, team, or opportunity..."
                required
              ></textarea>
            </div>

            <div class="form-buttons">
              <button type="submit" class="btn btn-primary flex-1">
                <Send :size="16" />
                <span>Send via Email</span>
              </button>
              <button
                type="button"
                @click="sendInquiry('whatsapp')"
                class="btn btn-secondary flex-1"
              >
                <MessageCircle :size="16" />
                <span>Chat via WhatsApp</span>
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
  gap: 2.5rem;
  align-items: start;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-card {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.card-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.email-icon {
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-primary);
  border: 1px solid rgba(99, 102, 241, 0.25);
}

.wa-icon {
  background: rgba(16, 185, 129, 0.12);
  color: var(--accent-emerald);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.loc-icon {
  background: rgba(6, 182, 212, 0.12);
  color: var(--accent-cyan);
  border: 1px solid rgba(6, 182, 212, 0.25);
}

.card-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-label {
  font-size: 0.775rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  margin-bottom: 0.15rem;
}

.card-value {
  font-size: 0.975rem;
  font-weight: 600;
  color: var(--text-main);
  transition: color var(--transition-fast);
}

.card-value:hover {
  color: var(--accent-primary);
}

.card-value-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
}

.card-subtext {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  color: var(--text-main);
  border-color: var(--border-accent);
}

.copy-btn.copied {
  color: var(--accent-emerald);
  border-color: rgba(16, 185, 129, 0.4);
}

.social-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.social-tile {
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-muted);
  transition: all var(--transition-normal);
}

.social-tile:hover {
  color: var(--accent-primary);
  border-color: var(--border-accent);
  transform: translateY(-2px);
}

/* Form Card */
.contact-form-card {
  padding: 2.25rem;
}

.form-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
}

.form-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.75rem;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-muted);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  font-size: 0.925rem;
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.form-textarea {
  resize: vertical;
}

.form-buttons {
  display: flex;
  gap: 1rem;
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
