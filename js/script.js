var times = document.getElementsByClassName("time");
var dates = document.getElementsByClassName("date");
var d = new Date();

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


var timestr = ("0"+d.getHours()).slice(-2) + ":" + ("0"+d.getMinutes()).slice(-2);
var datestr =("0"+d.getDate()).slice(-2) + "-" + month[d.getMonth()] + "-" + ("0"+(d.getYear() % 100)).slice(-2);

for(var n = 0; n < times.length; n++) {
	times[n].innerHTML = timestr;
}

for(var n = 0; n < dates.length; n++) {
	dates[n].innerHTML = datestr;
}
