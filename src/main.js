require('./scss/main.scss');

/*
* card
* input 순서
*/
const cardNumbers = document.getElementById('cardNumbers');
const inputCardNumbers = document.getElementById('inputCardNumbers');

const name = document.getElementById('name');
const inputName = document.getElementById('inputName');

const dateYear = document.getElementById('dateYear');
const inputDateYear = document.getElementById('inputDateYear');

const dateMonth = document.getElementById('dateMonth');
const inputDateMonth = document.getElementById('inputDateMonth');

const cvcNumbers = document.getElementById('cvcNumbers');
const inputCvcNumbers = document.getElementById('inputCvcNumbers');

const fails = [];

// confirmButton
const confirmBtn = document.getElementById('confirm-btn');

// 인풋값 value값 가져와서 카드에 넣기
function inputContents(e, elName) {
    elName.textContent = e.target.value;
}
// 인풋값 체크 후 빈,잘못 된 값일 경우 공통효과
function chkInput(el, className) {
    el.style.border = "1px solid #FF5050";
    el.parentElement.classList.add(className);
}
// 인풋값 체크 후 올바른 값일 경우 공통효과
function chkPass(el, className) {
    el.style.border = "1px solid #DFDEE0";
    el.parentElement.classList.remove(className);
}

// 이름
inputName.addEventListener('input', (e) => {
    if(/[^a-zA-Z]/.test(e.target.value)) {
        chkInput(inputName, "worng_eng");
    } else {
        inputContents(e, name);
        chkPass(inputName, "worng_eng");
        chkPass(inputName, "blank");
        // fail 리스트에 있는 것 빼기
    }
});

// 카드넘버
inputCardNumbers.addEventListener('input', (e) => {
    if(/[^0-9]/g.test(e.target.value)) {
        chkInput(inputCardNumbers, "worng");
    } else {
        chkPass(inputCardNumbers, "worng");
        chkPass(inputCardNumbers, "blank");
        inputContents(e, cardNumbers);
    }
});

// 연도
inputDateYear.addEventListener('input', (e) => {
    if(/[^0-9]/g.test(e.target.value)) {
        chkInput(inputDateYear, "worng");
    } else {
        chkPass(inputDateYear, "worng");
        chkPass(inputDateYear, "blank");
        inputContents(e, dateYear);
    }
});

// 월
inputDateMonth.addEventListener('input', (e) => {
    if(/[^0-9]/g.test(e.target.value)) {
        chkInput(inputDateMonth, "worng");
    } else {
        chkPass(inputDateMonth, "worng");
        chkPass(inputDateMonth, "blank");
        inputContents(e, dateMonth);
    }
})

// CVC번호
inputCvcNumbers.addEventListener('input', (e) => {
    if(/[^0-9]/g.test(e.target.value)) {
        chkInput(inputCvcNumbers, "worng");
    } else { 
        chkPass(inputCvcNumbers, "worng");
        chkPass(inputCvcNumbers, "blank");
        inputContents(e, cvcNumbers);
    }
})

confirmBtn.addEventListener('click', () => {
    // 이름체크
    if(inputName.value === "") {
        fails.push(inputName);
        chkInput(inputName, "blank");
    }
    // 카드넘버 체크
    if(inputCardNumbers.value == "") {
        fails.push(inputCardNumbers);
        chkInput(inputCardNumbers, "blank");
    }
    // 연도 체크
    if(inputDateYear.value == "") {
        fails.push(inputDateYear);
        chkInput(inputDateYear, "blank");
    }
    // 월 체크
    if(inputDateMonth.value == "") {
        fails.push(inputDateMonth);
        chkInput(inputDateMonth, "blank");
    }
    // CVC번호 체크
    if(inputCvcNumbers.value == "") {
        fails.push(inputCvcNumbers);
        chkInput(inputCvcNumbers, "blank");
    }
    
    console.log(fails);
});