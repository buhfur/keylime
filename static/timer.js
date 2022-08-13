function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    $('#timer').text(" ");
    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.text(`${paddedFormat(min)}:${paddedFormat(sec)}`);

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) {
             clearInterval(countInterval) 
             //user loses the game
             alert("you lose!");
             quit();

            };

        $('#quit').click(function(){
            $('#timer').text(" ");
            clearInterval(countInterval);
        });

    }, 1000);
}

$('.levelSelectButton').click(function() {
    let time_minutes = 1; // Value in minutes
    let time_seconds = 30; // Value in seconds

    let duration = 5 * 60 + time_seconds;

    element = $('#timer').text( `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`);

    startCountDown(--duration, element);
});
