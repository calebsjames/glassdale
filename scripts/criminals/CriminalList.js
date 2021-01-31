import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminals } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getWitnesses, useWitness } from "../witnesses/WitnessDataProvider.js"
import { Witness } from "../witnesses/Witnesses.js"


// import { useOfficers } from "../officers/OfficerDataProvider.js"

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
        <button id="criminalButton"><h4>Criminals</h4></button>
        <button id="witnessButton"><h4>Witnesses</h4></button>
        <section class="criminalList">
        ${criminalHTMLRepresentation}
        </section>`
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        
        const convictionsArray = useConvictions()
        
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            // console.log("currently checking", convictionObj)
            return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })
        console.log(chosenConvictionObject.name)
        
        
        const criminalArray = useCriminals()

        const filteredCriminalsArray = criminalArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

        criminalToDom(filteredCriminalsArray)
    }
})

eventHub.addEventListener("officerSelect", officerChosenEvent => {
    if (officerChosenEvent.detail.officer !== "0") {
        
        const officerName = officerChosenEvent.detail.selectedOfficer
        
        const criminals = useCriminals()

        

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
    <button id="criminalButton"><h4>Criminals</h4></button>
    <button id="witnessButton"><h4>Witnesses</h4></button>
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