

### 1강 js

- 자료형 
  - 숫자(NaN), 문자, 불린, undefined, null

```javaㄴ
5 === 5  //true
5 !== 5  //false
null === undefinded // false

var 결과 = 15

var 빈값  // 값을 넣지 않을 수 있다.
undefinded // 번역하면 정의 되지 않음임
```

- 숫자(NaN) 문자, 참거짓, undefinde, null 은 값이다.

- ==, != 은 쓰지말자 / ===, !==

- var로 컴퓨터한테 기억하라고 할 수 있다.

- undefined 컴퓨터가 넣어준 빈 값 // 쓰지말자 
  null 내가 넣어준 빈 값 / 내가 일부러 지운 빈값  // null을 사용하자

  null === undefinded // false

- 연산자는 우선순위 ( =이 제일 마지막에 실행)

```javascript
var 이름 = '제로초'
이름 = '네로'
이름 = null


var 새로운값  // undefined 제가넣은 것이 아닌 컴퓨터가 기본적으로 넣어준값

새로운값 === undefined // true  
새로운값 = '기억해'// "기억해"
새로운값 = null // null  저는 무조건 null을 넣는다  



```

- prompt('답?')  // 입력값받는 함수 // 반환값이 string1
- Number() 인트형으로 변환해줌



```javascript
  if(3 * 8 === Number(prompt('답'))){
  	'딩동댕'
  } else {
  	'땡'
  }
  
  
  var 답 = prompt('답?')
  if(3 * 8 === Number(답){
  	딩동댕
  } else {
  	'땡'
  }
  
  
  var 값 = 0;
  while(값 < 5){
      console.log('안녕하세요')
      값 = 값 + 1
  }	
     
  
  
```

  제로초 자바스크립트 사이트 : 1번부터 6번까지 읽고 오기





### 2강 js



```javascript
'문자2' + 5  // "문자25"
String(5) // "5" : 숫자를 문자로 변환
Number('5') // 5 : 문자를 숫자로 변환

3**3 // 27 : 제곱연산자

function 함수(x, z){
    return x + z + 5;
}

함수(3, 2) // 10
```

```
'함수야놀자' '자전거' '거위'

'함수야놀자'[2] // "야"
'암수야놀자'[0] // "함"

var 단어 = '함수야놀자'
단어[2] // 야

'ㅁㄴㅇㄻㄴㅇㄻㄴㄹ'.length // 글자수 개수
```

```javascript
처음
whilde(조건){
	실행
	끝
}	

for(처음; 조건; 끝){
	실행
}
```



- 끝말잇기 문제

```js
var word = '제로초'
while(true){	
    var answer = prompt(word)
    if(word[word.length -1] === answer[0]){
        word = answer
        alert('딩동댕')
    } else {
        alert('땡')
    }

}

for(var word ='제로초'; true; ){
    var answer = prompt(word)
    if(word[word.length -1] === answer[0]){
        word = answer
        alert('딩동댕')
    } else {
        alert('땡')
    }
}
```



### 3강 js

```javascript
for(처음(1); 조건(2); 끝(4)){
    실행(3)
}

2,3,4는 조건이 true면 계속 반복
```



- 별찍기 1번

  - '*'.repeat(5);     *을 5번 번복해라

  ```javascript
  *
  **
  ***
  ****
  *****
      
      for(var star = 1; star <= 5; star += 1){
          console.write('*'.repeat(star))
      }
  ```



- 별찍기 2번

```js
*****
****
***
**
*
    
    for(var star = 5; star >= 1; star -= 1){
        console.log('*'.repeat(star));
    }
```



- 별찍기 3번

```js
**********
********
******
****
**

    for(var star = 10; star >= 2; star -= 2){
        console.log('*'.repeat(star));
    }
```



- 별찍기 4번

```js
*
**
****
********
****************
    
    for(var star = 1; star <= 16; star *= 2){
        console.log('*'.repeat(star))
    }

// 종료될 때 star = 32임
```



