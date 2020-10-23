window.addEventListener('load', () => {
    let long;
    let lat;
    let name;
    let desc;
    let icon;
    let temp;
    let country;
    let city = document.getElementById("city");
    city.addEventListener('click', function() {
        console.log('tanay');



    })
    temp = document.getElementById("temp");

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
                    temp.textContent = data.main.temp;
                    console.log(name);
                });



        });




    }




})
