<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
  Code2,
} from 'lucide-vue-next'
import { profileData } from '../data/portfolioData'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const currentTheme = ref<'dark' | 'light'>('dark')

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
  if (saved) {
    currentTheme.value = saved
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    currentTheme.value = 'light'
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="navbar-wrapper"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container navbar-container">
      <!-- Logo -->
      <a href="#" class="navbar-logo" @click="closeMobileMenu">
        <div class="logo-icon-box">
          <Code2 :size="20" class="logo-icon" />
        </div>
        <span class="logo-text">
          <span class="logo-name">Rico</span>
          <span class="logo-highlight">.dev</span>
        </span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="desktop-nav">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="navbar-actions">
        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="theme-toggle-btn"
          :title="currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          aria-label="Toggle Theme"
        >
          <Sun v-if="currentTheme === 'dark'" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <!-- Resume Download CTA -->
        <a
          :href="profileData.resumeUrl"
          target="_blank"
          download
          class="btn btn-primary btn-sm resume-btn"
        >
          <FileDown :size="16" />
          <span>Resume CV</span>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!isMobileMenuOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-nav-drawer">
        <nav class="mobile-nav-links">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </a>
          <a
            :href="profileData.resumeUrl"
            target="_blank"
            download
            class="btn btn-primary mobile-resume-btn"
            @click="closeMobileMenu"
          >
            <FileDown :size="18" />
            <span>Download Resume PDF</span>
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all var(--transition-normal);
}

.navbar-wrapper.scrolled {
  padding: 0.85rem 0;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.logo-icon-box {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
}

.logo-text {
  color: var(--text-main);
}

.logo-highlight {
  color: var(--accent-primary);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  transition: color var(--transition-fast);
  padding: 0.25rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-brand);
  transition: width var(--transition-fast);
  border-radius: 2px;
}

.nav-link:hover {
  color: var(--text-main);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.theme-toggle-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.theme-toggle-btn:hover {
  color: var(--text-main);
  border-color: var(--border-accent);
  transform: rotate(15deg);
}

.mobile-menu-btn {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}

@media (max-width: 860px) {
  .desktop-nav {
    display: none;
  }
  .resume-btn {
    display: none;
  }
  .mobile-menu-btn {
    display: flex;
  }
}

.mobile-nav-drawer {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-muted);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-nav-link:hover {
  color: var(--accent-primary);
}

.mobile-resume-btn {
  margin-top: 0.75rem;
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
