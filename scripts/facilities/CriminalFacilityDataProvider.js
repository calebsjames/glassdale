//declare on empty array for the facilities to live
let criminalFacilities = []

//export a function to return criminal facilities sliced 
export const useCriminalFacilities = () => {
    return criminalFacilities.slice()
}

//export a funtion to get criminal facilities from API
export const getCriminalFacilities = () => {
    //fetch request
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        //parse the request to json
        .then(response => response.json())
        //put the returned data into the empty criminal facilities array
        .then(apiData => {
            criminalFacilities = apiData
        })
}