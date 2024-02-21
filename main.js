function printTime() {
    var d = new Date();
    var hours = d.getHours(); // Corrected function name
    var mins = d.getMinutes(); // Corrected function name
    var secs = d.getSeconds(); // Corrected function name
   


    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById("test").innerHTML = hours + ":" + mins + ":" + secs;
    
}

setInterval(printTime, 500);
