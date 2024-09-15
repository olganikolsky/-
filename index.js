//setTimeout и setInterval

//1.1
setTimeout(() => {
  console.log('Привет через 3 секунды!');
}, 3000);

//1.2
let sec = setInterval(() => {
  console.log('Привет каждые 2 секунды!');
}, 2000);
setTimeout(() => {
  clearTimeout(sec);
  console.log('stop');
}, 6000);

//1.3
let int = setInterval(function generateColor() {
  const hexArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let code = ''; //Кавычки для того, чтобы задать пустую переменную, куда потом можно будет добавлять значения?
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  console.log(`#${code}`);
}, 5000);
setTimeout(() => {
  clearTimeout(int);
  console.log('Прошло 20 секунд, завершено');
}, 20000);

//Коллбэки

//2.1
function fetchData(callback) {
  let data = 'Загруженные данные';
  setTimeout(() => {
    console.log('Данные загружены');
    callback(data);
  }, 2000);
}
function lastData() {
  console.log('Данные получены');
}
//fetchData(lastData);

//2.2
function divide(a, b, callback) {
  if (b !== 0) {
    let result = a / b;
    callback(result);
  } else {
    callback(new Error('На ноль делить нельзя'));
  }
}

divide(3, 6, (result) => {
  console.log(result);
});

//2.3
function step1(callback) {
  setTimeout(() => {
    let str1 = 'Шаг 1 завершен';
    callback(str1);
  }, 5000);
}

function step2(string) {
  console.log(string);
}
step1(step2);

//Промисы
//3.1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Промис выполнен');
  }, 2000);
});
promise.then((result) => {
  console.log(result);
});

//3.2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Ошибка'));
  }, 3000);
});
promise2.catch((e) => {
  console.log('Ошибка');
});

//3.3
function prom1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Первый промис');
    }, 1000);
  });
}
function prom2(data) {
  return new Promise((resolve) => {
    resolve('Второй промис');
  });
}
prom1()
  .then((data) => {
    console.log(data);
    return prom2(data);
  })
  .then((result) => {
    console.log(result);
  });

//Async, await
//4.1
async function fetchDataAsync() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve('Данные получены'), 1000);
  });

  let result = await promise;
  console.log(result);
}

fetchDataAsync();

//4.2
async function devideAsinc(a, b) {
  try {
    if (b === 0) {
      throw new Error('На ноль делить нельзя!');
    } else {
      console.log(a / b);
    }
  } catch (err) {
    console.log(err);
  }
}

devideAsinc(5, 0);

//4.3 Цепочка асинхронных вызовов
async function stepOne() {
  setTimeout(() => console.log('Шаг 1 завершен'), 1000);

  const two = await stepOne;
}
function stepTwo(data) {
  let str2 = 'Шаг 2 завершен';
  console.log(str2).catch((err) => {
    console.log(err);
  });
}
//тут что-то вообще не поняла как делается цепочка

//Обработка ошибок
//5.1
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error('Деление на ноль невозможно');
    } else {
      return a / b;
    }
  } catch (e) {
    console.log(e);
  }
}

divideNumbers(48, 0);

//5.2
function fetchData(shouldFail) {
  try {
    if (shouldFail === false) {
      let promise = new Promise(resolve);
      setTimeout(() => {
        resolve('Данные получены');
      }, 1000);
    } else {
      throw new Error('Ошибка при получении данных');
    }
  } catch (err) {
    console.log(err);
  }
}
fetchData(true);

//5.3
function parseJSON(JSONData) {
  try {
    let str3 = JSON.parse(JSONData);
    console.log(str3);
  } catch (e) {
    console.log('Некорректный JSON: ' + e.name);
  }
}
parseJSON('{"name":"Olga", "age": "30"}');
parseJSON('qwerty');

//5.3.1
function parseJSON2(DataJSON) {
  try {
    let str3 = JSON.parse(DataJSON);
    if (!str3.city) {
      throw new Error('Данные не полны: не заполнен город!');
    }
    console.log('Ура! Обработка завершена!');
  } catch (e) {
    console.log(e);
  }
}
parseJSON2('{"name":"Olga", "age": "30"}');
