const redCard = document.getElementById('card-3');

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
};

// Projects page
$(redCard).mouseenter(function() {
    redCard.style.backgroundColor = '#FFEBEE';
});
$(redCard).mouseleave(function(){
    redCard.style.backgroundColor = '#FFFFFF'
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
