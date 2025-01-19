// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// }); 


var ele = document.querySelector(".fix-con")
var fix = document.querySelector(".fix-img")


ele.addEventListener("mouseenter",function(){
    fix.style.display = "block"
})

ele.addEventListener("mouseleave",function(){
    fix.style.display = "none"
}) 

// var main_con = document.querySelector(".page4-con")
// main_con.addEventListener("mouseenter",function(){
//     var img = main_con.getAttribute('data-img')
//     fix.style.backgroundImage = `url(${img})`
// })


// var main_con = document.querySelectorAll(".page4-con")
// main_con.forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         var img = main_con.getAttribute("data-img")
//     fix.style.backgroundImage = `url(${img})`
//     })
 

// })


var eles = document.querySelectorAll(".page4-con")
eles.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-img")
        fix.style.backgroundImage = `url(${img})`
    })
})


//   // JavaScript to create 100 stars at random positions
//   const starsContainer = document.getElementById('starsContainer');

//   for (let i = 0; i < 100; i++) {
//     const star = document.createElement('div');
//     star.classList.add('star');
//     // Randomize position
//     star.style.top = Math.random() * 100 + 'vh';
//     star.style.left = Math.random() * 100 + 'vw';
//     // Add a unique animation delay to each star
//     star.style.animationDelay = `${Math.random() * 2}s`;
//     starsContainer.appendChild(star);
//   }




function menuf(){
    var menu = document.querySelector("nav h6") 
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
  
  full.style.top = "0"
    navimg.style.opacity = "0"

})

full.addEventListener("click",function(){
  
    full.style.top = "-100vh"
     navimg.style.opacity = "1"

    
})

}
var loder = document.querySelector("#loder")
setTimeout(function(){

    loder.style.top = "-100vh"

},4200)