- 별찍기 5번

```js
*****
 ****
  ***
   **
    *
	
    for(var star = 5; star >= 1; star -= 1){
        console.log(' '.repeat(5-star) + '*'.repeat(star));
        
    }
```



- 별찍기 6번

```js
*********
 *******
  *****
   ***
    *
    
    for(var star = 9; star >=1; star -=2){        
        console.log(' '.repeat((9-star)/2) + '*'.repeat(star) +' '.repeat((9-star)/2))
        i += 1;
    }
```

4  0

2  1

1  2



- 별찍기 7번

```
  *
 ***
*****
 ***
  *
  
  for(var star = 1; star <= 9; star += 2){
      if(star <= 5){
      	console.log(' '.repeat((9 - star)/2/2) + '*'.repeat(star)
      	+ ' '.repeat((9 - star)/2/2))
      } else {
      	console.log(' '.repeat((star - 5)/2) + '*'.repeat(9 - star + 1)
		+ ' '.repeat((star - 5)/2))
      }
  }
```





##### 객체

​	**함수(function() {})**  : 함수는 특수한 객체이다
​	**배열**                          : 배열은 특수한객체이다

​	하지만 객체는 함수가 아니다. 하지만 객체는 배열이 아니다.



- 값이 6개임

```js
1.객체                                동물					식물
	함수 : 함수도 값이다.					사람					선인장
    배열 : 배열도 값이다.					원숭이				    토마토
2.숫자
3.문자
4.불린
5.null
6.undefined
```



- 같은 이름, 키, 몸무게를 사용하면서도 다른 사람들을 표현할 수 있는것

  - 객체 안에는 값에 대한 모든 것을 넣을 있음

  - 객체 : { }

  - 그룹같은 것, 변수들의 그룹 같은 것

  - 객체

    ```js
    객체 = {
        속성(프로퍼티): 값,
        속성(메서드): 함수,
    }
    ```

```js
var 제로초 = { }/ 제로초라는 변수에 객체를 저장한 것임

var 제로초 = {
    이름: '제로초',
	키: 174,
    몸무게: 68,
}

var 네로 = {
    이름: '네로',
    키: 160
    몸무게: 58,
}

// 마지막 콤마는 찍어주기(안찍어도 되지만)
```

```js
var 제로초 = {
    이름: '제로초',            //이름을 속성(프로퍼티)이라고 함
    먹다: function 먹다(){    //먹다도 속성(프로퍼티)인데 함수가 들어있는 속성을 메소드라고 함
        console.log('냠냠')
    },
}

제로초['이름']    // -> '제로초'
제로초.이름       // -> '제로초'

제로초['먹다']    // -> f 먹다(){console.log('냠냠')}
제로초.먹다       // -> f 먹다(){console.log('냠냠')}

제로초.먹다()     // -> 냠냠   함수가 실행이됨


```

```js
'안녕하세요'.length   // 문자에서 .을 붙이게 되면 브라우저에서 특수한 문자객체로 인식한다.
'*'.repeat(5)       //  문자객체 안에서 repeat, length 를 찾아서 사용

var 문자객체 = {
    length: 5,
    repeat: function(){} // 함수의 이름은 없어도됨,익명함수라함, 프로퍼티(repeat)이름 역할을 함
}


```



```js
var 네로 = {
    이름: '네로',
    키: 160,
    뭄무게: 58,
}


네로.이름     // -> 네로
네로['이름'] //  -> 네로  // 이걸 사용할 필요가 있을 때가 있음 // []안에 변수를 사용할 수 있음

var 값 = '이름'

네로.값   // ->  undefinded
네로[값]  // ->  네로     //네로['이름'] 과 같음


네로.키 = null // 속성을 지우고 싶을 때 = 을 사용할 수 있음
네로.생일      // -> undefined  컴퓨터에서 넣어준 것
네로.나이      // -> null       내가 의도적으로 지운것
```





#### 배열

