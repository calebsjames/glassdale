import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { Officer } from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      renderToDom(officerArray)
    })
}

const renderToDom = (officerArray) => {

      let officersHTMLRepresentations = ""

      for (const officer of officerArray) {
        officersHTMLRepresentations += Officer(officer)
        // debugger
      }
      
      officersContainer.innerHTML = `
        <h3>Glassdale Officers</h3>
        <section class="officersList">
        ${officersHTMLRepresentations}
        </section>`
}

