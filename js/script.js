document.addEventListener("DOMContentLoaded", function () {
  // ----------------- NAVIGATION LOGIC -----------------
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 0 || navList.classList.contains("show")) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => {
      navList.classList.remove("show");
      addShadow(); // Sprawdzanie cienia po zamknięciu
    })
  );

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !navList.contains(event.target)) {
      navList.classList.remove("show");
      addShadow(); // Aktualizacja cienia
    }
  });

  // Dodaj nasłuchiwanie zdarzenia rozwinięcia nawigacj
  navList.addEventListener("show.bs.collapse", addShadow);
  navList.addEventListener("hide.bs.collapse", addShadow);

  window.addEventListener("scroll", addShadow);

  // ----------------- PANELS LOGIC -----------------
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
});
