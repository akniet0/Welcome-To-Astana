/* =====================================================================
   Visit Astana — site script (jQuery 4)
   All EN / RU / KZ text lives in js/translations.js, loaded before this file.
   ===================================================================== */

/* ---------------------------------------------------------------------
   Shared helpers
   --------------------------------------------------------------------- */
let currentLang = localStorage.getItem("astanaLang") || "en";
const LOCALES = { en: "en-US", ru: "ru-RU", kz: "kk-KZ" };

// t("inquiryThanks", { name: "Aigerim" }) → text in the current language with {placeholders} filled in
function t(key, vars = {}) {
    const text = (uiTranslations[currentLang] || {})[key] ?? uiTranslations.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? "");
}

// Picks the current language from an { en, ru, kz } object
const pick = (texts) => texts[currentLang] || texts.en;
const formatKzt = (amount) => amount.toLocaleString("en-US") + " KZT";

// Short UI sounds made with the Web Audio API (no audio files needed)
let audioCtx = null;
function playUiSound(type = "click") {
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === "suspended") audioCtx.resume();

        const success = type === "success";
        const length = success ? 0.25 : 0.09;
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = success ? "triangle" : "sine";
        osc.frequency.setValueAtTime(success ? 523.25 : 440, now);
        if (success) osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(success ? 0.12 : 0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + length);

        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + length);
    } catch (err) {
        // The browser blocked audio — the site works without it
    }
}

// Small "pop" animation (restarts the CSS animation every time)
function pop($el) {
    if (!$el.length) return;
    $el.removeClass("pop");
    void $el[0].offsetWidth;
    $el.addClass("pop");
}

/* ---------- Task 7: Toast notifications that fade out ---------- */
function showToast(message, type = "success") {
    const icons = { success: "✓", info: "i", error: "×" };
    let $stack = $("#toast-stack");
    if (!$stack.length) {
        $stack = $('<div id="toast-stack" class="toast-stack" aria-live="polite"></div>').appendTo("body");
    }

    const $toast = $(`<div class="site-toast toast-${type}" role="status">
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-text"></span>
            <button type="button" class="toast-close" aria-label="Close">&times;</button>
            <span class="toast-timer"></span>
        </div>`);
    $toast.find(".toast-text").text(message); // .text() keeps user input safe from HTML injection
    $toast.hide().appendTo($stack).fadeIn(250);

    const remove = (speed) => $toast.stop(true).fadeOut(speed, () => $toast.remove());
    const timer = setTimeout(() => remove(500), 3500);
    $toast.find(".toast-close").on("click", () => { clearTimeout(timer); remove(200); });
}

/* ---------- Task 6: Spinner + disabled state for a submit button ---------- */
function setButtonLoading($btn, isLoading) {
    if (isLoading) {
        $btn.data("label", $btn.html())
            .prop("disabled", true)
            .attr("aria-busy", "true")
            .html(`<span class="btn-spinner" aria-hidden="true"></span> ${t("wait")}`);
    } else {
        $btn.html($btn.data("label")).prop("disabled", false).removeAttr("aria-busy");
    }
}

/* ---------- Task 3: Search highlighting ---------- */
const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function clearSearchHighlights($scope) {
    $scope.find("mark.search-hit").each(function () {
        const parent = this.parentNode;
        $(this).contents().unwrap(); // keep the text, drop the <mark>
        parent.normalize();          // join the split text nodes again
    });
}

// Wraps every match of `keyword` in <mark class="search-hit"> and returns the number of matches.
// Only text nodes are changed, so the existing HTML tags stay untouched.
function highlightKeyword($elements, keyword) {
    clearSearchHighlights($elements);
    keyword = String(keyword).trim();
    if (!keyword) return 0;

    const splitter = new RegExp(`(${escapeRegExp(keyword)})`, "gi");
    const tester = new RegExp(escapeRegExp(keyword), "i"); // non-global: .test() keeps no state
    let total = 0;

    $elements.find("*").addBack().contents()
        .filter(function () { return this.nodeType === Node.TEXT_NODE && tester.test(this.nodeValue); })
        .each(function () {
            const pieces = this.nodeValue.split(splitter).map((part, i) => {
                if (i % 2 === 0) return document.createTextNode(part); // even = plain text, odd = match
                total++;
                return $('<mark class="search-hit"></mark>').text(part)[0];
            });
            $(this).replaceWith(pieces);
        });
    return total;
}


