<script setup lang="ts">
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from 'lucide-vue-next'
import { educationData } from '../data/portfolioData'
</script>

<template>
  <section id="education" class="section education-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <GraduationCap :size="14" />
          <span>Academic Background</span>
        </div>
        <h2 class="section-title">
          Education &amp;
          <span class="text-gradient">Credentials</span>
        </h2>
        <p class="section-subtitle">
          Formal foundation in Information Systems, software development principles, and enterprise information technology.
        </p>
      </div>

      <!-- Education Cards -->
      <div class="education-grid">
        <div
          v-for="(item, idx) in educationData"
          :key="idx"
          class="edu-card glass-card"
        >
          <div class="edu-top">
            <div class="edu-icon-box">
              <GraduationCap :size="28" />
            </div>
            <div class="edu-meta-right">
              <span class="gpa-pill">
                <Award :size="14" />
                <span>GPA {{ item.gpa }}</span>
              </span>
            </div>
          </div>

          <h3 class="edu-degree">{{ item.degree }}</h3>
          <h4 class="edu-institution">{{ item.institution }}</h4>

          <div class="edu-details-row">
            <span class="edu-detail">
              <Calendar :size="14" />
              <span>{{ item.period }}</span>
            </span>
            <span class="edu-detail">
              <MapPin :size="14" />
              <span>{{ item.location }}</span>
            </span>
          </div>

          <p v-if="item.description" class="edu-desc">
            {{ item.description }}
          </p>

          <div class="edu-topics">
            <span class="badge">
              <BookOpen :size="12" />
              <span>Enterprise Systems</span>
            </span>
            <span class="badge">
              <BookOpen :size="12" />
              <span>Database Architecture</span>
            </span>
            <span class="badge">
              <BookOpen :size="12" />
              <span>Software Engineering</span>
            </span>
            <span class="badge">
              <BookOpen :size="12" />
              <span>Business Process Modeling</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-grid {
  max-width: 800px;
  margin: 0 auto;
}

.edu-card {
  padding: 2.5rem;
}

.edu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.edu-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
}

.gpa-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: var(--accent-amber);
  font-weight: 700;
  font-size: 0.85rem;
}

.edu-degree {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.015em;
  margin-bottom: 0.35rem;
}

.edu-institution {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.edu-details-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.edu-detail {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.edu-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.edu-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}
</style>
