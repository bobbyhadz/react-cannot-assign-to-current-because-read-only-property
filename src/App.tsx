import {useEffect, useRef} from 'react';

const App = () => {
  // 👇️ include null in the ref's type
  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = 'hello';
  }, []);

  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
};

export default App;
