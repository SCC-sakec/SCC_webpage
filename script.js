/* ============================================
   SAKEC Competition Cell - Script
   ============================================ */

let currentSlideIndex = 0
const autoSlideInterval = 5000

// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlideIndex)
  startAutoSlide()
})

function toggleDropdown() {
  const dropdown = document.getElementById("alumniDropdown")
  dropdown.classList.toggle("active")
}

document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("alumniDropdown")
  if (dropdown && !e.target.closest(".dropdown")) {
    dropdown.classList.remove("active")
  }
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

