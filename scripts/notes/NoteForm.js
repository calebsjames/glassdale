const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <div class="note">
            <p class="notesTitle"><b>NOTES</b><br>
            <input type="date" id="noteDate"><br>
            <input type="text" size=50 id="noteText">
            <button id="saveNote">Save Note</button>
        </div>
    `
}

export const NoteForm = () => {
    render()
}