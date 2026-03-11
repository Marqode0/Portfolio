/* ============================================================
   JAVASCRIPT — script.js
   ============================================================ */

// ---- TYPING NAME (hero) ----
const heroNameEl = document.getElementById("heroName");
const fullName = "Obasola Marvelous";
let nameIndex = 0;

const typeName = () => {
  if (nameIndex <= fullName.length) {
    heroNameEl.innerHTML = fullName.substring(0, nameIndex);
    nameIndex++;
    setTimeout(typeName, 90);
  }
};

typeName();


// ---- TYPING ROLE ----
const roleEl = document.getElementById("typedRole");
const role = "Frontend Developer";
let charIndex = 0;

const typeRole = () => {
  if (charIndex <= role.length) {
    roleEl.textContent = role.substring(0, charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  }
  // stops here — no delete, no loop
};

setTimeout(typeRole, 1200);
// ---- SCROLL REVEAL ----
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));


// ---- SKILL BARS ----
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        const fill = entry.target.querySelector(".skill-fill");
        if (fill) {
          const target = fill.dataset.width;
          setTimeout(() => {
            fill.style.width = target + "%";
          }, 200);
        }
      }
    });
  },
  { threshold: 0.2 }
);

skillCards.forEach((card) => skillObserver.observe(card));


// ---- PROJECT CARDS REVEAL ----
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 120);
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach((card) => projectObserver.observe(card));


// ---- MOBILE NAV TOGGLE ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.display = isOpen ? "none" : "flex";
  navLinks.style.flexDirection = "column";
  navLinks.style.position = "absolute";
  navLinks.style.top = "70px";
  navLinks.style.left = "0";
  navLinks.style.right = "0";
  navLinks.style.background = "#0c0c0e";
  navLinks.style.padding = "20px 24px";
  navLinks.style.borderBottom = "1px solid rgba(255,255,255,0.07)";
});


// ---- CONTACT FORM ----
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector("button[type='submit']");
  const data = new FormData(contactForm);

  btn.textContent = "Sending...";
  btn.disabled = true;

  fetch(contactForm.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  })
    .then((response) => {
      if (response.ok) {
        btn.textContent = "Message Sent! ✅";
        btn.style.background = "#22c55e";
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = "Send Message ✉";
          btn.style.background = "";
          btn.disabled = false;
        }, 3000);
      } else {
        btn.textContent = "Something went wrong ❌";
        btn.disabled = false;
      }
    })
    .catch(() => {
      btn.textContent = "Something went wrong ❌";
      btn.disabled = false;
    });
});
let yr = document.getElementById("year").textContent = new Date().getFullYear();