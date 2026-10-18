/**
 * CyberGuard Antivirus — public site configuration
 * -------------------------------------------------
 * Edit ONLY the two public links below.
 *
 * ⚠️  THESE ARE NOT SECRETS.
 * Anything written in this file is visible to every visitor
 * (View Source / DevTools). Never put a password, GitHub token,
 * private API key, or signing key in this file or anywhere
 * else in this website.
 *
 * No secret is required for this landing page to work.
 */
window.CYBERGUARD_CONFIG = {
  // 1) Where the Windows installer is downloaded from.
  //    Default below assumes you upload a file named
  //    "CyberGuard-Setup.exe" to a GitHub Release in this repo.
  //    Replace it with your real public download URL when ready.
  downloadUrl:
    "https://github.com/Ghanimsokaki/gem-anti/releases/latest/download/CyberGuard-Setup.exe",

  // 2) Where the optional donation button goes.
  //    Replace "#" with your public Ko-fi / Buy Me a Coffee /
  //    GitHub Sponsors page, e.g. "https://ko-fi.com/yourname"
  donationUrl: "#support",

  // Shown next to the download button for transparency.
  version: "v1.0.0",
  installerSize: "Windows 10 / 11 · 64-bit",

  // Paste the real SHA-256 of your .exe here once you publish it,
  // so visitors can verify the file they downloaded is genuine.
  sha256: "PASTE-YOUR-REAL-SHA256-CHECKSUM-HERE",
};
