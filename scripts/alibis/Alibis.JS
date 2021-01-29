export const AlibisHTML = (criminal) => {
    return `
    <p class="alibis"> 
        <b>${criminal.name}</b> <br>
        <b>Alibi Name: </b>${criminal.known_associates[0].name}<br>
        <b>Alibi: </b>${criminal.known_associates[0].alibi}<br>
        
        </p>
    `
}

