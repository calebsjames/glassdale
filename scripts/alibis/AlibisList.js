import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { AlibisHTML } from "./Alibis.js"
// import { useConvictions } from "../convictions/ConvictionProvider.js"

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

    for (const alibi of alibiCollection) {
        alibiHTMLRepresentation += AlibisHTML(alibi)
    }

    alibiContainer.innerHTML = `
        <h3>Alibis</h3>
        <setion class="alibiList">
        ${alibiHTMLRepresentation}
        </section>
    `
}

const chosenCriminalObj = (criminalName) => {
    let alibiArray = useCriminals()
    
    const chosenCriminal = alibiArray.find(criminalObj => {
        return criminalObj.value === criminalName
    })
    debugger
    return chosenCriminal
}
console.log(chosenCriminalObj.name)
console.log(chosenCriminalObj.known_associates)

eventHub.addEventListener("alibiButtonClicked", alibiButtonEvent => {
    const chosenCriminal = alibiButtonEvent.detail
    console.log(chosenCriminal)

        return chosenCriminal


    // renderToDom(AlibisHTML)
})