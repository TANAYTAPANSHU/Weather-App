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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${long}`;


            fetch(api)
                .then(response => {
                    return (response.json());
                })
                .then(data => {
                    name = data.name;
                    city.textContent = data.name;
                    console.log(name);
                });



        });




    }




})