/* =====================================================================
   Page logic
   ===================================================================== */
$(document).ready(function () {
    // ---------- Task 0: Setup check ----------
    console.log("jQuery is ready!");

    const $window = $(window);
    const $document = $(document);
    const $body = $("body");

    /* ---------------- Theme (Night Mode) & background ---------------- */
    const $themeBtn = $("#theme-toggle-btn");
    const BG_COLORS = ["#faf5ee", "#f3efe6", "#eef3ee", "#f7ecdf", "#edf1f2"];
    let bgIndex = 0;

    function updateThemeButton() {
        const isDark = $body.hasClass("dark-theme");
        const label = t(isDark ? "dayMode" : "nightMode");
        $themeBtn.text(isDark ? "☀️" : "🌙").attr({ title: label, "aria-label": label, "aria-pressed": isDark });
    }

    function applyTheme(isDark) {
        $body.toggleClass("dark-theme", isDark);
        if (isDark) $body.css("background-color", "");
        localStorage.setItem("astanaTheme", isDark ? "dark" : "light");
        updateThemeButton();
    }

    $themeBtn.on("click", function () {
        playUiSound();
        applyTheme(!$body.hasClass("dark-theme"));
        pop($themeBtn);
    });

    $("#change-bg-btn").on("click", function () {
        playUiSound();
        applyTheme(false);
        bgIndex = (bgIndex + 1) % BG_COLORS.length;
        $body.css("background-color", BG_COLORS[bgIndex]);
        pop($(this));
    });

    /* ---------------- Clock & greetings ---------------- */
    function updateDateTime() {
        const options = { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" };
        $("#live-datetime").text(new Date().toLocaleString(LOCALES[currentLang], options));
    }
    setInterval(updateDateTime, 1000);

    function setTimeOfDayGreeting() {
        const hour = new Date().getHours();
        let key;
        switch (true) {
            case hour >= 5 && hour < 12: key = "morningGreeting"; break;
            case hour >= 12 && hour < 18: key = "afternoonGreeting"; break;
            default: key = "eveningGreeting";
        }
        $("#time-of-day-greeting").text(t(key));
    }

    $("#update-greeting-btn").on("click", function () {
        playUiSound("success");
        const name = $("#visitor-name-input").val().trim();
        const $greeting = $("#personalized-greeting").text(name ? t("greetCustomPrefix") + name + "!" : t("greetGuest"));
        pop($greeting);
    });

    $("#show-time-btn").on("click", function () {
        playUiSound();
        pop($("#clicked-time-output").text(t("timePrefix") + new Date().toLocaleTimeString(LOCALES[currentLang])));
    });

    /* ---------------- Keyboard navigation in the menu ---------------- */
    const $navLinks = $("#keyboard-nav-menu .nav-link");
    $navLinks.on("keydown", function (e) {
        const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        const next = ($navLinks.index(this) + step + $navLinks.length) % $navLinks.length;
        $navLinks.eq(next).trigger("focus");
        playUiSound();
    });

    /* ---------------- Random facts (Home) ---------------- */
    let factIndex = 0;
    const showFact = () => $("#astana-fact-box").text(pick(astanaFacts)[factIndex]);

    $("#new-fact-btn").on("click", function () {
        playUiSound();
        factIndex = (factIndex + 1) % pick(astanaFacts).length;
        pop(showFact());
    });

    /* ---------------- FAQ accordion (Home) ---------------- */
    $(".accordion-question").on("click", function () {
        playUiSound();
        const $answer = $(this).next(".accordion-answer");
        const wasOpen = $answer.hasClass("open");
        $(".accordion-answer").removeClass("open");
        $answer.toggleClass("open", !wasOpen);
    });

    /* ---------------- Read more (History) ---------------- */
    const $moreHistory = $("#more-history-content");
    const $readMoreBtn = $("#read-more-btn");
    const updateReadMoreLabel = () => $readMoreBtn.text(t($moreHistory.is(":visible") ? "readMoreClose" : "readMoreOpen"));

    $readMoreBtn.on("click", function () {
        playUiSound();
        $moreHistory.stop(true, true).slideToggle(250, updateReadMoreLabel);
    });

    /* ---------------- Load more dishes (History) ---------------- */
    let dishesLoaded = false;

    function renderExtraDishes() {
        if (!dishesLoaded) return;
        const $container = $("#dishes-container");
        $container.find(".extra-dish-card").remove();
        extraDishes.forEach((dish) => {
            const $card = $(`<article class="pure-card extra-dish-card">
                    <img class="food-img-badge" src="${dish.image}" alt=""><h3></h3><p></p>
                </article>`);
            $card.find("img").attr("alt", pick(dish.name));
            $card.find("h3").text(pick(dish.name));
            $card.find("p").text(pick(dish.description));
            $container.append($card);
        });
        $("#load-more-dishes-btn").text(t("dishesLoadedBtn"));
    }

    $("#load-more-dishes-btn").on("click", function () {
        if (dishesLoaded) return;
        playUiSound("success");
        dishesLoaded = true;
        renderExtraDishes();
        $(this).prop("disabled", true);
    });

    /* ---------------- Star ratings (Attractions) ---------------- */
    $(".star-rating").each(function () {
        const $rating = $(this);
        const $stars = $rating.find(".rating-star");

        $stars.on("click", function () {
            playUiSound("success");
            const value = Number($(this).data("value"));
            $rating.attr("data-user-rating", value);
            $stars.each(function () { $(this).toggleClass("selected", Number($(this).data("value")) <= value); });
            $rating.parent().find(".rating-status").text(`${t("ratedPrefix")}${value}/5 ★`);
            pop($rating);
            showToast(t("ratedToast", { landmark: $rating.data("landmark"), stars: "★".repeat(value) })); // Task 7
        });
    });

    /* ---------------- Photo gallery (Attractions) ---------------- */
    const $thumbs = $(".gallery-thumb");
    $thumbs.on("click", function () {
        playUiSound();
        const $thumb = $(this);
        const alt = $thumb.attr("alt");
        // data-src holds the real path while a thumbnail is lazy-loaded (Task 9)
        const $main = $("#gallery-featured-img").attr({ src: $thumb.attr("data-src") || $thumb.attr("src"), alt });
        $("#gallery-caption").text(alt);
        $thumbs.removeClass("active-thumb");
        $thumb.addClass("active-thumb");
        pop($main);
    });

    /* ---------------- Tour table with category filter (Tours) ---------------- */
    let activeCategory = "all";

    function renderToursTable() {
        const $tbody = $("#tour-table-body");
        if (!$tbody.length) return;

        const tours = astanaTours.filter((tour) => activeCategory === "all" || tour.category === activeCategory);
        const average = tours.length ? Math.round(tours.reduce((sum, tour) => sum + tour.priceKzt, 0) / tours.length) : 0;

        $("#tour-filter-summary").text(t("tourSummary", {
            count: tours.length,
            category: t("cat_" + activeCategory),
            price: formatKzt(average)
        }));

        $tbody.empty().append(tours.map((tour) => {
            const $row = $(`<tr>
                    <td><img class="rounded-circle shadow-sm tour-avatar" width="65" height="65" src="${tour.image}" alt=""></td>
                    <td><strong></strong></td><td></td><td></td>
                    <td><span class="badge badge-brand">${formatKzt(tour.priceKzt)}</span></td>
                </tr>`);
            const cells = $row.children("td");
            cells.eq(0).find("img").attr("alt", pick(tour.title));
            cells.eq(1).find("strong").text(pick(tour.title));
            cells.eq(2).text(pick(tour.duration));
            cells.eq(3).text(pick(tour.highlights));
            return $row;
        }));
    }

    $(".tour-filter-btn").on("click", function () {
        playUiSound();
        $(".tour-filter-btn").removeClass("active");
        activeCategory = $(this).addClass("active").data("category");
        renderToursTable();
    });

    /* ---------------- Form validation helpers ---------------- */
    const NAME_RE = /^[A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+([ -][A-Za-zА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]+)*$/;
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    const isValidName = (name) => name.length >= 2 && NAME_RE.test(name);

    function showMessage($el, text, isError) {
        $el.text(text).toggleClass("msg-error", !!isError).toggleClass("msg-success", !isError);
    }

    /* ---------------- Multi-step booking form (Tours) ---------------- */
    const $formError = $("#form-error-msg");
    const $formSuccess = $("#form-success-msg");
    let formStep = 1;

    function showStep(step) {
        formStep = step;
        $("#form-step-1").toggleClass("active-step", step === 1);
        $("#form-step-2").toggleClass("active-step", step === 2);
        $("#step-indicator").text(t(step === 2 ? "step2Badge" : "step1Badge"));
    }

    // Returns the translation key of the first error, or null when everything is valid
    function validateAccount() {
        const password = $("#user-password").val();
        if (!isValidName($("#user-name").val().trim())) return "errName";
        if (!EMAIL_RE.test($("#user-email").val().trim())) return "errEmail";
        if (/\s/.test(password)) return "errPassSpace";
        if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) return "errPassFormat";
        if (password !== $("#user-confirm-password").val()) return "errPassMatch";
        return null;
    }

    $("#next-step-btn").on("click", function () {
        $formSuccess.text("");
        const error = validateAccount();
        $formError.text(error ? t(error) : "");
        if (error) return;
        playUiSound();
        showStep(2);
    });

    $("#prev-step-btn").on("click", function () {
        playUiSound();
        showStep(1);
    });

    $("#clear-form-btn").on("click", function () {
        playUiSound();
        $("#booking-form").find("input[type='text'], input[type='email'], input[type='password']").val("");
        $formError.text("");
        $formSuccess.text(t("clearedMsg"));
    });

    $("#booking-form").on("submit", function (e) {
        e.preventDefault();
        const $submit = $("#booking-submit-btn");
        if ($submit.prop("disabled")) return; // Task 6: ignore repeated clicks

        $formError.text("");
        $formSuccess.text("");
        setButtonLoading($submit, true);

        setTimeout(function () { // simulated server call
            setButtonLoading($submit, false);
            playUiSound("success");
            const message = t("bookingConfirmed", {
                name: $("#user-name").val().trim(),
                tour: $("#tour-select option:selected").text()
            });
            pop($formSuccess.text(message));
            showToast(message); // Task 7
        }, 2000);
    });

    /* ---------------- Contact Support modal (Home) ---------------- */
    const $modal = $("#popup-modal");
    const $popupStatus = $("#popup-callback-status");
    const openModal = () => $modal.css("display", "flex").hide().fadeIn(200);
    const closeModal = () => $modal.fadeOut(200);

    // Callback style "server" request
    function submitInquiryAsync(formData, onComplete) {
        setTimeout(() => onComplete(t("inquiryThanks", { name: formData.name })), 1800);
    }

    $("#open-popup-btn").on("click", function () { playUiSound(); openModal(); });
    $("#close-popup-btn").on("click", closeModal);
    $modal.on("click", function (e) { if (e.target === this) closeModal(); });
    $document.on("keydown", (e) => { if (e.key === "Escape" && $modal.is(":visible")) closeModal(); });

    $("#popup-form").on("submit", function (e) {
        e.preventDefault();
        const form = this;
        const name = $("#support-name").val().trim();
        const error = !isValidName(name) ? "errName"
            : !EMAIL_RE.test($("#support-email").val().trim()) ? "errEmail"
            : $("#support-msg").val().trim().length < 5 ? "errMsgShort"
            : null;

        if (error) return showMessage($popupStatus, t(error), true);

        const $send = $("#popup-submit-btn");
        if ($send.prop("disabled")) return;
        $popupStatus.text("");
        setButtonLoading($send, true); // Task 6

        submitInquiryAsync({ name }, function (reply) {
            setButtonLoading($send, false);
            playUiSound("success");
            showMessage($popupStatus, reply);
            showToast(reply); // Task 7
            setTimeout(() => { form.reset(); $popupStatus.text(""); closeModal(); }, 1200);
        });
    });

    /* =================================================================
       Task 4: Scroll progress bar
       ================================================================= */
    $body.prepend(`<div id="scroll-progress" aria-hidden="true"><div class="scroll-progress-fill"></div></div>
        <button type="button" id="scroll-percent" class="scroll-percent" aria-label="Back to top">0%</button>`);
    const $fill = $("#scroll-progress .scroll-progress-fill");
    const $percent = $("#scroll-percent");

    function updateScrollProgress() {
        const scrollTop = $window.scrollTop();
        const maxScroll = $document.height() - $window.height();
        const percent = maxScroll > 0 ? Math.min(100, Math.round((scrollTop / maxScroll) * 100)) : 0;
        $fill.css("width", percent + "%");
        $percent.text(percent + "%").toggleClass("visible", scrollTop > 80);
    }

    $percent.on("click", () => $("html, body").animate({ scrollTop: 0 }, 600));

    /* =================================================================
       Task 5: Animated number counters (start when visible)
       ================================================================= */
    function isInView($el, margin = 0) {
        const top = $el.offset().top;
        const viewTop = $window.scrollTop();
        return top + $el.outerHeight() > viewTop - margin && top < viewTop + $window.height() + margin;
    }

    function formatCounter($el, value) {
        return $el.data("format") === "comma" ? Math.round(value).toLocaleString("en-US") : Math.round(value);
    }

    function runCounters() {
        $(".counter").each(function () {
            const $el = $(this);
            if ($el.data("counted") || !isInView($el, -40)) return;
            $el.data("counted", true);

            // .animate() can tween any number stored on a plain object
            $({ value: 0 }).animate({ value: Number($el.data("target")) }, {
                duration: 2200,
                easing: "swing",
                step: (now) => $el.text(formatCounter($el, now)),
                complete: () => {
                    $el.text(formatCounter($el, $el.data("target")));
                    $el.closest(".stat-card").addClass("counted");
                }
            });
        });
    }

    /* =================================================================
       Task 9: Lazy image loading (scroll + offset + attr("src"))
       ================================================================= */
    function loadImage($img) {
        const src = $img.attr("data-src");
        if (!src || $img.hasClass("lazy-loaded") || $img.hasClass("lazy-loading")) return;
        $img.addClass("lazy-loading")
            .one("load", () => $img.removeClass("lazy-loading").addClass("lazy-loaded"))
            .attr("src", src);
    }

    function lazyLoadImages() {
        $("img.lazy").not(".lazy-loaded, .lazy-loading").each(function () {
            if (isInView($(this), 200)) loadImage($(this)); // start 200px before it appears
        });
    }

    // Hidden carousel slides have no position, so load each one just before Bootstrap shows it
    $("#astanaCarousel").on("slide.bs.carousel", function (e) {
        const $slides = $(this).find(".carousel-item");
        loadImage($slides.eq(e.to).find("img"));
        loadImage($slides.eq((e.to + 1) % $slides.length).find("img")); // and preload the next one
    });
    $window.on("load", () => loadImage($("#astanaCarousel .carousel-item").eq(1).find("img")));

    // One throttled scroll handler drives Tasks 4, 5 and 9
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateScrollProgress();
            runCounters();
            lazyLoadImages();
            ticking = false;
        });
    }
    $window.on("scroll resize", onScroll);

    /* =================================================================
       Task 1 + 2: Live filter and autocomplete (Attractions)
       ================================================================= */
    const $search = $("#landmark-search");
    const $items = $("#landmark-list .landmark-item");
    const $suggestions = $("#autocomplete-list");
    const landmarks = $items.map(function () {
        return {
            name: $(this).find(".landmark-name").text(),
            category: String($(this).data("category")),
            keywords: String($(this).data("keywords"))
        };
    }).get();
    let activeSuggestion = -1;

    // Task 1: .filter() keeps the items whose text or keywords contain the query
    function filterLandmarks(query) {
        query = String(query).trim().toLowerCase();
        const $matches = $items.filter(function () {
            return ($(this).text() + " " + $(this).data("keywords")).toLowerCase().includes(query);
        });

        $items.not($matches).stop(true, true).slideUp(150);
        $matches.stop(true, true).slideDown(150);
        highlightKeyword($items.find(".landmark-name, .landmark-desc, .landmark-badge, .landmark-district"), query);

        $("#landmark-count").text(t("shownCount", { shown: $matches.length, total: $items.length }));
        $("#landmark-empty").toggle($matches.length === 0);
    }

    function closeSuggestions() {
        $suggestions.empty().removeClass("open");
        $search.attr("aria-expanded", "false");
        activeSuggestion = -1;
    }

    // Task 2: names starting with the query first, then names that only contain it (max 6)
    function showSuggestions(query) {
        query = String(query).trim().toLowerCase();
        if (!query) return closeSuggestions();

        const matches = (item) => [item.name, item.category, item.keywords].some((text) => text.toLowerCase().includes(query));
        const startsWith = landmarks.filter((item) => item.name.toLowerCase().startsWith(query));
        const results = startsWith.concat(landmarks.filter((item) => !startsWith.includes(item) && matches(item))).slice(0, 6);

        $suggestions.empty();
        activeSuggestion = -1;
        if (!results.length) {
            $('<li class="autocomplete-empty"></li>').text(t("noMatch")).appendTo($suggestions);
        }
        results.forEach((item) => {
            const $name = $('<span class="autocomplete-name"></span>').text(item.name);
            highlightKeyword($name, query);
            $('<li class="autocomplete-item" role="option"></li>')
                .attr("data-name", item.name)
                .append($name, $('<span class="autocomplete-cat"></span>').text(item.category))
                .appendTo($suggestions);
        });
        $suggestions.addClass("open");
        $search.attr("aria-expanded", "true");
    }

    function chooseSuggestion(name) {
        $search.val(name);
        closeSuggestions();
        filterLandmarks(name);
        const $target = $items.filter((i, el) => $(el).find(".landmark-name").text() === name).first();
        if (!$target.length) return;
        $("html, body").animate({ scrollTop: $target.offset().top - 160 }, 400);
        $target.addClass("flash");
        setTimeout(() => $target.removeClass("flash"), 1200);
    }

    function moveActive(step) {
        const $options = $suggestions.find(".autocomplete-item");
        if (!$options.length) return;
        activeSuggestion = (activeSuggestion + step + $options.length) % $options.length;
        $options.removeClass("active").eq(activeSuggestion).addClass("active");
    }

    // keyup = after every typed character (task hint); input = paste, mobile keyboards, ✕ button
    let lastQuery = null;
    $search.on("keyup input", function (e) {
        if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) return;
        const query = $(this).val();
        if (query === lastQuery) return; // keyup + input for the same character → run once
        lastQuery = query;
        filterLandmarks(query);
        showSuggestions(query);
    });

    $search.on("keydown", function (e) {
        const actions = {
            ArrowDown: () => moveActive(1),
            ArrowUp: () => moveActive(-1),
            Escape: closeSuggestions,
            Enter: () => {
                const $active = $suggestions.find(".autocomplete-item.active");
                $active.length ? chooseSuggestion($active.data("name")) : closeSuggestions();
            }
        };
        if (!actions[e.key]) return;
        e.preventDefault();
        actions[e.key]();
    });

    // Event delegation, because the suggestions are created dynamically
    $suggestions.on("mousedown", ".autocomplete-item", function (e) {
        e.preventDefault(); // keep focus in the input
        chooseSuggestion($(this).data("name"));
    });

    $document.on("click", (e) => { if (!$(e.target).closest(".search-wrapper").length) closeSuggestions(); });

    /* =================================================================
       Task 3: FAQ search highlighting (Home)
       ================================================================= */
    const $faqSearch = $("#faq-search");
    const $faqItems = $("#faq-section .accordion-item-simple");

    function searchFaq() {
        const query = String($faqSearch.val() ?? "").trim();
        const count = highlightKeyword($faqItems.find(".accordion-question, .accordion-answer"), query);
        let questions = 0;

        $faqItems.each(function () {
            const hit = query !== "" && $(this).find("mark.search-hit").length > 0;
            questions += hit;
            $(this).toggleClass("faq-dim", query !== "" && !hit);
            $(this).find(".accordion-answer").toggleClass("open", hit);
        });

        $("#faq-search-status").text(!query ? "" : count ? t("faqStatus", { count, questions, total: $faqItems.length }) : t("noMatch"));
    }
    $faqSearch.on("keyup search input", searchFaq);

    /* =================================================================
       Task 8: Copy to clipboard
       ================================================================= */
    let pendingCopyText = null;

    // .on("copy"): when a copy was started by our button, put the snippet text into the clipboard
    $document.on("copy", function (e) {
        if (pendingCopyText === null) return;
        e.originalEvent.clipboardData.setData("text/plain", pendingCopyText);
        e.preventDefault();
    });

    // A visitor who selects a snippet and presses Ctrl+C also gets a confirmation
    $(".snippet-text").on("copy", () => showToast(t("copied"), "info"));

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
        return new Promise((resolve, reject) => { // fallback for older browsers / plain http
            pendingCopyText = text;
            const ok = document.execCommand("copy");
            pendingCopyText = null;
            ok ? resolve() : reject();
        });
    }

    $(".copy-btn").on("click", function () {
        const $btn = $(this);
        const text = $btn.closest(".snippet").find(".snippet-text").text();

        copyText(text).then(() => {
            $btn.addClass("copied").find(".copy-label").text(t("copiedBtn"));
            $btn.find(".copy-tooltip").text(t("copied"));
            showToast(`${t("copied")} — ${text}`);
            clearTimeout($btn.data("timer"));
            $btn.data("timer", setTimeout(() => $btn.removeClass("copied").find(".copy-label").text(t("copyBtn")), 2000));
        }).catch(() => showToast(t("copyFail"), "error"));
    });

    /* =================================================================
       Language switching (EN / RU / KZ)
       ================================================================= */
    const $langSwitch = $(".lang-switch");

    function switchSiteLanguage(lang) {
        currentLang = uiTranslations[lang] ? lang : "en";
        localStorage.setItem("astanaLang", currentLang);
        $("html").attr("lang", currentLang === "kz" ? "kk" : currentLang);

        // Highlighted elements are not "leaf" elements, so remove the <mark>s before translating
        clearSearchHighlights($body);

        // 1. Elements with an explicit key
        $("[data-i18n]").each(function () { $(this).text(t($(this).data("i18n"))); });
        $("[data-i18n-title]").each(function () {
            const label = t($(this).data("i18n-title"));
            $(this).attr({ title: label, "aria-label": label });
        });

        // 2. Leaf text elements, matched by their original English text
        $("h1, h2, h3, h4, h5, p, a, button, label, th, span, small, li").each(function () {
            const $el = $(this);
            if ($el.is("[data-i18n]") || $el.children().length) return;
            if (!$el.is("[data-orig-en]")) $el.attr("data-orig-en", $el.text().trim());
            const original = $el.attr("data-orig-en");
            if (fullPageTextMap[original]) $el.text(currentLang === "en" ? original : pick({ en: original, ...fullPageTextMap[original] }));
        });

        // 3. Placeholders
        $("input[placeholder], textarea[placeholder]").each(function () {
            const $input = $(this);
            if (!$input.is("[data-orig-ph]")) $input.attr("data-orig-ph", $input.attr("placeholder"));
            const original = $input.attr("data-orig-ph");
            if (placeholderMap[original]) $input.attr("placeholder", pick({ en: original, ...placeholderMap[original] }));
        });

        // 4. Language switch state
        $langSwitch.attr({ "data-active": currentLang, "aria-label": t("langLabel") })
            .find(".lang-btn").each(function () {
                $(this).attr("aria-pressed", $(this).data("lang") === currentLang);
            });

        // 5. Dynamic parts of the pages
        updateThemeButton();
        updateDateTime();
        setTimeOfDayGreeting();
        showFact();
        updateReadMoreLabel();
        renderExtraDishes();
        renderToursTable();
        if ($("#step-indicator").length) showStep(formStep);
        $(".copy-btn:not(.copied) .copy-label").text(t("copyBtn"));
        if ($search.length) filterLandmarks($search.val());
        if ($faqSearch.length) searchFaq();
    }

    $(".lang-btn").on("click", function () {
        playUiSound();
        switchSiteLanguage($(this).data("lang"));
    });

    /* ---------------- Start ---------------- */
    applyTheme(localStorage.getItem("astanaTheme") === "dark");
    switchSiteLanguage(currentLang);
    onScroll();
});
