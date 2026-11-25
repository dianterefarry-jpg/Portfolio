// --- TRANSLATIONS ---
const i18n = {
    en: {
        "page.title": "Portfolio",
        "a11y.skip": "Skip to work",
        "nav.work": "Work",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.intro": "Lrdyan.<br>Content Creator & Visual Storyteller.",
        "hero.status": "Available for work",
        "hero.title": "Portfolio",
        "hero.sub": "A curated selection of visual works.",
        "hero.desc": "Videographer, motion designer, and editor. Crafting visuals into stories that linger.",
        "hero.scroll": "Scroll to explore",
        "hero.caption": "Fig. 01 — Showreel",
        "about.label": "About Me",
        "about.title": "Behind <br>the <span class=\"italic accent\">lens.</span>",
        "about.caption": "Fig. 02 — Behind the lens",
        "about.narrative": [
            "Hello, I'm <strong>Lrdyan</strong>. A student from SMA Negeri 4 Maluku Tengah who believes that every moment has its own story.",
            "My interest in the visual world started from curiosity: how a still image can hold a thousand words, and how video clips can make people feel the same emotion I feel behind the camera.",
            "From videography, motion graphics, to the editing process, I dedicate my time to keep learning and honing my visual sensitivity. To me, a good piece isn't just about 4K resolution or complex transitions, but the <em>honesty of the story</em> delivered within it.",
            "Outside of visual work, my hobby is simple: <strong>trying everything there is to try</strong>. To me, curiosity is the main fuel—whether it's learning new tools, exploring angles I've never taken, or simply stepping out of my comfort zone. Because that's where new stories are born."
        ],
        "marquee.text": "Videography <em>✦</em> Motion Design <em>✦</em> Color Grading <em>✦</em> Editing <em>✦</em> Storytelling <em>✦</em>&nbsp;",
        "work.label": "Selected Work",
        "work.title": "Selected <span class=\"italic accent\">Works.</span>",
        "work.count": "films",
        "work.empty": "No films in this category",
        "contact.label": "Contact",
        "contact.title": "Let's <span class=\"italic accent\">talk.</span>",
        "contact.desc": "Have a project that needs a visual touch? Or just want to discuss ideas? Drop a message—I'm always open to new stories.",
        "contact.emailLabel": "Write an email",
        "footer.copy": "© 2025 Lrdyan.",
        "footer.tag": "Made with curiosity.",
        "footer.top": "Back to top",
        "detail.back": "← Index",
        "detail.credits": "Credits",
        "detail.year": "Year",
        "detail.category": "Category",
        "detail.next": "Next project",
        "detail.play": "View film",
        "filter.all": "All",
        "filter.video": "Video",
        "filter.motion": "Motion",
        "filter.edit": "Edit",
        "rail.portfolio": "Portfolio",
        "rail.about": "Story",
        "rail.works": "Works",
        "rail.contact": "Contact"
    },
    id: {
        "page.title": "Portofolio",
        "a11y.skip": "Lewati ke karya",
        "nav.work": "Karya",
        "nav.about": "Tentang",
        "nav.contact": "Kontak",
        "hero.intro": "Lrdyan.<br>Kreator Konten & Pendongeng Visual.",
        "hero.status": "Terbuka untuk proyek",
        "hero.title": "Portofolio",
        "hero.sub": "Kurasi karya-karya visual pilihan.",
        "hero.desc": "Videografer, motion designer, dan editor. Merangkai visual menjadi cerita yang membekas.",
        "hero.scroll": "Gulir untuk menjelajah",
        "hero.caption": "Gbr. 01 — Showreel",
        "about.label": "Tentang Saya",
        "about.title": "Di balik <br><span class=\"italic accent\">lensa.</span>",
        "about.caption": "Gbr. 02 — Di balik lensa",
        "about.narrative": [
            "Halo, saya <strong>Lrdyan</strong>. Seorang siswa dari SMA Negeri 4 Maluku Tengah yang percaya bahwa setiap momen memiliki ceritanya sendiri.",
            "Ketertarikan saya pada dunia visual dimulai dari rasa ingin tahu: bagaimana sebuah gambar diam bisa menyimpan ribuan kata, dan bagaimana potongan video bisa membuat orang merasakan emosi yang sama dengan yang saya rasakan di balik kamera.",
            "Dari videografi, motion graphic, hingga proses editing, saya mendedikasikan waktu untuk terus belajar dan mengasah kepekaan visual. Bagi saya, karya yang baik bukan hanya tentang resolusi 4K atau transisi yang rumit, melainkan tentang <em>kejujuran cerita</em> yang disampaikan di dalamnya.",
            "Di luar urusan visual, hobi saya cukup sederhana: <strong>mencoba segala hal yang bisa dicoba</strong>. Bagi saya, rasa penasaran adalah bahan bakar utama—entah itu mempelajari perangkat baru, mengeksplorasi sudut pandang yang belum pernah saya ambil, atau sekadar melangkah ke hal-hal di luar zona nyaman."
        ],
        "marquee.text": "Videografi <em>✦</em> Motion Design <em>✦</em> Color Grading <em>✦</em> Editing <em>✦</em> Storytelling <em>✦</em>&nbsp;",
        "work.label": "Karya Pilihan",
        "work.title": "Karya <span class=\"italic accent\">Pilihan.</span>",
        "work.count": "film",
        "work.empty": "Tidak ada film dalam kategori ini",
        "contact.label": "Kontak",
        "contact.title": "Mari <span class=\"italic accent\">bicara.</span>",
        "contact.desc": "Punya proyek yang butuh sentuhan visual? Atau sekadar ingin berdiskusi tentang ide? Kirim pesan—saya selalu terbuka untuk cerita baru.",
        "contact.emailLabel": "Kirim email",
        "footer.copy": "© 2025 Lrdyan.",
        "footer.tag": "Dibuat dengan rasa penasaran.",
        "footer.top": "Kembali ke atas",
        "detail.back": "← Indeks",
        "detail.credits": "Kredit",
        "detail.year": "Tahun",
        "detail.category": "Kategori",
        "detail.next": "Proyek berikutnya",
        "detail.play": "Tonton film",
        "filter.all": "Semua",
        "filter.video": "Video",
        "filter.motion": "Motion",
        "filter.edit": "Edit",
        "rail.portfolio": "Portofolio",
        "rail.about": "Cerita",
        "rail.works": "Karya",
        "rail.contact": "Kontak"
    }
};

