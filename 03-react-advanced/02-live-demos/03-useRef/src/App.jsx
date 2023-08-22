import { useState, useRef, useEffect } from 'react';

const App = () => {
const [isVisible, setIsVisible] = useState(false);
  // (1) Use useRef
  const ref = useRef(null);

  console.log(isVisible, ref);
  const onScroll = () => {
    // (3) Use the ref for the checks
    if (!ref.current) {
      setIsVisible(false);
      return;
    }
    const top = ref.current.getBoundingClientRect().top;
    setIsVisible(top >= 0 && top <= window.innerHeight);
  }

  useEffect(() => {
    console.log(ref);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  })

  return (
    <div style={{ paddingTop: 1000 }}>
      <p>Hi!</p>
      <p>Oh no..</p>
      {/* (2) Add ref prop */}
      <p ref={ref}>I want to get this paragpraph :(</p>
      <p>Moohahaha</p>
    </div>
  );
}

export default App;