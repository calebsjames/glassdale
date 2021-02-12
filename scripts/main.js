import { CriminalList } from "./criminals/CriminalList.js";
CriminalList()

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
ConvictionSelect()

import { OfficerSelect } from "./officers/OfficerSelect.js";
OfficerSelect()

import { getCriminals } from "./criminals/CriminalDataProvider.js";

// import { OfficerList } from "./officers/OfficerList.js";
// OfficerList()

import { NoteForm } from "./notes/NoteForm.js";
NoteForm()


import { ShowNoteButton } from "./notes/ShowNotesButton.js";
ShowNoteButton()

import "./witnesses/WitnessButton.js"
import "./notes/NoteList.js"
import "./alibis/AlibisButton.js"
import "./alibis/AlibisList.js"
import "./facilities/CriminalFacilityDataProvider.js"
import "./facilities/CriminalFacilityDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./facilities/CriminalFacilityDataProvider.js";


// getCriminalFacilities()
// .then(() => {
//         debugger
//         const facilityArray = useCriminalFacilities()
//         console.log('facilityArray: ', facilityArray);
        

//     })
