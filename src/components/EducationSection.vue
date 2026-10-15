<script setup lang="ts">
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from 'lucide-vue-next'
import { educationData } from '../data/portfolioData'
</script>

<template>
  <section id="education" class="section education-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">
          Academic foundation in Information Systems and Software Engineering.
        </p>
      </div>

      <div class="education-grid">
        <div
          v-for="(item, idx) in educationData"
          :key="idx"
          class="edu-card glass-card"
        >
          <div class="edu-top">
            <div class="edu-icon-box">
              <GraduationCap :size="22" />
            </div>
            <div class="gpa-pill font-mono">
              <Award :size="13" />
              <span>GPA {{ item.gpa }}</span>
            </div>
          </div>

          <h3 class="edu-degree">{{ item.degree }}</h3>
          <div class="edu-institution">{{ item.institution }}</div>

          <div class="edu-details-row">
            <span class="edu-detail">
              <Calendar :size="13" />
              <span>{{ item.period }}</span>
            </span>
            <span class="edu-detail">
              <MapPin :size="13" />
              <span>{{ item.location }}</span>
            </span>
          </div>

          <p v-if="item.description" class="edu-desc">
            {{ item.description }}
          </p>

          <div class="edu-topics">
            <span class="tag">Enterprise Systems</span>
            <span class="tag">Database Design</span>
            <span class="tag">Software Engineering</span>
            <span class="tag">Business Process Modeling</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-grid {
  max-width: 720px;
  margin: 0 auto;
}

.edu-card {
  padding: 2rem;
}

.edu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.edu-icon-box {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
}

.gpa-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.8rem;
}

.edu-degree {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.edu-institution {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 0.85rem;
}

.edu-details-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.edu-detail {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.edu-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.edu-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.tag {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-sm);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.775rem;
}
</style>
