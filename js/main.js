// Array containing the list of trainings in the table
// Last element of the array is the one defining the countdown
var trainings = '['+
'{"name":"ipv6","date":"May 6 2020 18:00:00" }]';

// Exemple avec 2 entrées
// var trainings = '['+
// '{"name":"ipv6","date":"May 6 2020 18:00:00" },'+
// '{"name":"iot","date":"May 4 2020 18:00:00" }]'; 


// Update the count down every 1 second
var countdownfunction = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();

    // Set the date we're counting down to (this is the last of the trainings Array)
    jsonData = JSON.parse(trainings);
    var countDownDate = new Date(jsonData[jsonData.length-1].date).getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "prochainement, avis bienvenus &#128512;";
    }
}, 1000);

// Update the dates in the Date column of the table
var tableDatesFunction = (function(){
    jsonData = JSON.parse(trainings);
    for (var i = 0; i < jsonData.length; i++) {
        var dt = new Date(jsonData[i].date);
        document.getElementById(jsonData[i].name).innerHTML = dt.toLocaleString('fr-FR');
    }
})();
