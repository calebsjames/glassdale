const contentTarget = document.querySelector(".displayFacilities")
const eventHub = document.querySelector(".container")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = 
    `
    <button id='displayFacilities'>Show Facilities</button>
    
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "displayFacilities") {
        
        const customEvent = new CustomEvent("displayFacilitiesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})
