# Visit Astana - Web Development 

A responsive tourism web application highlighting the culture, modern architecture, and travel itineraries of Astana, Kazakhstan.

## Live Site
[Visit Astana on GitHub Pages](https://akniet0.github.io/Welcome-To-Astana/)

## Team Members & Page Breakdown
* **Akniyet Zhanarbek:** 
  * `index.html` (Homepage, 9-frame carousel, featured highlights, visitor quick tips)
  * `attractions.html` (Landmark directory, architectural specs, public transport guide)
* **Zhanserik Abilgali:**
  * `history.html` (Historical timeline, traditional nomadic cuisine layout)
  * `tours.html` (Tour package catalog table, inquiry & booking form, travel widget sidebar)

## Built With
* **HTML5:** Semantic markup (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
* **CSS3:** Custom properties (`:root`), Playfair Display & Plus Jakarta Sans typography, custom background patterns
* **Bootstrap 5.3.3:** Responsive grid system (`row`, `col-*`), Navigation bar, Carousel component, and Form styling
* **Pure CSS Flexbox:** Custom multi-breakpoint grid for food showcase cards (`.pure-card-row`)

## Responsiveness
Tested across:
* **Mobile (<576px):** Collapsed navigation menu, stacked action buttons, single-column cards
* **Tablet (576px - 991px):** Two-column card layouts, responsive tour tables with horizontal scroll safeguards
* **Desktop (≥992px):** Three-column card grids, two-column content/sidebar arrangements

## Project Structure
* `css/style.css` — one set of colour tokens (`:root`) with Night Mode overrides (`body.dark-theme`); Bootstrap's variables are mapped to them, so every text/background pair meets WCAG AA contrast in both themes
* `js/translations.js` — all English / Russian / Kazakh text (interface strings, page text, placeholders, facts, dishes, tours)
* `js/script.js` — site logic written with jQuery

## Assignment 6 — jQuery Features
jQuery 4.0.0 is loaded from the official CDN in every page's `<head>`, followed by `js/translations.js` and `js/script.js` (both `defer`). All logic runs inside `$(document).ready()` (logs `jQuery is ready!`).

| # | Feature | Where | Key jQuery methods |
|---|---------|-------|--------------------|
| 1 | Real-time search & live filter of 14 landmarks | `attractions.html` → *Find a Landmark* | `.on('keyup input')`, `.filter()`, `.slideUp()/.slideDown()` |
| 2 | Autocomplete dropdown (mouse + ↑ ↓ Enter Esc) | `attractions.html` | `$.each()`, `.append()`, event delegation `.on('mousedown', '.autocomplete-item')` |
| 3 | Search highlighting in the FAQ (matching answers auto-open) | `index.html` → FAQ | RegExp, `.contents().filter()`, `.replaceWith()`, `.unwrap()` |
| 4 | Gradient scroll progress bar + % badge (click → back to top) | all pages | `$(window).scrollTop()`, `$(document).height()`, `.css()`, `.animate()` |
| 5 | Animated number counter (starts when visible) | `index.html` → *Astana in Numbers* | `$({value:0}).animate({...}, {step})`, `.offset()` |
| 6 | Spinner + "Please wait…" + disabled submit button | Contact modal (`index.html`), booking form (`tours.html`) | `.prop('disabled')`, `.html()`, `.data()` |
| 7 | Toast notifications that fade out | form submits, ratings, copy | `.fadeIn()`, `.fadeOut()`, `.remove()` |
| 8 | Copy-to-clipboard buttons (icon → ✓, tooltip) | `history.html` → *Speak Like a Local* | `.on('click')`, `.on('copy')`, `.addClass()` |
| 9 | Lazy image loading with shimmer placeholder | cards, gallery, food images, carousel slides | `scroll()`, `.offset()`, `.attr('src', data-src)` |
