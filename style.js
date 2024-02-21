function printTime() {
    var d = new Date();
    var hours = d.getHours(); // Corrected function name
    var mins = d.getMinutes(); // Corrected function name
    var secs = d.getSeconds(); // Corrected function name
    var day = d.getDay(); // Corrected function name
    var date = d.getDate(); // Corrected function name
    var month = d.getMonth() + 1; // Adjusted month
    var year = d.getFullYear();

    switch(day) {
        case 0:
            day = "Minggu";
            break;
        case 1:
            day = "Senin";
            break;
        case 2:
            day = "Selasa";
            break;
        case 3:
            day = "Rabu";
            break;
        case 4:
            day = "Kamis";
            break;
        case 5:
            day = "Jum'at";
            break;
        case 6:
            day = "Sabtu";
            break;
    }

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
    document.getElementById("ttt").innerHTML = day + ", " + date + "/" + month + "/" + year;
}

setInterval(printTime, 500);
