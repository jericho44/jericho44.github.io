<script setup lang="ts">
import {
  ArrowDown,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Briefcase,
  Layers,
  MapPin,
} from 'lucide-vue-next'
import { profileData, statsData } from '../data/portfolioData'
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left Content -->
        <div class="hero-content">
          <!-- Availability Pill -->
          <div class="availability-pill" v-if="profileData.availableForWork">
            <span class="status-indicator"></span>
            <span>Open to fullstack &amp; backend engineering roles</span>
          </div>

          <!-- Name & Role -->
          <h1 class="hero-title">
            {{ profileData.name }}
          </h1>

          <p class="hero-tagline">
            {{ profileData.title }} specializing in backend systems, REST APIs, and modern web applications.
          </p>

          <!-- Bio -->
          <p class="hero-summary">
            Currently working at <strong>PT Wonokoyo Jaya Corporindo</strong>. 3+ years of experience engineering enterprise web tools, ERPs, and workflow systems using <strong>Laravel</strong>, <strong>Golang</strong>, <strong>Spring Boot</strong>, and <strong>Vue.js</strong>.
          </p>

          <!-- CTAs -->
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary">
              <span>View Projects</span>
              <ArrowDown :size="16" />
            </a>
            <a
              :href="profileData.resumeUrl"
              target="_blank"
              download
              class="btn btn-secondary"
            >
              <FileDown :size="16" />
              <span>Resume (PDF)</span>
            </a>
            <a href="#contact" class="btn btn-ghost">
              <span>Contact</span>
            </a>
          </div>

          <!-- Social Links -->
          <div class="hero-social-row">
            <a
              :href="profileData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github :size="19" />
            </a>
            <a
              :href="profileData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin :size="19" />
            </a>
            <a
              :href="'mailto:' + profileData.email"
              class="social-link"
              title="Send Email"
              aria-label="Email"
            >
              <Mail :size="19" />
            </a>
            <a
              :href="profileData.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle :size="19" />
            </a>
          </div>
        </div>

        <!-- Right: Professional Profile Snapshot Card -->
        <div class="hero-card-col">
          <div class="snapshot-card glass-card">
            <div class="snapshot-header">
              <span class="snapshot-label font-mono">PROFILE SUMMARY</span>
              <span class="location-tag">
                <MapPin :size="12" />
                <span>{{ profileData.location }}</span>
              </span>
            </div>

            <div class="snapshot-body">
              <div class="snapshot-item">
                <div class="snapshot-item-header">
                  <Briefcase :size="15" class="item-icon" />
                  <span class="item-title">Current Position</span>
                </div>
                <div class="item-desc">
                  Fullstack Developer at <span class="highlight-text">PT Wonokoyo Jaya Corporindo</span>
                </div>
              </div>

              <div class="snapshot-item">
                <div class="snapshot-item-header">
                  <Layers :size="15" class="item-icon" />
                  <span class="item-title">Primary Backend</span>
                </div>
                <div class="tags-row">
                  <span class="tag">Laravel</span>
                  <span class="tag">Golang</span>
                  <span class="tag">Spring Boot</span>
                  <span class="tag">REST API</span>
                </div>
              </div>

              <div class="snapshot-item">
                <div class="snapshot-item-header">
                  <Layers :size="15" class="item-icon" />
                  <span class="item-title">Frontend &amp; DB</span>
                </div>
                <div class="tags-row">
                  <span class="tag">Vue.js (Vue 3)</span>
                  <span class="tag">TypeScript</span>
                  <span class="tag">PostgreSQL</span>
                  <span class="tag">MySQL</span>
                </div>
              </div>

              <div class="snapshot-item">
                <div class="snapshot-item-header">
                  <Layers :size="15" class="item-icon" />
                  <span class="item-title">Deployment &amp; Infra</span>
                </div>
                <div class="tags-row">
                  <span class="tag">Linux VPS</span>
                  <span class="tag">Docker</span>
                  <span class="tag">Nginx</span>
                  <span class="tag">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="stats-row">
        <div
          v-for="(stat, idx) in statsData"
          :key="idx"
          class="stat-box"
        >
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-title">{{ stat.label }}</div>
          <div class="stat-desc">{{ stat.sublabel }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 8rem;
  padding-bottom: 4rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.availability-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.825rem;
  margin-bottom: 1.5rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-emerald);
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.15rem;
  }
}

.hero-tagline {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  line-height: 1.45;
}

.hero-summary {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 580px;
}

.hero-summary strong {
  color: var(--text-main);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.btn-ghost {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid transparent;
}

.btn-ghost:hover {
  color: var(--text-main);
  background: var(--bg-surface);
  border-color: var(--border-subtle);
}

.hero-social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--text-main);
  border-color: var(--border-medium);
  transform: translateY(-2px);
}

/* Snapshot Card */
.snapshot-card {
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
}

.snapshot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--border-subtle);
}

.snapshot-label {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  font-weight: 600;
}

.location-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.snapshot-body {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.snapshot-item-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.35rem;
}

.item-icon {
  color: var(--text-dim);
}

.item-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-dim);
}

.item-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.highlight-text {
  color: var(--text-main);
  font-weight: 600;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-sm);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 3.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-subtle);
}

@media (max-width: 860px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
}

.stat-box {
  padding: 0.5rem 0;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.stat-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.15rem;
}

.stat-desc {
  font-size: 0.8rem;
  color: var(--text-dim);
}
</style>
