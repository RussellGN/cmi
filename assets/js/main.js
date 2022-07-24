(function () {
	("use strict");

	/* Easy selector helper function */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/* Easy event listener function */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/* Easy on scroll event listener */
	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	/* Toggle .header-scrolled class to #header when page is scrolled */
	let selectHeader = select("#header");
	if (selectHeader) {
		const headerScrolled = () => {
			if (window.scrollY > 20) {
				selectHeader.classList.add("header-scrolled");
			} else {
				selectHeader.classList.remove("header-scrolled");
			}
		};
		window.addEventListener("load", headerScrolled);
		onscroll(document, headerScrolled);
	}

	/* Navbar links active state on scroll */
	let navbarlinks = select("#navbar .scrollto", true);
	const navbarlinksActive = () => {
		let position = window.scrollY + 200;
		navbarlinks.forEach((navbarlink) => {
			if (!navbarlink.hash) return;
			let section = select(navbarlink.hash);
			if (!section) return;
			if (
				position >= section.offsetTop &&
				position <= section.offsetTop + section.offsetHeight
			) {
				navbarlink.classList.add("active");
			} else {
				navbarlink.classList.remove("active");
			}
		});
	};
	window.addEventListener("load", navbarlinksActive);
	onscroll(document, navbarlinksActive);

	/* Scrolls to an element with header offset */
	const scrollto = (el) => {
		let header = select("#header");
		let offset = header.offsetHeight;

		if (!header.classList.contains("fixed-top")) {
			offset += 70;
		}

		let elementPos = select(el).offsetTop;
		window.scrollTo({
			top: elementPos - offset,
			behavior: "smooth",
		});
	};

	/* Scrool with ofset on links with a class name .scrollto */
	on(
		"click",
		".scrollto",
		function (e) {
			if (select(this.hash)) {
				e.preventDefault();

				let navbar = select("#navbar");
				if (navbar.classList.contains("navbar-mobile")) {
					navbar.classList.remove("navbar-mobile");
					let navbarToggle = select(".mobile-nav-toggle");
					navbarToggle.classList.toggle("bi-list");
					navbarToggle.classList.toggle("bi-x");
				}
				scrollto(this.hash);
			}
		},
		true
	);

	/* Preloader */
	let preloader = select("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/* Scroll with ofset on page load with hash links in the url */
	window.addEventListener("load", () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash);
			}
		}
	})();
})();
