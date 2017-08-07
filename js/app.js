$(function() {
    var ul = $("#weather");
    var body = $("body");
    var temp = $(".temp");
    var icon = $(".icon");

    var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Katowice&APPID=e066f50227d64e3af0e4296523d85c5a';

    function instertWeather(object,weather) {
          var p = $('<p>').text("Ostatnia aktualizacja: "+weather[0].dt_txt);
          body.append(p);

          var li1 = $('<li>');
          var span1 = $('<span>').text("Prędkość wiatru: "+weather[0].wind.speed+" metr/sec");
          li1.append(span1);
          ul.append(li1);

          var li2 = $('<li>');
          var span2 = $('<span>').text("Ciśnienie: "+Math.floor(weather[0].main.pressure)+" hPa");
          li2.append(span2);
          ul.append(li2);

          var img = $('<img>');
          img.attr("src","http://openweathermap.org/img/w/" + weather[0].weather[0].icon + ".png");
          icon.append(img);

          var temp_info = $('<p>').text("Temperatura: "+Math.floor(weather[0].main.temp - 273.15));
          temp.prepend(temp_info);
        };


    function loadWeather() {
          $.ajax({
            url: weatherUrl,

            method: 'GET'
          }).done(function(response){
            console.log(response);
            instertWeather(response, response.list);
         }).fail(function(error) {
             console.log(error);
         })
    }
    loadWeather()
});
