<script setup lang="ts">
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-vue-next'
import { profileData, statsData } from '../data/portfolioData'
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left Content -->
        <div class="hero-content">
          <!-- Availability Badge -->
          <div class="availability-badge" v-if="profileData.availableForWork">
            <span class="pulse-dot"></span>
            <span>Available for Fullstack & Backend Roles</span>
          </div>

          <!-- Name & Title -->
          <h1 class="hero-title">
            Hi, I'm <br />
            <span class="text-gradient">{{ profileData.name }}</span>
          </h1>

          <p class="hero-role">
            <span class="role-badge">{{ profileData.title }}</span>
            <span class="role-divider">•</span>
            <span class="role-desc">Enterprise Systems & Backend Architect</span>
          </p>

          <!-- Short Bio -->
          <p class="hero-summary">
            {{ profileData.summary }}
          </p>

          <!-- CTAs -->
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary">
              <span>Explore Enterprise Projects</span>
              <ArrowRight :size="18" />
            </a>
            <a
              :href="profileData.resumeUrl"
              target="_blank"
              download
              class="btn btn-secondary"
            >
              <FileDown :size="18" />
              <span>Download CV</span>
            </a>
          </div>

          <!-- Social Quick Links -->
          <div class="hero-social-bar">
            <span class="social-label">Connect:</span>
            <a
              :href="profileData.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github :size="20" />
            </a>
            <a
              :href="profileData.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin :size="20" />
            </a>
            <a
              :href="'mailto:' + profileData.email"
              class="social-link"
              title="Send Direct Email"
              aria-label="Email"
            >
              <Mail :size="20" />
            </a>
            <a
              :href="profileData.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle :size="20" />
            </a>
          </div>
        </div>

        <!-- Right Terminal / Code Visualizer -->
        <div class="hero-visual">
          <div class="code-terminal-card glass-card">
            <!-- Terminal Header -->
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <div class="terminal-title">
                <Terminal :size="14" />
                <span>engineer_spec.ts</span>
              </div>
              <div class="terminal-action">
                <ShieldCheck :size="16" class="text-emerald" />
              </div>
            </div>

            <!-- Terminal Code Body -->
            <div class="terminal-body font-mono">
              <div class="code-line">
                <span class="keyword">const</span> <span class="variable">engineer</span>: <span class="type">FullstackArchitect</span> = {
              </div>
              <div class="code-line indent-1">
                <span class="prop">name</span>: <span class="string">'Rico Wahyu Yudana Putra'</span>,
              </div>
              <div class="code-line indent-1">
                <span class="prop">location</span>: <span class="string">'Surabaya, Indonesia'</span>,
              </div>
              <div class="code-line indent-1">
                <span class="prop">currentRole</span>: <span class="string">'Fullstack Developer'</span>,
              </div>
              <div class="code-line indent-1">
                <span class="prop">company</span>: <span class="string">'PT Wonokoyo Jaya Corporindo'</span>,
              </div>
              <div class="code-line indent-1">
                <span class="prop">coreBackend</span>: [
              </div>
              <div class="code-line indent-2">
                <span class="string">'Laravel'</span>, <span class="string">'Golang'</span>, <span class="string">'Spring Boot'</span>, <span class="string">'Ruby on Rails'</span>
              </div>
              <div class="code-line indent-1">],</div>
              <div class="code-line indent-1">
                <span class="prop">coreFrontend</span>: [<span class="string">'Vue 3'</span>, <span class="string">'TypeScript'</span>, <span class="string">'Tailwind'</span>],
              </div>
              <div class="code-line indent-1">
                <span class="prop">databases</span>: [<span class="string">'PostgreSQL'</span>, <span class="string">'MySQL'</span>, <span class="string">'SQL Server'</span>],
              </div>
              <div class="code-line indent-1">
                <span class="prop">principles</span>: [
                  <span class="string">'Clean Architecture'</span>,
                  <span class="string">'SOLID'</span>,
                  <span class="string">'High Availability'</span>
                ],
              </div>
              <div class="code-line indent-1">
                <span class="prop">openToCollab</span>: <span class="boolean">true</span>
              </div>
              <div class="code-line">};</div>
              <div class="code-line status-active mt-2">
                <CheckCircle2 :size="14" class="text-emerald" />
                <span class="comment">// 3+ years delivering scalable enterprise applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Counter Grid -->
      <div class="stats-grid">
        <div
          v-for="(stat, idx) in statsData"
          :key="idx"
          class="stat-card glass-card"
        >
          <div class="stat-value text-gradient">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-sublabel">{{ stat.sublabel }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 8.5rem;
  padding-bottom: 5rem;
  position: relative;
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 6.5rem;
    padding-bottom: 3.5rem;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.4rem 0.95rem;
  border-radius: var(--radius-full);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--accent-emerald);
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 3.1rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }
}

.hero-role {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-size: 1.1rem;
}

.role-badge {
  font-weight: 700;
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.12);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(99, 102, 241, 0.25);
}

.role-divider {
  color: var(--text-dim);
}

.role-desc {
  color: var(--text-muted);
  font-weight: 500;
}

.hero-summary {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 2rem;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.25rem;
}

.hero-social-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-dim);
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--accent-primary);
  border-color: var(--border-accent);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
}

/* Terminal Card Styling */
.code-terminal-card {
  padding: 0;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-medium);
  background: rgba(10, 15, 28, 0.85);
}

[data-theme="light"] .code-terminal-card {
  background: rgba(248, 250, 252, 0.95);
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--border-subtle);
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.terminal-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.775rem;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.terminal-body {
  padding: 1.25rem;
  font-size: 0.85rem;
  line-height: 1.6;
}

.font-mono {
  font-family: var(--font-mono);
}

.code-line {
  white-space: pre-wrap;
  word-break: break-all;
}

.indent-1 { padding-left: 1.25rem; }
.indent-2 { padding-left: 2.25rem; }

.keyword { color: #f43f5e; font-weight: 600; }
.variable { color: #38bdf8; }
.type { color: #fbbf24; }
.prop { color: #c084fc; }
.string { color: #34d399; }
.boolean { color: #f97316; }
.comment { color: var(--text-dim); font-style: italic; }

.text-emerald { color: var(--accent-emerald); }

.status-active {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px dashed var(--border-subtle);
  padding-top: 0.75rem;
}

.mt-2 { margin-top: 0.75rem; }

/* Stats Bar */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 4rem;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2.5rem;
  }
}

@media (max-width: 540px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  padding: 1.5rem;
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.35rem;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.stat-sublabel {
  font-size: 0.775rem;
  color: var(--text-dim);
}
</style>
