//------------- BOX-CONTENT START-----------//
const subName = document.querySelectorAll('.sub');
const boxes = document.querySelectorAll('.box');
const contents = document.querySelectorAll('.content');


boxes.forEach(element=>{

	let elementBars = element.children[0].childNodes[5]	
	let elementSub = element.children[1]

	elementBars.addEventListener("mouseover",()=>{
		elementSub.classList.add("sub-active")
	})

	element.addEventListener("mouseleave",()=>{
		elementSub.classList.remove("sub-active")
	})


	
});
//------------- BOX-CONTENT END-----------//


//------------- SUB-MENU START-----------//
subName.forEach(element=>{
	let elementcontents = element.children[0].children[0].childNodes[1]
	let elementcontents1 = element.children[0].children[1].childNodes[1]
	let elementcontents2 = element.children[0].children[2].childNodes[1]
	

	let elementspan = element.children[0].children[0].childNodes[3]
	let elementspan1 = element.children[0].children[1].childNodes[3]
	let elementspan2 = element.children[0].children[2].childNodes[3]
	
	elementcontents.addEventListener("mouseover",()=>{
		elementspan.classList.add("sub-active")
	})
	elementcontents.addEventListener("mouseleave",()=>{
		elementspan.classList.remove("sub-active")
	})


	elementcontents1.addEventListener("mouseover",()=>{
		elementspan1.classList.add("sub-active")
	})
	elementcontents1.addEventListener("mouseleave",()=>{
		elementspan1.classList.remove("sub-active")
	})


	elementcontents2.addEventListener("mouseover",()=>{
		elementspan2.classList.add("sub-active")
	})
	elementcontents2.addEventListener("mouseleave",()=>{
		elementspan2.classList.remove("sub-active")
	})
})
//------------- SUB-MENU END-----------//



//------------- SIDEBAR MENU START --------------//

 function openNav() {
	document.querySelector(".sidenav-description").classList.add("active");
	// document.getElementById("mySidenav").classList.add("active");

 }


 function closeNav() {
	document.querySelector(".sidenav-description").classList.remove("active");
	
 }



//----------- SIDEBAR MENU END -------//
