const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "alibiListButton") {
        
        
        const selectedCriminal = clickEvent.target.value

        const customEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                selectedCriminal: selectedCriminal

            }            
        })
        eventHub.dispatchEvent(customEvent)
    }
})
