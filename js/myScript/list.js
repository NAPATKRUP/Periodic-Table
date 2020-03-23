let element_list = document.getElementById("element_list")
let requestURL = ''

if (getCookie("lang") == "th") {
    requestURL = './data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = './data/elements_en.json'
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
    if (getCookie("lang") == "th") {
        let check = {"ก": [],"ข": [],"ฃ": [],"ค": [],"ฅ": [],"ฆ": [],"ง": [],"จ": [],"ฉ": [],"ช": [],"ซ": [],"ฌ": [],"ญ": [],"ฎ": [],"ฏ": [],"ฐ": [],"ฑ": [],"ฒ": [],"ณ": [],"ด": [],"ต": [],"ถ": [],"ท": [],"ธ": [],"น": [],"บ": [],"ป": [],"ผ": [],"ฝ": [],"พ": [],"ฟ": [],"ภ": [],"ม": [],"ย": [],"ร": [],"ฤ": [],"ล": [],"ฦ": [],"ว": [],"ศ": [],"ษ": [],"ส": [],"ห": [],"ฬ": [],"อ": [],"ฮ": []}
        let bypass = ["เ", "แ", "โ", "ใ", "ไ"]
        for (let i = 0; i < obj.length; i++) {
            let active = true
            for (let j = 0; j < bypass.length; j++) {
                if (obj[i].Element[0] == bypass[j]) {
                    check[obj[i].Element[1]].push([obj[i].AtomicNumber, obj[i].Element])
                    active = false
                    break
                }
            }
            if (active) {
                check[obj[i].Element[0]].push([obj[i].AtomicNumber, obj[i].Element])
            }
        }
        txt += `<div class="row">`
        Object.keys(check).forEach((key, index) => {
            if (check[key].length > 0) {
                txt += `<div class="col-lg-4 col-md-6 my-3">`
                txt += `<h3 class="ml-3"><i class="fas fa-caret-right"></i> ${key}</h3>`
            }
            for (let j = 0; j < check[key].length; j++) {
                txt += `<a class="ml-4 my-2 link" href="./data.php?id=${check[key][j][0]}">${check[key][j][1]}<sup>${check[key][j][0]}</sup></a>`
                if (j == check[key].length - 1) {
                    txt += `</div>`
                }
            }
        })
        txt += `</div>`
    } else if (getCookie("lang") == "en") {
        let check = {"A": [],"B": [],"C": [],"D": [],"E": [],"F": [],"G": [],"H": [],"I": [],"J": [],"K": [],"L": [],"M": [],"N": [],"O": [],"P": [],"Q": [],"R": [],"S": [],"T": [],"U": [],"V": [],"W": [],"X": [],"Y": [],"Z": []}
        for (let i = 0; i < obj.length; i++) {
            check[obj[i].Element[0]].push([obj[i].AtomicNumber, obj[i].Element])
        }
        txt += `<div class="row">`
        Object.keys(check).forEach((key, index) => {
            if (check[key].length > 0) {
                txt += `<div class="col-lg-4 col-md-6 my-3">`
                txt += `<h3 class="ml-3"><i class="fas fa-caret-right"></i> ${key}</h3>`
            }
            for (let j = 0; j < check[key].length; j++) {
                txt += `<a class="ml-4 my-2 link" href="./data.php?id=${check[key][j][0]}">${check[key][j][1]}<sup>${check[key][j][0]}</sup></a>`
                if (j == check[key].length - 1) {
                    txt += `</div>`
                }
            }
        })
        txt += `</div>`
    }
    element_list.innerHTML = txt
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
