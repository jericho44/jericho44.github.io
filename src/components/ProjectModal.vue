<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import {
  X,
  Building2,
  Calendar,
  Layers,
  CheckCircle2,
  TrendingUp,
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
          <X :size="20" />
        </button>

        <!-- Header -->
        <div class="modal-header">
          <div class="modal-meta-row">
            <span class="badge badge-accent">{{ project.category }}</span>
            <span class="meta-item">
              <Calendar :size="14" />
              <span>{{ project.date }}</span>
            </span>
          </div>

          <h3 class="modal-title">{{ project.title }}</h3>

          <div class="modal-client">
            <Building2 :size="16" class="client-icon" />
            <span>Client: <strong>{{ project.client }}</strong></span>
          </div>
        </div>

        <!-- Summary -->
        <div class="modal-body">
          <div class="modal-section">
            <h4 class="section-label">System Overview</h4>
            <p class="summary-text">{{ project.summary }}</p>
          </div>

          <!-- Metrics / Impact -->
          <div v-if="project.metrics" class="metrics-box">
            <TrendingUp :size="18" class="metrics-icon" />
            <div>
              <div class="metrics-title">Operational Impact</div>
              <div class="metrics-text">{{ project.metrics }}</div>
            </div>
          </div>

          <!-- Key Contributions & Technical Highlights -->
          <div class="modal-section">
            <h4 class="section-label">Key Engineering Contributions &amp; Features</h4>
            <div class="highlights-list">
              <div
                v-for="(point, idx) in project.highlights"
                :key="idx"
                class="highlight-item"
              >
                <CheckCircle2 :size="16" class="highlight-bullet" />
                <span>{{ point }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="modal-section">
            <h4 class="section-label">
              <Layers :size="15" />
              <span>Technologies &amp; Architecture Stack</span>
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
            Close Overview
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
  background: rgba(4, 7, 15, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-container {
  width: 100%;
  max-width: 680px;
  background: var(--bg-surface);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2.25rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
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
  border-color: var(--border-accent);
}

.modal-header {
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

.modal-meta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  padding-right: 2rem;
}

.modal-client {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.client-icon {
  color: var(--accent-primary);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.825rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}

.summary-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.metrics-box {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.metrics-icon {
  color: var(--accent-emerald);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.metrics-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-emerald);
  margin-bottom: 0.2rem;
}

.metrics-text {
  font-size: 0.9rem;
  color: var(--text-main);
  font-weight: 500;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.highlight-bullet {
  color: var(--accent-primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-footer {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  justify-content: flex-end;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.95) translateY(10px);
}
</style>
