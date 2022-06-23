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
const landUrl = `http://localhost:3000/land`;
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
const residentialUrl = "http://localhost:3000/residential";

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
const commercialUrl = " http://localhost:3000/commercial";

document.addEventListener("DOMContentLoaded", () => {
  fetchLandDetails()
  fetchResidentialDetails()
  fetchCommercialDetails()
});

//FETCH LAND DETAILS FROM API
function fetchLandDetails() {
  const fetchLandDetailsFromEndPoint = fetch(landUrl)
    .then((response) => response.json())
    .then(renderLandDetails);

  return fetchLandDetailsFromEndPoint;
}

function renderLandDetails(landDetails) {
  landDetails.forEach(renderLandDetail);
}

function renderLandDetail(landDetail) {
  
  //Build property card
  const mainDetailsContainer = document.createElement("div");
  mainDetailsContainer.className = "mainDetailsContainer flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";
  mainDetailsContainer.innerHTML =
  `
  <div id="land-title-container" class="flex justify-between">
                  <h1 id="land-description">${landDetail.description}</h1>
                  <h2 id="land-value-date">${landDetail.date}</h2>
                </div>
                  
                <div id="land-details-container" class="flex justify-between pt-4" >
                  <p >LR No: <span id="land-reference" class="font-bold">${landDetail.reference}</span> </p>
                  <p >Size: <span id="land-size" class="font-bold"> ${landDetail.size}</span></p>
                  <p >Value:  <span id="land-value" class="font-bold"> ${landDetail.value}</span></p>
                </div>
  `
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
  residentialDetails.forEach(renderResidentialDetail);
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
      </div>
      <div  id="residential-details" class="flex justify-between pt-4 property-detail">
        <p  class="">LR No: <span id="residential-reference" class="font-bold">${residentialDetail.reference}</span> </p>
        <p >Floor area: <span id="floor-area" class="font-bold">${residentialDetail.area}</span></p>
        <p >Value:  <span id="residential-value" class="font-bold">${residentialDetail.value}</span></p>
      </div>
      <div class="flex justify-between pt-4 property-detail">
        <p  class="">Rent: <span id="residential-rent" class="font-bold">${residentialDetail.rent}</span> </p>
      </div>
          
  `
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
  commercialDetails.forEach(renderCommercialDetail);
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
      </div>
      <div id="commercial-details" class="flex justify-between pt-4 property-detail">
        <p >LR No: <span  id="commercial-reference"  class="font-bold">${commercialDetail.reference}</span> </p>
        <p >Floor area: <span id="floor-area-commercial" class="font-bold">${commercialDetail.area}</span></p>
        <p >Value:  <span id="commercial-value" class="font-bold">${commercialDetail.value}</span></p>
      </div>
      <div class="flex justify-between pt-4 property-detail">
        <p >Rent: <span id="commercial-rent" class="font-bold">${commercialDetail.rent}</span> </p>
        <p >Service Charge: <span id="service-charge" class="font-bold">${commercialDetail.service}</span></p>
        <p class="invisible">Value:  <span class="font-bold"> 3,000,000</span></p>
      </div>
          
  `
  //Append Div container to DOM
  mainCommercialContainer.append(mainDetailsContainer)

}


//FORM INPUT HANDLERS















// GOOGLE MAPS API

// Initialize and add the map

const mySecreyApiKey = "AIzaSyB_XdpV4aul3MWtWNt7yykbqe5kcmP-B_M"
const googleMapsLink = `https://maps.googleapis.com/maps/api/js?key=${mySecreyApiKey}&callback=initMap`

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


  //Markers Array

  var markers = [
    {
      coords: { lat: -1.300509, lng: 36.784709 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: "<h1>Moringa School</h1>",
    },
    {
      coords: { lat: -1.296422, lng: 36.782225 },
      content: "<h1>Chizaa</h1>",
    },
    {
      coords: { lat: -1.297527, lng: 36.784961 },
      content: "<h1>Eazy</h1>",
    },
    {
      coords: { lat: -1.297527, lng: 36.784961 },
      content: "<h1>Eazy</h1>",
    },
    {
      coords: { lat: -1.301255, lng: 36.782494 },
      content: "<h1>DK</h1>",
    },
  ];

  //Loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
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
