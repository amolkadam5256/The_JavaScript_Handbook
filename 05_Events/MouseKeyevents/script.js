function demo1() {
    alert("Single Clicked Me")
}
function demo2() {
    alert("Dubble Clicked Me")
}


document.getElementById("addEvent").addEventListener("click", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.backgroundColor = "green";
})

let btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    this.style.backgroundColor = "red";

}
btn2.ondblclick = function () {
    this.style.backgroundColor = "blue";

}


let show = document.getElementById("show");
let hide = document.getElementById("hide");
let content = document.getElementById("content");

show.addEventListener("click", function () {
    content.style.display = "block";
});

hide.addEventListener("click", function () {
    content.style.display = "none";
});

let content2 = document.getElementById("content2");
toggle.addEventListener("click", function () {

    if(content2.style.display==="none" || content2.style.display===""){
        content2.style.display="block";

    }
    else{
        content2.style.display="none";

    }
});



let body = document.body;

let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(){
    if(body.style.backgroundColor==="white" || body.style.backgroundColor===""){
        body.style.backgroundColor="black";
        
    }
    else{
        body.style.backgroundColor="white";
    }
})
let pressme = document.getElementById("pressme");

pressme.addEventListener("mousedown", () => {
    alert("Mouse button pressed down");
  });
  
  pressme.addEventListener("mouseup", () => {
    alert("Mouse button released");
  });
  
  pressme.addEventListener("mousemove", () => {
    alert("mousemove button hover");
  });


  pressme.addEventListener("mouseover", () => {
    alert("mouseover button hover");
  });

  pressme.addEventListener("mouseout", () => {
    alert("mouseout button hover");
  });

  pressme.addEventListener("mouseenter", () => {
    alert("mouseenter button hover");
  });


  pressme.addEventListener("mouseleave", () => {
    alert("mouseleave button hover");
  });

  pressme.addEventListener("contextmenu", () => {
    alert("contextmenu button hover");
  });


  pressme.addEventListener("keydown", () => {
    alert("keydown button ");
  });

  pressme.addEventListener("keyup", () => {
    alert("keyup button ");
  });
  
  pressme.addEventListener("keypress", () => {
    alert("keypress button ");
  });



  