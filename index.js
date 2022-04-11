// document.querySelector(".set").addEventListener("click", handleClick);

//  function handleClick() 
//  {
// 	alert("I got clicked");
//  }

var numberofDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberofDrumButtons; i++){
	document.querySelectorAll(".drum") [i].addEventListener("click",function(){

			 var audio= new Audio("sounds/crash.mp3");
				audio.play();

				this.style.color= "rgb(255, 0, 242)";
				
	});

}