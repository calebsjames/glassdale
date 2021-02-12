//import statements
import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminals } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getWitnesses, useWitness } from "../witnesses/WitnessDataProvider.js"
import { Witness } from "../witnesses/Witnesses.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityDataProvider.js"
import { useFacilities } from "../facilities/FacilityDataProvider.js"


//define event hub for listening
const eventHub = document.querySelector(".container")

//define location that will house "criminalList" which houses criminal cards
const criminalContainer = document.querySelector(".criminalsContainer")


// //export function to put criminal slices on DOM
// export const CriminalList = () => {
//     //gets criminals from API
//     getCriminals()
//     //house sliced criminals in criminalArray and facilities 
//     .then(() => {
//         const criminalArray = useCriminals()

//         //get and use criminalFacilities
//         const criminalFacilities = getCriminalFacilities()
//             .then(() => {
//                 const facilityArray = useCriminalFacilities()
//                 debugger
//                 //give criminalArray to criminalToDOM 
//                 criminalToDom(criminalArray, facilityArray)
//             })
            
//         })
// }





//export function to put criminal slices on DOM
export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                criminalToDom(criminals, facilities, crimFac)
            }
        )
}









const criminalToDOM = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}



// //define function to put sliced data on DOM
// const criminalToDom = (criminalCollection, facilityCollection, criminalInFacilityCollection) => {
//     //defin an empty string to house the HTML representation
//     let criminalHTMLRepresentation = ""
//     //iterate through criminalArray and add each criminal to the HTMLRep
//     for (const criminal of criminalCollection) {
//         criminalHTMLRepresentation += Criminals(criminal)
//     }

    
//     criminalContainer.innerHTML = `
//         <button id="criminalButton">Criminals</button>
//         <button id="witnessButton">Witnesses</button>
//         <section class="criminalList">
//         ${criminalHTMLRepresentation}
//         </section>`
// }












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
        const facilities = useFacilities()
        const criminalInFacility = useCriminalFacilities()

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