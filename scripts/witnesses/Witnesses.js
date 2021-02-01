export const Witness = (witness) => {
    return `
    <p class="witness"> 
        <b>${witness.name}</b> <br>
        <b>ID: </b>${witness.id} <br>
        <b>Statements: </b>${witness.statements}<br>
    </p>    
    `
}
