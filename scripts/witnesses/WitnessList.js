import { useWitness, getWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witnesses.js"

// const eventHub = document.querySelector(".container")
const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".criminalsContainer")

export const WitnessList = () => {

    getWitnesses()
        .then(() => {
            const witnessArray = useWitness()
            witnessToDom(witnessArray)
        })
}

const witnessToDom = (witnessCollection) => {

    let witnessHTMLRepresentation = ""
    for (const witness of witnessCollection) {
        witnessHTMLRepresentation += Witness(witness)
    }
    
    
    witnessContainer.innerHTML = `
        <button id="criminalButton"><h4>Criminals</h4></button>
        <button id="witnessButton"><h4>Witnesses</h4></button>
        <section class="witnessList">
        ${witnessHTMLRepresentation}
        </section>`   
}

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