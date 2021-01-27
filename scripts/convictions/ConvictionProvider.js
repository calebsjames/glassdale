let convictions = []

// returns convictions as objects
export const useConvictions = () => convictions.slice()

//function to get convictions from API
export const getConvictions = () => {
    //returns fetch call from website
    return fetch("https://criminals.glassdale.us/crimes")
        //when fetch is returned it is parsed to json
        .then(response => response.json())
        //the json content is then assigned to a variable 
        .then(convictionsArray => convictions = convictionsArray)
}