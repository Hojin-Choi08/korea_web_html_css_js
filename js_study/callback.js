//CALL BACK FUNCTION
//다른 함수의 인자로 전달되는 함수

//비동기콜백
//비동기 작업이 완료된 후에 호출되는 콜백함수

// function getData(callback) {
//   //서버통신을 횽내
//   setTimeout(() => {
//     console.log("서버에서 데이터를 받아왔어요");
//     callback({ name: "HJ" });
//   }, 2000);
// }

// getData((data) => {
//   console.log(data);
// });

//login
function login(username, callback) {
  setTimeout(() => {
    callback(username);
  }, 1000);
}

//add to cart
function addToCart(product, callback) {
  setTimeout(() => {
    callback(product);
  }, 1000);
}

//payment
function payment(cardNum, product, callback) {
  setTimeout(() => {
    callback(cardNum, product);
  }, 1000);
}

login("HJ", (username) => {
  console.log(`${username}님이 로그인했습니다.`);
  addToCart("Potato", (product) => {
    console.log(`${product}가 장바구니에 추가되었습니다.`);
    payment("1234-1234-1234", product, (cardNum, product) => {
      console.log(
        `${product}에 대한 결제가 완료되었습니다. 카드번호: ${cardNum}`
      );
    });
  });
});
//위처험 콜백함수가 계속 중첩되면 콜백지옥이 발생된다.
