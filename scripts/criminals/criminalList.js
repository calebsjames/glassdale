import {getCriminals, useCriminals} from "./CriminalDataProvider.js"
import {Criminals} from "./Criminal.js"

const criminalContainer = document.querySelector(".criminalsContainer")

export const criminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalHTMLRepresentation = ""

            for (const criminal of criminalArray) {
                criminalHTMLRepresentation += Criminals(criminal)
            }

            criminalContainer.innerHTML = `
                <h3>Criminals</h3>
                <section class="criminalList">
                ${criminalHTMLRepresentation}
                </section>`
        })
}