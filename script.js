
let planetArray = [];
let planets;


$(function () {
    console.log('ready!')
    // let planetClasses;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $('input:radio').click(function () {
        let planetClasses = $(this).attr('class');
        planets = planetClasses.split(' ');
        console.log(planets);
        planetArray = planetArray.concat(planets);
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
        $('#q2').addClass('hide');
        $('#q3').removeClass('hide');
    });

    $('#q3 input:radio').click(function () {
        $('#q3').addClass('hide');
        $('#q4').removeClass('hide');
    });

    $('#q4 input:radio').click(function () {
        $('#q4').addClass('hide');
        $('#q5').removeClass('hide');
    });

    $('#q5 input:radio').click(function () {
        $('#q5').addClass('hide');
        $('#q6').removeClass('hide');
    });

    $('#q6 input:radio').click(function () {
        $('#q6').addClass('hide');
        $('#q7').removeClass('hide');
    });

    $('#q7 input:radio').click(function () {
        $('#q7').addClass('hide');
        $('#q8').removeClass('hide');
    });

    $('#q8 input:radio').click(function () {
        $('#q8').addClass('hide');
        $('#q9').removeClass('hide');
    });

    $('#q9 input:radio').click(function () {
        $('#q9').addClass('hide');
        $('#q10').removeClass('hide');
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        
        function count() {
            let mf = 1;
            let m = 0;
            let item;
            for (let i = 0; i < planetArray.length; i++) {
                for (let j = i; j < planetArray.length; j++) {
                    if (planetArray[i] == planetArray[j])
                        m++;
                    if (mf < m) {
                        mf = m;
                        item = planetArray[i];
                    }
                }
                m = 0;
            }
            return item;
        };

        let userAnswer = count();
        console.log(`you got ${userAnswer}`);
        $(this).addClass('hide');
        $(`.${userAnswer}`).removeClass('hide'); 
    })

    $('.whiteOut').on("click", function(e){
        e.preventDefault();
        $('form').attr("top", "-5vw");
    })

});