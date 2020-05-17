var times = document.getElementsByClassName("time");
var dates = document.getElementsByClassName("date");
var date = new Date();

var month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

for(var n = 0; n < times.length; n++) {
	times[n].innerHTML = date.getHours() + ":" + date.getMinutes();
}

for(var n = 0; n < times.length; n++) {
	dates[n].innerHTML = date.getDate() + "-" + month[date.getMonth()] + "-" + (date.getYear() % 100);
}
