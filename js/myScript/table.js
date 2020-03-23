let table = document.getElementById("pt-table")
let groupselect = document.getElementById("pt-group")
let requestURL = ''
let json_obj

if (getCookie("lang") == "th") {
    requestURL = './data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = './data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
            showTable(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()

function showTable(obj) {
    json_obj = obj
    let txt = "", groupshow = "" , title_lang = ""
    let count = 0
    groupshow += `<tr>`
    if (getCookie("lang") == "th") title_lang = `หมู่ธาตุ : `
    else title_lang = `Group : `
    if (getCookie("darkstatus") == "1")
        groupshow += `<td class="no-wrap text-light">${title_lang}</td>
                <td><a onmouseover="mygroup(1)" class="btn btn-dark text-light">1</a></td>
                <td><a onmouseover="mygroup(2)" class="btn btn-dark text-light">2</a></td>
                <td><a onmouseover="mygroup(3)" class="btn btn-dark text-light">3</a></td>
                <td><a onmouseover="mygroup(4)" class="btn btn-dark text-light">4</a></td>
                <td><a onmouseover="mygroup(5)" class="btn btn-dark text-light">5</a></td>
                <td><a onmouseover="mygroup(6)" class="btn btn-dark text-light">6</a></td>
                <td><a onmouseover="mygroup(7)" class="btn btn-dark text-light">7</a></td>
                <td><a onmouseover="mygroup(8)" class="btn btn-dark text-light">8</a></td>
                <td><a onmouseover="mygroup(9)" class="btn btn-dark text-light">9</a></td>
                <td><a onmouseover="mygroup(10)" class="btn btn-dark text-light">10</a></td>
                <td><a onmouseover="mygroup(11)" class="btn btn-dark text-light">11</a></td>
                <td><a onmouseover="mygroup(12)" class="btn btn-dark text-light">12</a></td>
                <td><a onmouseover="mygroup(13)" class="btn btn-dark text-light">13</a></td>
                <td><a onmouseover="mygroup(14)" class="btn btn-dark text-light">14</a></td>
                <td><a onmouseover="mygroup(15)" class="btn btn-dark text-light">15</a></td>
                <td><a onmouseover="mygroup(16)" class="btn btn-dark text-light">16</a></td>
                <td><a onmouseover="mygroup(17)" class="btn btn-dark text-light">17</a></td>
                <td><a onmouseover="mygroup(18)" class="btn btn-dark text-light">18</a></td>`
    else if (getCookie("darkstatus") == "0")
        groupshow += `<td class="no-wrap">${title_lang}</td>
                <td><a onmouseover="mygroup(1)" class="btn btn-light">1</a></td>
                <td><a onmouseover="mygroup(2)" class="btn btn-light">2</a></td>
                <td><a onmouseover="mygroup(3)" class="btn btn-light">3</a></td>
                <td><a onmouseover="mygroup(4)" class="btn btn-light">4</a></td>
                <td><a onmouseover="mygroup(5)" class="btn btn-light">5</a></td>
                <td><a onmouseover="mygroup(6)" class="btn btn-light">6</a></td>
                <td><a onmouseover="mygroup(7)" class="btn btn-light">7</a></td>
                <td><a onmouseover="mygroup(8)" class="btn btn-light">8</a></td>
                <td><a onmouseover="mygroup(9)" class="btn btn-light">9</a></td>
                <td><a onmouseover="mygroup(10)" class="btn btn-light">10</a></td>
                <td><a onmouseover="mygroup(11)" class="btn btn-light">11</a></td>
                <td><a onmouseover="mygroup(12)" class="btn btn-light">12</a></td>
                <td><a onmouseover="mygroup(13)" class="btn btn-light">13</a></td>
                <td><a onmouseover="mygroup(14)" class="btn btn-light">14</a></td>
                <td><a onmouseover="mygroup(15)" class="btn btn-light">15</a></td>
                <td><a onmouseover="mygroup(16)" class="btn btn-light">16</a></td>
                <td><a onmouseover="mygroup(17)" class="btn btn-light">17</a></td>
                <td><a onmouseover="mygroup(18)" class="btn btn-light">18</a></td>`
    groupshow += `</tr>`
    groupselect.innerHTML = groupshow
    for (let i = 1; i < 11; i++) {
        txt += `<tr>`
        for (let j = 1; j < 19; j++) {
            if (i == 1 && j == 2) {
                // row = 1, col = 2
                txt += `<td class="empty-box"></td>`
            } else if (i == 1 && j == 3) {
                // boxArea-1
                txt += `<td colspan="3" rowspan="3" id="boxArea-1">
                        <table>
                            <tr>
                                <td class="element-bigbox ${colorTable(obj[0].Type)}">
                                    <bigbox>
                                        <bigNumber>${obj[0].AtomicNumber}</bigNumber>
                                        <bigSymbol>${obj[0].Symbol}</bigSymbol>
                                        <bigElement>${obj[0].Element}</bigElement>
                                        <bigMass>${obj[0].AtomicMass}</bigMass>
                                    </bigbox>
                                </td>
                            </tr>
                        </table>
                </td>`
            } else if (i == 1 && j == 4) {
                // boxArea-2
                txt += `<td colspan="7" rowspan="3" id="boxArea-2">`
                if (getCookie("lang") == "th") {
                    txt += `<center><table class="myType text-center">
                                <tr>
                                    <th colspan="5" class="title_type" onmouseover="mygroup('Metal')"><a>โลหะ</a></th>
                                    <th rowspan="4" class="cl_Metalloid" onmouseover="mygroup('Metalloid')"><div class="rotateFix"><div><a>กึ่งโลหะ</a></div></div></th>
                                    <th colspan="2" class="title_type" onmouseover="mygroup('Non-metal')"><a>อโลหะ</a></th>
                                <tr>
                                <tr>
                                    <td rowspan="2" class="cl_AlkaliMetal" onmouseover="mygroup('โลหะอัลคาไล')"><div class="rotate"><div><a>โลหะอัลคาไล</a></div></div></td>
                                    <td rowspan="2" class="cl_AlkalineEarthMetal" onmouseover="mygroup('โลหะอัลคาไลน์เอิร์ธ')"><div class="rotate"><div><a>โลหะอัลคาไลน์เอิร์ธ</a></div></div></td>
                                    <td class="cl_Lanthanide" onmouseover="mygroup('แลนทาไนด์')"><a>แลนทาไนด์</a></td>
                                    <td rowspan="2" class="cl_TransitionMetal" onmouseover="mygroup('โลหะทรานซิชัน')"><div class="rotate"><div><a>โลหะทรานซิชัน</a></div></div></td>
                                    <td rowspan="2" class="cl_PostTransitionMetal" onmouseover="mygroup('โลหะหลังทรานซิชัน')"><div class="rotate"><div><a>โลหะหลังทรานซิชัน</a></div></div></td>
                                    <td rowspan="2" class="cl_Nonmetal" onmouseover="mygroup('อโลหะ')"><div class="rotate"><div><a>อโลหะ</a></div></div></td>
                                    <td rowspan="2" class="cl_NobleGas" onmouseover="mygroup('ก๊าซเฉี่อย')"><div class="rotate"><div><a>ก๊าซเฉี่อย</a></div></div></td>
                                </tr>
                                <tr>
                                    <td class="cl_Actinide" onmouseover="mygroup('แอกทิไนด์')"><a>แอกทิไนด์</a></td>
                                </tr>
                            </table></center>`
                } else if (getCookie("lang") == "en") {
                    txt += `<center><table class="myType text-center">
                                <tr>
                                    <th colspan="5" class="title_type" onmouseover="mygroup('Metal')"><a>Metal</a></th>
                                    <th rowspan="4" class="cl_Metalloid" onmouseover="mygroup('Metalloid')"><div class="rotateFix"><div><a>Metalloid</a></div></div></th>
                                    <th colspan="3" class="title_type" onmouseover="mygroup('Non-metal')"><a>NonMetal</a></th>
                                <tr>
                                <tr>
                                    <td rowspan="2" class="cl_AlkaliMetal" onmouseover="mygroup('Alkali Metal')"><div class="rotate"><div><a>AlkaliMetal</a></div></div></td>
                                    <td rowspan="2" class="cl_AlkalineEarthMetal" onmouseover="mygroup('Alkaline Earth Metal')"><div class="rotate"><div><a>AlkalineEarthMetal</a></div></div></td>
                                    <td class="cl_Lanthanide" onmouseover="mygroup('Lanthanide')"><a>Lanthanide</a></td>
                                    <td rowspan="2" class="cl_TransitionMetal" onmouseover="mygroup('Transition Metal')"><div class="rotate"><div><a>TransitionMetal</a></div></div></td>
                                    <td rowspan="2" class="cl_PostTransitionMetal" onmouseover="mygroup('Post-transition metals')"><div class="rotate"><div><a>PostTransitionMetal</a></div></div></td>
                                    <td rowspan="2" class="cl_Nonmetal" onmouseover="mygroup('Nonmetal')"><div class="rotate"><div><a>Nonmetal</a></div></div></td>
                                    <td rowspan="2" class="cl_NobleGas" onmouseover="mygroup('Noble Gas')"><div class="rotate"><div><a>NobleGas</a></div></div></td>
                                </tr>
                                <tr>
                                    <td class="cl_Actinide" onmouseover="mygroup('Actinide')"><a>Actinide</a></td>
                                </tr>
                            </table></center>`
                }
                txt += `</td>`
            } else if (i == 1 && j == 5) {
                // boxArea-3
                txt += `<td colspan="5" rowspan="1" class="text-center" id="pt-phase">`
                if (getCookie("lang") == "th" && getCookie("darkstatus") == "0") {
                    txt += `สถานะ : 
                    <a onmouseover="mygroup('ของแข็ง')" class="btn btn-light" alt="ของแข็ง" title="ของแข็ง"><i class="fas fa-cubes"></i></a>
                    <a onmouseover="mygroup('ของเหลว')" class="btn btn-light" alt="ของเหลว" title="ของเหลว"><i class="fas fa-tint"></i></a>
                    <a onmouseover="mygroup('ก๊าซ')" class="btn btn-light" alt="ก๊าซ" title="ก๊าซ"><i class="fas fa-wind"></i></a>
                    <a onmouseover="mygroup('Unknown')" class="btn btn-light" alt="ไม่ทราบ" title="ไม่ทราบ"><i class="fas fa-question-circle"></i></a><br>
                    `
                } else if (getCookie("lang") == "en" && getCookie("darkstatus") == "0") {
                    txt += `Phase : 
                    <a onmouseover="mygroup('solid')" class="btn btn-light" alt="Solid" title="Solid"><i class="fas fa-cubes"></i></a>
                    <a onmouseover="mygroup('liquid')" class="btn btn-light" alt="Liquid" title="Liquid"><i class="fas fa-tint"></i></a>
                    <a onmouseover="mygroup('gas')" class="btn btn-light" alt="Gas" title="Gas"><i class="fas fa-wind"></i></a>
                    <a onmouseover="mygroup('Unknown')" class="btn btn-light" alt="Unknown" title="Unknown"><i class="fas fa-question-circle"></i></a><br>
                    `
                }
                else if (getCookie("lang") == "th" && getCookie("darkstatus") == "1") {
                    txt += `สถานะ : 
                    <a onmouseover="mygroup('ของแข็ง')" class="btn btn-dark" alt="ของแข็ง" title="ของแข็ง"><i class="fas fa-cubes"></i></a>
                    <a onmouseover="mygroup('ของเหลว')" class="btn btn-dark" alt="ของเหลว" title="ของเหลว"><i class="fas fa-tint"></i></a>
                    <a onmouseover="mygroup('ก๊าซ')" class="btn btn-dark" alt="ก๊าซ" title="ก๊าซ"><i class="fas fa-wind"></i></a>
                    <a onmouseover="mygroup('Unknown')" class="btn btn-dark" alt="ไม่ทราบ" title="ไม่ทราบ"><i class="fas fa-question-circle"></i></a><br>
                    `
                } else if (getCookie("lang") == "en" && getCookie("darkstatus") == "1") {
                    txt += `Phase : 
                    <a onmouseover="mygroup('solid')" class="btn btn-dark" alt="Solid" title="Solid"><i class="fas fa-cubes"></i></a>
                    <a onmouseover="mygroup('liquid')" class="btn btn-dark" alt="Liquid" title="Liquid"><i class="fas fa-tint"></i></a>
                    <a onmouseover="mygroup('gas')" class="btn btn-dark" alt="Gas" title="Gas"><i class="fas fa-wind"></i></a>
                    <a onmouseover="mygroup('Unknown')" class="btn btn-dark" alt="Unknown" title="Unknown"><i class="fas fa-question-circle"></i></a><br>
                    `
                }
                txt += `</td>`
            } else if (i == 1 && (j > 5 && j < 18)) {
                // row = 1, col > 5, col < 18
                continue
            } else if (i == 2 && (j > 2 && j < 13)) {
                // row = 2, col > 2, col < 13
                continue
            } else if (i == 3 && (j > 2 && j < 13)) {
                // row = 3, col > 2, col < 13
                continue
            } else if (i == 6 && j == 3) {
                // row = 6, col = 3
                txt += `<td class="element-box text-center cl_Lanthanide" onmouseover="mygroup('more1')"><number>57-71</number></td>`
            } else if (i == 7 && j == 3) {
                // row = 7, col = 3
                txt += `<td class="element-box text-center cl_Actinide" onmouseover="mygroup('more2')"><number>89-103</number></td>`
            } else if ((i == 8 && j == 3) || (i == 9 && j == 3) || (i == 10 && j == 3)) {
                if (getCookie("darkstatus") == "1") txt += `<td class="bg-dark"></td>`
                else if (getCookie("darkstatus") == "0") txt += `<td class="cl_more"></td>`
            } else if (i == 8) {
                // row = 8
                txt += `<td class="empty-box"></td>`
            } else if (i == 9 && j < 3) {
                // row = 9, col < 4
                txt += `<td class="empty-box"></td>`
            } else if (i == 10 && j < 3) {
                // row = 10, col < 4
                txt += `<td class="empty-box"></td>`
            } else {
                if (i == 6 && j == 4) {
                    count = 71 // 72
                } else if (i == 7 && j == 4) {
                    count = 103 // 104
                } else if (i == 9 && j == 4) {
                    count = 56 // 57
                } else if (i == 10 && j == 4) {
                    count = 88 // 89
                }
                txt += `<td class="element-box `
                txt += colorTable(obj[count].Type)
                if (obj[count].AtomicNumber >= 57 && obj[count].AtomicNumber <= 71) txt += ` outline_top`
                if (obj[count].AtomicNumber == 71 || obj[count].AtomicNumber == 103) txt += ` outline_right`
                txt += `" id="${obj[count].AtomicNumber}" onmouseover="toShow(${obj[count].AtomicNumber})"> 
                            <a class="datalink" href="./data.php?id=${count + 1}">
                            <box>
                                <number>${obj[count].AtomicNumber}</number>
                                <symbol>${obj[count].Symbol}</symbol>
                                <element>${obj[count].Element}</element>
                                <mass>${obj[count].AtomicMass}</mass>
                            </box>
                        </td>`
                count++
            }
        }
        txt += `</tr>`
    }
    table.innerHTML = txt
}

//กลุ่มธาติ
function mygroup(choose) {
    let metal = ["โลหะอัลคาไล", "โลหะอัลคาไลน์เอิร์ธ", "แลนทาไนด์", "แอกทิไนด์", "โลหะทรานซิชัน", "โลหะหลังทรานซิชัน", 
                "Alkali Metal", "Alkaline Earth Metal", "Lanthanide", "Actinide", "Transition Metal", "Post-transition metals"]
    let non_metal = ["อโลหะ", "ก๊าซเฉี่อย", "Nonmetal", "Noble Gas"]
    for(let i=1; i<=118; i++) {
        myset = document.getElementById(i);
        if (choose == "more1" || choose == "more2" || choose == "x") {
            if ((choose == "more1" && (i>=57 && i<=71)) || (choose == "more2" && (i>=89 && i<=103))) 
                myset.style.opacity = "1"
            else if (choose == "x") myset.style.opacity = "1"
            else myset.style.opacity = "0.25"
        }
        else if ((choose == json_obj[i-1].Phase || (json_obj[i-1].Phase == "ของเทียม" && choose == "ของแข็ง") || 
                (json_obj[i-1].Phase == "artificial" && choose == "solid")) && i<104) 
                myset.style.opacity = "1"
        else if (choose == 'Unknown' && i>=104) myset.style.opacity = "1"
        else if (choose == json_obj[i-1].Group) myset.style.opacity = "1"
        else if (choose == 'Metal') {
            if (metal.indexOf(json_obj[i-1].Type) != -1) myset.style.opacity = "1"
            else myset.style.opacity = "0.25"
        }
        else if (choose == "Metalloid") {
            if (json_obj[i-1].Type == "กึ่งโลหะ" || json_obj[i-1].Type == "Metalloid") myset.style.opacity = "1"
            else myset.style.opacity = "0.25"
        }
        else if (choose == 'Non-metal') {
            if (non_metal.indexOf(json_obj[i-1].Type) != -1) myset.style.opacity = "1"
            else myset.style.opacity = "0.25"
        }
        else if (json_obj[i-1].Type == choose) myset.style.opacity = "1"
        else myset.style.opacity = "0.25"
    }
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// display big-element box
function toShow(n) {
    n = n - 1
    let element_bigbox = document.getElementsByClassName("element-bigbox")
    let bigNumber = document.getElementsByTagName("bigNumber")
    let bigSymbol = document.getElementsByTagName("bigSymbol")
    let bigElement = document.getElementsByTagName("bigElement")
    let bigMass = document.getElementsByTagName("bigMass")
    element_bigbox[0].className = "element-bigbox";
    element_bigbox[0].classList.add(colorTable(json_obj[n].Type))
    element_bigbox[0].style.display = "table-cell"
    bigNumber[0].innerHTML = json_obj[n].AtomicNumber
    bigSymbol[0].innerHTML = json_obj[n].Symbol
    bigElement[0].innerHTML = json_obj[n].Element
    bigMass[0].innerHTML = json_obj[n].AtomicMass
    mygroup("x")
}

// colorTable function
function colorTable(type) {
    //color table
    if(type == "อโลหะ" || type == "Nonmetal") return `cl_Nonmetal`;
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