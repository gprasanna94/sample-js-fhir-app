function getPatientName (pt) {
  if (pt.name) {
    var names = pt.name.map(function(name) {
      return name.given.join(" ") + " " + name.family.join(" ");
    });
    return names.join(" / ")
  } else {
    return "anonymous";
  }
}

function displayPatient (pt) {
  document.getElementById('patient_name').innerHTML = getPatientName(pt);
}



var demo = {
    serviceUrl: "https://api.hspconsortium.org/hspcdemo/open",
    patientId: "BILIBABY"
};

// Create a FHIR client (server URL, patient id in `demo`)
var smart = FHIR.client(demo),
    pt = smart.patient;

// Create a patient banner by fetching + rendering demographics
smart.patient.read().then(function(pt) {
  displayPatient (pt);
});