```js
var 배열 = {   // 브라우저에서 제공하는 배열
    '사과',
    '오렌지',
    '포도',
    '딸기',
}

배열[0]   // -> "사과"
배열[1]	// -> "오렌지"
배열[2]	// -> "포도"
배열[-1]  // -> undefined

배열.length // -> 4

배열        // -> 
// ->
["사과", "오렌지", "포도", "딸기"]   // 브라우저에서 제공하는 배열
0: "사과"
1: "오렌지"
2: "포도"
3: "딸기"
length: 4
__proto__: Array(0)


var 배열같은객체 = {  // 배열을 흉내내서 만든 객체
	0: '코끼리',
    1: '고양이',
    2: '강아지',
    3: '치킨',
    length: 4,
}

배열같은객체    // -> {0: "코끼리:, 1: "고양이", 2: "강아지", 3: "치킨", length: 4}
배열같은객체[0] // -> "코끼리"
배열같은객체[1] // -> "고양이"
배열같은객체[2] // -> "강아지"
배열같은객체[3] // -> "치킨"
배열같은객체[4] // ->  4
```

```js
배열과 객체를 구별하는 방법
Array는 배열을 담당하는 객체, 브라우저가 만들어줌,  배열인지 아닌지 구분해줌
Array.isArray(배열)   // -> true 
Array.isArray(배열같은객체) // -> false  
```



- 제공하는 객체

```js
Array
Math
Number('5')     // 문자열 5를 -> 5
Boolean('true') // 문자열 "ture"를 -> ture

window // 제일 중요함
```



#### 구구단 게임

```js
Math.floor(Math.random() * 9) + 1  // 1~9까지 랜덤한 숫자

Math.random()                      // 0.0 < x < 1.0
Math.random() * 9                  //  0 < x < 9
Math.floor(Math.random() * 9)      // 0 <= x <=8
Math.floor(Math.random() *9 + 1)   // 1<= x <= 9  

결론 1,2,3,4,5,6,7,8,9 출력됨
```



```js
var 숫자1 = Math.floor(Math.random() * 9) + 1
var 숫자2 = Math.floor(Math.random() * 9) + 1
var 결과 = 숫자1 * 숫자2
var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?')
if(결과 === Number(답)) {
    alert('딩동댕');
} else 
    alert('땡');
}    
```

```js
while(true){
    var 숫자1 = Math.floor(Math.random() * 9) + 1
	var 숫자2 = Math.floor(Math.random() * 9) + 1
	var 결과 = 숫자1 * 숫자2
    var 조건 = true;
	while(조건){
		var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?')
   		if(결과 === Number(답)) {
   	    	alert('딩동댕');
            조건 = false;
   		} else {
   	    	alert('땡');
		}
   	}
}
// 프롬프트에서 
// 확인을 누리면 var = 답에 결과가 저장이 된다.
// 취소를 누르면 var = 답에 null을 넣어줌 

prompt('취소누르면 뭐니') // -> null
Number(null)           // -> 0
```



### 4강 js

```js
window             // window 브라우저 전체를 담당함 크롬에 5개탭이 다 window객체에 해당
				   // window는 모든 곳에서 접근 가능하다고 해서 전역객체라 불림


window.document    //  document는 html문서와 관련이 있음
window['document'] // -> #document // 화면을 담당함, 윈도우객체안에 document객체가 들어있음


var newWindow = window.open()  //브라우저 창을 띄워줌
window.resizeTo(

);                // 브라우저 창을 축소해주는 것
```



```js
var 이름 = '제로초'	 // -> undefined
window.이름          // -> "제로초"

function 기억하세요() {
	var 몸무게 = 70;
}

기억하세요();        // -> undefined
window.몸무게       // -> undefined

// 함수안에 변수가 들어있을 떄는 window에 등록이 안되고
// 따로(var 이름) 변수를 선언 했을 때 window에 등록이 됨
```



- 자바스크립트 코드를 실행시켜주는게 브라우저랑 노드가 있음
  - node에서는 window가 없음 , node가 안넣어줘서
  - broswer에는 window가 있음



