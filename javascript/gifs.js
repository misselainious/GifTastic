$(document).ready(function () {

var topics = ["Wedding", "Birthday", "Halloween", "Hanukkah"];



    function displayGif(){

        var holiday = $(this).attr("data-name");
            //create queryURL for Holidays
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + holiday + "&api_key=XwdmbLYAnmKxNb9IY2yLPMMGlo5Sk2VL&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .then(function(response) {
        var rating = response.Rated;
        var results = response.data;
        console.log("var rated: " + response.Rated);

        for(var i=0; i<results.length; i++){
        var holidayDiv = $("<div>");

          // Creating an element to have the rating displayed
          var rate = $("<p>").text("Rating: " + results[i].rating);

          // Putting the gif above the previous gifs
        
          var gifImage = $("<img>");

          gifImage.attr("src", results[i].images.fixed_height.url);

// Displaying the rating
 holidayDiv.append(rate);
holidayDiv.append(gifImage);
holidayDiv.addClass("gifResult");
$("#gifArea").prepend(holidayDiv);
        }  //End of for loop
      });  //End of .then function
    }


//Making buttons for holiday array
    function renderButtons(){
        //So we don't have repeating buttons
        $("#buttonDiv").empty();
        for (holiday of topics){
            //make button
            var b = $("<button>");
            b.addClass("btn btn-light");
            b.attr("data-name", holiday);
            b.text(holiday);
            $("#buttonDiv").append(b); 
        }
    }

    $("#addHoliday").on("click", function(event){
        
        event.preventDefault();

        var newHoliday = $("#holidayText").val().trim();

        topics.push(newHoliday);

        $("#holidayText").val("");
 
        renderButtons();

        
        
    });

    $(document).on("click", ".btn-light", displayGif);

    renderButtons();
}); //End document.ready