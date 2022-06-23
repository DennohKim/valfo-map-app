let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove(
        "border-[#971E39]",
        "border-b",
        "-mb-px",
        "opacity-100"
      );
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.parentElement.classList.add(
      "border-[#971E39]",
      "border-b-4",
      "-mb-px",
      "opacity-100"
    );
  });
});

document.getElementById("default-tab").click();

//Selectors

// LAND
const mainContainer = document.getElementById("first")
const landInfoContainer = document.querySelector("#land-info__container");
const landTitleContainer = document.querySelector("#land-title-container");
const landDescription = document.querySelector("#land-description");
const landDetailsContainer = document.querySelector("#land-details-container");
const landReference = document.querySelector("#land-reference");
const landSize = document.querySelector("#land-size");
const landValue = document.querySelector("#land-value");
const landValueDate = document.querySelector("#land-value-date");
const landForm = document.querySelector("#land-form");
const deleteButton = document.querySelector("delete");
const landUrl = " https://dennohkim.github.io/valfo-map-app/db.json";
const deleteBtn = document.querySelector("delete-btn");
let landInfo;

//RESIDENTIAL
const mainResidentialContainer = document.getElementById("second")
const residentialInfoContainer = document.querySelector("#residential-info__container");
const residentialTitleContainer = document.querySelector("#residential-title-container");
const residentialDescription = document.querySelector("#residential-description");
const residentialDetails = document.querySelector("#residential-details");
const residentialReference = document.querySelector("#residential-reference");          
const floorArea = document.querySelector("#floor-area");
const residentialValueDate = document.querySelector("#residential-value-date")
const residentialValue = document.querySelector("#residential-value");
const residentialRent = document.querySelector("#residential-rent");
const residentialForm = document.querySelector("#residential-form");  
const residentialUrl = "https://dennohkim.github.io/valfo-map-app/db.json";

//COMMERCIAL
const mainCommercialContainer = document.getElementById("third")
const commercialInfoContainer = document.querySelector("#commercial-info__container");
const commercialDescription = document.querySelector("#commercial-description");
const commercialDetails = document.querySelector("#commercial-details");
const commercialReference = document.querySelector("#commercial-reference");
const floorAreaCommercial = document.querySelector("#floor-area-commercial");
const commercialTitleContainer = document.querySelector("#commercial-title-container");
const commercialValue = document.querySelector("#commercial-value");
const commercialValueDate = document.querySelector("#commercial-value-date"); 
const commercialRent = document.querySelector("#commercial-rent");
const serviceCharge = document.querySelector("#service-charge");
const commercialForm = document.querySelector("#commercial-form");
const commercialUrl = "https://dennohkim.github.io/valfo-map-app/db.json";

document.addEventListener("DOMContentLoaded", () => {
  fetchLandDetails()
  fetchResidentialDetails()
  fetchCommercialDetails()
});

//FETCH LAND DETAILS FROM API
function fetchLandDetails() {
  const fetchLandDetailsFromEndPoint = fetch(landUrl)
    .then(response => (response.json()))
    // .then(data => console.log(data.land)); 
    .then(renderLandDetails);

  return fetchLandDetailsFromEndPoint;
}

function renderLandDetails(landDetails) {
  landDetails.land.forEach(renderLandDetail);
}

function renderLandDetail(landDetail) {
  
  //Build property card
  const mainDetailsContainer = document.createElement("div");
  mainDetailsContainer.className = "mainDetailsContainer flex flex-col bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4";
  mainDetailsContainer.innerHTML =
  `
  <div id="land-title-container" class="flex justify-between">
      <h1 id="land-description">${landDetail.description}</h1>
      <h2 id="land-value-date">${landDetail.date}</h2>
       <a id="delete-btn" class="fill-slate-300 cursor-pointer" href="#"><i class="fa-solid fa-trash  "></i></a>
    </div>
    <div id="land-details-container" class="flex justify-between pt-4 mb-4" >
      <p >LR No: <br><span id="land-reference" class="font-bold">${landDetail.reference}</span> </p>
      <p >Size: <br><span id="land-size" class="font-bold"> ${landDetail.size} Ac</span></p>
      <p >Value:  <br><span id="land-value" class="font-bold"> ${landDetail.value}</span></p>
    </div>
      
  `
 //delete HTML element
 mainDetailsContainer.querySelector("#delete-btn").addEventListener('click', () => {
  mainDetailsContainer.remove();
  deleteLandComparable(landDetail.id)
    
})

 //Append Div container to DOM
  mainContainer.append(mainDetailsContainer)

}
//FETCH RESIDENTIAL DETAILS FROM API

