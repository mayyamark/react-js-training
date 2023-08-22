import { useState, useEffect } from 'react';

const App = () => {
const [isVisible, setIsVisible] = useState(false);
  // (1) Use useRef
  console.log(isVisible);

  const onScroll = () => {
    const element = document.getElementsByTagName("p")[2]; // Poor logic here :(
    console.log(element)
    // (3) Use the ref for the checks
    if (!element) {
      setIsVisible(false);
      return;
    }
    const top = element.getBoundingClientRect().top;
    setIsVisible(top >= 0 && top <= window.innerHeight);
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  })

  return (
    <div style={{ paddingTop: 1000 }}>
      <p>Hi!</p>
      <p>Oh no..</p>
      {/* (2) Add ref prop */}
      <p>I want to get this paragpraph :(</p>
      <p>Moohahaha</p>
    </div>
  );
}

export default App;