/* ============================================
   SAKEC Competition Cell - Carousel Script
   ============================================ */

let currentSlideIndex = 0
const autoSlideInterval = 2000 // 2 seconds

// Initialize carousel
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlideIndex)
  startAutoSlide()
})

function changeSlide(n) {
  showSlide((currentSlideIndex += n))
  resetAutoSlide()
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n))
  resetAutoSlide()
}

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide")
  const dots = document.querySelectorAll(".dot")

  // Wrap around
  if (n >= slides.length) {
    currentSlideIndex = 0
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1
  }

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Show current slide
  slides[currentSlideIndex].classList.add("active")
  dots[currentSlideIndex].classList.add("active")
}

let autoSlideTimer

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    currentSlideIndex++
    showSlide(currentSlideIndex)
  }, autoSlideInterval)
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer)
  startAutoSlide()
}

// Dropdown functionality
document.addEventListener("click", (event) => {
  const dropdown = event.target.closest(".dropdown")
  if (!dropdown) {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.style.display = "none"
    })
  }
})
