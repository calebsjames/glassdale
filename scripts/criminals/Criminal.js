export const Criminals = (criminalObject, facilities) => {
        
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
        <div>
            <h2>Facilities</h2>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
        <button id="alibiListButton" value="${criminalObject.name}">Show Associates</button>            </div>
    </div>
        `
    }