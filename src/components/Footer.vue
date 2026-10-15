<script setup lang="ts">
import {
  ArrowUp,
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
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-name">Rico Wahyu Yudana Putra</div>
          <div class="footer-role">Fullstack Engineer &bull; Surabaya, Indonesia</div>
        </div>

        <div class="footer-actions">
          <div class="footer-socials">
            <a
              :href="profileData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github :size="16" />
            </a>
            <a
              :href="profileData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin :size="16" />
            </a>
            <a
              :href="'mailto:' + profileData.email"
              class="footer-social-link"
              title="Email"
              aria-label="Email"
            >
              <Mail :size="16" />
            </a>
          </div>

          <button
            @click="scrollToTop"
            class="back-to-top-btn"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp :size="14" />
            <span>Top</span>
          </button>
        </div>
      </div>

      <div class="footer-sub">
        <span>&copy; {{ currentYear }} Rico Wahyu Yudana Putra</span>
        <!-- <span>Built with Vue 3 &amp; TypeScript</span> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 0 2rem 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.footer-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.15rem;
}

.footer-role {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.footer-social-link {
  color: var(--text-muted);
  transition: color var(--transition-fast);
}

.footer-social-link:hover {
  color: var(--text-main);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  font-size: 0.775rem;
  color: var(--text-muted);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.back-to-top-btn:hover {
  color: var(--text-main);
  border-color: var(--border-medium);
}

.footer-sub {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.8rem;
  color: var(--text-dim);
}

@media (max-width: 600px) {
  .footer-sub {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
