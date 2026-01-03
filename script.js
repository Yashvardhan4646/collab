gsap.registerPlugin(ScrollTrigger);

/* ==========================
   HERO REVEAL
========================== */
gsap.from(".hero-left h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-left p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power4.out"
});

gsap.from(".hero-left button", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  ease: "power4.out"
});

gsap.from(".hero-card", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power4.out"
});

/* ==========================
   SCROLL TYPOGRAPHY
========================== */
gsap.utils.toArray("section h2").forEach((heading) => {
  gsap.from(heading, {
    y: 60,
    opacity: 0,
    scrollTrigger: {
      trigger: heading,
      start: "top 85%",
    },
    duration: 1,
    ease: "power3.out"
  });
});

/* ==========================
   CARD FLOAT ON SCROLL
========================== */
gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    duration: 0.9,
    ease: "power3.out"
  });
});

/* ==========================
   CURSOR MICRO INTERACTION
========================== */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power3.out"
  });
});

document.querySelectorAll("button, a, input").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});
/* ==========================
   OWNERS REVEAL
========================== */
gsap.from(".owner-card", {
  y: 60,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".owners",
    start: "top 80%",
  },
  duration: 1,
  ease: "power3.out"
});
/* ==========================
   ABOUT REVEAL
========================== */
gsap.from(".about-left > *", {
  y: 40,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
  },
  duration: 1,
  ease: "power3.out"
});

gsap.from(".about-point", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-right",
    start: "top 80%",
  },
  duration: 0.9,
  ease: "power3.out"
});
import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const form = document.getElementById("submitForm");
const button = document.querySelector(".submit-btn");
const successText = document.getElementById("formSuccess");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.innerText = "Submitting...";
  button.disabled = true;

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    discord: document.getElementById("discord").value.trim(),
    portfolio: document.getElementById("portfolio").value.trim(),
    project: document.getElementById("project").value.trim(),
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "submissions"), data);

    button.innerText = "Request sent";
    successText.classList.add("show");
    form.reset();

  } catch (err) {
    console.error(err);
    button.innerText = "Error — retry";
    button.disabled = false;
  }
});
