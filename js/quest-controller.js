'use strict';

$(document).ready(init);

function init() {
    loadData();
    if (isEmpty(gQuestsTree)) createQuestsTree();
}

function onStartGuessing() {
    // TODO: hide the game-start section
    $('.game-start').hide();
    renderQuest();
    // TODO: show the quest section
    $('.quest').show();
}

function renderQuest() {
    // TODO: select the <h2> inside quest and update its text by the currQuest text
    $('.quest h2').text(gCurrQuest.txt);
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            onRestartGame();
            // TODO: improve UX
        } else {
            alert('I dont know...teach me!')
            $('.quest').hide();
            $('.new-quest').show();
            // TODO: hide and show new-quest section
        }
    } else {
        setLastRes(res)
        moveToNextQuest();
        renderQuest();
    }
}

function onAddGuess() {
    // TODO: Get the inputs' values
    // TODO: Call the service addGuess
    var newQuest = $('#newQuest').val();
    console.log(newQuest);
    var newGuess = $('#newGuess').val();
    console.log(newGuess);
    addGuess(newQuest, newGuess);
    saveData();
    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.quest').hide();
    $('.game-start').show();
    resetGlobals();
    //TODO: reset the lastRes to null

}

