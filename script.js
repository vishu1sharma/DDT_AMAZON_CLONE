let leftbtn =document.querySelector(".btn-l");
let rightbtn =document.querySelector(".btn-r");
let slider = document.querySelector("slider-sec")

rightbtn.addEventListener('click',function(event){
    let c =document.querySelector(".product-slide");
    c.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn.addEventListener('click',function(event){
    let c =document.querySelector(".product-slide");
    c.scrollLeft -= 1100;
    event.preventDefault();
})



let leftbtn2 =document.querySelector(".btn-l-2");
let rightbtn2 =document.querySelector(".btn-r-2");

rightbtn2.addEventListener('click',function(event){
    let c2 =document.querySelector(".product-slide-2");
    c2.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn2.addEventListener('click',function(event){
    let c2 =document.querySelector(".product-slide-2");
    c2.scrollLeft -= 1100;
    event.preventDefault();
})


let leftbtn3 =document.querySelector(".btn-l-3");
let rightbtn3 =document.querySelector(".btn-r-3");

rightbtn3.addEventListener('click',function(event){
    let c3 =document.querySelector(".product-slide-3");
    c3.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn3.addEventListener('click',function(event){
    let c3 =document.querySelector(".product-slide-3");
    c3.scrollLeft -= 1100;
    event.preventDefault();
})



let leftbtn4 =document.querySelector(".btn-l-4");
let rightbtn4 =document.querySelector(".btn-r-4");

rightbtn4.addEventListener('click',function(event){
    let c4 =document.querySelector(".product-slide-4");
    c4.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn4.addEventListener('click',function(event){
    let c4 =document.querySelector(".product-slide-4");
    c4.scrollLeft -= 1100;
    event.preventDefault();
})

let slidebar =document.querySelector(".hiden-slidebar");
let xmark =document.querySelector(".fa-xmark");
let xmenu =document.querySelector(".menu");
let bbdy =document.querySelector(".bdy");


xmenu.addEventListener('click', () =>{
    slidebar.classList.add("active");
    xmark.classList.add("active");
    bbdy.classList.add("active");
})
xmark.addEventListener('click', () =>{
    slidebar.classList.remove("active");
    xmark.classList.remove("active");
})

let login =document.querySelector(".login");
let acnt =document.querySelector(".acount-div");

login.addEventListener('mouseover', () =>{
    acnt.classList.add("active");
})
login.addEventListener('mouseleave', () =>{
    acnt.classList.remove("active");
})
acnt.addEventListener('mouseover', () =>{
    acnt.classList.add("active");
})
acnt.addEventListener('mouseleave', () =>{
    acnt.classList.remove("active");
})