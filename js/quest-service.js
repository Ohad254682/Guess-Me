var gQuestsTree={};
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;


function createQuestsTree() {
    gQuestsTree = createQuest('Male?');

    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');

    gCurrQuest = gQuestsTree;

    gPrevQuest = null;

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[gLastRes];
}

function setLastRes(res) {
    gLastRes = res;
    // TODO: update the lastRes global
}

function addGuess(newQuestTxt, newGuessTxt) {
    var newQuestQ = createQuest(newQuestTxt);
    var newQuestG = createQuest(newGuessTxt);
    newQuestQ.yes = newQuestG;
    console.log(newQuest.yes);
    newQuestQ.no = gCurrQuest;
    console.log(newQuest.no);
    gPrevQuest[gLastRes] = newQuestQ;
    console.log(gPrevQuest[gLastRes]);

    // TODO: Create and Connect the 2 Quests to the quetsions tree using the gLastRes

}

function resetGlobals() {
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}

function loadData(){
    gQuestsTree=loadFromStorage('database',{});
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function saveData(){
    saveToStorage('database',gQuestsTree);
}


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

