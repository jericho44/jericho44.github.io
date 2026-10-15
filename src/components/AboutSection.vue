<script setup lang="ts">
import {
  Server,
  Database,
  Layout,
  Cpu,
  Sparkles,
  CheckCircle,
} from 'lucide-vue-next'
import { profileData, pillarsData } from '../data/portfolioData'

const getPillarIcon = (icon: string) => {
  switch (icon) {
    case 'Server': return Server
    case 'Database': return Database
    case 'Layout': return Layout
    case 'Cpu': return Cpu
    default: return Sparkles
  }
}

const keyHighlights = [
  '3+ years architecting enterprise backend systems with Laravel, Golang & Spring Boot',
  'Deep domain expertise in Manufacturing (RPA), Governance (GCG), and ERP operations',
  'Strict adherence to Clean Architecture, SOLID principles, and decoupled design',
  'Specialized in high-concurrency database schemas and complex PostgreSQL/MySQL queries',
  'End-to-end fullstack development with Vue.js, TypeScript, and modern reactive UX',
  'Automated production deployment, Linux VPS hardening, Nginx, and Docker containers',
]
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <Sparkles :size="14" />
          <span>Core Engineering Philosophy</span>
        </div>
        <h2 class="section-title">
          Engineering Resilient, Scalable &amp;
          <span class="text-gradient">Maintainable Software</span>
        </h2>
        <p class="section-subtitle">
          Bridging complex enterprise business requirements with robust backend architectures and sleek, user-friendly frontend experiences.
        </p>
      </div>

      <!-- Highlights & Bio Grid -->
      <div class="about-grid">
        <!-- Left: Bio & Highlights List -->
        <div class="about-bio-card glass-card">
          <h3 class="bio-heading">About Me</h3>
          <p class="bio-text">
            I am <strong class="text-white">{{ profileData.name }}</strong>, a results-oriented 
            <strong class="text-indigo">Fullstack Engineer</strong> based in Surabaya, Indonesia. 
            Over the past 3+ years, I have engineered mission-critical enterprise applications 
            for state-owned enterprises (BUMN), industrial manufacturing corporations, and rapid-growth technology platforms.
          </p>
          <p class="bio-text">
            My engineering philosophy centers on <em>system longevity, predictability, and performance</em>. 
            I avoid shortcuts by implementing Clean Architecture, Repository-Service patterns, strict API contracts, 
            and proactive database indexing—ensuring systems scale smoothly under heavy operational loads.
          </p>

          <div class="highlight-list">
            <div
              v-for="(item, idx) in keyHighlights"
              :key="idx"
              class="highlight-item"
            >
              <CheckCircle :size="18" class="highlight-icon" />
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Right: 4 Engineering Pillars Grid -->
        <div class="pillars-grid">
          <div
            v-for="(pillar, idx) in pillarsData"
            :key="idx"
            class="pillar-card glass-card"
          >
            <div class="pillar-icon-box">
              <component :is="getPillarIcon(pillar.icon)" :size="24" />
            </div>
            <h4 class="pillar-title">{{ pillar.title }}</h4>
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
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-bio-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
}

.bio-heading {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.bio-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.text-white {
  color: var(--text-main);
}

.text-indigo {
  color: var(--accent-primary);
}

.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.925rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.highlight-icon {
  color: var(--accent-emerald);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 600px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}

.pillar-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.pillar-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  margin-bottom: 1.25rem;
  transition: all var(--transition-normal);
}

.pillar-card:hover .pillar-icon-box {
  background: var(--gradient-brand);
  color: #ffffff;
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
}

.pillar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}

.pillar-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
}
</style>
