let username = '';

// Page loads
// Player must enter username
    $('.popup').show();
    // User enters name
    $('#submit').click(function(event) {
        event.preventDefault()
        username = $('#username').val();
        $('.popup').hide();
        $('.chat-area').html(`<p>${username} has joined.</p>`);
        // Wait until second player has joined
    })
// Once both players join, game begins
// Players are given 3 seconds to pick a move
// Once timer ends, players moves are analyzed to determine winner
// Winner's score is incremented
// New round begins
// Rounds continue until winner's score reaches 7
// Game ends and winner's name is displayed on screen

// Player enters chat
// Text posts to chatroom