function fetchResidentialDetails() {
  const fetchResidentialDetailsFromEndPoint = fetch(residentialUrl)
    .then((response) => response.json())
    .then(renderResidentialDetails);
  return fetchResidentialDetailsFromEndPoint;
}

function renderResidentialDetails(residentialDetails) {
  residentialDetails.residential.forEach(renderResidentialDetail);
}

function renderResidentialDetail(residentialDetail) {
  //Build property card
  const mainDetailsContainer = document.createElement("div");
  mainDetailsContainer.className = "mainDetailsContainer flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";
  mainDetailsContainer.innerHTML =
  `      
      <div id="residential-title-container" class="flex justify-between">
        <h1 id="residential-description">${residentialDetail.description}</h1>
        <h2 id="residential-value-date">${residentialDetail.date}</h2>
        <a id="delete-btn" class="fill-slate-300 cursor-pointer" href="#"><i class="fa-solid fa-trash  "></i></a>
      </div>
      <div  id="residential-details" class="flex justify-between pt-4 property-detail">
        <p  class="">LR No: <br><span id="residential-reference" class="font-bold">${residentialDetail.reference}</span> </p>
        <p >Floor area: <br><span id="floor-area" class="font-bold">${residentialDetail.area}</span></p>
        <p >Value:  <br><span id="residential-value" class="font-bold">${residentialDetail.value}</span></p>
      </div>
          
  `
  
  //delete HTML element
  mainDetailsContainer.querySelector("#delete-btn").addEventListener('click', () => {
  mainDetailsContainer.remove();
  deleteResidentialComparable(residentialDetail.id)
    
}) 

  //Append Div container to DOM
  mainResidentialContainer.append(mainDetailsContainer)
  

}


//FETCH RESIDENTIAL DETAILS FROM API

function fetchCommercialDetails() {
  const fetchCommercialDetailsFromEndPoint = fetch(commercialUrl)
    .then((response) => response.json())
    .then(renderCommercialDetails);
  return fetchCommercialDetailsFromEndPoint;
}

function renderCommercialDetails(commercialDetails) {
  commercialDetails.commercial.forEach(renderCommercialDetail);
}

function renderCommercialDetail(commercialDetail) {
  //Build property card
  const mainDetailsContainer = document.createElement("div");
  mainDetailsContainer.className = "mainDetailsContainer flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";
  mainDetailsContainer.innerHTML =
  `      
      <div id="residential-title-container" class="flex justify-between">
        <h1 id="residential-description">${commercialDetail.description}</h1>
        <h2 id="residential-value-date">${commercialDetail.date}</h2>
        <a id="delete-btn" class="fill-slate-300 cursor-pointer" href="#"><i class="fa-solid fa-trash  "></i></a>
      </div>
      <div id="commercial-details" class="flex justify-between pt-4 property-detail">
        <p >Property Name:  <br> <span id="commercial-value" class="font-bold">${commercialDetail.name}</span></p>
        <p >LR No: <br><span  id="commercial-reference"  class="font-bold">${commercialDetail.reference}</span> </p>
        <p >Floor area: <br><span id="floor-area-commercial" class="font-bold">${commercialDetail.area}</span></p>
      </div>
      <div class="flex justify-between pt-4 property-detail">
        <p >Rent: <br><span id="commercial-rent" class="font-bold">${commercialDetail.rent}</span> </p>
        <p >Service Charge: <br><span id="service-charge" class="font-bold">${commercialDetail.service}</span></p>
        <p >Value: <br><span class="font-bold"> ${commercialDetail.value}</span></p>
      </div>
          
  `

 //delete HTML element
 mainDetailsContainer.querySelector("#delete-btn").addEventListener('click', () => {
  mainDetailsContainer.remove();
  deleteCommercialComparable(commercialDetail.id)
    
}) 

  //Append Div container to DOM
  mainCommercialContainer.append(mainDetailsContainer)

}


