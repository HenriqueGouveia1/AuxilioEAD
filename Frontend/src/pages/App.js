import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-around Front-page">
          <div className=" col"> <img src={"../AuxílioAssets/LOGO_MAIN.png"} className="App-logo" alt="logo" /> </div>

          <div className=" col">
            <a href="/main">
              <button className="btn btn-success Butao-init">Conheça-nos!</button> </a>
            
            <a href="/cadastro">
              <button className="mt-5 btn btn-success Butao-init">Cadastre-se!</button> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
