let requestURL = ''
let json_obj, rest, list
let qarea = document.getElementById("question")
let elem = document.getElementById('myBar')
let qbox1 = document.getElementById('ansbox1')
let qbox2 = document.getElementById('ansbox2')
let qbox3 = document.getElementById('ansbox3')
let qbox4 = document.getElementById('ansbox4')
let sbox = document.getElementById('startbox')
let qTitle = document.getElementById('quizTitle')
let clickGame = 0
let gameCounter = 0
let winCounter = 0
let quizDialog = []
let presetQ = [0, 1, 2, 3, 4]

if (getCookie("lang") == "th") {
    requestURL = './data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = './data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
        rest = generateQuiz(dataJSON)
    }
}
request.open("GET", requestURL, true)
request.send()

function generateQuiz(obj) {
    json_obj = obj
    let qArr = [],
        groupCheck = [],
        list = []
    let qSet = new Set()
    for (i = 0; i < 5; i++) {
        while (qSet.size < 4) {
            let adder = json_obj[Math.floor(Math.random() * json_obj.length)]
            if (groupCheck.includes(adder.Group) === false) {
                if ((parseInt(adder.Period) === 6 && parseInt(adder.Group) === 3) === false) {
                    if ((parseInt(adder.Period) === 7 && parseInt(adder.Group) === 3) === false) qSet.add(adder);
                }
            }
            groupCheck.push(adder.Group)
        }
        let array = Array.from(qSet);
        qArr.push(array)
        qSet.clear()
        groupCheck = []
    }
    return qArr
}

function displayQuiz(obj) {
    json_obj = obj
    let correct = [],
        ansArray = []
    qTitle.style.display = "block"

    let ansLocation = Math.floor(Math.random() * json_obj[gameCounter].length)
    correct = (json_obj[gameCounter][ansLocation])
    switch (presetQ.splice(Math.floor(Math.random() * presetQ.length), 1)[0]) {
        case 0:
            //ชื่อเต็มของธาตุน้คืออะไร
            if (getCookie("lang") == "th") quizDialog[0] = "ชื่อเต็มของธาตุ " + correct.Symbol + " คืออะไร?";
            else quizDialog[0] = "What is the element name of " + correct.Symbol + "?";
            quizDialog[1] = 0
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Element);
            break
        case 1:
            //ชื่อย่อของธาตุน้คืออะไร
            if (getCookie("lang") == "th") quizDialog[0] = "ชื่อย่อของ " + correct.Element + " คืออะไร?";
            else quizDialog[0] = "What is the correct symbol of " + correct.Element + "?";
            quizDialog[1] = 1
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Symbol);
            break
        case 2:
            //ธาตุอยู่หมุ่อะไร
            if (getCookie("lang") == "th") quizDialog[0] = correct.Element + " อยู่หมู่อะไร?";
            else quizDialog[0] = "Which group does " + correct.Element + " belong to?";
            quizDialog[1] = 2
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Group);
            break
        case 3:
            //เลขอะตอมธาตุน้คืออะไร
            if (getCookie("lang") == "th") quizDialog[0] = "เลขอะตอมของธาตุ " + correct.Element + " คืออะไร?";
            else quizDialog[0] = "What is the atomic number of " + correct.Element + "?"
            quizDialog[1] = 3
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].AtomicNumber);
            break
        case 4:
            //ธาตุนีทีสถานะอะไร
            if (getCookie("lang") == "th") {
                quizDialog[0] = correct.Element + " มีสถานะอะไร?"
                ansArray = ["ของแข็ง", "ของเหลว", "ก๊าซ", "ของเทียม"]
            } else {
                quizDialog[0] = "What state does " + correct.Element + " in?"
                ansArray = ["Solid", "Liquid", "Gas", "Artificial"]
            }
            quizDialog[1] = 4
            for (j = 0; j < 4; j++) if (ansArray[j].localeCompare(json_obj[gameCounter][j].State)) {
                ansLocation = j
                break
            }
            break
    }
    list = [quizDialog, ansArray, correct, ansLocation]
    qTitle.innerHTML = quizDialog[0]
    qbox1.innerHTML = ansArray[0]
    qbox2.innerHTML = ansArray[1]
    qbox3.innerHTML = ansArray[2]
    qbox4.innerHTML = ansArray[3]
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function move() {
    if (gameCounter < 5) {
        let width = 100;
        var id = setInterval(frame, 150);
        displayQuiz(rest)
        qbox1.style.display = "block"
        qbox2.style.display = "block"
        qbox3.style.display = "block"
        qbox4.style.display = "block"
        elem.style.display = "block"
        elem.style.width = width + '%'
        elem.style.backgroundColor = "#66b82f"
        sbox.style.display = "none"
        sbox.innerHTML = ""
        clickGame = 0

        function frame() {
            if (width <= 0) {
                clearInterval(id);
                qbox1.style.display = "none"
                qbox2.style.display = "none"
                qbox3.style.display = "none"
                qbox4.style.display = "none"
                elem.style.display = "none"
                qTitle.style.display = "block"
                if (getCookie("lang") == "th") {
                    qTitle.innerHTML = "หมดเวลา! คำตอบที่ถูกต้องคือ " + list[1][list[3]]
                    sbox.innerHTML = "ข้อถัดไป"
                } else {
                    qTitle.innerHTML = "Time's out! The correct answer is " + list[1][list[3]]
                    sbox.innerHTML = "Next question"
                }
                gameCounter++
                sbox.style.display = "block"

            } else if (clickGame != 0) {
                clearInterval(id);
                qbox1.style.display = "none"
                qbox2.style.display = "none"
                qbox3.style.display = "none"
                qbox4.style.display = "none"
                elem.style.display = "none"
                gameCounter++
                sbox.style.display = "block"
                if (getCookie("lang") == "th") sbox.innerHTML = "ข้อถัดไป";
                else sbox.innerHTML = "Next question";


            } else if (width < 51) {
                elem.style.backgroundColor = "#b82f2f"
                width--
                elem.style.width = width + '%'

            } else {
                width--
                elem.style.width = width + '%'
            }
        }
    } else {
        if (getCookie("lang") == "th") {
            qTitle.innerHTML = "คุณทำได้ " + winCounter + "/5 คะแนน"
            sbox.innerHTML = "เล่นอีกรอบ"
        } else {
            qTitle.innerHTML = "You have scored " + winCounter + "/5 point(s)"
            sbox.innerHTML = "Play again"
        }
        presetQ = [0, 1, 2, 3, 4]
        gameCounter = 0
        winCounter = 0
    }
}

function clickChoice(ans) {
    if (ans === list[3]) {
        if (getCookie("lang") == "th") qTitle.innerHTML = "ถูกต้อง!";
        else qTitle.innerHTML = "Correct!";
        winCounter++
    } else {
        if (getCookie("lang") == "th") qTitle.innerHTML = "ผิด! คำตอบที่ถูกต้องคือ " + list[1][list[3]];
        else qTitle.innerHTML = "Incorrect! The correct answer is " + list[1][list[3]];
    }
    clickGame++;
}
