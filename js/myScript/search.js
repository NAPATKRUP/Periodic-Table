let msg = document.getElementById("searchBox")
let text = document.getElementById("text")
let searchList = document.getElementById("searchList")
let requestURL = ''
let txt = ''

// search setting
let options = {
    keys: ['Element'],
    shouldSort: true,
    threshold: 0.1,
}

// json
if (getCookie("lang") == "th") {
    requestURL = './data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = './data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
            showSearch(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()

function showSearch(obj) {
    // search
    let fuse = new Fuse(obj, options)
    let searchResult = fuse.search(msg.value)

    // display
    if (getCookie("lang") == "th") {
        if (msg.value === "") {
            text.classList.remove("d-none")
            text.innerHTML = "กรุณาใส่ชื่อธาตุที่ต้องการค้นหาในช่องค้นหา."
        } else if (searchResult.length > 0) {
            for (let i = 0; i < searchResult.length; i++) {
                txt += `<div class="text-center mt-3 mb-5 col-lg-4 col-md-6">
                            <table class="mx-auto">
                                <tr>
                                    <td class="element-bigbox ${colorTable(searchResult[i].Type)}">
                                        <a class="boxLink" href="./data.php?id=${searchResult[i].AtomicNumber}">
                                            <bigbox>
                                                <bigNumber>${searchResult[i].AtomicNumber}</bigNumber>
                                                <bigSymbol>${searchResult[i].Symbol}</bigSymbol>
                                                <bigElement>${searchResult[i].Element}</bigElement>
                                                <bigMass>${searchResult[i].AtomicMass}</bigMass>
                                            </bigbox>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <a class="my-2 searchlink" href="./data.php?id=${searchResult[i].AtomicNumber}">${searchResult[i].Element}<sup>${searchResult[i].AtomicNumber}</sup></a>
                        </div>`
            }
            searchList.innerHTML = txt
        } else {
            text.classList.remove("alert-success")
            text.classList.add("alert-danger")
            text.classList.remove("d-none")
            text.innerHTML = `ขออภัยเราไม่พบผลลัพธ์ที่ตรงกันกับ "${msg.value}".`
        }
    } else if (getCookie("lang") == "en") {
        if (msg.value === "") {
            text.classList.remove("d-none")
            text.innerHTML = "Please input element name in the search box."
        } else if (searchResult.length > 0) {
            for (let i = 0; i < searchResult.length; i++) {
                txt += `<div class="text-center mt-3 mb-5 col-lg-4 col-md-6">
                            <table class="mx-auto">
                                <tr>
                                    <td class="element-bigbox ${colorTable(searchResult[i].Type)}">
                                        <a class="boxLink" href="./data.php?id=${searchResult[i].AtomicNumber}">
                                            <bigbox>
                                                <bigNumber>${searchResult[i].AtomicNumber}</bigNumber>
                                                <bigSymbol>${searchResult[i].Symbol}</bigSymbol>
                                                <bigElement>${searchResult[i].Element}</bigElement>
                                                <bigMass>${searchResult[i].AtomicMass}</bigMass>
                                            </bigbox>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <a class="my-2 searchlink" href="./data.php?id=${searchResult[i].AtomicNumber}">${searchResult[i].Element}<sup>${searchResult[i].AtomicNumber}</sup></a>
                        </div>`
            }
            searchList.innerHTML = txt
        } else {
            text.classList.remove("alert-success")
            text.classList.add("alert-danger")
            text.classList.remove("d-none")
            text.innerHTML = `Sorry, we couldn't find any results matching "${msg.value}".`
        }
    }
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// colorTable function
function colorTable(type) {
    //color table
    if(type == "อโลหะ" || type == "Nonmetal" || type == "Halogen") return `cl_Nonmetal`;
    else if(type == "โลหะอัลคาไล" || type == "Alkali Metal") return `cl_AlkaliMetal`;
    else if(type == "โลหะอัลคาไลน์เอิร์ธ" || type == "Alkaline Earth Metal") return `cl_AlkalineEarthMetal`;
    else if(type == "กึ่งโลหะ" || type == "Metalloid") return `cl_Metalloid`;
    else if(type == "ก๊าซเฉี่อย" || type == "Noble Gas") return `cl_NobleGas`;
    else if(type == "โลหะหลังทรานซิชัน" || type == "Post-transition metals") return `cl_PostTransitionMetal`;
    else if(type == "โลหะทรานซิชัน" || type == "Transition Metal") return `cl_TransitionMetal`;
    else if(type == "แลนทาไนด์" || type == "Lanthanide") return `cl_Lanthanide`;
    else if(type == "แอกทิไนด์" || type == "Actinide") return `cl_Actinide`;
    else if(type == "") return `cl_artificial`;
}
