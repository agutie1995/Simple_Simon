'use strict';
console.log('Welcome to Simple Simon');

var simonSequence = [];
var userIndex = 0;

//activate start button
$('#start').click(function(){
    console.log('Let\'s play!');
    simonSequence =[];
    newRound();
});

//color blink when clicked
    //color blink when user clicks
function animateColor(id){
    $('#' + id).addClass('active');
    setTimeout(function(){
        $('#' + id).removeClass('active');
    }, 750);
};

//generate random color between 0 and 3 from Simon
function getRandomColor(){
    var colors = $('.color');
    var randomColor =  Math.floor(Math.random() * 4);
    var buttonToAnimate = colors[randomColor];
    var id = buttonToAnimate.getAttribute('id');
    simonSequence.push(id);
    console.log(simonSequence);
};

//new round/Simon's turn
function newRound(){
    playSimonSequence();
    getRandomColor();
    $('#roundNumber').val('Round ' + simonSequence.length);
};

//iterate each square in Simon's sequence
function playSimonSequence(){
    var i = 0;
    var intervalId = setInterval(function(){
    if (i >= simonSequence.length){
            clearInterval(intervalId);
        }
        animateColor(simonSequence[i]);
        i += 1;
        }, 1000);
};

$('.color').click(function(event){
    var colorClicked = $(this);
    console.log(colorClicked);
});

//if user input is equal to Simon's sequence, continue to next round; NOT equal to Simon's sequence, game over
$('.color').click(function(event){
    var idOfColorClicked = $(this).attr('id');
    animateColor(idOfColorClicked);
    if (idOfColorClicked == simonSequence[userIndex]){
        userIndex++;
        if (userIndex == simonSequence.length){
        newRound();
        userIndex = 0;
        }   
    } else {
            alert('GAME OVER!');
            console.log('GAME OVER!');
            location.reload(true);
    }
});