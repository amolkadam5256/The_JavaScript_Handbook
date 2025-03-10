setInterval(() => {
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let ampm = document.getElementById("ampm");

    let currentTime = new Date();

    // Get hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Determine AM or PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12 (for midnight and noon)

    // Formatting hours, minutes, and seconds with leading zero if less than 10
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = period; // Display AM or PM

}, 1000);



