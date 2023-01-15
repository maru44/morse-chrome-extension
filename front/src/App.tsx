import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      {/* <div id="bt" /> */}
      {/* <script src="/wasm_exec.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      let bt = document.getElementById('bt')
      console.log(bt)

      const go = new Go();
      console.log(go)
      WebAssembly.instantiateStreaming(fetch(".src/gen/main.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
      });
      let child = document.createElement('button')
      child.innerHTML = 'single'
      child.onclick = single
      bt.appendChild(child)
      `,
        }}
      ></script> */}
    </div>
  )
}

export default App
