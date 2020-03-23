let memberList = document.getElementById("memberList")
let requestURL = './data/developer.json'

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
            showMember(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()

function showMember(obj) {
    let txt = ''
    if (getCookie("lang") == "th") {
        for (let i = 0; i < obj.length; i++) {
            txt += `<div class="col-lg-5 col-md-5 mx-auto my-3">
                        <div class="row">
                            <div class="col-lg-4 justify-content-center">
                                <img class="profile" src="${obj[i].path}" alt="${obj[i].name_th}">
                            </div>
                            <div class="col-lg-7 mx-auto my-2">
                                <p class="my-0 text-muted idnumber">${obj[i].id}</p>
                                <h5 class="mb-1">${obj[i].name_th}</h5>
                                <p class="my-0 text-muted">${obj[i].role}</p>
                                <a href="${obj[i].github}"><i class="fab fa-github social"></i></a>
                                <a href="${obj[i].facebook}"><i class="fab fa-facebook social ml-1"></i></a>
                                <a href="${obj[i].ig}"><i class="fab fa-instagram social ml-1"></i></a>
                            </div>
                        </div>
                    </div>`
        }
        txt += `<div class="col-lg-5 col-md-5 mx-auto my-3">
                    <hr class="mt-1 mb-3">
                    <p class="my-0 text-muted idnumber">06016312</p>
                    <h5 class="mb-1 d-inline">Web Technology Project (2019)</h5>
                    <p class="mb-1 d-inline text-muted idnumber">IT KMITL</p>
                    <p class="my-0 text-muted"><i class="fab fa-github-square"></i> Github Project : <a class="text-secondary" href="https://github.com/max180643/Periodic-Table">/max180643/Periodic-Table</a></p>
                </div>`
    } else if (getCookie("lang") == "en") {
        for (let i = 0; i < obj.length; i++) {
            txt += `<div class="col-lg-5 col-md-5 mx-auto my-3">
                        <div class="row">
                            <div class="col-lg-4 justify-content-center">
                                <img class="profile" src="${obj[i].path}" alt="${obj[i].name_en}">
                            </div>
                            <div class="col-lg-7 mx-auto my-2">
                                <p class="my-0 text-muted idnumber">${obj[i].id}</p>
                                <h5 class="mb-1">${obj[i].name_en}</h5>
                                <p class="my-0 text-muted">${obj[i].role}</p>
                                <a href="${obj[i].github}"><i class="fab fa-github social"></i></a>
                                <a href="${obj[i].facebook}"><i class="fab fa-facebook social ml-1"></i></a>
                                <a href="${obj[i].ig}"><i class="fab fa-instagram social ml-1"></i></a>
                            </div>
                        </div>
                    </div>`
        }
        txt += `<div class="col-lg-5 col-md-5 mx-auto my-3">
                    <hr class="mt-1 mb-3">
                    <p class="my-0 text-muted idnumber">06016312</p>
                    <h5 class="mb-1 d-inline">Web Technology Project (2019)</h5>
                    <p class="mb-1 d-inline text-muted idnumber">IT KMITL</p>
                    <p class="my-0 text-muted"><i class="fab fa-github-square"></i> Github Project : <a class="text-secondary" href="https://github.com/max180643/Periodic-Table">/max180643/Periodic-Table</a></p>
                </div>`
    }
    memberList.innerHTML = txt
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
