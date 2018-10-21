$(document).ready(function () {

var subjectArray = ["wedding", "birthday", "St. Patrick's Day", "Hanukkah"];


$("button").on("click", function() {

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

        var results = response.data;

        

      });  //End of .then function

});  //End .on Click function

}); //End document.ready