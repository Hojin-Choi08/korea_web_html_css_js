function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(username);
      } else {
        reject(new Error("사용자 이름 없음"));
      }
    }, 1000);
  });
}

//add to cart
function addToCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error("제품 없음"));
      }
    }, 1000);
  });
}

//payment
function payment(cardNum, product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cardNum && product) {
        resolve(product);
      } else {
        reject(new Error("카드번호 또는 제품 없음"));
      }
    }, 1000);
  });
}

login("HJ")
  .then((username) => {
    console.log(`${username}님이 로그인하셨습니다.`);
    return addToCart("Potato");
  })
  .then((product) => {
    console.log(`${product}가 장바구니에 추가되었습니다.`);
    return payment("1234-1234-1234-1234", product);
  })
  .then((product) => {
    console.log(
      `${product}에 대한 결제가 완료되었습니다.`
    );
  })
  .catch((error) => {
    console.log(error);
  });
