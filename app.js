const fetchData = (cityName) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=appiid`
    )
        .then((res) => res.json())
        .then((data) => showData(data));
};

const showData = (data) => {
    const div = document.getElementById("conatiner-div");
    div.textContent = "";
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" id="image">
        <h1 id="location">${data.name}</h1>
        <h3><span id="tempearture">${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
    `;
    console.log(data);
};

document.getElementById("searchbtn").addEventListener("click", function () {
    const search = document.getElementsByTagName("input");
    fetchData(search[0].value);
    search[0].value = "";
});
