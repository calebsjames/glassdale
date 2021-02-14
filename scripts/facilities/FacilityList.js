import { useCriminals } from "../criminals/CriminalDataProvider.js"
import { useCriminalFacilities } from "./CriminalFacilityDataProvider.js"
import { Facilities } from "./Facility.js"
import { useFacilities } from "./FacilityDataProvider.js"

//define event hub for listening
const eventHub = document.querySelector(".container")

//define location that will house "criminalList" which houses criminal cards
const criminalContainer = document.querySelector(".criminalsContainer")




//render to DOM function
const facilitiesToDom = (criminalsToRender, allFacilities, allRelationships) => {
    //Iterate through the facilities with .map and insert it into innerHTML
    //This will be the main content of the cards
    debugger
    criminalContainer.innerHTML = allFacilities.map(
        //(variable) to reference values in allFacilities and pass to Facilities()
        (facilityObject) => {
            //declare a new variable and filter allRelationships to get cf.facilityId that is equal to facilityObject.id
            const criminalsRelatedToThisFacility = allRelationships.filter(
                cf => cf.facilityId === facilityObject.id)

            //declare a new variable to house .map() of criminalsRelatedToThisFacility
            const criminals = criminalsRelatedToThisFacility.map(cf => {
                //newVariable = criminalsToRender found that id() matches facilityId (criminalFacilities)
                const matchingCriminalObject = criminalsToRender.find(criminal => criminal.id === cf.criminalId)
                //return the newVariable
                return matchingCriminalObject
            })

            // Must pass the matching facilities to the Criminal component

            return Facilities(facilityObject, criminals)

        }
    ).join("")
}


//event listener to filter criminal list by crime
eventHub.addEventListener("displayFacilitiesClicked", event => {
    
    const criminals = useCriminals()
    const facilities = useFacilities()
    const crimFacilities = useCriminalFacilities()
    
        facilitiesToDom(criminals, facilities, crimFacilities)
    }
)