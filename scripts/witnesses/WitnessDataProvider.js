let witnesses = [];

export const useWitness = () => witness.slice();

export const geWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(parsedWitnesses => witnesses = parsedWitnesses)
}