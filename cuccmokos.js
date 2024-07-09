





// Get the modal






// window.alert("Attention you might be not pay your internet bill! PAY IMMEDIATELY");

/*
window.addEventListener('scroll', function() {
  var modal = document.getElementById("myModal2");
  var modal2 = document.getElementById("xd");

 

  // Check if the user has scrolled past the 500th pixel
  if (5 <= window.scrollY) {
      modal.style.display = 'block'; // Megjelenítjük az üzenetet
      
  }

  else if (250 <= window.scrollY) {
    modal2.style.display = 'block';

  }
  
  
  else {
      modal.style.display = 'none'; // Elrejtjük az üzenetet, ha nem érték el az 500. pixelt
      modal2.style.display = 'none';
  
  
    }
    
});
*/
/*
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  myImg.style.display = "none";
};*/

var scrollCheckInterval = setInterval(function() {
  var haromka = document.getElementById('haromszog');
  var nyakatekert_kepecske = document.getElementById('myImg');
  var message1 = document.getElementById('message1');
  var message2 = document.getElementById('message2');
  var message3 = document.getElementById('message3');
  var scrollPosition = window.scrollY + window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled past the 500th pixel
  if (window.scrollY >= 100) {
      nyakatekert_kepecske.style.display = 'block'; // Megjelenítjük az első üzenetet
      message1.style.display = 'block';
      haromka.style.display = 'block';
  } else {
      message1.style.display = 'none'; // Elrejtjük az első üzenetet, ha nem érték el az 500. pixelt
      nyakatekert_kepecske.style.display = 'none';
      haromka.style.display = 'none';
  }
  if (window.scrollY >= 1000) {
    message1.style.display = 'none'; // Elrejtjük az üzenetet, ha nem érték el az 500. pixelt
    nyakatekert_kepecske.style.display = 'none';
    haromka.style.display = 'none';
  }



  // Check if the user has scrolled past the 1000th pixel
  if (window.scrollY >= 1200) {
      message2.style.display = 'block'; // Megjelenítjük a második üzenetet
  } else {
      message2.style.display = 'none'; // Elrejtjük a második üzenetet, ha nem érték el az 1000. pixelt
  }
  if (window.scrollY >= 2200) {
      message2.style.display = 'none';

  }

  if (window.scrollY >= 3200) {
    message3.style.display = 'block'; // Megjelenítjük a második üzenetet
} else {
    message3.style.display = 'none'; // Elrejtjük a második üzenetet, ha nem érték el az 1000. pixelt
}
if (window.scrollY >= 4000) {
    message3.style.display = 'none';

}

  // Check if the user has reached the bottom of the page
  if (scrollPosition >= documentHeight) {
      clearInterval(scrollCheckInterval); // Leállítjuk az időzítőt
      console.log("Elérted a weboldal alját töki!");
  }
}, 100); // Ellenőrzés 100 milliszekundumonként