function myFunction() {
    // use jQuery ($ is shorthand) to find the div on the page and then change the html
    // jQuery can do a lot of crazy stuff so make sure to google around to find out more

    $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

    // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
    $("#doge-image").append('<img class="img-circle" src="images/wowdoge.jpeg" />');
}

// $(document).ready(function() {
//     getRankings();
// });

function getRankings(searchWeek) {
    var url = "https://api.collegefootballdata.com/rankings?year=2019&week=" + searchWeek + "&season=regular";

    $.ajax(url, {
        success: function(data) {
            console.log(data);
            $(".poll").text(data[0].polls[0].poll);
            $(".week").text(data[0].week);
            $(".rank").text(data[0].polls[0].ranks[24].rank);
            $(".school").text(data[0].polls[0].ranks[24].school);
            $(".conference").text(data[0].polls[0].ranks[24].conference);
            $(".firstPlaceVotes").text(data[0].polls[0].ranks[24].firstPlaceVotes);
            $(".points").text(data[0].polls[0].ranks[24].points);
        },
        error: function(error) {
            $(".error-message").text("An error occured");
        }
    });
}

function searchRankings() {
    var searchWeek = $(".search").val();
    getRankings(searchWeek);
}