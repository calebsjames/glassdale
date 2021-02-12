export const NoteHTMLConverter = (noteObject) => {
    
    return `
        
        <section class="note">
            <div class="note__text">${ noteObject.text }</div>
            <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Date: ${ noteObject.date }</div>
            <div class="note__criminal">Criminal: ${ noteObject.criminalId }</div>
        </section>
    `
}