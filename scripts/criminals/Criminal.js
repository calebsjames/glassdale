export const Criminals = (criminal) => {
    return `
    <p class="criminal"> 
        <b>${criminal.name}</b> <br>
        <b>Age: </b>${criminal.age} <br>
        <b>Crime: </b>${criminal.conviction}<br>
        <b>Term start: </b>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}<br>
        <b>Term end: </b>${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}<br>
        <b>Officer: </b>${criminal.arrestingOfficer}<br>
        </p>
    `
}