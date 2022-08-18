// import geocoder;

console.log("Hello World");

let e1 = document.createElement('div');
let e2 = document.createElement('div');

e1.innerHTML = "<div>Current Location</div>";
e1.style = "margin-top: 6%; margin-bottom: 3%";

e2.innerHTML = "<p><strong>Give Location Permissions</strong></p>"

let box = document.querySelector('#location');
box.appendChild(e1);
box.appendChild(e2);

e2.setAttribute('id', 'per_locate');

let data;
e2.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(showPosition);


    function showPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let val = `https://eu1.locationiq.com/v1/reverse?key=pk.651547bb2bfebc8cc6f5a0ba2c57ad0d&lat=${lat}&lon=${long}&format=json`;
        fetch(val)
            .then((resp) => {
                if (resp.ok)
                    return resp.json();
            })
            .then((data) => {
                console.log(data);
                e2.innerHTML = `<b>${data.address.county} , ${data.address.state} , ${data.address.country} , ${data.address.postcode}</b>`;

            })
    }


    // console.log(loc_data);
});