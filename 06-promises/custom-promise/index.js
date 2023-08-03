const resolved = new Promise((resolve, reject) => {
  return resolve(1);
});

resolved  
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const rejected = new Promise((resolve, reject) => {
  return reject(new Error("My said NO!"));
});

rejected
  .then((res) => console.log(res))
  .catch((err) => console.log(err));