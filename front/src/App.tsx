import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let single

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <button onClick={single}>single</button>
      {/* <button onClick='single' */}
      <script src="/wasm_exec.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      const go = new Go();
      console.log(go)
      WebAssembly.instantiateStreaming(fetch(".src/gen/main.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
      });
      `,
        }}
      ></script>
    </div>
  )
}

export default App
