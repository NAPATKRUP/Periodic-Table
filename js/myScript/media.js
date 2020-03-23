let element_list = document.getElementById("mediaList")
let requestURL = ''

if (getCookie("lang") == "th") {
    requestURL = './data/media_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = './data/media_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
            showList(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()

function showList(obj) {
    let txt = ''
    for (let i = 0; i < obj.length; i++) {
        txt += `<div class="col-lg-4 col-md-6 mx-auto my-3">
        <a href="${obj[i].link}" class="mediaBox">
        <div class="card">
            <i class="far fa-play-circle text-light playBtn"></i>
            <img src="${obj[i].img}" class="card-img-top thumbnail" alt="${obj[i].title}">
            <span class="mediaTime">${obj[i].time}</span>
            <div class="card-body py-3 px-2 text-center text-dark">
                <p class="card-text text-truncate"><i class="fab fa-youtube text-danger mr-1"></i>${obj[i].title}</p>
            </div>
        </div>
        </a>
    </div>`
    }
    element_list.innerHTML = txt
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
