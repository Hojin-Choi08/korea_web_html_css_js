//자바스크립트의 함수

//일반 함수 정의
function functionName(parameter1, parameter2) {
  console.log("함수 호출됨");
  let returnData = null;
  console.log(parameter1);
  console.log(parameter2);

  return returnData;
}

const returnValue = functionName();
console.log(returnValue);

const functionName2 = functionName; //함수 자체를 다른 변수에 할당
const returnValue2 = functionName2(10, 20);
console.log(returnValue2);
const returnValue3 = functionName2(10);
console.log(returnValue3);

//익명함수: 이름이 없는 함수로, 주로 변수에 할당하거나
//다른 함수의 인수러 사용
const functionName3 = function (parameter1, parameter2) {
  //functionName3라는 상수에 익명함수가 할당
};

//화살표 함수
/**
 * 1. 매개변수가 하나면 ()괄호 생략 가능
 * 2. 실행문이 한 줄이라면 {}괄호 생략 가능
 * 3. {} 생략시 값만 입력하면 return 값이 됨
 * 즉, {} 생략 안 하고 return 하려면 return 키워드를 명시
 */

const functionName4 = (parameter1, parameter2) => {
  //code
  return "returnValue";
};

// function fx1() {
//   console.log("fx1 호출");
// }

const fx1 = () => console.log("fx1 호출");
const fx2 = (n) => console.log(n, "출력");
const fx3 = (n) => n + 1;
const fx4 = (n) => {
  console.log(n, "출력");
  return n + 1;
};
const fx5 = (a, b) => a * b;
fx1();
console.log(fx3(10));

function a() {
  //Empty Function
}

const returnValue4 = functionName;
//함수를 호출한게 아님, 함수명 자체를 returnValue4에 할당
console.log(returnValue4());

//고차함수
const aa = () => {
  console.log("aa함수 호출");
  return "aa함수 리턴값";
};

const bb = (fxx) => {
  console.log("bb함수 호출");
  return fxx;
};

const aaa = (fxx, fxx2) => {
  console.log("aaa함수 호출");
  console.log(fxx());
  console.log(fxx2());
  return "aaa함수 리턴값";
};

console.log(aaa(bb(aa), bb(aa)));
