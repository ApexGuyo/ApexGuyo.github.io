

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

    closeBtn.addEventListener("click", () => {
		popupToggle();
	})   

 function popupToggle(){
	popup.classList.toggle("open");
	bodyscrollingToggle();
 }

})();