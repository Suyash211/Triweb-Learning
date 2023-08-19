function getTime(){
    let dt = new Date();
    dt.get
    let year = dt.getFullYear();
    let hours = dt.getHours()%12;
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();

    let utcyear = dt.getUTCFullYear();
    let utchours = dt.getUTCHours()%12;
    let utcminutes = dt.getUTCMinutes();
    let utcseconds = dt.getUTCSeconds();

    let time = "";
    time += hours < 10 ? "0" + hours : hours;
    time += minutes < 10 ? ":0" + minutes : ":" + minutes;
    time += seconds < 10 ? ":0" + seconds : ":" + seconds;

    let utctime = "";
    utctime += utchours < 10 ? "0" + utchours : utchours;
    utctime += utcminutes < 10 ? ":0" + utcminutes : ":" + utcminutes;
    utctime += utcseconds < 10 ? ":0" + utcseconds : ":" + utcseconds;

    console.log("The time right now is : " + time);
    console.log("The year is : " + year);
    console.log("The time in UTC time zone is : " + utctime);
    console.log("The year in UTC time zone is : " + utcyear);
}

getTime();
