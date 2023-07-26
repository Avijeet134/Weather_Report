function handleInputTemprature() {
    var d = document.getElementById("weatherInput").value;
    var date = new Date(d);
    var inputDate =
        date.getFullYear()
        + "-" + ("00" + (date.getMonth() + 1)).slice(-2)
        + "-" + ("00" + date.getDate()).slice(-2) + " "
        + ("00" + date.getHours()).slice(-2) + ":"
        + '00'
        + ":" + ("00" + date.getSeconds()).slice(-2);
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", 'weather.txt', true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            var jsonResponce = JSON.parse(rawFile.responseText);
            var data_filter = jsonResponce.list.filter(element => element.dt_txt == inputDate)
            document.getElementById('result').innerHTML="";
            document.getElementById('result').innerHTML='<lable>Temprature :'+data_filter[0].main.temp+'</lable>'
        }
    }
    rawFile.send(null);
}
function handleInputWind() {
    var d = document.getElementById("windInput").value;
    var date = new Date(d);
    var inputDate =
        date.getFullYear()
        + "-" + ("00" + (date.getMonth() + 1)).slice(-2)
        + "-" + ("00" + date.getDate()).slice(-2) + " "
        + ("00" + date.getHours()).slice(-2) + ":"
        + '00'
        + ":" + ("00" + date.getSeconds()).slice(-2);
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", 'weather.txt', true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            var jsonResponce = JSON.parse(rawFile.responseText);
            var data_filter = jsonResponce.list.filter(element => element.dt_txt == inputDate)
            document.getElementById('result').innerHTML="";
            document.getElementById('result').innerHTML='<lable>Wind Speed :'+data_filter[0].main.grnd_level+'</lable>'
        }
    }
    rawFile.send(null);
}
function handleInputPressure() {
    var d = document.getElementById("pressureInput").value;
    var date = new Date(d);
    var inputDate =
        date.getFullYear()
        + "-" + ("00" + (date.getMonth() + 1)).slice(-2)
        + "-" + ("00" + date.getDate()).slice(-2) + " "
        + ("00" + date.getHours()).slice(-2) + ":"
        + '00'
        + ":" + ("00" + date.getSeconds()).slice(-2);
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", 'weather.txt', true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            var jsonResponce = JSON.parse(rawFile.responseText);
            var data_filter = jsonResponce.list.filter(element => element.dt_txt == inputDate)
            document.getElementById('result').innerHTML="";
            document.getElementById('result').innerHTML='<lable>Pressure :'+data_filter[0].main.pressure+'</lable>'
        }
    }
    rawFile.send(null);
}
function getWeather() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnWeather");
    document.getElementById('divWeather').style.display = 'block';
    document.getElementById('divWindSpeed').style.display = 'none';
    document.getElementById('divPressure').style.display = 'none'
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // logic to display temprature data


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            document.getElementById('result').innerHTML="";
            modal.style.display = "none";
        }
    }
}
function getWind() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnWindSpeed");
    document.getElementById('divWeather').style.display = 'none';
    document.getElementById('divWindSpeed').style.display = 'block';
    document.getElementById('divPressure').style.display = 'none'
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    document.getElementById('result').innerHTML="";
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            document.getElementById('result').innerHTML="";
            modal.style.display = "none";
        }
    }
}
function getPressure() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("btnPressure");
    document.getElementById('divWeather').style.display = 'none';
    document.getElementById('divWindSpeed').style.display = 'none';
    document.getElementById('divPressure').style.display = 'block'
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            document.getElementById('result').innerHTML="";
            modal.style.display = "none";
        }
    }
}