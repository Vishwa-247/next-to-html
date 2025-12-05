/**
 * AdvocateKhoj - Main JavaScript
 * Static HTML version with vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  MobileMenu.init()
  SmoothScroll.init()
  ActiveLinks.init()
  BackToTop.init()
  Accordion.init()
  Tabs.init()
  Forms.init()
  Toast.init()
})

/**
 * Mobile Menu Module
 */
const MobileMenu = {
  init() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    const mobileMenu = document.getElementById("mobile-menu")
    const menuIcon = mobileMenuBtn?.querySelector("svg")

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("hidden")
        mobileMenu.classList.toggle("hidden")

        // Update icon
        if (menuIcon) {
          if (isOpen) {
            menuIcon.innerHTML =
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'
          } else {
            menuIcon.innerHTML =
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
          }
        }
      })

      // Close menu when clicking a link
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden")
          if (menuIcon) {
            menuIcon.innerHTML =
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'
          }
        })
      })
    }
  },
}

/**
 * Smooth Scroll Module
 */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href")
        if (href === "#") return

        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const headerOffset = 80
          const elementPosition = target.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  },
}

/**
 * Active Links Module
 */
const ActiveLinks = {
  init() {
    const currentPath = window.location.pathname
    const filename = currentPath.split("/").pop() || "index.html"

    document.querySelectorAll("nav a").forEach((link) => {
      const href = link.getAttribute("href")
      if (href && (href === filename || href.includes(filename.replace(".html", "")))) {
        link.classList.add("active", "border-[#f17313]")
        link.classList.remove("border-transparent")
      }
    })
  },
}

/**
 * Back To Top Button Module
 */
const BackToTop = {
  init() {
    const backToTopBtn = document.getElementById("back-to-top")

    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("visible")
        } else {
          backToTopBtn.classList.remove("visible")
        }
      })

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  },
}

/**
 * Accordion Module
 */
const Accordion = {
  init() {
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", function () {
        const content = this.nextElementSibling
        const icon = this.querySelector(".accordion-icon")
        const isOpen = !content.classList.contains("hidden")

        // Close all other accordion items in the same accordion
        const accordion = this.closest(".accordion")
        if (accordion) {
          accordion.querySelectorAll(".accordion-content").forEach((item) => {
            if (item !== content) {
              item.classList.add("hidden")
            }
          })
          accordion.querySelectorAll(".accordion-icon").forEach((i) => {
            if (i !== icon) {
              i.style.transform = "rotate(0deg)"
            }
          })
        }

        // Toggle current item
        content.classList.toggle("hidden")
        if (icon) {
          icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)"
        }
      })
    })
  },
}

/**
 * Tabs Module
 */
const Tabs = {
  init() {
    document.querySelectorAll(".tabs-trigger").forEach((trigger) => {
      trigger.addEventListener("click", function () {
        const tabsContainer = this.closest(".tabs")
        const tabValue = this.getAttribute("data-tab")

        // Update triggers
        tabsContainer.querySelectorAll(".tabs-trigger").forEach((t) => {
          t.classList.remove("active")
        })
        this.classList.add("active")

        // Update content
        tabsContainer.querySelectorAll(".tabs-content").forEach((content) => {
          if (content.getAttribute("data-tab") === tabValue) {
            content.classList.remove("hidden")
          } else {
            content.classList.add("hidden")
          }
        })
      })
    })
  },
}

/**
 * Forms Module
 */
const Forms = {
  init() {
    document.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault()

        const submitBtn = this.querySelector('button[type="submit"]')
        const originalText = submitBtn?.textContent

        if (submitBtn) {
          submitBtn.disabled = true
          submitBtn.textContent = "Sending..."
        }

        // Simulate form submission
        setTimeout(() => {
          Toast.show("Message sent successfully!", "success")
          form.reset()

          if (submitBtn) {
            submitBtn.disabled = false
            submitBtn.textContent = originalText
          }
        }, 1500)
      })
    })
  },
}

/**
 * Toast Notification Module
 */
const Toast = {
  container: null,

  init() {
    // Create toast container if it doesn't exist
    if (!document.querySelector(".toast-container")) {
      this.container = document.createElement("div")
      this.container.className = "toast-container"
      document.body.appendChild(this.container)
    } else {
      this.container = document.querySelector(".toast-container")
    }
  },

  show(message, type = "success") {
    const toast = document.createElement("div")
    toast.className = `toast toast-${type}`
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5 ${type === "success" ? "text-green-600" : "text-red-600"}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${
            type === "success"
              ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
              : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
          }
        </svg>
        <span class="text-sm font-medium">${message}</span>
      </div>
    `

    this.container.appendChild(toast)

    // Remove toast after 5 seconds
    setTimeout(() => {
      toast.style.animation = "slideOut 300ms ease-in forwards"
      setTimeout(() => toast.remove(), 300)
    }, 5000)
  },
}

/**
 * FAQ Search Module
 */
const FAQSearch = {
  init(inputId, containerClass) {
    const searchInput = document.getElementById(inputId)
    if (!searchInput) return

    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()
      const faqItems = document.querySelectorAll(`.${containerClass} .accordion-item`)

      faqItems.forEach((item) => {
        const question = item.querySelector(".accordion-trigger")?.textContent.toLowerCase()
        const answer = item.querySelector(".accordion-content")?.textContent.toLowerCase()

        if (question?.includes(searchTerm) || answer?.includes(searchTerm)) {
          item.style.display = ""
        } else {
          item.style.display = "none"
        }
      })
    })
  },
}

// Add slideOut animation
const style = document.createElement("style")
style.textContent = `
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)
