/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
<<<<<<< HEAD
    // const selectConviction = convictions.map(
    //     convictionObject => {
    //         const convictionValue = convictionObject.conviction;
    //         return convictionValue;
    //     }
    // )
=======
    const selectConviction = convictions.map(
        convictionObject => {
            const convictionValue = convictionObject.conviction;
            return convictionValue;
        }
    )
>>>>>>> 9955729d4cfd7234e762772015e2378d41c98880
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
<<<<<<< HEAD
                convictionsCollection.map()
=======
                something.map()
>>>>>>> 9955729d4cfd7234e762772015e2378d41c98880
            }
        </select>
    `
}