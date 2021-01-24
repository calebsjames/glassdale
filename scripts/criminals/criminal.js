export const Criminals = (criminal) => {
    return `
    <p class="criminal"> 
        <b>${criminal.name}</b> <br>
        <b>Age: </b>${criminal.age} <br>
        <b>Crime: </b>${criminal.conviction}<br>
        <b>Term start: </b>${criminal.incarceration.start}<br>
        <b>Term end: </b>${criminal.incarceration.end}<br>
        </p>
    `
}