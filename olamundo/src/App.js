import React from "react";

const Bemvindo = ()=>{
return(
  <div>
<h1>Bem-vindo(a) jovem !</h1>
</div>
)
}
function App(){
  return(
    <div>
      Olá mundo!
      <h2>Curso de React</h2>

      <Bemvindo />
      <Bemvindo />
      <Bemvindo />
      <Bemvindo />
    </div>
  );
}

export default App;