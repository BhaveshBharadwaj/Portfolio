/**
 * @file assets/js/main.js
 * Interactive UI Engine:
 * - 3D Isometric Conduit Canvas (Matching video aesthetic with glowing orange energy conduits)
 * - Tri-State Theme Controller (Hybrid / Force Light / Force Dark)
 * - Lenis Inertial Smooth Scrolling & GSAP ScrollTrigger
 * - Interactive Glassmorphism CLI Terminal with History & Tab Complete
 * - Interactive CI/CD Pipeline Visualizer Widget with Animated Execution Simulator
 * - Live IST Clock & Clipboard Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) {
    console.error('portfolioData not found on window object.');
    return;
  }

  // ══════════════════════════════════════════════════════════════════
  // 1. TERMINAL PRE-LOADER BOOT SEQUENCE
  // ══════════════════════════════════════════════════════════════════
  const preloader = document.getElementById('preloader');
  const bootCounter = document.getElementById('bootCounter');
  const bootProgressBar = document.getElementById('bootProgressBar');
  const bootProgressLabel = document.getElementById('bootProgressLabel');

  const logLines = [
    { el: document.getElementById('logLine1'), at: 15, status: 'Mounting Kubernetes cluster context...' },
    { el: document.getElementById('logLine2'), at: 45, status: 'Loading Terraform state files...' },
    { el: document.getElementById('logLine3'), at: 75, status: 'Establishing orange telemetry conduits...' },
    { el: document.getElementById('logLine4'), at: 96, status: 'Environment operational.' }
  ];

  let currentPercent = 0;
  const bootStartTime = performance.now();
  const bootDuration = 1800; // 1.8 seconds to reach 100%

  function stepBootSequence(now) {
    const elapsed = now - bootStartTime;
    const progressRatio = Math.min(elapsed / bootDuration, 1);
    
    // Ease progress toward 100
    currentPercent = Math.floor(progressRatio * 100);

    if (bootCounter) bootCounter.textContent = currentPercent;
    if (bootProgressBar) bootProgressBar.style.width = currentPercent + '%';

    // Reveal logs sequentially
    logLines.forEach(item => {
      if (currentPercent >= item.at && item.el) {
        if (!item.el.classList.contains('visible')) {
          item.el.classList.add('visible');
          if (bootProgressLabel) bootProgressLabel.textContent = item.status;
        }
      }
    });

    if (progressRatio < 1) {
      requestAnimationFrame(stepBootSequence);
    } else {
      // 100% reached: set final state
      if (bootCounter) bootCounter.textContent = '100';
      if (bootProgressBar) bootProgressBar.style.width = '100%';
      if (bootProgressLabel) bootProgressLabel.textContent = 'Environment operational. Launching platform.';

      // Hold for ~1.5s delay at 100% as requested, then wipe/fade out via GSAP
      setTimeout(() => {
        if (window.gsap && preloader) {
          window.gsap.to(preloader, {
            yPercent: -100,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.inOut',
            onComplete: () => {
              preloader.style.display = 'none';
              document.body.classList.remove('is-loading');
              initEntranceAnimations();
            }
          });
        } else if (preloader) {
          preloader.classList.add('fade-out');
          document.body.classList.remove('is-loading');
          initEntranceAnimations();
        }
      }, 1500);
    }
  }

  requestAnimationFrame(stepBootSequence);

  // ══════════════════════════════════════════════════════════════════
  // 2. CLEAN 2-STATE THEME TOGGLE CONTROLLER
  // Mode 1: "Light" (Default / Hybrid: Light Hero #f4f5f7 -> Dark Deep Flow #0a0d12)
  // Mode 2: "Dark" (Full Cloud Dark: forces all sections to #0a0d12)
  // ══════════════════════════════════════════════════════════════════
  const themeTabLight = document.getElementById('themeTabLight');
  const themeTabDark = document.getElementById('themeTabDark');
  const rootHtml = document.documentElement;

  // Retrieve saved preference or default to 'light'
  let activeThemeMode = 'light';
  try {
    const saved = localStorage.getItem('portfolio-theme-mode');
    if (saved === 'dark' || saved === 'light') {
      activeThemeMode = saved;
    }
  } catch (e) {}

  function applyThemeMode(mode) {
    activeThemeMode = mode;
    rootHtml.setAttribute('data-theme', mode);
    try {
      localStorage.setItem('portfolio-theme-mode', mode);
    } catch (e) {}

    if (themeTabLight) themeTabLight.classList.toggle('active', mode === 'light');
    if (themeTabDark) themeTabDark.classList.toggle('active', mode === 'dark');

    updateHeaderTheme();
  }

  if (themeTabLight) {
    themeTabLight.addEventListener('click', () => applyThemeMode('light'));
  }
  if (themeTabDark) {
    themeTabDark.addEventListener('click', () => applyThemeMode('dark'));
  }

  applyThemeMode(activeThemeMode);

  // Sync header styling with active theme
  function updateHeaderTheme() {
    const headerEl = document.getElementById('siteHeader');
    if (!headerEl) return;

    if (activeThemeMode === 'dark') {
      headerEl.style.backgroundColor = 'rgba(10, 13, 18, 0.92)';
      headerEl.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    } else {
      headerEl.style.backgroundColor = 'rgba(244, 245, 247, 0.92)';
      headerEl.style.borderColor = 'rgba(0, 0, 0, 0.08)';
    }
  }

  window.addEventListener('scroll', updateHeaderTheme, { passive: true });

  // ══════════════════════════════════════════════════════════════════
  // 3. BACKGROUND ISOMETRIC GRID & MOTION CANVAS
  // Subtle, toned-down translucent grid with soft ambient orange telemetry
  // ══════════════════════════════════════════════════════════════════
  const bgGridCanvas = document.getElementById('bgIsoGridCanvas');
  if (bgGridCanvas) {
    const bgCtx = bgGridCanvas.getContext('2d');
    let bgWidth = 0;
    let bgHeight = 0;
    let bgDpr = window.devicePixelRatio || 1;

    function resizeBgCanvas() {
      bgWidth = window.innerWidth;
      bgHeight = window.innerHeight;
      bgDpr = window.devicePixelRatio || 1;
      bgGridCanvas.width = bgWidth * bgDpr;
      bgGridCanvas.height = bgHeight * bgDpr;
      bgCtx.scale(bgDpr, bgDpr);
    }
    window.addEventListener('resize', resizeBgCanvas);
    resizeBgCanvas();

    // Isometric vector math
    const isoAngle = Math.PI / 6; // 30 degrees
    const isoCos = Math.cos(isoAngle);
    const isoSin = Math.sin(isoAngle);
    const gridSpacing = 72; // Pixels between isometric grid lines

    // Initialize small ambient glowing pulse particles with reduced opacity (0.35 - 0.45)
    const gridParticles = Array.from({ length: 28 }, (_, i) => {
      const dirIndex = i % 3; // 0: along +30°, 1: along +150°, 2: horizontal
      let vx = 0, vy = 0;
      if (dirIndex === 0) {
        vx = isoCos * 1.1;
        vy = isoSin * 1.1;
      } else if (dirIndex === 1) {
        vx = -isoCos * 1.1;
        vy = isoSin * 1.1;
      } else {
        vx = 1.25;
        vy = 0;
      }

      return {
        x: Math.random() * bgWidth,
        y: Math.random() * bgHeight,
        vx: vx,
        vy: vy,
        length: 16 + Math.random() * 18,
        speedMultiplier: 0.75 + Math.random() * 0.5,
        alpha: 0.35 + Math.random() * 0.10 // Strictly constrained to 0.35 - 0.45
      };
    });

    function renderBgGrid() {
      bgCtx.clearRect(0, 0, bgWidth, bgHeight);

      // 1. Draw Subtle Translucent Isometric Grid Lines
      bgCtx.save();
      const isDark = activeThemeMode === 'dark';
      bgCtx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.024)' : 'rgba(0, 0, 0, 0.028)';
      bgCtx.lineWidth = 1;

      // Draw diagonal isometric lines (+30 deg and -30 deg)
      const numLines = Math.ceil((bgWidth + bgHeight * 2) / gridSpacing);
      for (let i = -numLines; i <= numLines; i++) {
        // Line type 1: 30 degree down-right
        const startX1 = i * gridSpacing;
        bgCtx.beginPath();
        bgCtx.moveTo(startX1, -50);
        bgCtx.lineTo(startX1 + bgHeight / Math.tan(isoAngle), bgHeight + 50);
        bgCtx.stroke();

        // Line type 2: 150 degree down-left
        const startX2 = i * gridSpacing;
        bgCtx.beginPath();
        bgCtx.moveTo(startX2, -50);
        bgCtx.lineTo(startX2 - bgHeight / Math.tan(isoAngle), bgHeight + 50);
        bgCtx.stroke();
      }

      // Draw subtle horizontal grid conduit lines
      const numHoriz = Math.ceil(bgHeight / (gridSpacing * 0.8));
      for (let j = 0; j <= numHoriz; j++) {
        const y = j * (gridSpacing * 0.8);
        bgCtx.beginPath();
        bgCtx.moveTo(0, y);
        bgCtx.lineTo(bgWidth, y);
        bgCtx.stroke();
      }
      bgCtx.restore();

      // 2. Animate Toned-Down Ambient Orange Pulse Particles
      bgCtx.save();
      gridParticles.forEach(p => {
        p.x += p.vx * p.speedMultiplier;
        p.y += p.vy * p.speedMultiplier;

        // Wrap around viewport edges
        if (p.x > bgWidth + 40) p.x = -40;
        if (p.x < -40) p.x = bgWidth + 40;
        if (p.y > bgHeight + 40) p.y = -40;
        if (p.y < -40) p.y = bgHeight + 40;

        // Draw particle tail with softened opacity
        const tailX = p.x - (p.vx / Math.hypot(p.vx, p.vy)) * p.length;
        const tailY = p.y - (p.vy / Math.hypot(p.vx, p.vy)) * p.length;

        const grad = bgCtx.createLinearGradient(tailX, tailY, p.x, p.y);
        grad.addColorStop(0, 'rgba(255, 120, 31, 0)');
        grad.addColorStop(0.65, `rgba(255, 120, 31, ${p.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255, 150, 60, ${p.alpha})`);

        bgCtx.beginPath();
        bgCtx.moveTo(tailX, tailY);
        bgCtx.lineTo(p.x, p.y);
        bgCtx.strokeStyle = grad;
        bgCtx.lineWidth = 1.3;
        bgCtx.lineCap = 'round';
        bgCtx.stroke();

        // Soft ambient particle head dot with gentle glow (radius 1.5, blur 2.5)
        bgCtx.beginPath();
        bgCtx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        bgCtx.fillStyle = 'rgba(255, 255, 255, 0.88)';
        bgCtx.shadowColor = 'rgba(255, 120, 31, 0.45)';
        bgCtx.shadowBlur = 2.5;
        bgCtx.fill();
        bgCtx.shadowBlur = 0;
      });
      bgCtx.restore();

      requestAnimationFrame(renderBgGrid);
    }

    requestAnimationFrame(renderBgGrid);
  }

  // ══════════════════════════════════════════════════════════════════
  // 3. LENIS INERTIAL SMOOTH SCROLLING & GSAP
  // ══════════════════════════════════════════════════════════════════
  let lenisInstance = null;
  if (typeof window.Lenis !== 'undefined') {
    lenisInstance = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {
      lenisInstance.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  function initEntranceAnimations() {
    if (typeof window.gsap === 'undefined') return;

    const gsap = window.gsap;

    // Hero title line-by-line reveal
    gsap.from('.hero-copy > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });

    // 3D Isometric stage reveal
    gsap.from('.hero-visual-stage', {
      scale: 0.92,
      opacity: 0,
      duration: 1.1,
      ease: 'power2.out',
      delay: 0.2
    });

    // ScrollTrigger for sections if available
    if (window.ScrollTrigger) {
      gsap.utils.toArray('.case-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out'
        });
      });

      gsap.utils.toArray('.stack-category-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }
  }

  // ══════════════════════════════════════════════════════════════════
  // 4. 3D ISOMETRIC CONDUIT VISUAL ENGINE (CANVAS)
  // Matching the connected UI nodes, glowing orange conduits & light stage
  // ══════════════════════════════════════════════════════════════════
  const canvas = document.getElementById('heroIsoCanvas');
  const inspector = document.getElementById('nodeInspector');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Simulation state
    let isPaused = false;
    let conduitSpeed = 1.0;
    let time = 0;

    // Mouse parallax tracking
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let hoveredNode = null;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse for isometric parallax
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;
      mouse.targetX = (rawX - width / 2) / (width / 2);
      mouse.targetY = (rawY - height / 2) / (height / 2);

      // Check node hover collision
      checkNodeHover(rawX, rawY);
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      if (inspector) inspector.classList.remove('visible');
      hoveredNode = null;
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;
      checkNodeHover(rawX, rawY, true);
    });

    // Isometric 3D Projection configuration
    const isoAngle = Math.PI / 6; // 30 degrees
    const cosIso = Math.cos(isoAngle);
    const sinIso = Math.sin(isoAngle);

    // Node definitions situated in 3D grid space
    const nodes = [
      {
        id: "source",
        title: "Source Code",
        platform: "GitHub Enterprise",
        gridX: -160,
        gridY: -80,
        gridZ: 25,
        w: 130,
        h: 80,
        icon: "",
        tag: "main: v2.8",
        metrics: { commits: "48/day", branches: "12 active" },
        desc: "Signed GPG commits, branch rules, release tags",
        color: "#ff781f"
      },
      {
        id: "cicd",
        title: "CI/CD Pipeline",
        platform: "ArgoCD & Actions",
        gridX: -60,
        gridY: 40,
        gridZ: 50,
        w: 140,
        h: 85,
        icon: "",
        tag: "99.8% Pass",
        metrics: { buildTime: "3m 12s", runners: "16 pods" },
        desc: "Automated matrix build, unit & container testing",
        color: "#ff6b00"
      },
      {
        id: "iac",
        title: "IaC & Secrets",
        platform: "Terraform & Vault",
        gridX: 60,
        gridY: -60,
        gridZ: 35,
        w: 135,
        h: 80,
        icon: "",
        tag: "OPA Rego",
        metrics: { modules: "48 locked", drifts: "0 detected" },
        desc: "Dynamic credentials, state lock, policy checks",
        color: "#ff8c00"
      },
      {
        id: "cluster",
        title: "EKS Cluster",
        platform: "AWS Kubernetes",
        gridX: 160,
        gridY: 60,
        gridZ: 60,
        w: 145,
        h: 90,
        icon: "",
        tag: "64 Pods",
        metrics: { cpu: "28.4%", memory: "14.2 GB" },
        desc: "Blue/Green traffic shift, automated failover",
        color: "#ff5400"
      },
      {
        id: "observability",
        title: "Observability",
        platform: "Grafana & Prometheus",
        gridX: 250,
        gridY: -20,
        gridZ: 40,
        w: 140,
        h: 85,
        icon: "",
        tag: "99.999%",
        metrics: { p99: "18.4ms", alerts: "0 P1/P2" },
        desc: "Synthetic probe telemetry, auto-remediation",
        color: "#ff781f"
      }
    ];

    // Conduits linking the nodes (matching video conduit topology)
    const conduits = [
      { from: 0, to: 1, label: "OCI Artifact" },
      { from: 1, to: 2, label: "Terraform Trigger" },
      { from: 2, to: 3, label: "Manifest Apply" },
      { from: 3, to: 4, label: "Live Telemetry" },
      // Feedback loop conduit
      { from: 4, to: 1, label: "Self-Healing Signal", curved: true }
    ];

    // Data packets (moving pulses along conduits)
    const pulses = [
      { conduitIndex: 0, progress: 0.1, speed: 0.007 },
      { conduitIndex: 0, progress: 0.6, speed: 0.007 },
      { conduitIndex: 1, progress: 0.35, speed: 0.008 },
      { conduitIndex: 2, progress: 0.2, speed: 0.009 },
      { conduitIndex: 2, progress: 0.75, speed: 0.009 },
      { conduitIndex: 3, progress: 0.45, speed: 0.0075 },
      { conduitIndex: 4, progress: 0.5, speed: 0.006 }
    ];

    function toScreenIso(x, y, z, offsetX = 0, offsetY = 0) {
      const centerX = width * 0.48 + offsetX;
      const centerY = height * 0.54 + offsetY;
      const isoX = centerX + (x - y) * cosIso;
      const isoY = centerY + (x + y) * sinIso - z;
      return { x: isoX, y: isoY };
    }

    function checkNodeHover(mouseX, mouseY, isClick = false) {
      let found = null;
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        if (!node.screenBounds) continue;
        const b = node.screenBounds;
        if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
          found = node;
          break;
        }
      }

      hoveredNode = found;
      if (found && inspector) {
        document.getElementById('inspTitle').textContent = found.title;
        document.getElementById('inspPlatform').textContent = found.platform;
        document.getElementById('inspDesc').textContent = found.desc;
        document.getElementById('inspMetric1Label').textContent = Object.keys(found.metrics)[0] || 'Metric 1';
        document.getElementById('inspMetric1Val').textContent = Object.values(found.metrics)[0] || '100%';
        document.getElementById('inspMetric2Label').textContent = Object.keys(found.metrics)[1] || 'Metric 2';
        document.getElementById('inspMetric2Val').textContent = Object.values(found.metrics)[1] || 'Nominal';
        inspector.classList.add('visible');
      } else if (!isClick && inspector) {
        inspector.classList.remove('visible');
      }
    }

    // Render loop
    function render(timestamp) {
      if (!isPaused) {
        time += 0.016 * conduitSpeed;
      }

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const parallaxOffsetX = mouse.x * 24;
      const parallaxOffsetY = mouse.y * 16;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Isometric Base Platform Grid (matching video light stage)
      drawIsometricStageFloor(parallaxOffsetX, parallaxOffsetY);

      // 2. Draw Wide Glowing Orange Energy Conduits
      drawConduits(parallaxOffsetX, parallaxOffsetY);

      // 3. Draw Conduit Junction Boxes
      drawJunctionBoxes(parallaxOffsetX, parallaxOffsetY);

      // 4. Draw Floating Dark Dashboard Cards (UI nodes)
      drawFloatingNodes(parallaxOffsetX, parallaxOffsetY);

      // 5. Draw Glowing Energy Pulses / Photons
      drawPulses(parallaxOffsetX, parallaxOffsetY);

      requestAnimationFrame(render);
    }

    function drawIsometricStageFloor(offX, offY) {
      ctx.save();
      const gridSize = 4;
      const step = 90;

      // Draw subtle isometric floor tiles
      for (let ix = -gridSize; ix <= gridSize; ix++) {
        for (let iy = -gridSize; iy <= gridSize; iy++) {
          const pt = toScreenIso(ix * step, iy * step, 0, offX, offY);

          ctx.beginPath();
          const p1 = toScreenIso(ix * step, iy * step, 0, offX, offY);
          const p2 = toScreenIso((ix + 1) * step, iy * step, 0, offX, offY);
          const p3 = toScreenIso((ix + 1) * step, (iy + 1) * step, 0, offX, offY);
          const p4 = toScreenIso(ix * step, (iy + 1) * step, 0, offX, offY);

          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.closePath();

          ctx.strokeStyle = activeThemeMode === 'dark' ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.035)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    function drawConduits(offX, offY) {
      ctx.save();

      conduits.forEach((c) => {
        const nA = nodes[c.from];
        const nB = nodes[c.to];

        const pA = toScreenIso(nA.gridX, nA.gridY, nA.gridZ * 0.4, offX, offY);
        const pB = toScreenIso(nB.gridX, nB.gridY, nB.gridZ * 0.4, offX, offY);

        // Calculate conduit midpoint with perpendicular elbow
        const midGridX = (nA.gridX + nB.gridX) / 2;
        const midGridY = (nA.gridY + nB.gridY) / 2;
        const pMid = toScreenIso(midGridX, midGridY, (nA.gridZ + nB.gridZ) * 0.2, offX, offY);

        // 1. Conduit Outer Glow (softened ambient glow)
        ctx.beginPath();
        if (c.curved) {
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(pMid.x - 30, pMid.y + 40, pB.x, pB.y);
        } else {
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pMid.x, pMid.y);
          ctx.lineTo(pB.x, pB.y);
        }
        ctx.strokeStyle = 'rgba(255, 120, 31, 0.12)';
        ctx.lineWidth = 9;
        ctx.lineCap = 'round';
        ctx.stroke();

        // 2. Conduit Main Ribbon (refined ambient orange)
        ctx.beginPath();
        if (c.curved) {
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(pMid.x - 30, pMid.y + 40, pB.x, pB.y);
        } else {
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pMid.x, pMid.y);
          ctx.lineTo(pB.x, pB.y);
        }
        ctx.strokeStyle = 'rgba(255, 120, 31, 0.72)';
        ctx.lineWidth = 4.5;
        ctx.stroke();

        // 3. Inner Conduit Core Beam
        ctx.beginPath();
        if (c.curved) {
          ctx.moveTo(pA.x, pA.y);
          ctx.quadraticCurveTo(pMid.x - 30, pMid.y + 40, pB.x, pB.y);
        } else {
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pMid.x, pMid.y);
          ctx.lineTo(pB.x, pB.y);
        }
        ctx.strokeStyle = 'rgba(255, 235, 200, 0.75)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      ctx.restore();
    }

    function drawJunctionBoxes(offX, offY) {
      ctx.save();
      conduits.forEach((c) => {
        const nA = nodes[c.from];
        const nB = nodes[c.to];
        const midGridX = (nA.gridX + nB.gridX) / 2;
        const midGridY = (nA.gridY + nB.gridY) / 2;
        const pMid = toScreenIso(midGridX, midGridY, (nA.gridZ + nB.gridZ) * 0.2, offX, offY);

        // Small 3D junction cube
        ctx.fillStyle = '#1e2430';
        ctx.fillRect(pMid.x - 6, pMid.y - 6, 12, 12);
        ctx.strokeStyle = '#ff781f';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(pMid.x - 6, pMid.y - 6, 12, 12);

        // Center amber LED
        ctx.fillStyle = '#ff9d42';
        ctx.beginPath();
        ctx.arc(pMid.x, pMid.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    function drawFloatingNodes(offX, offY) {
      ctx.save();

      // Sort nodes back-to-front by isometric depth
      const sortedNodes = [...nodes].sort((a, b) => (a.gridX + a.gridY) - (b.gridX + b.gridY));

      sortedNodes.forEach((node) => {
        // Subtle floating bob animation
        const floatZ = node.gridZ + Math.sin(time * 2 + node.gridX * 0.05) * 4;
        const pos = toScreenIso(node.gridX, node.gridY, floatZ, offX, offY);
        const groundPos = toScreenIso(node.gridX, node.gridY, 0, offX, offY);

        const cardW = node.w;
        const cardH = node.h;
        const cardX = pos.x - cardW / 2;
        const cardY = pos.y - cardH / 2;

        // Save bounds for hover detection
        node.screenBounds = { x: cardX, y: cardY, w: cardW, h: cardH };
        const isHovered = hoveredNode && hoveredNode.id === node.id;

        // 1. Ground Drop Shadow (3D elevation effect)
        ctx.beginPath();
        ctx.ellipse(groundPos.x, groundPos.y, cardW * 0.45, cardH * 0.25, 0, 0, Math.PI * 2);
        ctx.fillStyle = activeThemeMode === 'dark' ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.12)';
        ctx.fill();

        // 2. Floating Card Body (Dark graphite / slate dashboard card from video)
        ctx.fillStyle = isHovered ? '#1c2432' : '#121721';
        ctx.beginPath();
        roundRect(ctx, cardX, cardY, cardW, cardH, 10);
        ctx.fill();

        // Card Border (Glowing orange on hover)
        ctx.strokeStyle = isHovered ? '#ff781f' : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // 3. Card Header Bar
        ctx.fillStyle = '#1a202c';
        ctx.beginPath();
        roundRect(ctx, cardX + 1, cardY + 1, cardW - 2, 22, [9, 9, 0, 0]);
        ctx.fill();

        // Mini macOS window dots
        ctx.fillStyle = '#ff5f56';
        ctx.beginPath(); ctx.arc(cardX + 10, cardY + 11, 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffbd2e';
        ctx.beginPath(); ctx.arc(cardX + 18, cardY + 11, 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#27c93f';
        ctx.beginPath(); ctx.arc(cardX + 26, cardY + 11, 2.5, 0, Math.PI * 2); ctx.fill();

        // Header status badge text
        ctx.fillStyle = '#ff781f';
        ctx.font = '600 8px JetBrains Mono, monospace';
        ctx.textAlign = 'right';
        ctx.fillText(node.tag, cardX + cardW - 8, cardY + 14);

        // 4. Card Content: Title & Platform
        ctx.textAlign = 'left';
        ctx.fillStyle = '#f8fafc';
        ctx.font = '700 10.5px Space Grotesk, sans-serif';
        ctx.fillText(node.title, cardX + 10, cardY + 38);

        ctx.fillStyle = '#8b949e';
        ctx.font = '500 8px Plus Jakarta Sans, sans-serif';
        ctx.fillText(node.platform, cardX + 10, cardY + 50);

        // 5. Mini Dashboard Visuals inside card (charts, bars matching video)
        drawMiniCardDashboard(ctx, cardX + 10, cardY + 56, cardW - 20, 16, node);
      });

      ctx.restore();
    }

    function drawMiniCardDashboard(c, x, y, w, h, node) {
      if (node.id === 'source' || node.id === 'iac') {
        // Mini commit sparkline / progress bars
        c.fillStyle = 'rgba(255, 255, 255, 0.08)';
        c.fillRect(x, y + 2, w, 4);
        c.fillStyle = '#ff781f';
        c.fillRect(x, y + 2, w * 0.72, 4);

        c.fillStyle = '#10b981';
        c.font = '600 7px JetBrains Mono, monospace';
        c.fillText('✔ synced', x, y + 14);
      } else if (node.id === 'cluster') {
        // Mini bar chart
        const barW = 4;
        const heights = [6, 11, 8, 14, 9, 12, 15];
        heights.forEach((bh, i) => {
          c.fillStyle = i === 6 ? '#ff781f' : '#3b82f6';
          c.fillRect(x + i * (barW + 2), y + (h - bh), barW, bh);
        });
      } else if (node.id === 'observability') {
        // Mini telemetry sine wave
        c.beginPath();
        c.moveTo(x, y + h / 2);
        for (let ix = 0; ix < w; ix += 3) {
          const sy = y + h / 2 + Math.sin(time * 3 + ix * 0.25) * 5;
          c.lineTo(x + ix, sy);
        }
        c.strokeStyle = '#10b981';
        c.lineWidth = 1.2;
        c.stroke();
      } else {
        // CI/CD mini stages check
        c.fillStyle = '#10b981';
        c.beginPath(); c.arc(x + 6, y + 8, 3, 0, Math.PI * 2); c.fill();
        c.beginPath(); c.arc(x + 18, y + 8, 3, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#ff781f';
        c.beginPath(); c.arc(x + 30, y + 8, 3, 0, Math.PI * 2); c.fill();
      }
    }

    function drawPulses(offX, offY) {
      ctx.save();

      pulses.forEach((pulse) => {
        if (!isPaused) {
          pulse.progress += pulse.speed * conduitSpeed;
          if (pulse.progress > 1) pulse.progress = 0;
        }

        const conduit = conduits[pulse.conduitIndex];
        const nA = nodes[conduit.from];
        const nB = nodes[conduit.to];

        const pA = toScreenIso(nA.gridX, nA.gridY, nA.gridZ * 0.4, offX, offY);
        const pB = toScreenIso(nB.gridX, nB.gridY, nB.gridZ * 0.4, offX, offY);

        const midGridX = (nA.gridX + nB.gridX) / 2;
        const midGridY = (nA.gridY + nB.gridY) / 2;
        const pMid = toScreenIso(midGridX, midGridY, (nA.gridZ + nB.gridZ) * 0.2, offX, offY);

        let curX, curY;
        if (conduit.curved) {
          const t = pulse.progress;
          const cpX = pMid.x - 30;
          const cpY = pMid.y + 40;
          curX = Math.pow(1 - t, 2) * pA.x + 2 * (1 - t) * t * cpX + Math.pow(t, 2) * pB.x;
          curY = Math.pow(1 - t, 2) * pA.y + 2 * (1 - t) * t * cpY + Math.pow(t, 2) * pB.y;
        } else {
          if (pulse.progress < 0.5) {
            const subT = pulse.progress / 0.5;
            curX = pA.x + (pMid.x - pA.x) * subT;
            curY = pA.y + (pMid.y - pA.y) * subT;
          } else {
            const subT = (pulse.progress - 0.5) / 0.5;
            curX = pMid.x + (pB.x - pMid.x) * subT;
            curY = pMid.y + (pB.y - pMid.y) * subT;
          }
        }

        // Draw toned-down ambient photon packet
        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, 8);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.88)');
        grad.addColorStop(0.35, 'rgba(255, 140, 50, 0.45)');
        grad.addColorStop(1, 'rgba(255, 120, 31, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curX, curY, 8, 0, Math.PI * 2);
        ctx.fill();

        // Subtle center core
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(curX, curY, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    }

    function roundRect(c, x, y, width, height, radius) {
      if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
      } else if (Array.isArray(radius)) {
        radius = { tl: radius[0], tr: radius[1], br: radius[2], bl: radius[3] };
      }
      c.moveTo(x + radius.tl, y);
      c.lineTo(x + width - radius.tr, y);
      c.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      c.lineTo(x + width, y + height - radius.br);
      c.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
      c.lineTo(x + radius.bl, y + height);
      c.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      c.lineTo(x, y + radius.tl);
      c.quadraticCurveTo(x, y, x + radius.tl, y);
      c.closePath();
    }

    // Canvas HUD button controls
    const btnPause = document.getElementById('btnPauseConduits');
    const btnSpeed = document.getElementById('btnSpeedConduits');
    const btnReset = document.getElementById('btnResetPerspective');

    if (btnPause) {
      btnPause.addEventListener('click', () => {
        isPaused = !isPaused;
        btnPause.innerHTML = isPaused ? '<i class="fa-solid fa-play"></i> Play' : '<i class="fa-solid fa-pause"></i> Pause';
      });
    }

    if (btnSpeed) {
      btnSpeed.addEventListener('click', () => {
        conduitSpeed = conduitSpeed === 1.0 ? 2.0 : 1.0;
        btnSpeed.textContent = conduitSpeed + 'x Speed';
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        mouse.targetX = 0;
        mouse.targetY = 0;
        if (inspector) inspector.classList.remove('visible');
      });
    }

    requestAnimationFrame(render);
  }

  // ══════════════════════════════════════════════════════════════════
  // 5. INTERACTIVE GLASSMORHPISM CLI TERMINAL
  // ══════════════════════════════════════════════════════════════════
  const termInput = document.getElementById('termInput');
  const termHistory = document.getElementById('termHistory');
  const termPresetChips = document.querySelectorAll('.preset-chip');
  const btnClearTerm = document.getElementById('btnClearTerm');

  const commandMap = data.terminalCommands || {};
  const commandHistory = [];
  let historyIndex = -1;

  function appendTerminalOutput(cmd, outputLines) {
    if (!termHistory) return;

    const entry = document.createElement('div');
    entry.className = 'term-history-entry';

    // Echo typed command
    const echo = document.createElement('div');
    echo.className = 'term-cmd-echo';
    echo.innerHTML = `<span class="term-prompt">puneeth@cloud-platform:~$</span> <span class="term-cmd-text">${escapeHtml(cmd)}</span>`;
    entry.appendChild(echo);

    // Output lines
    if (outputLines && outputLines.length > 0) {
      const resultContainer = document.createElement('div');
      resultContainer.className = 'term-result-lines';
      resultContainer.innerHTML = outputLines.join('<br>');
      entry.appendChild(resultContainer);
    }

    termHistory.appendChild(entry);

    // Scroll to bottom
    const screen = document.getElementById('termScreen');
    if (screen) screen.scrollTop = screen.scrollHeight;
  }

  function executeTerminalCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Handle theme commands
    if (trimmed.startsWith('theme ')) {
      const mode = trimmed.replace('theme ', '').trim();
      if (['light', 'dark'].includes(mode)) {
        applyThemeMode(mode);
        appendTerminalOutput(trimmed, [`<span class='term-green'>✔ Theme successfully updated to '${mode}'</span>`]);
        return;
      } else {
        appendTerminalOutput(trimmed, [`<span class='term-red'>Error: Unknown theme '${mode}'. Usage: theme [light|dark]</span>`]);
        return;
      }
    }

    if (trimmed === 'clear') {
      if (termHistory) termHistory.innerHTML = '';
      return;
    }

    // Direct match
    if (commandMap[trimmed]) {
      appendTerminalOutput(trimmed, commandMap[trimmed].output);
      return;
    }

    // Normalized match
    const lower = trimmed.toLowerCase();
    const matchedKey = Object.keys(commandMap).find(k => k.toLowerCase() === lower);
    if (matchedKey) {
      appendTerminalOutput(trimmed, commandMap[matchedKey].output);
      return;
    }

    // Command not found
    appendTerminalOutput(trimmed, [
      `<span class='term-red'>zsh: command not found: ${escapeHtml(trimmed)}</span>`,
      `Type <span class='term-yellow'>help</span> to view available operations.`
    ]);
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = termInput.value;
        termInput.value = '';
        executeTerminalCommand(val);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          termInput.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          termInput.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          termInput.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const current = termInput.value.toLowerCase();
        const matched = Object.keys(commandMap).find(cmd => cmd.toLowerCase().startsWith(current));
        if (matched) {
          termInput.value = matched;
        }
      }
    });
  }

  // Clickable presets
  termPresetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        if (termInput) termInput.value = cmd;
        executeTerminalCommand(cmd);
      }
    });
  });

  if (btnClearTerm) {
    btnClearTerm.addEventListener('click', () => {
      if (termHistory) termHistory.innerHTML = '';
    });
  }

  // Initial welcome command execution
  executeTerminalCommand('kubectl get pods -n production');

  // ══════════════════════════════════════════════════════════════════
  // 6. CI/CD PIPELINE VISUALIZER WIDGET
  // ══════════════════════════════════════════════════════════════════
  const pipeDemo = data.pipelineDemo;
  const stagesContainer = document.getElementById('pipelineGraphStages');
  const pipeLogStream = document.getElementById('pipeLogStream');
  const pipeInspectorTitle = document.getElementById('pipeInspectorTitle');
  const pipeInspectorTime = document.getElementById('pipeInspectorTime');
  const btnTriggerPipeline = document.getElementById('btnTriggerPipeline');

  let activeStageIndex = 4; // Default to final stage (Deploy)

  function renderPipelineStages() {
    if (!stagesContainer || !pipeDemo) return;

    stagesContainer.innerHTML = '';
    pipeDemo.stages.forEach((stg, idx) => {
      const card = document.createElement('div');
      card.className = `pipe-step-card status-${stg.status} ${idx === activeStageIndex ? 'active' : ''}`;
      card.setAttribute('data-idx', idx);

      let statusIconHtml = '<i class="fa-solid fa-check"></i>';
      if (stg.status === 'running') statusIconHtml = '<i class="fa-solid fa-spinner fa-spin"></i>';
      if (stg.status === 'pending') statusIconHtml = '<i class="fa-solid fa-clock"></i>';

      card.innerHTML = `
        <div class="pipe-step-status-icon">${statusIconHtml}</div>
        <div class="pipe-step-name">${stg.name}</div>
        <div class="pipe-step-tool">${stg.tool}</div>
        <span class="pipe-step-time">${stg.duration}</span>
      `;

      card.addEventListener('click', () => {
        selectPipelineStage(idx);
      });

      stagesContainer.appendChild(card);
    });

    updatePipelineInspector();
  }

  function selectPipelineStage(idx) {
    activeStageIndex = idx;
    const cards = document.querySelectorAll('.pipe-step-card');
    cards.forEach((c, i) => c.classList.toggle('active', i === idx));
    updatePipelineInspector();
  }

  function updatePipelineInspector() {
    if (!pipeDemo || !pipeDemo.stages[activeStageIndex]) return;
    const stage = pipeDemo.stages[activeStageIndex];

    if (pipeInspectorTitle) pipeInspectorTitle.textContent = `${stage.name} · ${stage.tool} (${stage.status.toUpperCase()})`;
    if (pipeInspectorTime) pipeInspectorTime.textContent = `Elapsed: ${stage.duration}`;

    if (pipeLogStream) {
      pipeLogStream.innerHTML = stage.log.map(line => `<div class="pv-log-line">${escapeHtml(line)}</div>`).join('');
      pipeLogStream.scrollTop = pipeLogStream.scrollHeight;
    }
  }

  // Interactive Execution Run Simulation
  let isRunningPipeline = false;
  if (btnTriggerPipeline) {
    btnTriggerPipeline.addEventListener('click', () => {
      if (isRunningPipeline || !pipeDemo) return;
      isRunningPipeline = true;
      btnTriggerPipeline.disabled = true;
      btnTriggerPipeline.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Running Pipeline…';

      // Reset all stages to pending
      pipeDemo.stages.forEach(s => s.status = 'pending');
      renderPipelineStages();

      let currentStep = 0;

      function runNextStep() {
        if (currentStep >= pipeDemo.stages.length) {
          isRunningPipeline = false;
          btnTriggerPipeline.disabled = false;
          btnTriggerPipeline.innerHTML = '<i class="fa-solid fa-play"></i> Trigger Pipeline Run';
          return;
        }

        // Set previous to passed
        if (currentStep > 0) {
          pipeDemo.stages[currentStep - 1].status = 'passed';
        }

        // Set current to running
        pipeDemo.stages[currentStep].status = 'running';
        selectPipelineStage(currentStep);
        renderPipelineStages();

        currentStep++;
        setTimeout(runNextStep, 1100);
      }

      runNextStep();
    });
  }

  renderPipelineStages();

  // ══════════════════════════════════════════════════════════════════
  // 7. LIVE IST DIGITAL CLOCK & CLIPBOARD
  // ══════════════════════════════════════════════════════════════════
  function updateISTClock() {
    const clockElements = document.querySelectorAll('[data-ist-clock]');
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const nowStr = new Intl.DateTimeFormat([], options).format(new Date());
    clockElements.forEach(el => el.textContent = nowStr);
  }
  setInterval(updateISTClock, 1000);
  updateISTClock();

  // Copy Email Button
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = data.meta.email || 'aradhyapuneeth@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        btnCopyEmail.classList.add('copied');
        setTimeout(() => btnCopyEmail.classList.remove('copied'), 3000);
      }).catch(() => {
        // Fallback
        prompt('Copy email address:', email);
      });
    });
  }

  // Interactive Custom Cursor
  const cursor = document.getElementById('customCursor');
  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .pipe-step-card, .preset-chip').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '36px';
        cursor.style.height = '36px';
        cursor.style.opacity = '0.55';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '18px';
        cursor.style.height = '18px';
        cursor.style.opacity = '0.35';
      });
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
