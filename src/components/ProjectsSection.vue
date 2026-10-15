<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Building2,
  Calendar,
  ExternalLink,
  ChevronRight,
} from 'lucide-vue-next'
import { projectsData } from '../data/portfolioData'
import type { PortfolioProject } from '../types'
import ProjectModal from './ProjectModal.vue'

const activeCategory = ref<string>('All')
const selectedProject = ref<PortfolioProject | null>(null)
const isModalOpen = ref(false)

const filterCategories = [
  'All',
  'Enterprise / ERP',
  'Governance & Compliance',
  'Internal Workflow',
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projectsData
  }
  return projectsData.filter((p) => p.category === activeCategory.value)
})

const openProjectModal = (project: PortfolioProject) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">
          Selected enterprise web applications and backend systems I have contributed to.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="cat in filterCategories"
          :key="cat"
          class="filter-tab"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card glass-card"
        >
          <!-- Card Header -->
          <div class="card-meta">
            <span class="category-pill">{{ project.category }}</span>
            <div class="meta-date font-mono">
              <Calendar :size="12" />
              <span>{{ project.date }}</span>
            </div>
          </div>

          <!-- Project Title & Client -->
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-client">
            <Building2 :size="14" class="client-icon" />
            <span>{{ project.client }}</span>
          </div>

          <!-- Summary -->
          <p class="project-summary">{{ project.summary }}</p>

          <!-- Key Highlights Preview -->
          <ul class="project-features">
            <li
              v-for="(point, idx) in project.highlights.slice(0, 3)"
              :key="idx"
            >
              <ChevronRight :size="13" class="bullet-icon" />
              <span>{{ point }}</span>
            </li>
          </ul>

          <!-- Tech Stack -->
          <div class="project-tech-stack">
            <span
              v-for="(tech, idx) in project.technologies"
              :key="idx"
              class="badge"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Card Action -->
          <div class="card-footer">
            <button
              @click="openProjectModal(project)"
              class="btn btn-secondary btn-sm inspect-btn"
            >
              <span>View System Details</span>
              <ExternalLink :size="13" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.category-pill {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-surface-elevated);
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.meta-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.775rem;
  color: var(--text-dim);
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.015em;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.project-client {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.client-icon {
  color: var(--text-dim);
  flex-shrink: 0;
}

.project-summary {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.15rem;
}

.project-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.25rem;
  padding: 0;
}

.project-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--text-muted);
}

.bullet-icon {
  color: var(--text-dim);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  margin-bottom: 1.25rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-subtle);
}

.card-footer {
  display: flex;
}

.inspect-btn {
  width: 100%;
}
</style>
