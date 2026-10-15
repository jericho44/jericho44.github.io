<script setup lang="ts">
import {
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-vue-next'
import { experiencesData } from '../data/portfolioData'
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Work Experience</h2>
        <p class="section-subtitle">
          My career history in backend and fullstack software development.
        </p>
      </div>

      <div class="timeline">
        <div
          v-for="exp in experiencesData"
          :key="exp.id"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <div class="marker-dot" :class="{ 'current': exp.isCurrent }"></div>
            <div class="marker-line"></div>
          </div>

          <div class="timeline-content glass-card">
            <div class="exp-header">
              <div>
                <div class="exp-title-row">
                  <h3 class="exp-role">{{ exp.role }}</h3>
                  <span v-if="exp.isCurrent" class="current-badge font-mono">
                    Current
                  </span>
                </div>
                <div class="exp-company">{{ exp.company }}</div>
              </div>

              <div class="exp-meta">
                <span class="exp-meta-item">
                  <Calendar :size="13" />
                  <span>{{ exp.period }}</span>
                </span>
                <span class="exp-meta-item">
                  <MapPin :size="13" />
                  <span>{{ exp.location }}</span>
                </span>
              </div>
            </div>

            <p v-if="exp.description" class="exp-desc">
              {{ exp.description }}
            </p>

            <ul class="exp-bullet-list">
              <li
                v-for="(point, idx) in exp.bulletPoints"
                :key="idx"
                class="exp-bullet-item"
              >
                <CheckCircle2 :size="15" class="bullet-check" />
                <span>{{ point }}</span>
              </li>
            </ul>

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
  max-width: 860px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 1.75rem;
  margin-bottom: 2rem;
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
    gap: 1rem;
  }
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 2px solid var(--text-dim);
  z-index: 2;
  margin-top: 0.5rem;
}

.marker-dot.current {
  border-color: var(--accent-emerald);
  background: var(--accent-emerald);
}

.marker-line {
  width: 2px;
  flex: 1;
  background: var(--border-medium);
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
}

.timeline-content {
  flex: 1;
  padding: 1.75rem 2rem;
}

@media (max-width: 680px) {
  .timeline-content {
    padding: 1.5rem;
  }
}

.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.exp-title-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
}

.current-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-sm);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--accent-emerald);
  font-size: 0.725rem;
  font-weight: 600;
}

.exp-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-top: 0.2rem;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
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
  font-size: 0.8rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.exp-desc {
  font-size: 0.925rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.15rem;
}

.exp-bullet-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-bottom: 1.25rem;
  padding: 0;
}

.exp-bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.bullet-check {
  color: var(--text-dim);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.exp-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-subtle);
}
</style>