//FORM INPUT HANDLERS

//LAND
//Event Listener
landForm.addEventListener('submit', handleLandSubmit)

function handleLandSubmit(event) {
  event.preventDefault();
  // alert("Form has been submitted!")
  let landObject = {

      description: event.target.land_input_description.value,
      value: event.target.land_input_value.value,
      reference: event.target.land_input_reference.value,
      size: event.target.land_input_size.value ,
      date: event.target.land_valuation_date.value,
  }

  renderLandDetail(landObject)
  addLandComparable(landObject)
  landForm.reset()
}

function addLandComparable (landObject) {
  fetch(landUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(landObject)
  })
  .then(res => res.json())
  .then(landDetail => console.log(landDetail))
  .catch(err => console.error(err))
}

//RESIDENTIAL

residentialForm.addEventListener('submit', handleResidentialSubmit)

function handleResidentialSubmit(event) {
  event.preventDefault();
  let residentialObject = {

      description: event.target.residential_input_description.value,
      value: event.target.residential_input_value.value,
      reference: event.target.residential_input_reference.value,
      area: event.target.residential_input_area.value ,
      date: event.target.residential_valuation_date.value,
      rent: event.target.residential_input_rent.value,
  }

  renderResidentialDetail(residentialObject)
  addResidentialComparable(residentialObject)
  residentialForm.reset()
}

function addResidentialComparable (residentialObject){
  fetch(residentialUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(residentialObject)
  })
  .then(res => res.json())
  .then(residentialDetail => console.log(residentialDetail))
  .catch(err => console.error(err))
}



//COMMERCIAL


commercialForm.addEventListener('submit', handleCommercialSubmit)

function handleCommercialSubmit(event) {
  event.preventDefault();
  let commercialObject = {

      description: event.target.commercial_input_description.value,
      name: event.target.commercial_input_name.value,
      value: event.target.commercial_input_value.value,
      reference: event.target.commercial_input_reference.value,
      area: event.target.commercial_input_area.value ,
      date: event.target.commercial_valuation_date.value,
      rent: event.target.commercial_input_rent.value,
      service: event.target.service-charge.value,
  }

  renderCommercialDetail(commercialObject)
  addCommercialComparable(commercialObject)
  commercialForm.reset()

}

function addCommercialComparable (commercialObject){
  fetch(commercialUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(commercialObject)
  })
  .then(res => res.json())
  .then(commercialDetail => console.log(commercialDetail))
  .catch(err => console.error(err))
}


