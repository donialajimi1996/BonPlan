$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
$("nav a").click(function() {
  $("body,html").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top
    },
    1000
  );
});
// slide show
$("#carouselExampleIndicators").on("slide.bs.carousel", function() {
  $(".carousel").carousel({
    interval: 2000
  });
});
function yuccafacebook() {
  window.open("https://www.facebook.com/yuccacoffeeshop/");
}
function planetfacebook() {
  window.open(
    "https://www.facebook.com/Planet-food-corniche-sahloul-268464107028204/"
  );
}
function danmarkfacebook() {
  window.open("https://www.facebook.com/danmarkcoffee/");
}
//hide and show map place
// Get the modal
var modal = document.getElementById(
  "id01 id02 id03 id04 id05 id06 id07 id08 id09  "
);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    //modal.style.display = "none";
  }
};
// Get the modal
var modal = document.getElementById(
  "id010 id011 id012 id013 id014 id015 id10 id11 id12"
);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* infoList*/
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAA47bdO1KEyF-_TXWULxqL91rAUUo2Jdo",
  authDomain: "contact-us-746de.firebaseapp.com",
  databaseURL: "https://contact-us-746de.firebaseio.com",
  projectId: "contact-us-746de",
  storageBucket: "contact-us-746de.appspot.com",
  messagingSenderId: "148655815040"
};
firebase.initializeApp(config);

//Create Firebase
var database = firebase.database();

// Create Ref
var ref = database.ref("form");

function onSubmit() {
  // event.preventDefault();

  //create data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var data = {
    name: name,
    email: email,
    message: message
  };
  // push data
  ref.push(data);
}
