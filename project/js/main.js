function myFunction() {
    // use jQuery ($ is shorthand) to find the div on the page and then change the html
    // jQuery can do a lot of crazy stuff so make sure to google around to find out more

    $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

    // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
    $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

$(document).ready(function() {
    getRankings();
})

function getRankings() {
    var url = "https://api.collegefootballdata.com/rankings?year=2019&week=12&season=regular";

    $.ajax(url, {
        success: function(data) {
            console.log(data);
            $(".poll").text(data[0].polls[1].poll);
            $(".rank").text(data[0].polls[1].ranks[18].rank);
            $(".school").text(data[0].polls[1].ranks[18].school);
            $(".conference").text(data[0].polls[1].ranks[18].conference);
            $(".points").text(data[0].polls[1].ranks[18].points);
        }
    })
}