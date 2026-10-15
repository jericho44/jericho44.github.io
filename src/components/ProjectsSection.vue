<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  FolderGit2,
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
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <FolderGit2 :size="14" />
          <span>Proven Track Record</span>
        </div>
        <h2 class="section-title">
          Featured Enterprise
          <span class="text-gradient">Projects &amp; Systems</span>
        </h2>
        <p class="section-subtitle">
          Real-world mission-critical platforms engineered for State-Owned Enterprises (BUMN), industrial manufacturing plants, and corporate governance.
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
            <span class="badge badge-accent">{{ project.category }}</span>
            <div class="meta-date">
              <Calendar :size="13" />
              <span>{{ project.date }}</span>
            </div>
          </div>

          <!-- Project Title & Client -->
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-client">
            <Building2 :size="15" class="client-icon" />
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
              <ChevronRight :size="14" class="bullet-icon" />
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
              <span>Inspect Architecture Details</span>
              <ExternalLink :size="14" />
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
  gap: 1.75rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.meta-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.project-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.015em;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.project-client {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.client-icon {
  flex-shrink: 0;
}

.project-summary {
  font-size: 0.925rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.project-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0;
}

.project-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--text-muted);
}

.bullet-icon {
  color: var(--accent-primary);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.card-footer {
  display: flex;
  justify-content: flex-start;
}

.inspect-btn {
  width: 100%;
}
</style>
