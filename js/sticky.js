// =================== dính đầu trang khi kéo ==================
window.onscroll = function() {myFunction()};
        
var header = document.getElementById("sticky-bottom-header");
var mobileHeader = document.getElementById("sticky-mobile-header");
var sticky = header.offsetTop;
var sticky = mobileHeader.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mobileHeader.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    mobileHeader.classList.remove("sticky");
  }
}