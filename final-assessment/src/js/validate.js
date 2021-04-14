function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const latitude = document.getElementById('latitute').value;
  const longitude = document.getElementById('longitude').value;
  const latitudeValid = latitude && (latitude >= -90 || latitude <= 90);
  const longitudeValid = longitude && (longitude >= -180 || longitude <= 180);
  if(!latitudeValid || !longitudeValid){
    event.preventDefault();
    if (!latitudeValid) {
      // show error for latitude
      console.log('Invalid latitude');
    }
    if (!longitudeValid) {
      // show error for longitude
      console.log('Invalid longitude');
    }
    return false;
  } else {
    console.log('Form is valid. Submit to formspree.io');
    console.log('latitude=', latitude);
    return true;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
