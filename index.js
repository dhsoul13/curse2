const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise1 выполнен');
    }, 1000);
   });
   const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 отклонен');
    }, 1500);
   });
   Promise.race([promise1, promise2])
     .then((data) => console.log(data))  // Promise1 выполнен
     .catch((error) => console.log(error));