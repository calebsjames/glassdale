//import statement for useOfficers & getOfficers

import { useOfficers, getOfficers } from "../officers/OfficerDataProvider.js"

//Define eventHub & querySelector()
const eventHub = document.querySelector(".container")

//define contentTarget & querySelector() that references where on the DOM <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

//Listen for a change on eventHub. If eventListener detects a change, changeEvent funtion runs
eventHub.addEventListener("change", changeEvent => {
    //if eventListener detects a change on the "officerSelect" element...
    if (changeEvent.target.id === "officerSelect") {
        //gets the name of the currently selected officer
        const selectedOfficer = changeEvent.target.value
        //...create new custom event to be dispatched
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: changeEvent.target.value
            }
        })
        //dispatch the custom event
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    //Trigger the fetch from the API
    getOfficers()
        .then(() => {
            //return all officers with useOfficers
            const officers = useOfficers()
            render(officers)
        })
}

const render = officerCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(officer => `<option value="${officer.id}">${officer.name}</option>`).join("")
        }
        </select>
    `
}
debugger