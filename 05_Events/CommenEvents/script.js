parent1.addEventListener("click", (e)=>{
    console.log("Hi I'm Parent");
    e.target.style.backgroundColor = "red"; 
})

btn.addEventListener("click", (e)=>{
    console.log("Hi I'm btn");
    e.stopPropagation();
})  