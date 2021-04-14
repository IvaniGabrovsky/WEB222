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
  
  let latInvalidMessage = document.getElementById('latitute-invalid');
  if (!latitudeValid) {
    event.preventDefault();
    latInvalidMessage.removeAttribute('hidden');
  } else{
    latInvalidMessage.setAttribute('hidden', 'true');
  }
  
  let lonInvalidMessage = document.getElementById('longitude-invalid');
  if (!longitudeValid) {
    event.preventDefault();
    lonInvalidMessage.removeAttribute('hidden');
  } else{
    lonInvalidMessage.setAttribute('hidden', 'true');
  }
  
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const date_observed = document.getElementById('date_observed').value;
  
  
  if(latitudeValid && longitudeValid && name && description && date_observed){
    return true;
  } else{
    event.preventDefault();
    console.log("invalid form");
    //alert('Please fill all required fields with valid data');
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
