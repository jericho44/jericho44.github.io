<script setup lang="ts">
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-vue-next'
import { experiencesData } from '../data/portfolioData'
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <Briefcase :size="14" />
          <span>Career Journey</span>
        </div>
        <h2 class="section-title">
          Professional Work
          <span class="text-gradient">Experience</span>
        </h2>
        <p class="section-subtitle">
          Over 3 years of building enterprise-grade backend APIs, microservices, and integrated fullstack solutions for diverse industries.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="timeline">
        <div
          v-for="exp in experiencesData"
          :key="exp.id"
          class="timeline-item"
        >
          <!-- Timeline Marker / Node -->
          <div class="timeline-marker">
            <div class="marker-dot" :class="{ 'current': exp.isCurrent }">
              <span v-if="exp.isCurrent" class="pulse-dot"></span>
            </div>
            <div class="marker-line"></div>
          </div>

          <!-- Timeline Content Card -->
          <div class="timeline-content glass-card">
            <div class="exp-header">
              <div>
                <div class="exp-title-row">
                  <h3 class="exp-role">{{ exp.role }}</h3>
                  <span v-if="exp.isCurrent" class="current-badge">
                    Active Role
                  </span>
                </div>
                <h4 class="exp-company">{{ exp.company }}</h4>
              </div>

              <div class="exp-meta">
                <span class="exp-meta-item">
                  <Calendar :size="14" />
                  <span>{{ exp.period }}</span>
                </span>
                <span class="exp-meta-item">
                  <MapPin :size="14" />
                  <span>{{ exp.location }}</span>
                </span>
              </div>
            </div>

            <!-- Description -->
            <p v-if="exp.description" class="exp-desc">
              {{ exp.description }}
            </p>

            <!-- Bullet Points -->
            <ul class="exp-bullet-list">
              <li
                v-for="(point, idx) in exp.bulletPoints"
                :key="idx"
                class="exp-bullet-item"
              >
                <CheckCircle2 :size="16" class="bullet-check" />
                <span>{{ point }}</span>
              </li>
            </ul>

            <!-- Tech Pills -->
            <div class="exp-technologies">
              <span
                v-for="(tech, idx) in exp.technologies"
                :key="idx"
                class="badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:last-child .marker-line {
  display: none;
}

@media (max-width: 680px) {
  .timeline-item {
    gap: 1.25rem;
  }
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 2px solid var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
}

.marker-dot.current {
  border-color: var(--accent-emerald);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%);
  margin-top: 0.5rem;
  margin-bottom: -1rem;
}

.timeline-content {
  flex: 1;
  padding: 2rem;
}

.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

.exp-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.015em;
}

.current-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--accent-emerald);
  font-size: 0.75rem;
  font-weight: 700;
}

.exp-company {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-top: 0.25rem;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: flex-end;
}

@media (max-width: 680px) {
  .exp-meta {
    align-items: flex-start;
  }
}

.exp-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.825rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.exp-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.exp-bullet-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
  padding: 0;
}

.exp-bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.bullet-check {
  color: var(--accent-primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.exp-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}
</style>
