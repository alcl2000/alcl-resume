const redCard = document.getElementById('card-3');
var orangeCard = document.getElementById('card-4');
var yellowCard = document.getElementById('card-5');

// Projects page
$(redCard).mouseenter(function() {
    redCard.style.backgroundColor = 'rgba(255, 121, 121,0.1)';
});
$(redCard).mouseleave(function(){
    redCard.style.backgroundColor = '#FFFFFF';
});

$(orangeCard).mouseenter(function(){
    this.style.backgroundColor = 'rgba(255, 195, 126, 0.2)';
});
$(orangeCard).mouseleave(function(){
    this.style.backgroundColor = '#FFFFFF'
})
$(yellowCard).mouseenter(function (){
    this.style.backgroundColor = 'rgba(255, 238, 127,0.2)'
})
$(yellowCard).mouseleave(function (){
    this.style.backgroundColor = '#FFFFFF'
})

