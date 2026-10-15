<script setup lang="ts">
import {
  Server,
  Database,
  Layout,
  Cpu,
  CheckCircle2,
} from 'lucide-vue-next'
import { pillarsData } from '../data/portfolioData'

const getPillarIcon = (icon: string) => {
  switch (icon) {
    case 'Server': return Server
    case 'Database': return Database
    case 'Layout': return Layout
    case 'Cpu': return Cpu
    default: return Server
  }
}

const keyHighlights = [
  '3+ years building enterprise applications with Laravel, Golang, and Spring Boot',
  'Experience with manufacturing production systems, ERP modules, and corporate E-Office',
  'Practical approach to Clean Architecture, SOLID principles, and maintainable services',
  'Hands-on relational schema design and query optimization in PostgreSQL and MySQL',
  'Fullstack frontend integration using Vue.js (Vue 3) and TypeScript',
  'Linux VPS server setup, Nginx configuration, Docker containers, and CI/CD',
]
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">
          Background, work focus, and core technical competencies.
        </p>
      </div>

      <div class="about-grid">
        <!-- Left: Bio & Work Highlights -->
        <div class="about-bio-card glass-card">
          <p class="bio-text">
            I am a <strong>Fullstack Engineer</strong> based in Surabaya, Indonesia, with over 3 years of experience developing enterprise web applications and backend systems.
          </p>
          <p class="bio-text">
            My primary strength is in backend development—designing RESTful APIs, structuring business logic, and optimizing relational databases with <strong>Laravel</strong>, <strong>Golang</strong>, and <strong>PostgreSQL / MySQL</strong>. I also have solid experience building user-facing dashboards and internal tools with <strong>Vue.js (Vue 3)</strong> and TypeScript.
          </p>
          <p class="bio-text">
            I value code that is straightforward to read, test, and maintain. Rather than overcomplicating architectures, I focus on building reliable solutions that solve actual business problems and perform well in production.
          </p>

          <div class="highlight-list">
            <div
              v-for="(item, idx) in keyHighlights"
              :key="idx"
              class="highlight-item"
            >
              <CheckCircle2 :size="16" class="highlight-icon" />
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Right: 4 Focus Cards -->
        <div class="pillars-grid">
          <div
            v-for="(pillar, idx) in pillarsData"
            :key="idx"
            class="pillar-card glass-card"
          >
            <div class="pillar-icon-box">
              <component :is="getPillarIcon(pillar.icon)" :size="20" />
            </div>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-description">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-bio-card {
  padding: 2.25rem;
}

.bio-text {
  font-size: 0.975rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 1.15rem;
}

.bio-text strong {
  color: var(--text-main);
}

.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.highlight-icon {
  color: var(--accent-emerald);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 600px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}

.pillar-card {
  padding: 1.5rem;
}

.pillar-icon-box {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.pillar-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.pillar-description {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text-muted);
}
</style>
