// const modal = document.getElementById('modal');
// const modbtn = document.getElementsByClassName('login');
// const span = document.getElementsByClassName('close')[0];


// modbtn.onclick = function() {
//     modal.style.display = 'block';
// }

// span.onclick = function() {
//     modal.style.display = 'none';
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

let modalBtn = document.getElementById("modalBtn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")


modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}