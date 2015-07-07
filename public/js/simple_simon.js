'use strict';
console.log('Welcome to Simple Simon');

var simonSequence = [];
var userInput = [];

//activate start button

$('#start').click(function(){
    console.log('Let\'s play!')
    getRandomColor();
    playSimonSequence();
});

//color 'blink'

$('.color').click(function(event){
    var idOfSquareClicked = $(this).attr('id');
    animateColor(idOfSquareClicked);
    console.log(idOfSquareClicked);
});

function animateColor(id){
    $('#' + id).addClass('active');
    setTimeout(function(){
        $('#' + id).removeClass('active');
    }, 1000);
};

//generate random color between 0 and 3 from Simon

function getRandomColor(){
    var colors = $('.color');
    var randomColor =  Math.floor(Math.random() * 4);
    var buttonToAnimate = colors[randomColor];
    var id = buttonToAnimate.getAttribute('id');
    return animateColor(id);
    simonSequence.push(id);
};

//animate square when Simon or user clicks

$('.color').click(function(event){
    var colorClicked = $(this);
    console.log(colorClicked);
});

//remember and add to sequence
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

//addEventListener to register user's click

//$('.color').click(function(event){
//    var colorClicked = $(this);
//    animateColor(colorClicked);
//});

//if user input is equal to Simon's sequence, continue to next round; NOT equal to Simon's sequence, game over/alert user

function gameOver(){
    if (userInput.length == simonSequence.length){
        playSimonSequence
    }
    if (userinput.length !== simonSequence.length){
        alert('GAME OVER.')
    };
}