// --- DATA KARYA ---
const worksData = [
    { slug: "portofolio", title: "Portfolio", category: "video", year: "2025",
      video: "assets/videos/01.mp4", poster: "assets/posters/01.jpg",
      en: { desc: "A visual compilation—from videography, motion graphics, to editing. A portrait of a creative journey.", credits: "Camera · Edit · Color — Lrdyan" },
      id: { desc: "Kompilasi visual—dari videografi, motion graphic, hingga editing. Satu potret perjalanan kreatif.", credits: "Kamera · Edit · Warna — Lrdyan" } },
    { slug: "rupiahs-hunter", title: "Rupiah's Hunter", category: "video", year: "2025",
      video: "assets/videos/02.mp4", poster: "assets/posters/02.jpg",
      en: { desc: "A community promotion project built on visual motion graphics—working hands, stories behind the scenes, woven into a visual rhythm.", credits: "Motion Graphic · Edit — Lrdyan" },
      id: { desc: "Proyek promosi komunitas berbasis visual motion graphic—tangan yang bekerja, cerita di balik layar, dirangkai dalam ritme visual.", credits: "Motion Graphic · Edit — Lrdyan" } },
    { slug: "my-skill", title: "My Skill", category: "motion", year: "2025",
      video: "assets/videos/03.mp4", poster: "assets/posters/03.jpg",
      en: { desc: "A visual skill showcase—kinetic typography, transitions, and rhythm following the beat.", credits: "Motion Design — Lrdyan" },
      id: { desc: "Showcase keahlian visual—kinetic typography, transisi, dan ritme mengikuti irama.", credits: "Motion Design — Lrdyan" } },
    { slug: "latoka-beach", title: "Latoka Beach", category: "video", year: "2024",
      video: "assets/videos/04.mp4", poster: "assets/posters/04.jpg",
      en: { desc: "Drone shots of the coastline from above. Water, rocks, and sand in a single breath.", credits: "Aerial · Edit — Lrdyan" },
      id: { desc: "Drone shot garis pantai dari ketinggian. Air, batu, dan pasir dalam satu tarikan napas.", credits: "Aerial · Edit — Lrdyan" } },
    { slug: "color-grading", title: "Color Grading + Color Correction", category: "edit", year: "2024",
      video: "assets/videos/05.mp4", poster: "assets/posters/05.jpg",
      en: { desc: "A color experiment from raw footage into a cohesive cinematic palette.", credits: "Colorist · Editor — Lrdyan" },
      id: { desc: "Eksperimen warna dari footage mentah menjadi palet sinematik yang utuh.", credits: "Colorist · Editor — Lrdyan" } },
    { slug: "cinematic-editing", title: "Cinematic + Editing", category: "edit", year: "2024",
      video: "assets/videos/06.mp4", poster: "assets/posters/06.jpg",
      en: { desc: "The rhythm of cuts as the main language—a cinematic cut that ties the story together.", credits: "Editor — Lrdyan" },
      id: { desc: "Ritme potongan sebagai bahasa utama—cinematic cut yang menyatukan cerita.", credits: "Editor — Lrdyan" } }
];

