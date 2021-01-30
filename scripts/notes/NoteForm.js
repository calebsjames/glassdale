import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")



const render = () => {
    contentTarget.innerHTML = `
    <h3>NOTES</h3>
    <article class="noteBox">
        <input type="date" id="noteDate"><br>
        <label for="noteText">Text:</label><br>
        <input type="text" size=50 id="noteText"><br>
        <label for="suspect">Suspect:</label><br>
        <input type="text" size=50 id="suspect"><br>
        <label for="author">Author:</label><br>
        <input type="text" size=50 id="author"><br>
        <button id="saveNote">Save Note</button>
    </article>
    `
}

export const NoteForm = () => {
    render()
}



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        const suspect = document.getElementById("suspect").value
        const noteText = document.getElementById("noteText").value
        const noteDate = document.getElementById("noteDate").value
        const author = document.getElementById("author").value
        // const author = document.getElementById("author").value
        const newNote = {
            "date": noteDate,
            "text": noteText,
            "author": author,
            "suspect": suspect
            // Key/value pairs here
        }
        // debugger

        // Change API state and application state
        saveNote(newNote)
    }
})
