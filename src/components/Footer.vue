<script setup lang="ts">
import {
  ArrowUp,
  Code2,
  Github,
  Linkedin,
  Mail,
} from 'lucide-vue-next'
import { profileData } from '../data/portfolioData'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper">
    <div class="container footer-container">
      <!-- Top Row -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon-box">
              <Code2 :size="18" />
            </div>
            <span class="logo-text">
              <strong>Rico Wahyu</strong> Yudana Putra
            </span>
          </div>
          <p class="footer-tagline">
            {{ profileData.title }} — Specialized in high-performance enterprise applications, scalable architectures, and modern web engineering.
          </p>
        </div>

        <!-- Back to Top Button -->
        <button
          @click="scrollToTop"
          class="back-to-top-btn glass-card"
          title="Scroll back to top"
          aria-label="Back to top"
        >
          <ArrowUp :size="18" />
          <span>Back to Top</span>
        </button>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Row -->
      <div class="footer-bottom">
        <div class="footer-copy">
          &copy; {{ currentYear }} Rico Wahyu Yudana Putra. All rights reserved.
        </div>

        <div class="footer-tech-note">
          Crafted with <strong>Vue 3</strong> &amp; <strong>TypeScript</strong> • Deployed on <strong>GitHub Pages</strong>
        </div>

        <div class="footer-socials">
          <a
            :href="profileData.github"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
            aria-label="GitHub"
          >
            <Github :size="18" />
          </a>
          <a
            :href="profileData.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin :size="18" />
          </a>
          <a
            :href="'mailto:' + profileData.email"
            class="footer-social-link"
            aria-label="Email"
          >
            <Mail :size="18" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 4.5rem 0 2.5rem 0;
  position: relative;
  z-index: 10;
}

.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 520px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.85rem;
}

.logo-icon-box {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.15rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  border-radius: var(--radius-full);
}

.back-to-top-btn:hover {
  color: var(--text-main);
  border-color: var(--border-accent);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: var(--border-subtle);
  margin-bottom: 2rem;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-size: 0.85rem;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

.footer-tech-note strong {
  color: var(--text-muted);
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-social-link {
  color: var(--text-dim);
  transition: color var(--transition-fast);
}

.footer-social-link:hover {
  color: var(--accent-primary);
}
</style>
