
//Header Static
var site_header=document.querySelector(".site-header");
if (window.scrollY > 1) {
  site_header.classList.add("sticky");
  site_header.classList.add("scrolled");
  site_header.style="padding:7px 0";
} else {
  site_header.classList.remove("sticky");
  site_header.classList.remove("scrolled");
  site_header.style="padding:5px 0";
}
window.onscroll = () => {
  if (window.scrollY >= 1) {
    site_header.classList.add("sticky");
    site_header.classList.add("scrolled");
    site_header.style="padding:7px 0";
  } else {
    site_header.classList.remove("sticky");
    site_header.classList.remove("scrolled");
    site_header.style="padding:5px 0";
  }
};

function show_menu() {
  document.querySelector(".show_menu").classList.toggle("active");
}

//search 
const search_icon=document.querySelector('.toggle-search');
search_icon.addEventListener('click',function(){
    document.getElementById('search-bar').classList.toggle('hide');
})




const nav = document.querySelector(".sub-nav__menu");
const close = document.querySelector(".sub-nav__close");
close.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  //Menu
  document.querySelector(".sub-nav-content").classList.remove("is-active");
  //Overlay
  document.querySelector(".nav-overlay").classList.remove("is-active");
});

nav.addEventListener("click", () => {
    document.body.classList.add("nav-open");
    //Menu
    document.querySelector(".sub-nav-content").classList.add("is-active");
    //Overlay
    document.querySelector(".nav-overlay").classList.add("is-active");
});



//Login
// const login_link = document.querySelectorAll(".login-link");
// login_link.forEach((e)=>{
//     e.addEventListener("click", () => {
//         document.body.classList.add("modal-open");
//         document.body.classList.add("nav-open");
//         document.getElementById('modal_login').classList.add("in");
//         document.getElementById('modal_login').style =
//         "display: block;background: rgba(0, 0, 0, 0.5);margin: 0 auto;padding: 90px 0;";
//         //Overlay
//         document.querySelector(".nav-overlay").classList.add("is-active");
//       });
//     })
    
//     //Close Modal
//     document.querySelector('.close-modal').addEventListener('click',()=>{
//       document.body.classList.remove("modal-open");
//       document.body.classList.remove("nav-open");
//     document.getElementById('modal_login').classList.remove("in");
//     document.getElementById('modal_login').style =
//     "display: none; background: rgba(0, 0, 0, 0.5);  margin: 0 auto;padding: 90px 0;";
//     //Overlay
//     document.querySelector(".nav-overlay").classList.remove("is-active");
// });




