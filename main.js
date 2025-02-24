(() => {
	/* -------- About Section Tabs -------- */
	const aboutSection = document.querySelector(".about-section"),
		  tabsContainer = document.querySelector(".about-tabs");
  
	tabsContainer.addEventListener("click", (event) => {
	  if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
		const target = event.target.getAttribute("data-target");
  
		tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
		event.target.classList.add("active", "outer-shadow");
  
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	  }
	});
  
	/* -------- Preloader -------- */
	window.addEventListener("load", () => {
	  document.querySelector(".preloader").classList.add("fade-out");
	  setTimeout(() => {
		document.querySelector(".preloader").style.display = "none";
	  }, 600);
	});
  
	/* -------- Body Scroll Toggle -------- */
	function bodyScrollingToggle() {
	  document.body.classList.toggle("stop-scrolling");
	}
  
	/* -------- Portfolio Filter and Popup -------- */
	const filterContainer = document.querySelector(".portfolio-filter"),
		  portfolioItemContainer = document.querySelector(".portfolio-items"),
		  portfolioItems = document.querySelectorAll(".portfolio-item"),
		  popup = document.querySelector(".portfolio-popup"),
		  prevBtn = popup.querySelector(".pp-prev"),
		  nextBtn = popup.querySelector(".pp-next"),
		  closeBtn = popup.querySelector(".pp-close"),
		  projectDetailContainer = popup.querySelector(".pp-details"),
		  projectDetailBtn = popup.querySelector(".pp-project-details-btn");
  
	let itemIndex, slideIndex, screenshots;
  
	/* Filter Items */
	filterContainer.addEventListener("click", (event) => {
	  if (event.target.classList.contains("filter-item") && !event.target.classList.contains("active")) {
		filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
		event.target.classList.add("active", "outer-shadow");
  
		const target = event.target.getAttribute("data-target");
  
		portfolioItems.forEach((item) => {
		  if (target === item.getAttribute("data-category") || target === "all") {
			item.classList.remove("hide");
			item.classList.add("show");
		  } else {
			item.classList.remove("show");
			item.classList.add("hide");
		  }
		});
	  }
	});
  
	/* Open Portfolio Popup */
	portfolioItemContainer.addEventListener("click", (event) => {
	  if (event.target.closest(".portfolio-item-inner")) {
		const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
		itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
  
		popupToggle();
	  }
	});
  
	/* Close Popup */
	closeBtn.addEventListener("click", () => {
	  popupToggle();
	});
  
	function popupToggle() {
	  popup.classList.toggle("open");
	  bodyScrollingToggle();
	}
  
	/* -------- Animated Typing Effect -------- */
	const textArray = ["Computer and Software Engineer", "a Data Analyst", "a Developer", "a Designer", "an AI & ML Enthusiast"];
	let textIndex = 0, charIndex = 0, isDeleting = false;
	const speed = 100, delay = 1500;
  
	function typeEffect() {
	  const textElement = document.getElementById("animated-text");
	  const currentText = textArray[textIndex];
  
	  if (isDeleting) {
		textElement.textContent = currentText.substring(0, charIndex--);
	  } else {
		textElement.textContent = currentText.substring(0, charIndex++);
	  }
  
	  if (!isDeleting && charIndex === currentText.length) {
		isDeleting = true;
		setTimeout(typeEffect, delay);
	  } else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		textIndex = (textIndex + 1) % textArray.length;
		setTimeout(typeEffect, 300);
	  } else {
		setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
	  }
	}
  
	document.addEventListener("DOMContentLoaded", () => {
	  setTimeout(typeEffect, 1000);
	});
  
	/* -------- Theme Changer -------- */
	const themes = ["light-mode", "dark-mode", "blue-mode"];
	let currentThemeIndex = 0;
  
	const toggleTheme = () => {
	  document.body.classList.remove(...themes);
	  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
	  document.body.classList.add(themes[currentThemeIndex]);
  
	  localStorage.setItem("selectedTheme", themes[currentThemeIndex]);
	};
  
	document.addEventListener("DOMContentLoaded", () => {
	  const savedTheme = localStorage.getItem("selectedTheme");
	  if (savedTheme && themes.includes(savedTheme)) {
		document.body.classList.add(savedTheme);
		currentThemeIndex = themes.indexOf(savedTheme);
	  }
  
	  // Ensure theme toggle button exists before adding event listener
	  const themeToggleButton = document.querySelector("#theme-toggle");
	  if (themeToggleButton) {
		themeToggleButton.addEventListener("click", toggleTheme);
	  }
	});
  
  })();
  