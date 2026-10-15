<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="portfolio-app">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content -->
    <main>
      <!-- Hero Section with Terminal & Stats -->
      <HeroSection />

      <!-- Core Philosophy & About -->
      <AboutSection />

      <!-- Tech Stack & Skills -->
      <SkillsSection />

      <!-- Featured Enterprise Projects -->
      <ProjectsSection />

      <!-- Professional Career Experience Timeline -->
      <ExperienceSection />

      <!-- Education & Credentials -->
      <EducationSection />

      <!-- Contact & Collaboration -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.portfolio-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1;
}
</style>
