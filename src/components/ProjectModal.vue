<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import {
  X,
  Building2,
  Calendar,
  Layers,
  CheckCircle2,
  Check,
} from 'lucide-vue-next'
import type { PortfolioProject } from '../types'

defineProps<{
  project: PortfolioProject | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="isOpen && project"
      class="modal-backdrop"
      @click.self="emit('close')"
    >
      <div class="modal-container glass-card" role="dialog" aria-modal="true">
        <!-- Close Button -->
        <button
          @click="emit('close')"
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <X :size="18" />
        </button>

        <!-- Header -->
        <div class="modal-header">
          <div class="modal-meta-row">
            <span class="badge">{{ project.category }}</span>
            <span class="meta-item font-mono">
              <Calendar :size="13" />
              <span>{{ project.date }}</span>
            </span>
          </div>

          <h3 class="modal-title">{{ project.title }}</h3>

          <div class="modal-client">
            <Building2 :size="15" class="client-icon" />
            <span>Client: <strong>{{ project.client }}</strong></span>
          </div>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="modal-section">
            <h4 class="section-label">Overview</h4>
            <p class="summary-text">{{ project.summary }}</p>
          </div>

          <!-- Impact / Status -->
          <div v-if="project.metrics" class="status-box">
            <Check :size="16" class="status-icon" />
            <div class="status-text">{{ project.metrics }}</div>
          </div>

          <!-- Key Contributions & Features -->
          <div class="modal-section">
            <h4 class="section-label">Key Responsibilities &amp; Implementation</h4>
            <div class="highlights-list">
              <div
                v-for="(point, idx) in project.highlights"
                :key="idx"
                class="highlight-item"
              >
                <CheckCircle2 :size="15" class="highlight-bullet" />
                <span>{{ point }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="modal-section">
            <h4 class="section-label">
              <Layers :size="14" />
              <span>Technologies</span>
            </h4>
            <div class="tech-pills">
              <span
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <button @click="emit('close')" class="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-container {
  width: 100%;
  max-width: 640px;
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  color: var(--text-main);
  border-color: var(--border-medium);
}

.modal-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.modal-meta-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.775rem;
  color: var(--text-dim);
}

.modal-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.015em;
  margin-bottom: 0.35rem;
  padding-right: 2rem;
}

.modal-client {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.client-icon {
  color: var(--text-dim);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.775rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}

.summary-text {
  font-size: 0.925rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.status-box {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
}

.status-icon {
  color: var(--accent-emerald);
  flex-shrink: 0;
}

.status-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.highlight-bullet {
  color: var(--text-dim);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.modal-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  justify-content: flex-end;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