```js
console.dir(document)   // 객체들을 로깅해주는 명령어
// -> document안에 여러가지 html과 관련된 객체들이 보임
```

- document
  - DOM 객체 : document object model
  - html을 js로 통역해주는 역할 : dom 객체





```html
<!DOCTYPE html>
<html>
    <head>
	    <meta charset="utf-8"/>
        <title>끝말잇기</title>
    </head>
    <body>
        // <div>제로초</div>           // js코드로 넣어주려고함
        // <form>
        // 	<input type="text"/>
        //	 <button>등록</button>
        //</form>
        
        // <div>딩동댕</div> 
        
        
		<script src="끝말잇기.js"></script>
    </body>
</html>


// enter기능은 form tag가 필요함
// input과 buttun을 form 안에 넣어줌
// form안에 들어있는 input은 enter를 칠 수 있음

```

```js
var 바디 = document.body;  // html의 body부분이 선택이 됨

var 단어 = document.createElement('div'); // html태그를 만들고 싶다면
단어.textContent = '제로초';
docuemnt.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');  // 테그를 만들어줌 createElement
// document.body.append(입력창);
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent ='등록'                   // textContent는 tag안에 들어가는 글자임
//document.body.append(버튼);
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창)

// 버튼.addEventListener('click', function() { // 콜백함수는 function(){} 이다			
  if(단어.textContent[단어.textContent.length-1] === 입력창.value[0]){//입력창.value===초밥
      결과창.textContent = '딩동댕';
      단어.textContent = 입력창.value;
      입력창.value = ''; 
      입력창.focus();
  } else {
      결과창.textContent = '땡'
      입력창.value = ''; 
      입력창.focus();
  }
// });

                                      // 이벤트는 브라우저에서 넣어줌
폼.addEventListener('submit', function(이벤트) { // 콜백함수는 function(){} 이다		
  이벤트.preventDefault();  // 새로고침 막음,   
  if(단어.textContent[단어.textContent.length-1] === 입력창.value[0]){//입력창.value===초밥
      결과창.textContent = '딩동댕';
      단어.textContent = 입력창.value;
      입력창.value = ''; 
      입력창.focus();
  } else {
      결과창.textContent = '땡'
      입력창.value = ''; 
      입력창.focus();
  }
});

입력창.addEventListener('keyup', function() {
  if(단어.textContent[단어.textContent.length-1] === 입력창.value[0]){//입력창.value===초밥
      결과창.textContent = '딩동댕';
      단어.textContent = 입력창.value;
      입력창.value = ''; 
      입력창.focus();
  } else {
      결과창.textContent = '땡'
      입력창.value = ''; 
      입력창.focus();
  }
});


// enter기능은 form tag가 필요함
// input과 buttun을 form 안에 넣어줌
// form안에 들어있는 input은 enter를 칠 수 있음

// form은 엔터를 쳐주면(submit) 기본적으로 다른페이지로 넘어가게 되어있음
// 그래서 새로고침이 되는 것이다. 이게 form의 기본동작이다. 엔터를 치면 무조건 새로고침을 해줘야함
// 기본동작을 바꾸고 싶을때(너 기본동작 그래도 하지마) -->  이벤트.preventDefault();



var word = '제로초'
while(true){	
    var answer = prompt(word)
    if(word[word.length -1] === answer[0]){
        word = answer
        alert('딩동댕')
    } else {
        alert('땡')
    }

}
```

- 태그안에 들어가는 것은 .textContent이다.
- input같은 곳에 들어가는 것은 .value이다
- console.log(document.body); // -> 테그를 출력해줌
- console.dir(document.body); // -> dom객체를 출력해줌
- 자바스크립트에서는 문자나 문자열이 동일한 뜻이다. (자바와 c와다르게)







- 구구단 웹에 표현하기

