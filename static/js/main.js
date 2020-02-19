function loadRes() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("resDIV").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", 'result', true );
    xhttp.send();
}