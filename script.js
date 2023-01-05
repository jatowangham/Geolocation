const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const button = document.getElementById("toggledark");
const loc = document.querySelector("#location");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
    button.style.color = "black";
    loc.style.color = "black";
  } else {
    body.style.background = "#2d2d2d";
    body.style.color = "white";
    button.style.color = "white";
    loc.style.color = "white";
    body.style.transition = "1s";
  }
});

// //geolocation
// const mybtn = document.querySelector("#location");
// const add1 = document.querySelector("#add1");
// const p = document.querySelector("#p");

// mybtn.addEventListener("click", function () {
//   if (navigator.geolocation) {
//     //alert("browser support the geolocation");
//     navigator.geolocation.getCurrentPosition(mycoords);
//   } else {
//     alert("doest not support geolocation");
//   }
// });

// function mycoords(position) {
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//   var myapi =
//     "https://api.opencagedata.com/geocode/v1/json?q=" +
//     lat +
//     "," +
//     lon +
//     "&key=4a43f2e41ad0459289b716eaa0214358";

//   fetch(myapi, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       let country = data.results[0].components.country;
//       let state = data.results[0].components.state;
//       let addrs = data.results[0].components.state_district;
//       let pstcode = data.results[0].components.postcode;
//       add1.innerHTML = `${country}, ${state} ${pstcode}`;
//       p.innerHTML = `${addrs}`;
//       //   p.innerHTML = `${addrs} , ${pstcode}`;
//     });
// }
const mybtn = document.querySelector("#location");
const add1 = document.querySelector("#add1");
const p = document.querySelector("#p");

function wind1() {
  if (navigator.geolocation) {
    //alert("browser support the geolocation");
    navigator.geolocation.getCurrentPosition(mycoords);
  } else {
    alert("doest not support geolocation");
  }
}
wind1()

function mycoords(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var myapi =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    lat +
    "," +
    lon +
    "&key=4a43f2e41ad0459289b716eaa0214358";

  fetch(myapi, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let country = data.results[0].components.country;
      let state = data.results[0].components.state;
      let addrs = data.results[0].components.state_district;
      let pstcode = data.results[0].components.postcode;
      add1.innerHTML = `${country}, ${state} ${pstcode}`;
      p.innerHTML = `${addrs}`;
    });
}

//weather
        const btn = document.getElementById('btn123');

        function wind(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showposition);
            }else{
                alert("weather is invalid");
            }
        }
        wind()

        function showposition(data){
            let lat = data.coords.latitude;
            let lon = data.coords.longitude;
            let myapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51d699f26097833ee276e725659fa82b&units=metric`
            fetch(myapi, { method: "GET" })
    .then((res) =>res.json())
    .then((data)=>{
        console.log(data)
        let haze = data.weather[0].main;
        let temp = data.main.temp;
        let hum = data.main.humidity;
        addme.innerHTML = `${haze} ${temp}℃`
        addp.innerHTML = `humidity: ${hum}%`
    })
        }
