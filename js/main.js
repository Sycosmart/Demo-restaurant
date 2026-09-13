/* ============================================================
   brasa · interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Sticky nav shadow ---- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 10) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Hero carousel ---- */
  var slides = Array.prototype.slice.call(document.querySelectorAll("#heroSlides img"));
  if (slides.length > 1) {
    var idx = 0, timer;
    var go = function (n) {
      slides[idx].classList.remove("is-active");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("is-active");
    };
    var next = function () { go(idx + 1); };
    var prev = function () { go(idx - 1); };
    var restart = function () { clearInterval(timer); timer = setInterval(next, 5000); };

    var nextBtn = document.getElementById("heroNext");
    var prevBtn = document.getElementById("heroPrev");
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); restart(); });
    restart();
  }

  /* ---- Menu tabs ---- */
  var tabs = document.querySelectorAll(".menu__tab");
  var panels = document.querySelectorAll(".menu__grid");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var cat = tab.getAttribute("data-cat");
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute("data-panel") !== cat;
      });
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Order form → WhatsApp ---- */
  // Número de WhatsApp del local — EJEMPLO. Reemplazá por el real (formato
  // internacional, solo dígitos, ej. 5917XXXXXXX) antes de publicar.
  var WHATSAPP_NUMBER = "59170000000";

  var form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("formNote");
      var val = function (id) { var el = form.querySelector(id); return el ? el.value.trim() : ""; };
      var name = val("#nombre");
      var phone = val("#telefono");
      var pedido = val("#pedido");

      if (!name || !phone || !pedido) {
        note.hidden = false;
        note.textContent = "Completá tu nombre, WhatsApp y pedido para continuar.";
        note.style.background = "rgba(214,120,90,0.22)";
        return;
      }

      var tipo = val("#tipo");
      var dir = val("#direccion");

      var lines = [
        "Hola brasa 🍔 Quiero hacer un pedido:",
        "",
        "• Nombre: " + name,
        "• WhatsApp: " + phone,
        "• Pedido: " + pedido,
        "• Entrega: " + (tipo || "Delivery")
      ];
      if (dir) lines.push("• Dirección / Local: " + dir);
      lines.push("", "¡Gracias!");

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");

      note.hidden = false;
      note.style.background = "";
      note.textContent = "Abriendo WhatsApp para enviar tu pedido, " + name.split(" ")[0] + "…";
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
