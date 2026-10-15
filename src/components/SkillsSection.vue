<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Server,
  Layout,
  Database,
  Cloud,
  Layers,
  Wrench,
} from 'lucide-vue-next'
import { skillsData } from '../data/portfolioData'
import type { SkillItem } from '../types'

type CategoryFilter = 'all' | 'backend' | 'frontend' | 'database' | 'devops' | 'architecture'

const activeFilter = ref<CategoryFilter>('all')

const categories = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'database', label: 'Databases' },
  { id: 'devops', label: 'DevOps & Tools' },
  { id: 'architecture', label: 'Architecture' },
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
      <div class="section-header">
        <h2 class="section-title">Skills &amp; Technologies</h2>
        <p class="section-subtitle">
          Languages, frameworks, databases, and developer tools I work with.
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
        >
          <div class="skill-top">
            <div class="skill-category-pill">
              <component :is="getCategoryIcon(skill.category)" :size="13" />
              <span>{{ skill.category }}</span>
            </div>
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
  gap: 1rem;
}

@media (max-width: 960px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  padding: 1.25rem 1.4rem;
  display: flex;
  flex-direction: column;
}

.skill-top {
  margin-bottom: 0.65rem;
}

.skill-category-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.725rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--text-dim);
}

.skill-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.skill-desc {
  font-size: 0.825rem;
  line-height: 1.5;
  color: var(--text-muted);
}
</style>
