const redCard = document.getElementById('card-3');
var orangeCard = document.getElementById('card-4');
var yellowCard = document.getElementById('card-5');

// Projects page
$(redCard).mouseenter(function() {
    redCard.style.backgroundColor = '#FFEBEE';
});
$(redCard).mouseleave(function(){
    redCard.style.backgroundColor = '#FFFFFF';
});

$(orangeCard).mouseenter(function(){
    this.style.backgroundColor = '#FFECB3';
});
$(orangeCard).mouseleave(function(){
    this.style.backgroundColor = '#FFFFFF'
})
$(yellowCard).mouseenter(function (){
    this.style.backgroundColor = '#FFF9C4'
})
$(yellowCard).mouseleave(function (){
    this.style.backgroundColor = '#FFFFFF'
})


function fetchGitHubInformation(event){
    var username = $('#gh-username').val();
    if(!username){
        $('#gh-user-data').html(`<h2>Please enter a GitHub username, mine is alcl200</h2>`);
        return;
    }
    $('#gh-user-data').html(
        `<div id=loader>
            <img src='assets/images/loader.gif alt= 'loading'/>
        </div>`
    )
};