const app = {
    lang: 'en',
    theme: 'dark',
    reduceMotion: false,
    _booted: false,
    _detailActive: false,

    init() {
        this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.setupPerfProfile();
        gsap.registerPlugin(ScrollTrigger);

        this.theme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.lang = document.documentElement.getAttribute('lang') || 'en';

        this.lenis = new Lenis({
            duration: this.reduceMotion ? 0 : 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: !this.reduceMotion
        });

        this.applyLanguage(this.lang, false);
        this.initThemeToggle();
        this.initLangToggle();

        this.initScrollHub();
        this.initCurtain();
        this.initProgressBar();
        this.initCursor();
        this.initMobileMenu();
        this.initHeroAnimations();
        this.initHeadingHovers();
        this.initSectionReveals();
        this.initMagnetic();
        this.initFilters();
        this.renderGrid('all');
        this.renderDetail();
        this.initNavClicks();
        this.initNavState();
        this.initKeyboard();
        this.initMarquee();
        this.initBgFlow();
        this.initChapterRail();

        document.addEventListener('visibilitychange', () => {
            const hero = document.querySelector('.hero-video-wrapper video');
            if (document.hidden) {
                this._heroWasPlaying = hero ? !hero.paused : false;
                hero?.pause();
                this.pausePreviews(false);
            } else if (this._heroWasPlaying && !this._detailActive) {
                hero?.play().catch(() => {});
                this._heroWasPlaying = false;
            }
        });

        this._booted = true;
        // Satu ticker GSAP menggerakkan Lenis, cursor, marquee, dan flow field.
        gsap.ticker.add((time, deltaMs) => this.frame(time, deltaMs));
    },

    setupPerfProfile() {
        const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        const cores = navigator.hardwareConcurrency || 8;
        const memory = navigator.deviceMemory || 8;
        const low = coarse || cores <= 4 || memory <= 4;

        this.mqDesktop = window.matchMedia('(min-width: 900px)');
        this.perf = {
            coarse,
            low,
            uiStep: low ? 1000 / 30 : 1000 / 60,
            marqueeFps: low ? 24 : 30,
            flowFps: low ? 24 : 30,
            dpr: low ? 1 : Math.min(window.devicePixelRatio || 1, 1.5),
            baseParticles: low ? (coarse ? 54 : 90) : null
        };
        this._cursorAcc = 0;
        this._marqueeAcc = 0;
        this._flowAcc = 0;
        this._lastScrollY = 0;
    },

    frame(time, deltaMs) {
        if (document.hidden) return;
        this.lenis.raf(time * 1000);
        const step = Math.min(deltaMs || 16.7, 64);

        if (this._cursorSetX) {
            this._cursorAcc += step;
            if (this._cursorAcc >= this.perf.uiStep) {
                this._cursorAcc %= this.perf.uiStep;
                this.updateCursorOutline();
            }
        }

        if (this._marqueeStep && this._marqueeVisible && !this._detailActive) {
            this._marqueeAcc += step;
            if (this._marqueeAcc >= this._marqueeStep) {
                this.stepMarquee(this._marqueeAcc / this._marqueeStep);
                this._marqueeAcc = 0;
            }
        }

        if (this.bgFlow?.tick && this.theme === 'dark' && !this._detailActive) {
            this._flowAcc += step;
            if (this._flowAcc >= this.bgFlow.step) {
                this.bgFlow.tick(this._flowAcc);
                this._flowAcc = 0;
            }
        }
    },

    initScrollHub() {
        this._navbar = document.getElementById('navbar');
        this.measureScrollMetrics();
        window.addEventListener('resize', () => this.measureScrollMetrics(), { passive: true });
        ScrollTrigger.addEventListener('refresh', () => this.measureScrollMetrics());
        window.addEventListener('scroll', () => {
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            const p = this._scrollMax > 0 ? Math.min(1, Math.max(0, y / this._scrollMax)) : 0;
            this._setProgress?.(p);
            this._setRail?.(p);
            const nav = this._navbar;
            if (nav) {
                nav.classList.toggle('scrolled', y > 50);
                if (y > 200 && y > this._lastScrollY) nav.classList.add('hidden');
                else nav.classList.remove('hidden');
            }
            this._lastScrollY = y;
        }, { passive: true });
    },

    measureScrollMetrics() {
        this._scrollMax = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    },

    scheduleMetricsRefresh() {
        this._refreshCall?.kill();
        this._refreshCall = gsap.delayedCall(0.12, () => {
            this.measureScrollMetrics();
            ScrollTrigger.refresh();
        });
    },

    pausePreviews(reset = false) {
        document.querySelectorAll('.work-item video:not([controls])').forEach(video => {
            video.pause();
            if (reset) {
                try { video.currentTime = 0; } catch (_) { /* video belum siap */ }
            }
        });
        document.querySelectorAll('.work-media.is-playing').forEach(media => media.classList.remove('is-playing'));
        this._activePreview = null;
    },

    revealAll() {
        gsap.set('.fade-up, .narrative p, .hero-title .word', { opacity: 1, y: 0, yPercent: 0 });
        document.querySelectorAll('.chapter-rail').forEach(rail => {
            rail.classList.add('visible');
            const fill = rail.querySelector('.rail-fill');
            if (fill) gsap.set(fill, { scaleY: 1 });
        });
        this._railReady = true;
    },

    // --- THEME ---
    initThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.setAttribute('aria-pressed', String(this.theme === 'light'));
        btn.addEventListener('click', () => this.setTheme(this.theme === 'dark' ? 'light' : 'dark'));
    },

    animateThemeIcon(theme) {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;

        const sun = btn.querySelector('.theme-icon--sun');
        const moon = btn.querySelector('.theme-icon--moon');
        const rays = btn.querySelectorAll('.sun-ray');
        const core = btn.querySelector('.sun-core');
        const moonBody = btn.querySelector('.moon-body');
        const star = btn.querySelector('.moon-star');
        const iris = btn.querySelector('.toggle-iris');
        if (!sun || !moon || !moonBody) return;

        const toLight = theme === 'light';
        const targets = [btn, sun, moon, iris, core, moonBody, star, ...rays];
        this._themeTl?.kill();
        gsap.killTweensOf(targets);

        if (this.reduceMotion) {
            btn.classList.remove('is-toggling');
            gsap.set(targets, { clearProps: 'all' });
            return;
        }

        btn.classList.add('is-toggling');
        this._moonLength = this._moonLength || moonBody.getTotalLength();
        const len = this._moonLength;
        const outgoing = toLight ? sun : moon;
        const incoming = toLight ? moon : sun;
        const outRotation = toLight ? 42 : -42;
        const inRotation = toLight ? -42 : 42;

        gsap.set(iris, { scale: 0, opacity: toLight ? 0.95 : 0.85 });
        gsap.set(moonBody, { strokeDasharray: len, strokeDashoffset: toLight ? len : 0 });
        gsap.set(star, {
            opacity: toLight ? 0 : 1,
            scale: toLight ? 0.4 : 1,
            rotation: toLight ? -60 : 0
        });

        const cleanup = () => {
            btn.classList.remove('is-toggling');
            gsap.set(targets, {
                clearProps: 'transform,opacity,backgroundColor,strokeDasharray,strokeDashoffset'
            });
            this._themeTl = null;
        };

        const tl = gsap.timeline({
            defaults: { ease: 'power3.inOut' },
            onComplete: cleanup,
            onInterrupt: cleanup
        });

        tl.to(btn, { scale: 0.9, duration: 0.14, ease: 'power2.out' }, 0)
          .to(btn, { scale: 1, duration: 0.55, ease: 'elastic.out(1, 0.45)' }, 0.14)
          .to(iris, { scale: 1.45, opacity: 0, duration: 0.62, ease: 'power2.out' }, 0)
          .to(outgoing, { opacity: 0, scale: 0.42, rotation: outRotation, duration: 0.3, ease: 'power2.in' }, 0)
          .to(incoming, { opacity: 1, scale: 1, rotation: 0, duration: 0.58, ease: 'expo.out' }, 0.16);

        if (toLight) {
            tl.to(rays, {
                scale: 0.25, opacity: 0, rotation: -35, duration: 0.34,
                stagger: { each: 0.02, from: 'end' }, ease: 'power2.in'
            }, 0)
              .to(core, { scale: 1.35, opacity: 0, duration: 0.4, ease: 'power2.in' }, 0.03)
              .to(moonBody, { strokeDashoffset: 0, duration: 0.62, ease: 'power2.out' }, 0.2)
              .to(star, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2)' }, 0.5);
        } else {
            tl.to(moonBody, { strokeDashoffset: len, duration: 0.3, ease: 'power2.in' }, 0)
              .to(star, { opacity: 0, scale: 0.4, rotation: -60, duration: 0.22, ease: 'power2.in' }, 0)
              .fromTo(rays,
                { scale: 0.25, opacity: 0, rotation: 35 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.55, stagger: 0.025, ease: 'expo.out' }, 0.24)
              .fromTo(core,
                { scale: 0.35, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.out' }, 0.28);
        }

        this._themeTl = tl;
    },

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.setAttribute('aria-pressed', String(theme === 'light'));
        this.animateThemeIcon(theme);
        if (theme === 'light') this.bgFlow?.stop();
        else this.bgFlow?.start();
    },

    // --- LANGUAGE ---
    initLangToggle() {
        const wrap = document.querySelector('.lang-toggle');
        if (!wrap) return;
        wrap.querySelectorAll('.lang-opt').forEach(opt => {
            opt.addEventListener('click', () => this.applyLanguage(opt.dataset.lang));
        });
    },

    applyLanguage(lang, animate = true) {
        this.lang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);
        const t = i18n[lang] || i18n.en;

        document.querySelectorAll('.lang-opt').forEach(o => {
            o.setAttribute('aria-pressed', String(o.dataset.lang === lang));
        });

        ScrollTrigger.getAll()
            .filter(st => st.vars.id === 'narrative-reveal')
            .forEach(st => st.kill());

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = t[el.dataset.i18n];
            if (val !== undefined) {
                el.innerHTML = val;
                delete el.dataset.splitBound;
                el.closest('.hero-title, .section-title, .contact-title')?.removeAttribute('data-split-bound');
            }
        });

        const titleEl = document.querySelector('title');
        if (titleEl) document.title = t["page.title"];

        const narrativeEl = document.querySelector('[data-i18n-narrative]');
        if (narrativeEl) {
            narrativeEl.innerHTML = t["about.narrative"].map(p => `<p>${p}</p>`).join('');
            if (animate && !this.reduceMotion) {
                gsap.utils.toArray('.narrative p').forEach(p => {
                    gsap.fromTo(p, { opacity: 0, y: 30 }, {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: { id: 'narrative-reveal', trigger: p, start: "top 88%" }
                    });
                });
                this.initNarrativeMotion();
            } else if (this.reduceMotion) {
                gsap.set('.narrative p', { opacity: 1, y: 0 });
            }
        }

        if (this._booted) {
            this.initHeadingHovers();
            this.initFilters();
            const active = document.querySelector('.filters button.active');
            this.renderGrid(active ? active.dataset.filter : 'all');
            this.initNavState();
            this.refreshCursorHovers();
            this.scheduleMetricsRefresh();

            if (animate && !this.reduceMotion) {
                const textNodes = gsap.utils.toArray('[data-i18n]').filter(el =>
                    !el.classList.contains('word') && !el.closest('#marquee') && !el.classList.contains('hero-sub')
                );
                const heroWord = document.querySelector('.hero-title .word[data-i18n]');
                gsap.fromTo(textNodes, { opacity: 0, y: 8 }, {
                    opacity: 1, y: 0, duration: 0.45, stagger: 0.012, ease: 'power2.out',
                    clearProps: 'opacity,transform'
                });
                if (heroWord) {
                    gsap.fromTo(heroWord, { opacity: 0 }, {
                        opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'opacity'
                    });
                }
                gsap.fromTo('.hero-sub', { opacity: 0 }, {
                    opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'opacity'
                });
            }
        }
    },

    // --- CURTAIN ---
    initCurtain() {
        if (this.reduceMotion) {
            document.querySelector('.page-curtain')?.remove();
            this.lenis.start();
            this.revealAll();
            return;
        }

        const curtain = document.createElement('div');
        curtain.className = 'page-curtain';
        curtain.setAttribute('aria-hidden', 'true');
        const curtainChars = 'Loading footage'.split('')
            .map(ch => ch === ' ' ? '&nbsp;' : `<span class="curtain-char">${ch}</span>`)
            .join('');
        curtain.innerHTML = `
            <div class="curtain-content">
                <div class="curtain-text">${curtainChars}</div>
                <div class="curtain-progress">
                    <div class="curtain-bar"><div class="curtain-bar-fill"></div></div>
                    <span class="curtain-percent">0%</span>
                </div>
            </div>
        `;
        document.body.appendChild(curtain);
        this.lenis.stop();
        gsap.to(curtain.querySelectorAll('.curtain-char'), {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.025, ease: 'power2.out', delay: 0.05
        });

        const percentEl = curtain.querySelector('.curtain-percent');
        const barEl = curtain.querySelector('.curtain-bar-fill');
        const counter = { val: 0 };

        gsap.to(counter, {
            val: 100,
            duration: 1.1,
            ease: "power2.inOut",
            onUpdate: () => {
                percentEl.textContent = Math.floor(counter.val) + '%';
                barEl.style.width = counter.val + '%';
            },
            onComplete: () => {
                gsap.delayedCall(0.3, () => {
                    gsap.to(curtain, {
                        yPercent: -100,
                        duration: 1,
                        ease: "expo.inOut",
                        onComplete: () => {
                            curtain.remove();
                            this.lenis.start();
                            this.initRailDraw();
                        }
                    });
                });
            }
        });
    },

    initProgressBar() {
        const bar = document.getElementById('progress-bar');
        if (!bar) return;
        this._setProgress = gsap.quickTo(bar, 'scaleX', { duration: 0.2, ease: 'power2.out' });
    },

    initNavbarHide() {
        this._navbar = this._navbar || document.getElementById('navbar');
    },

    // --- CURSOR ---
    initCursor() {
        if (this.reduceMotion || this.perf.coarse) return;
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        if (!dot || !outline) return;

        document.body.classList.add('custom-cursor-active');
        this._mouseX = 0;
        this._mouseY = 0;
        this._outlineX = 0;
        this._outlineY = 0;
        this._cursorSetX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
        this._cursorSetY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
        this._outlineSetX = gsap.quickSetter(outline, 'x', 'px');
        this._outlineSetY = gsap.quickSetter(outline, 'y', 'px');

        window.addEventListener('mousemove', (e) => {
            this._mouseX = e.clientX;
            this._mouseY = e.clientY;
            this._cursorSetX(this._mouseX);
            this._cursorSetY(this._mouseY);
        }, { passive: true });

        this.updateCursorOutline();
        this.refreshCursorHovers();
    },

    updateCursorOutline() {
        if (!this._outlineSetX) return;
        const ease = this.perf.low ? 0.24 : 0.15;
        this._outlineX += (this._mouseX - this._outlineX) * ease;
        this._outlineY += (this._mouseY - this._outlineY) * ease;
        this._outlineSetX(this._outlineX);
        this._outlineSetY(this._outlineY);
    },

    refreshCursorHovers() {
        const outline = document.querySelector('.cursor-outline');
        if (!outline) return;
        document.querySelectorAll('a, button, .work-item').forEach(el => {
            if (el.dataset.cursorBound) return;
            el.dataset.cursorBound = 'true';
            el.addEventListener('mouseenter', () => outline.classList.add('hover'));
            el.addEventListener('mouseleave', () => outline.classList.remove('hover'));
        });
    },

    // --- NAVIGATION ---
    initMobileMenu() {
        const btn = document.getElementById('mobile-menu-btn');
        const links = document.getElementById('nav-links');
        if (!btn || !links) return;

        const close = (restoreFocus = false) => {
            btn.classList.remove('active');
            links.classList.remove('active');
            sync();
            if (restoreFocus) btn.focus();
        };

        const sync = () => {
            const mobile = !this.mqDesktop.matches;
            const open = links.classList.contains('active') && mobile;
            btn.setAttribute('aria-expanded', String(open));
            links.inert = mobile && !open;
            document.body.classList.toggle('menu-open', open);
            if (open) this.lenis.stop();
            else if (!this._detailActive) this.lenis.start();
        };

        btn.addEventListener('click', () => {
            const willOpen = !links.classList.contains('active');
            btn.classList.toggle('active', willOpen);
            links.classList.toggle('active', willOpen);
            sync();
            if (willOpen) links.querySelector('a')?.focus();
        });

        links.addEventListener('click', (e) => {
            if (e.target === links) close(true);
        });

        this._closeMenu = close;
        this.mqDesktop.addEventListener('change', sync);
        sync();
    },

    initNavClicks() {
        document.querySelectorAll('.nav-links a, .logo').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-target') || '';
                const navLinks = document.getElementById('nav-links');
                const menuBtn = document.getElementById('mobile-menu-btn');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navLinks.inert = !this.mqDesktop.matches;
                    document.body.classList.remove('menu-open');
                    menuBtn?.classList.remove('active');
                    menuBtn?.setAttribute('aria-expanded', 'false');
                    if (!this._detailActive) this.lenis.start();
                }
                this.goHome(target);
            });
        });
    },

    initNavState() {
        const links = document.querySelectorAll('.nav-links a');
        if (!links.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                links.forEach(link => {
                    const active = link.getAttribute('href') === '#' + entry.target.id;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'location');
                    else link.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
        ['top', 'about', 'work', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    },

    initKeyboard() {
        document.addEventListener('keydown', (e) => {
            const detail = document.getElementById('detail-view');
            const links = document.getElementById('nav-links');

            if (e.key === 'Escape') {
                if (detail?.classList.contains('active')) { this.goHome(); return; }
                if (links?.classList.contains('active')) {
                    this._closeMenu?.(true);
                }
                return;
            }

            if (e.key !== 'Tab') return;
            const container = detail?.classList.contains('active') ? detail
                : links?.classList.contains('active') && !this.mqDesktop.matches ? links : null;
            if (!container) return;

            const focusables = Array.from(container.querySelectorAll('a[href], button:not([disabled]), video[controls]'))
                .filter(el => el.offsetParent !== null);
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });
    },

    // --- HERO & REVEALS ---
    initHeroAnimations() {
        const title = document.getElementById('hero-title');
        if (!title || this.reduceMotion) {
            if (title) gsap.set(title.querySelectorAll('.word'), { yPercent: 0, opacity: 1 });
            return;
        }

        const words = title.querySelectorAll('.word');
        gsap.set(words, { yPercent: 120, opacity: 0 });
        const tl = gsap.timeline({ delay: 0.9 });
        tl.to(words, { yPercent: 0, opacity: 1, duration: 1.4, ease: "expo.out", stagger: 0.12 })
          .to(".hero .fade-up", { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out" }, "-=0.9");

        gsap.to(".hero-title", {
            yPercent: -12, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to(".hero-sub", {
            yPercent: -14, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to(".hero-video-wrapper video", {
            yPercent: 8, scale: 1.08, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
    },

    initSectionReveals() {
        if (this.reduceMotion) return;

        gsap.utils.toArray('.fade-up').forEach(elem => {
            if (elem.closest('.hero')) return;
            gsap.fromTo(elem, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: elem, start: "top 88%" }
            });
        });

        document.querySelectorAll('.section-title').forEach(title => {
            if (title.closest('.hero') || title.dataset.revealBound) return;
            this.splitHeadingChars(title);
            title.dataset.revealBound = 'true';
            const wrapper = document.createElement('div');
            wrapper.className = 'title-reveal';
            title.parentNode.insertBefore(wrapper, title);
            wrapper.appendChild(title);

            const chars = title.querySelectorAll('.h-char');
            gsap.set(chars, { yPercent: 115, opacity: 0 });
            gsap.to(chars, {
                yPercent: 0, opacity: 1,
                duration: 1.05,
                stagger: this.perf.low ? 0.012 : 0.022,
                ease: "expo.out",
                scrollTrigger: { trigger: wrapper, start: "top 85%" }
            });
        });

        this.initSectionIndexes();

        document.querySelectorAll('.narrative p').forEach(p => {
            gsap.to(p, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { id: 'narrative-reveal', trigger: p, start: "top 88%" }
            });
        });
        this.initNarrativeMotion();

        gsap.to(".about-img", {
            yPercent: 8, ease: "none",
            scrollTrigger: { trigger: ".about-section", start: "top bottom", end: "bottom top", scrub: true }
        });
    },

    initSectionIndexes() {
        document.querySelectorAll('.section-index').forEach(idx => {
            if (idx.dataset.indexBound) return;
            idx.dataset.indexBound = 'true';
            const num = idx.querySelector('.index-num');
            const target = parseInt(num?.textContent || '0', 10) || 0;
            const parts = Array.from(idx.children).filter(el => !el.classList.contains('index-rule'));
            const counter = { v: 0 };

            ScrollTrigger.create({
                trigger: idx,
                start: 'top 90%',
                once: true,
                onEnter: () => {
                    idx.classList.add('is-revealed');
                    gsap.fromTo(parts, { opacity: 0, x: -10 }, {
                        opacity: 1, x: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out'
                    });
                    if (num) {
                        gsap.to(counter, {
                            v: target, duration: 1.05, ease: 'power2.out', snap: { v: 1 },
                            onUpdate: () => { num.textContent = String(Math.round(counter.v)).padStart(2, '0'); }
                        });
                    }
                }
            });
        });
    },

    initNarrativeMotion() {
        document.querySelectorAll('.narrative em').forEach(em => {
            if (em.dataset.markBound) return;
            em.dataset.markBound = 'true';
            ScrollTrigger.create({
                trigger: em, start: 'top 92%', once: true,
                onEnter: () => em.classList.add('is-marked')
            });
        });
    },

    initHeadingHovers() {
        const targets = document.querySelectorAll('.hero-title, .section-title, .contact-title');
        targets.forEach(el => {
            this.splitHeadingChars(el);
            if (!this.reduceMotion) this.bindHeadingHover(el);
        });
    },

    splitHeadingChars(root) {
        if (root.dataset.splitBound) return;
        root.dataset.splitBound = 'true';
        const label = root.textContent.replace(/\s+/g, ' ').trim();
        if (label) root.setAttribute('aria-label', label);

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
            const parent = node.parentNode;
            if (parent && parent.classList && parent.classList.contains('h-char')) continue;
            if (node.nodeValue.trim()) textNodes.push(node);
        }

        textNodes.forEach(tn => {
            const frag = document.createDocumentFragment();
            for (const ch of tn.nodeValue) {
                if (ch === ' ' || ch === '\n' || ch === '\t' || ch === '\u00A0') {
                    frag.appendChild(document.createTextNode(ch));
                } else {
                    const span = document.createElement('span');
                    span.className = 'h-char';
                    span.setAttribute('aria-hidden', 'true');
                    span.textContent = ch;
                    frag.appendChild(span);
                }
            }
            tn.parentNode.replaceChild(frag, tn);
        });
    },

    wrapWords(root, className) {
        if (!root || root.dataset.wordsBound) return [];
        root.dataset.wordsBound = 'true';
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
            const parent = node.parentNode;
            if (parent && parent.classList && (parent.classList.contains('h-char') || parent.classList.contains(className))) continue;
            if (node.nodeValue.trim()) textNodes.push(node);
        }

        const words = [];
        textNodes.forEach(tn => {
            const frag = document.createDocumentFragment();
            let index = 0;
            tn.nodeValue.split(/(\s+)/).forEach(part => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                    frag.appendChild(document.createTextNode(part));
                    return;
                }
                const span = document.createElement('span');
                span.className = className;
                span.style.setProperty('--wi', String(index++));
                span.textContent = part;
                frag.appendChild(span);
                words.push(span);
            });
            tn.parentNode.replaceChild(frag, tn);
        });
        return words;
    },

    bindHeadingHover(el) {
        el.querySelectorAll('.h-char').forEach(ch => {
            if (ch.dataset.hoverBound) return;
            ch.dataset.hoverBound = 'true';
            const release = () => { ch.style.willChange = ''; };
            ch.addEventListener('mouseenter', () => {
                gsap.killTweensOf(ch);
                ch.style.willChange = 'transform';
                gsap.to(ch, { y: -10, scale: 1.06, duration: 0.35, ease: 'power3.out', onComplete: release });
            });
            ch.addEventListener('mouseleave', () => {
                gsap.killTweensOf(ch);
                ch.style.willChange = 'transform';
                gsap.to(ch, { y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.45)', onComplete: release });
            });
        });
    },

    quickFor(el, key, prop, vars) {
        if (!this._quick) this._quick = new WeakMap();
        let store = this._quick.get(el);
        if (!store) { store = new Map(); this._quick.set(el, store); }
        const id = key + ':' + prop;
        if (!store.has(id)) store.set(id, gsap.quickTo(el, prop, vars));
        return store.get(id);
    },

    initMagnetic() {
        if (this.reduceMotion || this.perf.coarse) return;
        document.querySelectorAll('.magnetic').forEach(el => {
            if (el.dataset.magneticBound) return;
            el.dataset.magneticBound = 'true';
            const qx = this.quickFor(el, 'magnetic', 'x', { duration: 0.4, ease: 'power2.out' });
            const qy = this.quickFor(el, 'magnetic', 'y', { duration: 0.4, ease: 'power2.out' });
            let rect = null;
            const measure = () => { rect = el.getBoundingClientRect(); };

            el.addEventListener('mouseenter', measure, { passive: true });
            el.addEventListener('mousemove', (e) => {
                if (!rect) measure();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.willChange = 'transform';
                qx(x * 0.22);
                qy(y * 0.22);
            }, { passive: true });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)",
                    onComplete: () => { rect = null; el.style.willChange = ''; }
                });
            });
        });
    },

    initTilt() {
        if (this.reduceMotion || this.perf.coarse) return;
        document.querySelectorAll('.work-media').forEach(el => {
            if (el.dataset.tiltBound) return;
            el.dataset.tiltBound = 'true';
            gsap.set(el, { transformPerspective: 1000 });
            const qy = this.quickFor(el, 'tilt', 'rotateY', { duration: 0.5, ease: 'power2.out' });
            const qx = this.quickFor(el, 'tilt', 'rotateX', { duration: 0.5, ease: 'power2.out' });
            let rect = null;
            const measure = () => { rect = el.getBoundingClientRect(); };

            el.addEventListener('mouseenter', measure, { passive: true });
            el.addEventListener('mousemove', (e) => {
                if (!rect) measure();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                el.style.willChange = 'transform';
                qy(x * 5);
                qx(-y * 5);
            }, { passive: true });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    rotateY: 0, rotateX: 0, duration: 0.9, ease: "power3.out",
                    onComplete: () => { rect = null; el.style.willChange = ''; }
                });
            });
        });
    },

    initMarquee() {
        const inner = document.getElementById('marquee');
        if (!inner || this.reduceMotion) return;

        this._marqueeX = 0;
        this._marqueeHalf = 0;
        this._marqueeStep = 1000 / this.perf.marqueeFps;
        this._marqueeVisible = true;
        this._marqueeSetX = gsap.quickSetter(inner, 'x', 'px');
        this._marqueeSkew = Array.from(document.querySelectorAll('#marquee > span'), el =>
            gsap.quickSetter(el, 'skewX', 'deg')
        );

        const measure = () => { this._marqueeHalf = inner.scrollWidth / 2; };
        measure();

        if ('ResizeObserver' in window) {
            this._marqueeRO?.disconnect();
            this._marqueeRO = new ResizeObserver(measure);
            this._marqueeRO.observe(inner);
        } else {
            window.addEventListener('resize', measure, { passive: true });
        }

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
                this._marqueeVisible = entries[0].isIntersecting;
            }, { threshold: 0 });
            io.observe(inner);
        }
    },

    stepMarquee(ratio) {
        if (!this._marqueeSetX || !this._marqueeHalf) return;
        const velocity = Math.abs(this.lenis.velocity || 0);
        this._marqueeX -= (0.55 + velocity * 0.4) * Math.min(ratio, 2);
        if (this._marqueeX <= -this._marqueeHalf) this._marqueeX = 0;
        this._marqueeSetX(this._marqueeX);
        const skew = gsap.utils.clamp(-4, 4, (this.lenis.velocity || 0) * 0.12);
        this._marqueeSkew?.forEach(set => set(skew));
    },

    // --- FILTERS & GRID ---
    initFilters() {
        const cats = ["all", "video", "motion", "edit"];
        const container = document.getElementById('filters');
        if (!container) return;
        const current = document.querySelector('.filters button.active')?.dataset.filter || 'all';
        const t = i18n[this.lang] || i18n.en;
        container.innerHTML = '';

        cats.forEach(cat => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.innerHTML = `<span class="filter-label-wrap"><span class="filter-label">${t["filter." + cat]}</span></span>`;
            btn.dataset.filter = cat;
            const active = cat === current;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', String(active));
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filters button').forEach(el => {
                    const isActive = el === btn;
                    el.classList.toggle('active', isActive);
                    el.setAttribute('aria-pressed', String(isActive));
                });
                this.renderGrid(cat);
                const label = btn.querySelector('.filter-label');
                if (label && !this.reduceMotion) {
                    gsap.fromTo(label, { yPercent: 110, opacity: 0 }, {
                        yPercent: 0, opacity: 1, duration: 0.45, ease: 'power3.out',
                        clearProps: 'opacity,transform'
                    });
                }
            });
            container.appendChild(btn);
        });
    },

    renderGrid(filter) {
        const grid = document.getElementById('work-grid');
        if (!grid) return;
        const t = i18n[this.lang] || i18n.en;
        const filtered = filter === 'all' ? worksData : worksData.filter(w => w.category === filter);
        const count = document.getElementById('work-count');
        if (count) count.textContent = String(filtered.length).padStart(2, '0');

        this.pausePreviews(true);
        gsap.killTweensOf(grid.querySelectorAll('*'));
        this._indexTweens?.forEach(tween => tween.kill());
        this._indexTweens = [];
        this._videoIO?.disconnect();
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const video = entry.target;
                if (!video.getAttribute('src')) video.setAttribute('src', video.dataset.src);
                io.unobserve(video);
            });
        }, { rootMargin: '400px 0px' });
        this._videoIO = io;

        grid.innerHTML = '';

        if (!filtered.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = t["work.empty"];
            grid.appendChild(empty);
            this.scheduleMetricsRefresh();
            return;
        }

        const finePointer = !this.perf.coarse;

        filtered.forEach((work, i) => {
            const item = document.createElement('a');
            item.className = 'work-item';
            item.href = `#${work.slug}`;
            item.innerHTML = `
                <div class="work-media">
                    <img class="work-poster" src="${work.poster}" alt="" loading="lazy" decoding="async">
                    <video data-src="${work.video}" muted loop playsinline preload="none" tabindex="-1" aria-hidden="true"></video>
                    <span class="work-tag">${work.category}</span>
                    <span class="play-icon" aria-hidden="true">PLAY</span>
                    <span class="work-cta" aria-hidden="true">${t["detail.play"]} <span>&nearr;</span></span>
                </div>
                <div class="work-info">
                    <div>
                        <span class="work-year">${work.year}</span>
                        <h3 class="work-title">${work.title}</h3>
                        <p class="work-meta">${work.category} — ${work.year}</p>
                    </div>
                    <span class="work-index">${String(i + 1).padStart(2, '0')}</span>
                </div>
            `;

            const video = item.querySelector('video');
            const media = item.querySelector('.work-media');
            this.wrapWords(item.querySelector('.work-title'), 'w-word');
            io.observe(video);

            if (finePointer) {
                const play = () => {
                    if (!video.getAttribute('src')) video.setAttribute('src', video.dataset.src);
                    if (this._activePreview && this._activePreview !== video) {
                        const previous = this._activePreview;
                        previous.pause();
                        previous.closest('.work-media')?.classList.remove('is-playing');
                    }
                    this._activePreview = video;
                    video.play().then(() => media.classList.add('is-playing')).catch(() => {});
                };
                const pause = () => {
                    if (this._activePreview === video) this._activePreview = null;
                    video.pause();
                    media.classList.remove('is-playing');
                };
                item.addEventListener('mouseenter', play);
                item.addEventListener('mouseleave', pause);
                item.addEventListener('focus', play);
                item.addEventListener('blur', pause);
            }

            item.addEventListener('click', (e) => { e.preventDefault(); this.openDetail(work); });
            grid.appendChild(item);
        });

        this.initTilt();
        this.initMagnetic();
        this.refreshCursorHovers();

        const items = gsap.utils.toArray('.work-item');
        if (!this.reduceMotion) {
            gsap.utils.toArray('.work-index', grid).forEach((el, i) => {
                const target = i + 1;
                const counter = { v: 0 };
                this._indexTweens.push(gsap.to(counter, {
                    v: target, duration: 0.8, delay: 0.12 + i * 0.07,
                    ease: 'power2.out', snap: { v: 1 },
                    onUpdate: () => { el.textContent = String(Math.round(counter.v)).padStart(2, '0'); }
                }));
            });
            gsap.fromTo(items, { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.1,
                onStart: () => items.forEach(el => { el.style.willChange = 'transform,opacity'; }),
                onComplete: () => items.forEach(el => { el.style.willChange = ''; }),
                clearProps: "opacity,transform"
            });
        } else {
            gsap.set(items, { opacity: 1, y: 0 });
        }

        this.measureScrollMetrics();
        this.scheduleMetricsRefresh();
    },

    // --- DETAIL ---
    openDetail(work) {
        history.pushState(null, '', `#${work.slug}`);
        const detail = document.getElementById('detail-view');
        const content = document.getElementById('detail-content');
        const main = document.getElementById('main-view');
        const t = i18n[this.lang] || i18n.en;
        const local = work[this.lang] || work.en;
        const index = worksData.indexOf(work);
        const next = worksData[(index + 1) % worksData.length];
        this._marqueeSkew?.forEach(set => set(0));

        if (!this.lastFocused || !document.contains(this.lastFocused)) this.lastFocused = document.activeElement;

        content.innerHTML = `
            <div class="detail-header">
                <p class="label">${work.category} — ${work.year}</p>
                <h1 class="detail-title">${work.title}</h1>
                <p class="detail-desc">${local.desc}</p>
            </div>
            <figure class="detail-figure">
                <div class="detail-video">
                    <video src="${work.video}" poster="${work.poster}" controls playsinline preload="metadata"></video>
                </div>
                <figcaption class="figure-caption"><span>${work.title}</span><span>${work.year}</span></figcaption>
            </figure>
            <div class="detail-meta">
                <div><p class="meta-key">${t["detail.credits"]}</p><p class="meta-value">${local.credits}</p></div>
                <div><p class="meta-key">${t["detail.year"]}</p><p class="meta-value">${work.year}</p></div>
                <div><p class="meta-key">${t["detail.category"]}</p><p class="meta-value">${work.category}</p></div>
            </div>
            <button class="next-project magnetic" type="button" data-next="${next.slug}">
                <span><span class="next-label">${t["detail.next"]}</span><span class="next-title">${next.title}</span></span>
                <span class="next-arrow" aria-hidden="true">&rarr;</span>
            </button>
        `;

        const nextBtn = content.querySelector('.next-project');
        nextBtn.addEventListener('click', () => {
            const target = worksData.find(w => w.slug === nextBtn.dataset.next);
            if (target) this.openDetail(target);
        });

        if (!this._detailActive) {
            const hero = document.querySelector('.hero-video-wrapper video');
            this._heroWasPlaying = hero ? !hero.paused : false;
            hero?.pause();
        }
        this._detailActive = true;
        this.pausePreviews(false);
        detail.classList.add('active');
        detail.setAttribute('aria-modal', 'true');
        document.body.classList.add('detail-open');
        if (main) main.inert = true;
        this.lenis.stop();
        detail.scrollTop = 0;
        if (!this.reduceMotion) {
            const title = content.querySelector('.detail-title');
            this.splitHeadingChars(title);
            const chars = title.querySelectorAll('.h-char');
            gsap.set(chars, { yPercent: 110, opacity: 0 });
            gsap.timeline({ delay: 0.2 })
                .fromTo(content, { opacity: 0, y: 30 }, {
                    opacity: 1, y: 0, duration: 0.7, ease: "power3.out"
                })
                .to(chars, {
                    yPercent: 0, opacity: 1, duration: 0.85,
                    stagger: 0.016, ease: "expo.out"
                }, '-=0.45')
                .fromTo(content.querySelectorAll('.detail-desc, .detail-figure, .detail-meta > div, .next-project'),
                    { opacity: 0, y: 18 }, {
                        opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power2.out"
                    }, '-=0.6');
        }
        setTimeout(() => detail.focus(), 50);

        const video = content.querySelector('video');
        if (video) video.play().catch(() => {});
    },

    goHome(targetHash = '', updateHistory = true) {
        this.pausePreviews(true);
        if (updateHistory) history.pushState(null, '', window.location.pathname + targetHash);

        const detail = document.getElementById('detail-view');
        const main = document.getElementById('main-view');
        detail.classList.remove('active');
        detail.setAttribute('aria-modal', 'false');
        document.body.classList.remove('detail-open');
        if (main) main.inert = false;
        this._detailActive = false;
        this.lenis.start();

        const hero = document.querySelector('.hero-video-wrapper video');
        if (this._heroWasPlaying) {
            hero?.play().catch(() => {});
            this._heroWasPlaying = false;
        }

        if (this.lastFocused && document.contains(this.lastFocused)) this.lastFocused.focus();
        this.lastFocused = null;

        if (targetHash) {
            setTimeout(() => {
                const el = document.querySelector(targetHash);
                if (el) this.lenis.scrollTo(el, { offset: -80 });
            }, 100);
        } else {
            this.lenis.scrollTo(0);
        }
    },

    renderDetail() {
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash || ['top', 'about', 'work', 'contact'].includes(hash)) {
                this.goHome(hash ? '#' + hash : '', false);
                return;
            }
            const work = worksData.find(w => w.slug === hash);
            if (work) this.openDetail(work);
        });

        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const work = worksData.find(w => w.slug === hash);
            if (work) this.openDetail(work);
            else if (['top', 'about', 'work', 'contact'].includes(hash)) {
                setTimeout(() => this.lenis.scrollTo(document.getElementById(hash), { offset: -80 }), 200);
            }
        }
    },

    // --- CHAPTER RAIL ---
    initChapterRail() {
        const rails = document.querySelectorAll('.chapter-rail');
        if (!rails.length) return;
        this._fillSetters = [];

        rails.forEach(rail => {
            rail.querySelectorAll('.rail-node').forEach(node => {
                node.addEventListener('click', (e) => {
                    e.preventDefault();
                    const el = document.getElementById(node.dataset.section);
                    if (el) this.lenis.scrollTo(el, { offset: -80 });
                });
            });
            const fill = rail.querySelector('.rail-fill');
            if (fill) this._fillSetters.push(gsap.quickTo(fill, 'scaleY', { duration: 0.2, ease: 'power2.out' }));
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                document.querySelectorAll('.rail-node').forEach(n => {
                    n.classList.toggle('active', n.dataset.section === entry.target.id);
                });
            });
        }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        ['top', 'about', 'work', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        this._setRail = (p) => {
            if (!this._railReady) return;
            this._fillSetters.forEach(set => set(p));
        };
    },

    initRailDraw() {
        const rails = document.querySelectorAll('.chapter-rail');
        if (!rails.length) return;
        rails.forEach(rail => rail.classList.add('visible'));

        this.measureScrollMetrics();
        const p = this._scrollMax > 0
            ? Math.min(1, Math.max(0, (window.scrollY || 0) / this._scrollMax)) : 0;

        const line = rails[0].querySelector('.rail-line');
        const nodes = rails[0].querySelectorAll('.rail-node');
        const fill = rails[0].querySelector('.rail-fill');

        gsap.set(line, { scaleY: 0, transformOrigin: 'top' });
        gsap.set(nodes, { opacity: 0, x: -8 });

        gsap.timeline({ delay: 0.2 })
            .to(line, { scaleY: 1, duration: 1.1, ease: 'expo.inOut' })
            .to(nodes, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.8')
            .to(fill, { scaleY: p, duration: 1.4, ease: 'expo.inOut', onComplete: () => { this._railReady = true; } }, '-=0.6');
    },

    // --- FLOW FIELD BACKGROUND ---
    initBgFlow() {
        if (this.reduceMotion) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'bg-flow';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);

        const dpr = this.perf.dpr;
        const ctx = canvas.getContext('2d', { alpha: false });
        const palette = [[194, 181, 155], [220, 180, 140], [150, 165, 200], [200, 190, 175]];
        let w = 0, h = 0, t = 0, running = false, resizeCall = null, particles = [];
        let degraded = false;
        const samples = [];

        const targetCount = () => this.perf.baseParticles || (w < 768 ? 120 : 240);

        const makeParticle = (i) => {
            const color = palette[i % palette.length];
            return {
                x: Math.random() * w, y: Math.random() * h, px: 0, py: 0,
                speed: 0.2 + Math.random() * 0.5,
                color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.15 + Math.random() * 0.22})`,
                life: Math.random() * 300, maxLife: 300 + Math.random() * 400,
                freq: 0.6 + Math.random() * 0.8,
                angleOffset: Math.random() * Math.PI * 2
            };
        };

        const rebuild = () => {
            const n = targetCount();
            particles = Array.from({ length: n }, (_, i) => makeParticle(i));
        };

        const resize = () => {
            const nw = window.innerWidth;
            const nh = window.innerHeight;
            if (nw === w && nh === h) return;
            w = nw; h = nh;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.fillStyle = 'rgba(18, 18, 18, 1)';
            ctx.fillRect(0, 0, w, h);
            const n = targetCount();
            if (particles.length !== n) rebuild();
        };

        resize();
        window.addEventListener('resize', () => {
            resizeCall?.kill();
            resizeCall = gsap.delayedCall(0.12, resize);
        }, { passive: true });

        const mouse = { x: -9999, y: -9999, active: false };
        if (!this.perf.coarse) {
            window.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
            }, { passive: true });
            window.addEventListener('mouseleave', () => { mouse.active = false; });
            window.addEventListener('blur', () => { mouse.active = false; });
        }

        // Sprite statis menggantikan dua createRadialGradient per frame.
        const GLOW = 520;
        const sprite = document.createElement('canvas');
        sprite.width = Math.round(GLOW * dpr);
        sprite.height = Math.round(GLOW * dpr);
        const sg = sprite.getContext('2d');
        sg.scale(dpr, dpr);
        const outer = sg.createRadialGradient(260, 260, 0, 260, 260, 260);
        outer.addColorStop(0, 'rgba(60, 100, 180, 0.06)');
        outer.addColorStop(0.5, 'rgba(60, 100, 180, 0.025)');
        outer.addColorStop(1, 'rgba(60, 100, 180, 0)');
        sg.fillStyle = outer;
        sg.fillRect(0, 0, GLOW, GLOW);
        const inner = sg.createRadialGradient(260, 260, 0, 260, 260, 120);
        inner.addColorStop(0, 'rgba(170, 35, 45, 0.11)');
        inner.addColorStop(1, 'rgba(170, 35, 45, 0)');
        sg.fillStyle = inner;
        sg.fillRect(0, 0, GLOW, GLOW);

        // LUT sinus untuk low-spec: bentuk sama, biaya jauh lebih rendah.
        const SIN_N = 2048;
        const SIN = new Float32Array(SIN_N);
        for (let i = 0; i < SIN_N; i++) SIN[i] = Math.sin(i * Math.PI * 2 / SIN_N);
        const fastSin = (v) => SIN[Math.round(v * SIN_N / (Math.PI * 2)) & (SIN_N - 1)];
        const fastCos = (v) => fastSin(v + Math.PI / 2);
        const sin = this.perf.low ? fastSin : Math.sin;
        const cos = this.perf.low ? fastCos : Math.cos;

        const noise = (x, y, z, freq) =>
            sin(x * 0.008 * freq + z * 0.0006) * cos(y * 0.008 * freq - z * 0.0004) * 0.65
            + sin((x + y) * 0.004 * freq + z * 0.0005) * 0.35;

        const CURSOR_RADIUS = 220;

        const tick = () => {
            if (!running) return;
            const started = performance.now();
            t += 1;

            ctx.fillStyle = 'rgba(18, 18, 18, 0.02)';
            ctx.fillRect(0, 0, w, h);

            if (mouse.active) ctx.drawImage(sprite, mouse.x - 260, mouse.y - 260, GLOW, GLOW);

            for (const p of particles) {
                p.life += 1;
                let alpha = 1;
                if (p.life > p.maxLife) p.life = 0;
                const r = p.life / p.maxLife;
                if (r < 0.1) alpha = r / 0.1;
                else if (r > 0.85) alpha = (1 - r) / 0.15;

                const n = noise(p.x, p.y, t, p.freq);
                const angle = n * Math.PI * 2.5 + p.angleOffset;
                let vx = cos(angle) * p.speed;
                let vy = sin(angle) * p.speed;
                let thickness = 0.5;

                if (mouse.active) {
                    const dx = mouse.x - p.x, dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CURSOR_RADIUS && dist > 6) {
                        const strength = Math.pow(1 - dist / CURSOR_RADIUS, 2.2);
                        const tx = -dy / dist, ty = dx / dist;
                        const rx = dx / dist, ry = dy / dist;
                        let tvx, tvy;
                        if (dist < 90) {
                            tvx = tx * p.speed * 2.6 + rx * p.speed * 0.7;
                            tvy = ty * p.speed * 2.6 + ry * p.speed * 0.7;
                            thickness = 0.5 + strength * 1.5;
                        } else {
                            tvx = tx * p.speed * 1.8;
                            tvy = ty * p.speed * 1.8;
                            thickness = 0.5 + strength * 0.6;
                        }
                        vx = vx * (1 - strength) + tvx * strength;
                        vy = vy * (1 - strength) + tvy * strength;
                    }
                }

                p.px = p.x; p.py = p.y;
                p.x += vx; p.y += vy;
                if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
                    p.x = Math.random() * w; p.y = Math.random() * h;
                    p.px = p.x; p.py = p.y; p.life = 0;
                    continue;
                }

                ctx.strokeStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.lineWidth = thickness;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(p.px, p.py);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;

            samples.push(performance.now() - started);
            if (samples.length >= 24) {
                const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
                if (avg > 11 && !degraded && particles.length > 24) {
                    particles.length = Math.max(24, Math.floor(particles.length * 0.65));
                    degraded = true;
                }
                samples.length = 0;
            }
        };

        this.bgFlow = {
            step: 1000 / this.perf.flowFps,
            tick,
            start: () => { if (!running && this.theme === 'dark') running = true; },
            stop: () => { running = false; }
        };

        if (this.theme === 'dark') running = true;
    }

};

document.addEventListener('DOMContentLoaded', () => app.init());
