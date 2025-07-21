/**
 * async(비동기 함수 키워드)
 * await(비동기 함수 동기 호출 키워드)
 * await는 async 함수 내부에서만 사용 가능
 * await는 promise가 resolve될 때까지 기다렸다가 그 결과를 변수에 할당하는 것
 */

// const promise = new Promise((resolve) => resolve("Developer "));
// async function getData() {
//   //async 키워드가 함수 자체를 비동기 함수로 만듦(함수 자체가 promise)
//   return promise; //이 경우에 프로미스에 프로미스가 감싸진 형태는 아니다
// }

// const user = getData();
// user.then((name) => console.log(name));

// function getUserReq() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("사용자 데이터를 받아옴");
//       return resolve("서버1");
//     }, 2000);
//   });
// }

// async function getData() {
//   //getUserReq(); //비동기 함수가 끝날 때까지 다음 작업 기다려주지 않음 (비동기)
//   const result = await getUserReq(); //await는 해당 비동기 작업이 완료될 때까지 다음 작업을 하지않고 기다림
//   return result;
// }

// function getDataPromise() {
//   return getUserReq()
//     .then(() => {
//       return getUserReq();
//     })
//     .then(() => {
//       return "HJ";
//     });
// }

// const user = getData();
// user.then((name) => console.log(name));

function getUserReq() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("사용자 데이터를 받아옴");
      return resolve("서버1");
    }, 2000);
  });
}

async function getUser() {
  await getUserReq();
  return "HJ";
}

async function getTodo() {
  await getUserReq();
  return ["밥먹기", "잠자기"];
}

async function getData() {
  const user = await getUser();
  const todo = await getTodo();
  console.log(`${user}님 ${todo}를 해야합니다.`);
}

getData();
