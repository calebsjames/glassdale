import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminals } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getWitnesses, useWitness } from "../witnesses/WitnessDataProvider.js"
import { Witness } from "../witnesses/Witnesses.js"


const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".criminalsContainer")


export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            criminalToDom(criminalArray)
        })
}

const criminalToDom = (criminalCollection) => {

    let criminalHTMLRepresentation = ""
    
    for (const criminal of criminalCollection) {
        criminalHTMLRepresentation += Criminals(criminal)
    }
    
    criminalContainer.innerHTML = `
        <button id="criminalButton">Criminals</button>
        <button id="witnessButton">Witnesses</button>
        <section class="criminalList">
        ${criminalHTMLRepresentation}
        </section>`
}


//event listener to filter criminal list by crime
eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        
        const convictionsArray = useConvictions()
        
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            // console.log("currently checking", convictionObj)
            return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })
            
        const criminalArray = useCriminals()

        const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

        criminalToDom(filteredCriminalsArray)
    }
})


//event listener to filter criminals by arresting officer
eventHub.addEventListener("officerSelect", officerChosenEvent => {
    if (officerChosenEvent.detail.selectedOfficer !== "0") {
        
        const criminals = useCriminals()
        
        const officerName = officerChosenEvent.detail.selectedOfficer

        const chosenOfficerObject = criminals.filter(
            criminalObject => {
                if (criminalObject.arrestingOfficer === officerName) {
                    return true
                }
            }
        ) 
        criminalToDom(chosenOfficerObject)
    }
})












const witnessToDom = (witnessCollection) => {
    
    let witnessHTMLRepresentation = ""
    for (const witness of witnessCollection) {
        witnessHTMLRepresentation += Witness(witness)
    }
    
    
    criminalContainer.innerHTML = `
    <button id="criminalButton">Criminals</button>
    <button id="witnessButton">Witnesses</button>
    <section class="witnessList">
    ${witnessHTMLRepresentation}
    </section>`   
}

const WitnessList = () => {

    getWitnesses()
        .then(() => {
            const witnessArray = useWitness()
            witnessToDom(witnessArray)
        })
}


eventHub.addEventListener("showWitnesses", event => {

    WitnessList()      
})

eventHub.addEventListener("showCriminals", event => {
    CriminalList()
})