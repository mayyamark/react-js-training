import fetch from "node-fetch";

const url = "https://catfact.ninja/fact";

// const requestFetch = fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log("Done!"));

// requestFetch;

const func = async () => {
  try {
    const promise = await fetch(url);
    const json =  await promise.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
  console.log("Done");
}

func();