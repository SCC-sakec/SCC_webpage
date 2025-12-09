/* ============================================
   SAKEC Competition Cell - Carousel Script
   ============================================ */

let currentSlideIndex = 0
const autoSlideInterval = 5000 // 2 seconds

// Toggle dropdown on mobile
document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        drop.querySelector(".dropbtn").addEventListener("click", e => {
            e.preventDefault();

            // close all others
            dropdowns.forEach(d => {
                if (d !== drop) d.classList.remove("active");
            });

            // toggle current
            drop.classList.toggle("active");
        });
    });

    // click outside closes dropdown
    document.addEventListener("click", e => {
        if (!e.target.closest(".dropdown")) {
            dropdowns.forEach(d => d.classList.remove("active"));
        }
    });
});



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
