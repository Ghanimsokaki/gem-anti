// CyberGuard landing page behaviour — no secrets, no tracking, no backend.
(function () {
  const cfg = window.CYBERGUARD_CONFIG || {};

  // Wire up the public download / donation links from config.js
  document.querySelectorAll(".js-download").forEach((el) => {
    if (cfg.downloadUrl) el.href = cfg.downloadUrl;
  });
  document.querySelectorAll(".js-donate").forEach((el) => {
    if (cfg.donationUrl) el.href = cfg.donationUrl;
    if (cfg.donationUrl && cfg.donationUrl.startsWith("http")) {
      el.target = "_blank"; el.rel = "noopener";
    }
  });
  document.querySelectorAll(".js-download").forEach((el) => {
    if (el.href && el.href.includes("github.com")) { el.removeAttribute("download"); el.target = "_blank"; el.rel = "noopener"; }
  });

  // Version / size / checksum labels from config.js
  if (cfg.version) document.querySelectorAll(".js-version").forEach((e) => (e.textContent = cfg.version));
  if (cfg.installerSize) document.querySelectorAll(".js-size").forEach((e) => (e.textContent = cfg.installerSize));
  if (cfg.sha256) document.getElementById("shaValue").textContent = cfg.sha256;

  // Copy checksum
  const copyBtn = document.getElementById("copySha");
  copyBtn?.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(document.getElementById("shaValue").textContent.trim()); copyBtn.textContent = "Copied ✓"; }
    catch { copyBtn.textContent = "Select & copy manually"; }
    setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
  });

  // Mobile menu
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  // Fake-but-fun Quick Scan demo in the app preview
  const scanBtn = document.getElementById("scanBtn"), bar = document.getElementById("scanBar"), text = document.getElementById("scanText");
  scanBtn?.addEventListener("click", () => {
    if (scanBtn.disabled) return;
    scanBtn.disabled = true; scanBtn.textContent = "Scanning…";
    let p = 0;
    const timer = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14);
      bar.style.width = p + "%";
      text.textContent = p < 100 ? `Scanning system files… ${Math.floor(p)}% · 0 threats found` : "✓ Quick Scan complete · 0 threats found · You're protected";
      if (p >= 100) { clearInterval(timer); scanBtn.disabled = false; scanBtn.textContent = "Run Quick Scan"; }
    }, 220);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
