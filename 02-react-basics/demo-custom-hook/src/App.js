import { useState, useEffect } from "react"

const useFetch = (url) => { 
  const [data, setData] = useState(null); 
  
  useEffect(() => { 
    fetch(url)
    .then((res) => res.json()) 
    .then((data) => setData(data)); 
  }, [url]); 

  return data; 
};


function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  // const data = null;
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
