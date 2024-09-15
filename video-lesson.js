function sayHello() {
  console.log('Hello');
}

//setTimeout(sayHello, 4000);

function showTime() {
  console.log(new Date().toLocaleTimeString());
}
//setInterval(showTime, 3000);

function loadData(callback) {
  setTimeout(() => {
    const data = 'Загруженные данные';
    callback(data);
  }, 5000);
}

function Vse() {
  console.log('Данные обработаны');
}
//loadData(Vse);

function downloadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Загруженные данные';

      resolve(data); // Выполнение промиса с результатом
    }, 2000);
  });
}

downloadData().then((data) => {
  console.log('Обработанные данные:', data);
});

async function ladData() {
  console.log('Данные загружаются"');

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Данные згружены');
    }, 2000);
  });

  let result = await promise;
  console.log(result);
}
ladData();
