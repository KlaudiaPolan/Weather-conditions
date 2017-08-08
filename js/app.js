$(function() {
    var ul = $("#weather");
    var body = $("body");
    var temp = $(".temp");
    var icon = $(".icon");

    //var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Katowice&APPID=e066f50227d64e3af0e4296523d85c5a';
    var weatherUrl = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Katowice&APPID=e066f50227d64e3af0e4296523d85c5a';

    function instertWeather(object) {
          /*var p = $('<p>').text("Data updating: "+object.dt_txt +" (every three hours)");
          body.append(p);*/
          var p = $('<p>').text("To update the data, refresh the page.");
          body.append(p);

          var li1 = $('<li>');
          var span1 = $('<span>').text(object.weather[0].description);
          li1.append(span1);
          ul.append(li1);

          var li2 = $('<li>');
          var span2 = $('<span>').text("Wind speed: "+object.wind.speed+" meter/sec");
          li2.append(span2);
          ul.append(li2);

          var li3 = $('<li>');
          var span3 = $('<span>').text("Cloudiness: "+object.clouds.all+" %");
          li3.append(span3);
          ul.append(li3);

          var li4 = $('<li>');
          var span4 = $('<span>').text("Atmospheric pressure: "+Math.floor(object.main.pressure)+" hPa");
          li4.append(span4);
          ul.append(li4);

          var li5 = $('<li>');
          var span5 = $('<span>').text("Humidity: "+object.main.humidity+" %");
          li5.append(span5);
          ul.append(li5);

          var img = $('<img>');
          img.attr("src","http://openweathermap.org/img/w/" + object.weather[0].icon + ".png");
          icon.append(img);

          var temp_info = $('<p>').text("Temperature: "+Math.floor(object.main.temp - 273.15));
          temp.prepend(temp_info);
        };


    function loadWeather() {
          $.ajax({
            url: weatherUrl,

            method: 'GET'
          }).done(function(response){
            console.log(response);
            instertWeather(response);
         }).fail(function(error) {
             console.log(error);
         })
    }
    loadWeather()
});
