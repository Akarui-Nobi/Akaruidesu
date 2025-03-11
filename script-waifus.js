function addWaifu() {

    newWaifu.innerHTML += `
        <div class="container">    
            <img class="p" src="Waifus/${picturefield.value}">
        
            <div class="text">
                <h1 class="n">${namefield.value}</h1>
                <h1 class="a">(${animefield.value})</h1>
                <h1 class="t">${textfield.value}
                </h1>
            </div>
        </div>
    `;
    
    picturefield.value = '';
    namefield.value = '';
    animefield.value = '';
    textfield.value = '';

}

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}