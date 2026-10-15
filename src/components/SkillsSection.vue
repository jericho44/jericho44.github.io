<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Wrench,
  Server,
  Layout,
  Database,
  Cloud,
  Layers,
  Star,
} from 'lucide-vue-next'
import { skillsData } from '../data/portfolioData'
import type { SkillItem } from '../types'

type CategoryFilter = 'all' | 'backend' | 'frontend' | 'database' | 'devops' | 'architecture'

const activeFilter = ref<CategoryFilter>('all')

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'database', label: 'Databases & Cache' },
  { id: 'devops', label: 'DevOps & Cloud' },
  { id: 'architecture', label: 'Architecture & Patterns' },
]

const filteredSkills = computed<SkillItem[]>(() => {
  if (activeFilter.value === 'all') {
    return skillsData
  }
  return skillsData.filter((skill) => skill.category === activeFilter.value)
})

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'backend': return Server
    case 'frontend': return Layout
    case 'database': return Database
    case 'devops': return Cloud
    case 'architecture': return Layers
    default: return Wrench
  }
}
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <Wrench :size="14" />
          <span>Technical Arsenal</span>
        </div>
        <h2 class="section-title">
          Tech Stack &amp;
          <span class="text-gradient">Specializations</span>
        </h2>
        <p class="section-subtitle">
          Proven competencies across scalable backend frameworks, relational storage engines, modern frontends, and cloud deployment pipelines.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="filter-tab"
          :class="{ active: activeFilter === cat.id }"
          @click="activeFilter = cat.id as CategoryFilter"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <div
          v-for="(skill, idx) in filteredSkills"
          :key="idx"
          class="skill-card glass-card"
          :class="{ 'highlighted': skill.highlight }"
        >
          <div class="skill-top">
            <div class="skill-icon-pill">
              <component :is="getCategoryIcon(skill.category)" :size="16" />
              <span class="skill-category-name">{{ skill.category }}</span>
            </div>
            <span v-if="skill.highlight" class="core-tag" title="Core Production Focus">
              <Star :size="12" />
              <span>Core</span>
            </span>
          </div>

          <h3 class="skill-name">{{ skill.name }}</h3>
          <p class="skill-desc" v-if="skill.description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 960px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.skill-card.highlighted {
  border-color: rgba(99, 102, 241, 0.25);
  background: var(--bg-card);
}

.skill-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.skill-icon-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.725rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}

.core-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: var(--accent-amber);
  font-size: 0.7rem;
  font-weight: 700;
}

.skill-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.4rem;
}

.skill-desc {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-muted);
}
</style>
