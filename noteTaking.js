/** @format */

let detachedAd;
let noteIndex = 0;

function createNote() {
    let maxNoteNum = $("#noteboard p")
    let noteNumber = parseInt($("#positionNum").val());
    let noteTitle = $("#note-title").val();
    let noteContent = $("#note-content").val();
    let para = $(`<p class="note" data-note-index="${noteIndex}"><strong>${noteTitle}</strong><br>${noteContent}</p>`);
    let lastPara = maxNoteNum.eq(noteNumber - 1);
    if (maxNoteNum.length == 0 || noteNumber > maxNoteNum.length){
        para.appendTo($("#noteboard")).hide().slideDown(1000);
        noteIndex++;
    }else {
        lastPara.before(para);
    }
};

const tempDelete = () => {
    const noteNumber = parseInt($("#positionNumTempRemove").val() - 1);
    const noteToRemove = $("#noteboard p:eq(" + noteNumber + ")");
    detachedAd = noteToRemove.detach();
    console.log("noteNumber: "+noteNumber+" noteToRemove: "+noteToRemove)
};

const restoreNote = () => {
    $("#noteboard").append(detachedAd);
};

const removeAd = () => {
    const noteNumber = parseInt($("#positionNumFullRemove").val() - 1);
    const noteToRemove = $("#noteboard p:eq(" + noteNumber + ")");
    noteToRemove.remove();
    console.log("noteNumber: "+noteNumber+" noteToRemove: "+noteToRemove)
};

const deleteAll = () => {
    $("#noteboard").empty();
    noteIndex = 0;
};
