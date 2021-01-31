 // const eventHub = document.querySelector(".container")
const eventHub = document.querySelector(".container")



// On the event hub, listen for a "click" event.
eventHub.addEventListener("click", clickEvent => {
    // Only do this if the `witnessSelect` element was changed
    if (clickEvent.target.id === "witnessButton") {
        
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("showWitnesses")

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

// On the event hub, listen for a "click" event.
eventHub.addEventListener("click", clickEvent => {
    // Only do this if the `witnessSelect` element was changed
    if (clickEvent.target.id === "criminalButton") {
        
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("showCriminals")

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})