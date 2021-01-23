import { getOfficers } from './officers/officerDataProvider.js'
getOfficers();

import { getCriminals, useCriminals } from './criminals/criminalDataProvider.js'
getCriminals();
useCriminals();

console.log(useCriminals())