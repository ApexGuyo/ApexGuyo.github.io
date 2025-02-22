

/*--------about section tabs-----*/

(() =>{
	const aboutsection = document.querySelector(".about-section"),
	tabsContainer = document.querySelector(".about-tabs");

	tabsContainer.addEventListener("click", (event) =>{
		if(event.target.classList.contains("tab-item")&&
			!event.target.classList.contains("active")){
			const target = event.target.getAttribute("data-target");

		   tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

		   event.target.classList.add("active","outer-shadow");
         
           aboutsection.querySelector(".tab-content.active").classList.remove("active");

           aboutsection.querySelector(target).classList.add("active");
		}
	})
})();

window.addEventListener("load", () =>{

	document.querySelector(".preloader").classList.add("fade-out");
	setTimeout(() =>{
		document.querySelector(".preloader").style.display="none";
	},600 )
});
          

   function bodyscrollingToggle(){
	   document.body.classList.toggle("stop-scrolling");
   }
/*--------------portfolio filter and popup-----------*/ 
(()=>{
 const filterContainer = document.querySelector(".portfolio-filter"),
 portfolioItemContainer = document.querySelector(".portfolio-items"),
 portfolioItems = document.querySelector(".portfolio-item"),
 popup =document.querySelector(".portfolio-popup"),
 prevBtn =popup.querySelector(".pp-prev"),
 nextBtn =popup.querySelector(".pp-next"),
closeBtn =popup.querySelector(".pp-close"),
projectDetailContainer =popup.querySelector(".pp-details"),
projectDetailBtn =popup.querySelector(".pp-project-details-btn");
let itemIndex, slideIndex,screenshots;

/*---------------filter items------*/
filterContainer.addEventListener("click", (event)=>{
	if(event.target.classList.contains("filter-item") &&
	!event.target.classList.contains("active")){
		//deactivate existing active filter-item
		filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
		//activate new filter-item
		event.target.classList.add("active","outer-shadow");
		const target = event.target.getAttribute("data-target");

		portfolioItems.forEach((item)=>{
			if(target=== item.getAttribute("data-category" || target==='all ')){
				item.classList.remove("hide");
				item.classList.add("show");
			}
			else{
				item.classList.remove("show");
				item.classList.add("hide");
			}
		})
	}
})

portfolioItemContainer.addEventListener("click", (event) => {
	if(event.target.closest(".portfolio-item-inner")){
		const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
		//get portfolioitem index
		itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);

	//	screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
               //conver screenshotsb into array
		//	   screenshots = screenshots.split(",");
		//	   slideIndex= 0;
		//	   popupToggle();
		}
 })




 const textArray = ["Computer And Software Engineer","a Data Analyst.", "a Developer.", "a Designer.", "an AI & Ml Enthusiast."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; // Typing speed
    const delay = 1500; // Delay before deleting

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
        setTimeout(typeEffect, delay); // Hold before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300); // Small pause before typing next
      } else {
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(typeEffect, 1000);
    });







 const themes = ["light-mode", "dark-mode", "blue-mode"];
 let currentThemeIndex = 0;
 
 const toggleTheme = () => {
   // Remove the current theme class
   document.body.classList.remove(...themes);
 
   // Switch to the next theme
   currentThemeIndex = (currentThemeIndex + 1) % themes.length;
   document.body.classList.add(themes[currentThemeIndex]);
 
   // Save theme preference
   localStorage.setItem("selectedTheme", themes[currentThemeIndex]);
 };
 
 // Load theme on page load
 document.addEventListener("DOMContentLoaded", () => {
   const savedTheme = localStorage.getItem("selectedTheme");
   if (savedTheme && themes.includes(savedTheme)) {
	 document.body.classList.add(savedTheme);
	 currentThemeIndex = themes.indexOf(savedTheme);
   }
 });
 
 // Event listener for the button
 document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);
 






 
    closeBtn.addEventListener("click", () => {
		popupToggle();
	})   

 function popupToggle(){
	popup.classList.toggle("open");
	bodyscrollingToggle();
 }

})();