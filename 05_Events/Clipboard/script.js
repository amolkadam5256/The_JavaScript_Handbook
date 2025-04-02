const copyh1 = document.getElementById("copyh1")
copyh1.addEventListener("copy", (e) => {
    e.preventDefault();
    const tooltip = document.createElement("span");
    tooltip.textContent = "Copying is disabled!";
    tooltip.style.position = "absolute";
    tooltip.style.background = "red";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.top = "20px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    
    copyh1.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 1500);
});

const data = document.getElementById("data");

        data.addEventListener("cut", (e) => {
            e.preventDefault();
            const tooltip2 = document.createElement("span");
            tooltip2.textContent = "cut is disabled!";
            tooltip2.style.position = "absolute";
            tooltip2.style.background = "red";
            tooltip2.style.color = "white";
            tooltip2.style.padding = "5px";
            tooltip2.style.borderRadius = "5px";
            tooltip2.style.top = "50px";
            tooltip2.style.left = "50%";
            tooltip2.style.transform = "translateX(-50%)";

            data.appendChild(tooltip2);

            setTimeout(() => {
                tooltip2.remove();
            }, 1500);
        });


        let textpara = document.getElementById("textpara");
        textpara.style.width="500px";
        textpara.style.height="200px";

        textpara.addEventListener("paste", (text)=>{
            text.preventDefault();
            alert("Can't past data here !")
        });