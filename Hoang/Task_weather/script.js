(function() {

    document.getElementById("send").addEventListener("click", () => {
        let city = document.getElementById("city").value;
        console.log("City is " + city);
        document.getElementById("city").value = '';
        let weather = [];
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06d325d5b36becd1cf78a0fd10afd272`)
            .then(resp => resp.json())
            .then(json => {
                weather = json;
                let temperature = Math.floor(weather.main.temp - 273);
                document.getElementById("temperature").innerHTML = `Temperature in ${city} is ${temperature} °C `;
            })
            .catch(err => {
                document.getElementById("temperature").innerHTML = `Something went wrong, please check the city spelling`;
            })
    });

})();