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

function inputContents(e, elName) {
    elName.textContent = e.target.value;
}

// 이름
// inputName.addEventListener('input', (e) => {
//     name.textContent = e.target.value;
// });
inputName.addEventListener('input', (e) => {
    inputContents(e, name);
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