```html
<!DOCTYPE html>
<html>
    <head>
	    <meta charset="utf-8"/>
        <title>구구단</title>
    </head>
    <body>
        // <div>제로초</div>           // js코드로 넣어주려고함
        // <form>
        // 	<input type="text"/>
        //	 <button>등록</button>
        //</form>
        
        // <div>딩동댕</div> 
        
        
		<script src="구구단.js"></script>
    </body>
</html>


```

```js
var 숫자1 = Math.ceil(Math.random() * 9);            //ceil() 올림
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = documnet.createElement('div');
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?'
document.body.append(단어);


var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');  // 테그를 만들어줌 createElement
입력창.type = 'number'; // 속성바꿔주기
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent ='등록'                   // textContent는 tag안에 들어가는 글자임
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창)

                                      // 이벤트는 브라우저에서 넣어줌
폼.addEventListener('submit', function(이벤트) { // 콜백함수는 function(){} 이다		
  이벤트.preventDefault();  // 새로고침 막음, 
  console.log(결과, 입력창.value); // debug
  if(결과 === Number(입력창.value){// Number(입력창.value);을 해주려면 <input type="text"/> 
      결과창.textContent = '딩동댕';

      숫자1 = Math.ceil(Math.random() * 9);            
	  숫자2 = Math.ceil(Math.random() * 9);
	  결과 = 숫자1 * 숫자2;      
      단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?'
   
      입력창.value = ''; 
      입력창.focus();
  } else {
      결과창.textContent = '땡'
      입력창.value = ''; 
      입력창.focus();
  }
});









while(true){
    var 숫자1 = Math.floor(Math.random() * 9) + 1   // floor() 내림
	var 숫자2 = Math.floor(Math.random() * 9) + 1
	var 결과 = 숫자1 * 숫자2
    var 조건 = true;
	while(조건){
		var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?')
   		if(결과 === Number(답)) {
   	    	alert('딩동댕');
            조건 = false;
   		} else {
   	    	alert('땡');
		}
   	}
}
```



#### JS 5강

```html
<html>
    <head>
        <title>숫자야구게임</title>
        <meta charset="utf-8"/>

    </head>
    <body>
        <!--<h1>스트라이크 1볼</h1>-->
        <!--<form>-->
            <!--<input type="text"/>-->
            <!--<button>입력</button>-->
        <!--</form>-->

        <script src="js.js"></script>
    </body>

</html>
```







#### js 틱택톡

```js
var 배열 = [1,2,3,4,5];
var 배열 = [[], [], {}, function(){}, null, undefined]; // 객체
//배열안에      배열, 객체,   함수,           
```



```js
var 배열 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],  
]
```

- 문법

  - e.target === 클릭된 애  // 클릭이벤트가 일어난 태그를 알려줌

  - e.target.parentNode === 클린된 애 부모 태그

  - e.target.children

  - input의 값이 value
    태그 안 글자는 textContent

  - Math.abs(몇줄 - 몇칸) === 2  // 절대값으로 나옴

  - forEach()  // 배열에 대한 반복문  2차원 배열은 반복문이 2개가 필요한다.

    ```js
    [1,2,3,4,5].forEach(function (요소){
    	console.log(요소);
    })  
    
    //1 
    //2
    //3
    //4
    //5
    
    
    칸들.forEach(function (줄) {
       console.log(줄); 
    });
    // [td, td, td]
    // [td, td, td]
    // [td, td, td]
    
    
    칸들.forEach(function (줄){
        줄.forEach(function (칸){
            console.log(칸);
        })
    })
    
    //<td>X</td>
    //<td>O</td>
    //<td>O</td>
    //<td>X</td>
    //<td>X</td>
    //<td>0</td>
    //<td>0</td>
    //<td>X</td>
    //<td>X</td>
    
    
    ```

- 핵심

  - 테이블 3x3 만들기 =실제 화면을 데이터와 연결하는 것  : 시뮬레이션
  - 반복문이 항상 2번이 들어감 () 중첩 반목문 회수를 줄이는게 실력임)

























