//declare on empty array for the facilities to live
let facilities = []

//export a function to return facilities sliced 
export const useFacilities = () => facilities.slice()

//export a funtion to get facilities from API
export const getFacilities = () => {
    //fetch request
    return fetch("https://criminals.glassdale.us/facilities")
    //parse to json
    .then(response => response.json())
    //put the parsed respone into the empty facilities array
    .then(apiData => {
        facilities = apiData
    })
}