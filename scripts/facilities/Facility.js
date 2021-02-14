export const Facilities = (facilityObject, criminals) => {
        
    return `
    <div class="facility">
        <h2>${facilityObject.facilityName}</h4>
        <div class="facilityDetails">
            <p>Security Level: ${facilityObject.securityLevel}</p>
            <p>Capacity: ${facilityObject.capacity}</p>
        </div>
        <div>
            <h4>Criminals</h4>
            <ul>
                ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
            </ul>
        </div>
    </div>
        `
    }