import { useWitness, getWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witnesses.js"

// const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".witnessContainer")

export const WitnessList = () => {

    getWitnesses()
        .then(() => {
            const witnessArray = useWitness()
            renderToDom(witnessArray)
        })
}

const renderToDom = (witnessCollection) => {

    let witnessHTMLRepresentation = ""
    for (const witness of witnessCollection) {
        witnessHTMLRepresentation += Witness(witness)
    }
    
    debugger
    witnessContainer.innerHTML = `
        <button id="criminalButton"><h4>Criminals</h4></button>
        <button id="witnessButton"><h4>Witnesses</h4></button>
        <section class="witnessList">
        ${witnessHTMLRepresentation}
        </section>`

    
}

