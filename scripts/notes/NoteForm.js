import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"
import { saveNote } from "./NoteDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


const render = (criminalCollection) => {

    contentTarget.innerHTML = `
    <h3 id="noteHeader">NOTES</h3>
    <article class="noteBox">
        <input type="date" id="noteDate"><br>
        <label for="noteText">Text:</label><br>
        <textarea rows="5" cols="46" id="noteText"></textarea><br>
        <label for="suspect">Suspect:</label><br>
        <input type="text" size=50 id="suspect"><br>
        <label for="author">Author:</label><br>
        <input type="text" size=50 id="author"><br>
        <label for="noteForm--criminal">criminal: </label><br>
        <select id="noteForm--criminal" class="criminalSelect">
        ${criminalCollection.map(criminal => `<option value="${ criminal.id }">${ criminal.name }</option>`).join("")}
        </select><br>
        <button id="saveNote">Save Note</button>
        </article>`
        
    }
    
//render NoteForm on DOM 
export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const arrayOfCriminals = useCriminals()
            render(arrayOfCriminals)
    })
}



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        // Make a new object representation of a note
        const suspect = document.getElementById("suspect").value
        const noteText = document.getElementById("noteText").value
        const noteDate = document.getElementById("noteDate").value
        const author = document.getElementById("author").value
        const criminal = document.getElementById("noteForm--criminal").value
        // const author = document.getElementById("author").value
        const newNote = {
            "date": noteDate,
            "text": noteText,
            "author": author,
            "suspect": suspect,
            "criminalId": parseInt(criminal)
            // Key/value pairs here
        }
        // debugger

        // Change API state and application state
        saveNote(newNote)
    }
})
