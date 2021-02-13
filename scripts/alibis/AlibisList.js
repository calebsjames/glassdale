import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { AlibisHTML } from "./Alibis.js"

const eventHub = document.querySelector(".container")
const alibiContainer = document.querySelector(".alibiContainer")

export const AlibiList = () => {

    getCriminals()
        .then(() => {
            const alibiArray = useCriminals()
            renderToDom(alibiArray)
        })
}

const renderToDom = (alibiCollection) => {
    let alibiHTMLRepresentation = ""

    for (const alibi of alibiCollection.known_associates) {
        alibiHTMLRepresentation += AlibisHTML(alibi)
    }

    alibiContainer.innerHTML = `
        <h3>Alibis for known associates of ${alibiCollection.name}</h3>
        <setion class="alibiList">
        ${alibiHTMLRepresentation}
        </section>
        `
    }
    
    
    eventHub.addEventListener("alibiButtonClicked", alibiButtonEvent => {
        const chosenCriminalName = alibiButtonEvent.detail.selectedCriminal
            let criminalArray = useCriminals()
            
            const chosenCriminal = criminalArray.find(criminalObj => {
                return criminalObj.name === chosenCriminalName
            })
     
    renderToDom(chosenCriminal)
})