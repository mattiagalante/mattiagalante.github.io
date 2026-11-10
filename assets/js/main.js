/* Small progressive enhancements. The site works fine without JavaScript. */
(function () {
  "use strict";

  // 1. Current year in the footer: <span data-year></span>
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // 2. "Expand all abstracts" button on the Research page
  document.querySelectorAll("[data-toggle-abstracts]").forEach(function (btn) {
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var all = Array.prototype.slice.call(document.querySelectorAll("details.abstract"));
      var openAll = all.some(function (d) { return !d.open; });
      all.forEach(function (d) { d.open = openAll; });
      btn.textContent = openAll ? "[-] collapse all abstracts" : "[+] expand all abstracts";
    });
  });
})();
