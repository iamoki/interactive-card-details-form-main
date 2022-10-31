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
// 인풋값 체크 후 빈 값일 경우 공통효과
function chkNull(el, className) {
    el.style.border = "1px solid #FF5050";
    el.parentElement.classList.add(className);
}
// 인풋값 체크 후 올바른 값일 경우 공통효과
function chkPass(el, className) {
    el.style.border = "1px solid #DFDEE0";
    el.parentElement.classList.remove(className);
}

// 이름
inputName.addEventListener('keyup', (e) => {
    if(/[^a-zA-Z]/.test(e.target.value)) {
        alert('영문만 쓰세요')
        console.log('국문?')
        // 입력할때 벨리데이션 체크하기로 바꿔보기 10/31
    } else {
        console.log('영문?')
        inputContents(e, name);
    }
});

// 카드넘버
inputCardNumbers.addEventListener('input', (e) => {
    inputContents(e, cardNumbers);
});

// 연도
inputDateYear.addEventListener('input', (e) => {
    inputContents(e, dateYear);
});

// 월
inputDateMonth.addEventListener('input', (e) => {
    inputContents(e, dateMonth);
})

// CVC번호
inputCvcNumbers.addEventListener('input', (e) => {
    inputContents(e, cvcNumbers);
})

confirmBtn.addEventListener('click', () => {
    // 이름체크
    if(inputName.value === "") {
        fails.push(inputName);
        chkNull(inputName, "blank");
    } else if (/[^a-zA-Z]/.test(inputName.value)) {
        fails.push(inputName);
        console.log('영문만 입력하세요');
    } else {
        return;
    }
    // 카드넘버 체크
    if(inputCardNumbers.value == "") {
        fails.push(inputCardNumbers);
        chkNull(inputCardNumbers, "blank");
    }
    // 연도 체크
    if(inputDateYear.value == "") {
        fails.push(inputDateYear);
        chkNull(inputDateYear, "blank");
    }
    // 월 체크
    if(inputDateMonth.value == "") {
        fails.push(inputDateMonth);
        chkNull(inputDateMonth, "blank");
    }
    // CVC번호 체크
    if(inputCvcNumbers.value == "") {
        fails.push(inputCvcNumbers);
        chkNull(inputCvcNumbers, "blank");
    }
    
    console.log(fails);
});