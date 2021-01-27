//declare an empty variable for parsed officers to be held in
let officers = []


//export a function that returns API json and assigns the retrieved data to the empty variable
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedOfficers => officers = parsedOfficers)
};
 

//export a function that returns officers.slice to be assigned to a variable in the future
export const useOfficers = () => officers.slice();