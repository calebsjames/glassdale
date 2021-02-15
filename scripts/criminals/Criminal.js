export const Criminals = (criminalObject, facilities) => {
        
    return `
    <div class="criminal">
        <h3>${criminalObject.name}</h3>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
        <div>
            <h4>Facilities</h4>
            <ul>
                ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            </ul>
        </div>
        <button id="alibiListButton" value="${criminalObject.name}">Show Associates</button>            </div>
    </div>
        `
    }