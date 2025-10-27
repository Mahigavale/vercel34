
import './App.css'

function App() {
  


  function dothis()
  {
    window.alert("hello");
  }
  return (
    <>
      <h1>Hii there ,I am an Engineer.</h1>
      <button onClick={dothis}>Click me!</button>

      <h2 style={{color:"red"}}>This is the addded code....</h2>
    </>
  )
}

export default App
