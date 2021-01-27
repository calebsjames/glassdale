import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminals } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".criminalsContainer")


export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            renderToDom(criminalArray)
        })
}

const renderToDom = (criminalCollection) => {

    let criminalHTMLRepresentation = ""
    
    for (const criminal of criminalCollection) {
        criminalHTMLRepresentation += Criminals(criminal)
    }
    
    criminalContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalList">
        ${criminalHTMLRepresentation}
        </section>`
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        
        const convictionsArray = useConvictions()
        
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            console.log("currently checking", convictionObj)
            return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })
        console.log(chosenConvictionObject.name)
        
        debugger
        const criminalArray = useCriminals()

        const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

        renderToDom(filteredCriminalsArray)
    }
})