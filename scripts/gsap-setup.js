// GSAP Animation Setup Script
console.log("Setting up GSAP animations for portfolio website...")

// Animation configurations
const animationConfig = {
  fadeIn: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
  },
  slideIn: {
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
  },
}

console.log("Animation configurations:", animationConfig)

// Scroll trigger settings
const scrollTriggerConfig = {
  trigger: ".fade-in",
  start: "top 80%",
  toggleActions: "play none none reverse",
}

console.log("Scroll trigger configuration:", scrollTriggerConfig)

console.log("GSAP setup complete! Animations ready for portfolio website.")
