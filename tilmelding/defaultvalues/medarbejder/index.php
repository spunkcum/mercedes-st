<!doctype html>
<html lang="en" style="">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="styles/styles.css"/>

  <title>Tilmelding - Lancering af den ny Sprinter!</title>
</head>
<body>
  <div class="container">
    <div class="row pt-3 pb-3">
      <div class="col-sm-8 offset-sm-2">
        <div class="row">
          <div class="col-4">
            <img src="images/logo.png" class="img-fluid"/>
          </div>
          <div class="col-8">
            <img src="images/slogan.png" class="img-fluid slogan"/>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-5">
      <div class="col-sm-8 offset-sm-2">
        <img src="images/top.png" class="img-fluid fullWidth">


        <h1 class="pt-5">
          VIP-invitation. 
        </h1>
        <p class="pb-5">
          Vær med, når vi lancerer den ny Sprinter. For første gang i Danmark. Vi byder dig velkommen i Vilhelm Lauritzen Terminal. Torsdag 7. juni 2018. Du tilmelder dig via formularen her på siden.
        </p>

        <img src="images/middle.png" class="img-fluid fullWidth">

        <h1 class="pt-5">
          Kom til Danmarkspremiere på den ny Sprinter. 
        </h1>
        <p>
          Velkommen i den ikoniske Vilhelm Lauritzen Terminal. Her får du en ekstraordinær mulighed for at opleve den ny Sprinter.
        </p>


        <h3>
          Book prøvetur
        </h3>
        <p>
          Jeres kunder kan booke en tur med den ny Sprinter, når de tilmelder sig.
        </p>
        <h3>
          Bliv klogere til tech talks
        </h3>
        <p>
          [TEKST MANGLER]
        </p>

        <h1 class="pt-5">Tilmeld dig her.</h1>
        <p>Tilmeld dig hurtigst muligt via formularen nedenfor, da der er et begrænset antal af billetter. Har du ikke mulighed for at deltage, vil vi bede dig melde afbud i formularen – det vil være en stor hjælp.</p>

        <div id="wufoo-piokdbc1le1ngw" class="wufooContainer">
          Fill out my <a href="https://dypaang.wufoo.eu/forms/piokdbc1le1ngw">online form</a>.
        </div>
        <script type="text/javascript">var piokdbc1le1ngw;(function(d, t) {
          var s = d.createElement(t), options = {
            'userName':'dypaang',
            'formHash':'piokdbc1le1ngw',
            'autoResize':true,
            'height':'1250',
            'async':true,
            'host':'wufoo.eu',
            'header':'hide',
            'ssl':true};
            s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.eu/scripts/embed/form.js';
            s.onload = s.onreadystatechange = function() {
              var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
              try { piokdbc1le1ngw = new WufooForm();piokdbc1le1ngw.initialize(options);piokdbc1le1ngw.display(); } catch (e) {}};
              var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
            })(document, 'script');</script>

            <p>
              <a href="<?php include('pdflink.php');?>" target="_blank">
                Læs en uddybning af betingelserne for tilmelding her.            
              </a>
            </p>
            <p>
              <a href="https://www.mercedes-benz-sprinter.dk/hangar" target="_blank">
                Læs mere om arrangementet her.
              </a>
            </p>



          </div>
        </div>

        <div class="row pt-4">
          <div class="col pt-5 text-center">
            <p class="pt-3">Ankommer om:</p>
            <p><span id="counter">00;00;00;00</span></p>
          </div>
        </div>
      </div>

      <div>
        <img src="images/footer.png" class="img-fluid fullWidth">
      </div>
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script type="text/javascript">
        var countDownDate = new Date("Jun 7, 2018 17:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    /*document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";*/
    var dayString;
    var hourString;
    var minuteString;
    var secondString;

    if(days < 10){
      dayString = "0" + days;
    } else {
      dayString = days;
    }
    if(hours < 10){
      hourString = "0" + hours;
    } else {
      hourString = hours;
    }
    if(minutes < 10){
      minuteString = "0" + minutes;
    } else {
      minuteString = minutes;
    }
    if(seconds < 10){
      secondString = "0" + seconds;
    } else {
      secondString = seconds;
    }


    document.getElementById("counter").innerHTML = dayString + ";" + hourString + ";" + minuteString + ";" + secondString;

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("counter").innerHTML = "00;00;00;00";
    }
  }, 1000);
</script>
</body>
</html>