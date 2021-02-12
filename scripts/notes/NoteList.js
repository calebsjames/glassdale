import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { Criminals } from "../criminals/Criminal.js";


// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".notesAside")
const noteContainerTarget = document.querySelector(".notesContainer")
// Define eventHub
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})






const render = (noteArray, criminalCollection) => {
    
    noteContainerTarget.innerHTML = noteArray.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === parseInt(note.criminalId))
    
        
        return `
            <section class="notesList">
            <h3 id="criminalName">Note about ${relatedCriminal.name}</h3>
            </section>
            <section class="note">
                <div class="note__text">${ note.text }</div>
                <div class="note__suspect">Suspect: ${ note.suspect }</div>
                <div class="note__author">Author: ${ note.author }</div>
                <div class="note__timestamp">Date: ${ note.date }</div>
                <div class="note__criminal">Criminal: ${ note.criminalId }</div>
                <button id="deleteNote--${note.id}">Delete</button>
        </section>
        `
    }).join("")
}
    





// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            const criminals = useCriminals()
            render(allNotes, criminals)
        })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

eventHub.addEventListener("clearNotesClicked", customEvent => {
    noteContainerTarget.innerHTML = ""
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})
