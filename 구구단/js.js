var body = document.body;

var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var calcResult = num1 * num2;

var question = document.createElement('div');
question.textContent = num1 + " 곱하기 " + num2 + "는?";
document.body.append(question);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
button.textContent = '입력!!';
form.append(button);

var result = document.createElement('div');
result.textContent = "딩동댕";
document.body.append(result);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (calcResult === Number(input.value)){
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        calcResult = num1 * num2;
        question.textContent = num1 + " 곱하기 " + num2 + "는?";
        input.value = '';
        input.focus();
        result.textContent = '딩동댕';
    } else {
        result.textContent = '땡';
        input.value = "";
        input.focus();
    }
});


