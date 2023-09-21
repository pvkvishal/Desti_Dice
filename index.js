// var number=Math.random();
// number=((number*6)+1);
// number=Math.floor(number);
// console.log(number);
var num1 = Math.floor(Math.random() * 6) + 1;
var diceBlue = "./img/blue" + num1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1?.setAttribute("src", diceBlue);

console.log("hi");

var num2 = Math.floor(Math.random() * 6) + 1;
var diceRed = "./img/red" + num2 + ".png";
document.querySelectorAll("img")[1]?.setAttribute("src", diceRed);

var player1 = sessionStorage.getItem("formDataplayer1");
var player2 = sessionStorage.getItem("formDataplayer2");
document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;
if (num1 > num2) {
  document.querySelector("h1").innerHTML = "🏁 " + player1 + " 💙 win";
  document.querySelector("body").setAttribute("class", "blue");
} else if (num1 < num2) {
  document.querySelector("h1").innerHTML = "🏁 " + player2 + " ❤️ win";
  document.querySelector("body").setAttribute("class", "red");
} else {
  document.querySelector("h1").innerHTML = "You both have a tie 💞";
  document.querySelector("body").setAttribute("class", "bluered");
}
console.log(player1);

//const loadpagebutton = document.getElementById("loadpage");
// loadpagebutton.addEventListener("click", () => {
//   const formData = {
//     player1: document.getElementById("player1").value,
//     player2: document.getElementById("player2").value,
//   };
//   console.log(document.getElementById("player1").value);
//   console.log(document.getElementById("player2").value);
//   sessionStorage.setItem(
//     "formDataplayer1",
//     document.getElementById("player1").value
//   );
//   sessionStorage.setItem(
//     "formDataplayer2",
//     document.getElementById("player2").value
//   );

//   window.location.href = "./page.html";
// });

function onefunc() {
  sessionStorage.setItem(
    "formDataplayer1",
    document.getElementById("player1").value
  );
  sessionStorage.setItem(
    "formDataplayer2",
    document.getElementById("player2").value
  );

  console.log(player1);
  console.log(player2);
}
