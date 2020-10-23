window.addEventListener('load', () => {
    let long;
    let lat;
    let name;
    let desc;
    let icon;
    let temp;
    let country;
    let city = document.getElementById("city");
    icon = document.getElementById("icon");
    city.addEventListener('click', function() {
        console.log('tanay');



    })
    temp = document.getElementById("temp");
    desc = document.getElementById("desc");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`;


            fetch(api)
                .then(response => {
                    return (response.json());
                })
                .then(data => {
                    name = data.name;
                    city.textContent = data.name;
                    temp.textContent = data.main.temp + " degree";
                    icon.src = data.weather[0].icon;
                    desc.textContent = data.weather[0].description;
                    console.log(data.weather[0]);
                });



        });




    }




})