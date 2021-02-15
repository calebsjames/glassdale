const contentTarget = document.querySelector(".displayFacilities")
const eventHub = document.querySelector(".container")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = 
    `
    <button id='displayFacilities'>Show All Facilities</button>
    <button id='displayCriminals'>Show All Criminals</button>
    
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "displayCriminals") {
        
        const customEvent = new CustomEvent("displayCriminalsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "displayFacilities") {
        
        const customEvent = new CustomEvent("displayFacilitiesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})