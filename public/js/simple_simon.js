'use strict';
console.log('Welcome to Simple Simon');

//color 'blink'
$('.color').click(function(event){
    var squareClicked = $(this);
    console.log(squareClicked);
});

//animate square when Simon or user clicks

function animateSquare(color){
    color.addClass('active');
    setTimeout(function(){
        color.removeClass('active');
    }, 1000);
};

//generate random color between 0 and 3 from Simon

function getRandomSquare(){
    var squares = $('.color');
    var random = Math.floor(Math.random() * 4);
    console.log(random);
}

//remember and add to sequence

//iterate animate each square in Simon's sequence

//if user input is equal to Simon's sequence, continue playing; NOT equal to Simon's sequence, game over

//activate start button
$('#start').click(function(){
    startSimonGame();
})