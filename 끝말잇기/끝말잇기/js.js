var body = document.body;

var word = document.createElement("div");
word.textContent = '제로초';
document.body.append(word);


var form = document.createElement("form");
document.body.append(form);


var input = document.createElement("input");
form.append(input);
// document.body.append(input);

var button = document.createElement("button");
button.textContent = '입력';
form.append(button);

var result = document.createElement("div");
result.textContent = "딩동댕";
document.body.append(result);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (word.textContent[word.textContent.length - 1] === input.value[0]) {
        result.textContent = "딩동댕";
        word.textContent = input.value;
        input.focus();
        input.value = "";
    } else {
        result.textContent = "땡";
        input.focus();
        input.value = "";
    }
});

// button.addEventListener('click', function () {
//     if (word.textContent[word.textContent.length - 1] === input.value[0]) {
//         result.textContent = "딩동댕";
//         word.textContent = input.value;
//         input.focus();
//         input.value = "";
//     } else {
//         result.textContent = "땡"
//         input.focus();
//         input.value = "";
//     }
// });