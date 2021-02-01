const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

export const ShowNoteButton = () => {
    contentTarget.innerHTML = 
    `
    <button id='showNotes'>Show Notes</button>
    <button id='clearNotes'>Clear Notes</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "clearNotes") {
        const customEvent = new CustomEvent("clearNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})