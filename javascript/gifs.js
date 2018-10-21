$(document).ready(function () {

var subjectArray = ["wedding", "birthday", "St. Patrick's Day", "Hanukkah"];



    var holiday = $(this).attr("data-holiday");

    //create queryURL for Holidays
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    holiday + "&api_key=XwdmbLYAnmKxNb9IY2yLPMMGlo5Sk2VL";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);
        console.log(response);

        var holidayDiv = $("<div class='holiday'>");
        var rating = response.Rated;
          // Creating an element to have the rating displayed
          var rate = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          holidayDiv.prepend(rate);
          // Putting the gif above the previous gifs
          $("#gifArea").prepend(holidayDiv);
          
        var results = response.data;


      });  //End of .then function





    function renderButtons(){
        //So we don't have repeating buttons
        $("#buttonDiv").empty();
        for (holiday of subjectArray){
            //make button
            var b = $("<button>");
            b.addClass("btn btn-light");
            b.attr("data-name", holiday);
            b.text(holiday);
            $("#buttonDiv").append(b); 
        }
    }

    renderButtons();
}); //End document.ready