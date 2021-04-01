// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((observation) => {
    map.addObservation(observation);
  });
}

// Update the table to show markers for the set of observations
function updateTable(observations) {
  // Remove any current data from the table
  clearAllTableRows();

  // Populate the table with all observation data we want to show
  var row;
  observations.forEach((observation) => {
    // call the buildRowForObservation function with the current observation
    row = buildRowForObservation(observation);
    // and use that to add it to the table with the addRowToTable function.
    addRowToTable(row);
  });
}

// Update the cards grid to show markers for the set of observations
function updateCardsGrid(observations) {
  // Remove any current data from the table
  clearAllCards();

  // Populate the table with all observation data we want to show
  var card;
  observations.forEach((observation) => {
    // call the buildRowForObservation function with the current observation
    card = buildCardForObservation(observation);
    // and use that to add it to the table with the addRowToTable function.
    addCardToGrid(card);
  });
}

// Get all the observations from our data.js and format them so we can work with the data
// supported values in speciesType: all, native and introduced
function showSpeciesByType(speciesType) {
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const filteredObservations = filterBySpeciesType(observations, speciesType);

  // Update the map and table
  updateMap(filteredObservations, map);
  // updateTable(filteredObservations);
  updateCardsGrid(filteredObservations);

  if (speciesType === "native") {
    updateGridTitle(`Only Native Species (${filteredObservations.length})`);
  } else if (speciesType === "introduced") {
    updateGridTitle(`Only Introduced Species (${filteredObservations.length})`);
  } else {
    updateGridTitle(`All Species (${filteredObservations.length})`);
  }
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).
  // Show all species observations by default when we start.
  showSpeciesByType("all");

  var allSpeciesBtn = document.querySelector("#show-all");
  function allSpeciesHandler() {
    showSpeciesByType("all");
  }
  allSpeciesBtn.addEventListener("click", allSpeciesHandler);

  var nativeSpeciesBtn = document.querySelector("#show-native");
  function onlyNativeSpeciesHandler() {
    showSpeciesByType("native");
  }
  nativeSpeciesBtn.addEventListener("click", onlyNativeSpeciesHandler);

  var introducedSpeciesBtn = document.querySelector("#show-introduced");
  function onlyIntroducedSpeciesHandler() {
    showSpeciesByType("introduced");
  }
  introducedSpeciesBtn.onclick = onlyIntroducedSpeciesHandler;
}

// replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
window.onload = start;
