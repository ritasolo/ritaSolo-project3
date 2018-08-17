
let planetArray = [];
let planets;


$(function () {
    console.log('ready!')
    // let planetClasses;
    $('.play-button').click(function() {
        $("#audio1")[0].pause();
        $(this).addClass('hide');
        $('.pause-button').removeClass('hide');
    });
    $('.pause-button').click(function () {
        $("#audio1")[0].play();
        $(this).addClass('hide');

        $('.play-button').removeClass('hide');
    });

    $('input:radio').click(function () {
        let planetClasses = $(this).attr('class');
        planets = planetClasses.split(' ');
        console.log(planets);
        planetArray = planetArray.concat(planets);
    });

    $('.quiz-button').on("click", function() {
        $('.take-quiz').hide();
        $('#q1').removeClass('hide');
    });

    $('#q1 input:radio').click(function() {
        setTimeout(
            function () {
                $('#q1').addClass('hide');
                $('#q2').removeClass('hide');
            },
            500);
    });

    $('#q2 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q2').addClass('hide');
                $('#q3').removeClass('hide');
            },
            500);
    });

    $('#q3 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q3').addClass('hide');
                $('#q4').removeClass('hide');
            },
            500);
    });

    $('#q4 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q4').addClass('hide');
                $('#q5').removeClass('hide');
            },
            500);
    });

    $('#q5 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q5').addClass('hide');
                $('#q6').removeClass('hide');
            },
            500);
    });

    $('#q6 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q6').addClass('hide');
                $('#q7').removeClass('hide');
            },
            500);
    });

    $('#q7 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q7').addClass('hide');
                $('#q8').removeClass('hide');
            },
            500);
    });

    $('#q8 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q8').addClass('hide');
                $('#q9').removeClass('hide');
            },
            500);
    });

    $('#q9 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q9').addClass('hide');
                $('#q10').removeClass('hide');
            },
            500);
    });

    $('#q10 input:radio').click(function () {
        setTimeout(
            function () {
                $('#q10').addClass('hide');
                $('input:submit').removeClass('hide');
            },
            500);
    });

    $('input[type="submit"]').click(function (e) {
        e.preventDefault(); 
        function count(arr) {
            return arr.sort((a, b) =>
                arr.filter(value => value === a).length 
                - arr.filter(value => value === b).length
            ).pop();
        }

        function mode(arr) {
            return arr.sort(function (a, b) {
                return arr.filter(function (v) { return v === a }).length
                    - arr.filter(function (v) { return v === b }).length
            }).pop();
        }

        let userAnswer = count(planetArray);
        console.log(`you got ${userAnswer}`);
        $(this).addClass('hide');
        $(`.${userAnswer}`).removeClass('hide').addClass('flex');
        $('.solarsystem').hide(); 
        $('.title').hide();
        $('.you-are').removeClass('hide');
        $('input[type=reset]').removeClass('hide');
    })
    $('input[type=reset]').click(function() {
        location.reload();
    });


});