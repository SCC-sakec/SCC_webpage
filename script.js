/* ============================================
   SAKEC Competition Cell - Script
   ============================================ */

let currentSlideIndex = 0
const autoSlideInterval = 5000

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlideIndex)
  startAutoSlide()

  // Setup council click handler
  const alumniHeader = document.querySelector(".alumni-council-header")
  if (alumniHeader) {
    alumniHeader.addEventListener("click", function () {
      const container = this.closest(".alumni-council-container")
      if (container) {
        container.classList.toggle("open")
      }
    })
  }
})

function toggleAlumniCouncil(element) {
  const container = element.closest(".alumni-council-container")
  if (container) {
    container.classList.toggle("open")
    console.log("[v0] Alumni council toggled, open state:", container.classList.contains("open"))
  }
}

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

  if (n >= slides.length) {
    currentSlideIndex = 0
  } else if (n < 0) {
    currentSlideIndex = slides.length - 1
  } else {
    currentSlideIndex = n
  }

  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

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