//DELETE LAND FUNCTION
function deleteLandComparable(id){
  fetch(`http://localhost:3000/land/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then(res => res.json())
  .then(landData => console.log(landData))
}


//DELETE RESIDENTIAL FUNCTION
function deleteResidentialComparable(id){
  fetch(`http://localhost:3000/residential/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then(res => res.json())
  .then(residentialData => console.log(residentialData))
}

//DELETE COMMERCIAL FUNCTION
function deleteCommercialComparable(id){
  fetch(`http://localhost:3000/commercial/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then(res => res.json())
  .then(commercialData => console.log(commercialData))
}








// GOOGLE MAPS API

// Initialize and add the map

const mySecretApiKey = "AIzaSyB_XdpV4aul3MWtWNt7yykbqe5kcmP-B_M"
const googleMapsLink = `https://maps.googleapis.com/maps/api/js?key=${mySecretApiKey}&callback=initMap`

let map, infoWindow;
let markersArray = [];

function initMap() {
 
  const myLatlng = { lat: -1.300509, lng: 36.784709};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.300509, lng: 36.784709 },
    zoom: 14,
  });

  //OnClick listener


  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });


  


  //Land Markers Array

  var landMarkers = [
    {
      coords: { lat: -1.293278, lng: 36.780111 },
      iconImage:
        "https://drive.google.com/file/d/1zRmE4B8M1HU9fLPbWY9p3y6OGH6b4dzE/view?usp=sharing",
      content: "<h1>Ongoing Land Sale</h1>"+
      "<p>Value: 22000000</p>" 
    },
    {
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      coords: { lat: -1.29581, lng: 36.775081 },
      content: "<h1>Recent Sale</h1>"+
      "<p>Value: <br><strong>22,000,000</strong> </p>"+
      "<p>Date <br><strong>2020-11-01</strong> </p>"
      

    },
    {
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      coords: { lat: -1.297816, lng: 36.779866 },
      content: "<h1>Recent Sale</h1>"+
      "<p>Value: <br><strong>16,500,000</strong> </p>"+
      "<p>Date <br><strong>2020-10-01</strong> </p>"
    },
    {
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      coords: { lat: -1.300787, lng: 36.778539 },
      content: "<h1>Ongoing Land Sale</h1>"+
      "<p>Value: <br><strong>30,000,000</strong> </p>"+
      "<p>Date <br><strong>2020-09-01</strong> </p>"
    },
    {
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      coords: { lat: -1.302621, lng: 36.786299 },
      content: "<h1>Ongoing Land Sale</h1>"+
      "<p>Value: <br><strong>27,000,000</strong> </p>"+
      "<p>Date <br><strong>2020-09-01</strong> </p>"
    },
  ];

  //Loop through land markers
  for (var i = 0; i < landMarkers.length; i++) {
    addMarker(landMarkers[i]);
  }

 //Residential Markers Array

 var residentialMarkers = [
  {
    coords: { lat: -1.252588, lng: 36.778997 },
    content: "<h1>Townhouse</h1>"+
    "<p>Value: <br><strong>27,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-09-01</strong> </p>"
  },
  {
    coords: { lat: -1.255483, lng: 36.77615 },
    content: "<h1>Maisonette</h1>"+
    "<p>Value: <br><strong>4,000,000</strong> </p>"+
    "<p>Date <br><strong>2021-02-09</strong> </p>"
  },
  {
    coords: { lat: -1.257392, lng: 36.780409 },
    content: "<h1>3 Bed Apartment</h1>"+
    "<p>Value: <br><strong>45,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-11-19</strong> </p>"
  },
  {
    coords: { lat: -1.25443, lng: 36.781151 },
    content: "<h1>2 Bed Apartment</h1>"+
    "<p>Value: <br><strong>27,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-11-19</strong> </p>"
  },
  {
    coords: { lat: -1.252543, lng: 36.783774 },
    content: "<h1>Double Storey House</h1>"+
    "<p>Value: <br><strong>50,000,000</strong> </p>"+
    "<p>Date <br><strong>2021-02-01</strong> </p>"
  },
];

//Loop through residential markers
for (var i = 0; i < residentialMarkers.length; i++) {
  addMarker(residentialMarkers[i]);
}


 //Commercial Markers Array

 var commercialMarkers = [
  {
    coords: { lat: -1.291116, lng: 36.820834 },
    content: "<h1>Office Space</h1>"+
    "<p>Value: <br><strong>45,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-11-31</strong> </p>"
  },
  {
    coords: { lat: -1.279929, lng: 36.782225 },
    content: "<h1>Retail space</h1>"+
    "<p>Value: <br><strong>23,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-10-01</strong> </p>"
  },
  {
    coords: { lat: -1.297527, lng: 36.826156 },
    content: "<h1>Office Space</h1>"+
    "<p>Value: <br><strong>78,000,000</strong> </p>"+
    "<p>Date <br><strong>2020-03-01</strong> </p>"
  },
  {
    coords: { lat: -1.28974, lng: 36.822246 },
    content: "<h1>Retail space</h1>"+
    "<p>Value: <br><strong>56,000,000</strong> </p>"+
    "<p>Date <br><strong>2021-08-21</strong> </p>"
  },
  {
    coords: { lat: -1.28214, lng: 36.81467 },
    content: "<h1>Office Space</h1>"+
    "<p>Value: <br><strong>32,000,000</strong> </p>"+
    "<p>Date <br><strong>2021-02-21</strong> </p>"
  },
];

//Loop through commercial markers
for (var i = 0; i < commercialMarkers.length; i++) {
  addMarker(commercialMarkers[i]);
}



  //ADD MARKERS FUNCTION

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconImage
    });

    if (props.iconImage) {
      //set icon image
      marker.setIcon(props.iconImage);
    }
    //Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
    }

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  
  
}

function placeMarkerAndPanTo(latLng, map) {
  new google.maps.Marker({
      position: latLng,
      map: map,
  });
  map.panTo(latLng);
}
