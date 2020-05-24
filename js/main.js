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
    if (days > 0){
        document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }else if(hours > 0){
        document.getElementById("countdown").innerHTML = hours + "h "+ minutes + "m " 
        + seconds + "s ";
    }else if(minutes>0){
        document.getElementById("countdown").innerHTML = minutes + "m "+ seconds + "s ";
    }else{
        document.getElementById("countdown").innerHTML = seconds + "s ";
    }

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

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;