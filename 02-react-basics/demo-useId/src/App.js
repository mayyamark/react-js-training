import { useId } from "react";

const Form = () => {
  const id = useId();

  return (
    <form>  
      {id} 
      <label htmlFor={`${id}-name`}>Name "{`${id}-name`}"</label>
      <input id={`${id}-name`} />
      <label htmlFor={`${id}-age`}>Age "{`${id}-age`}"</label>
      <input id={`${id}-name`}/>
    </form>
)}


function App() {
  return (
    <>
      <Form />
      <Form />
      <Form />
    </>
  );
}

export default App;
