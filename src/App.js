import './App.css';
import Testimonio from './components/Testimonio';
import testimoniosData from './testimonios.json';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1 className='title'> Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {/* De esta forma se consumen los datos desde un archivo json
        y por cada objeto del archivo se creara un componente nuevo */}
        {testimoniosData.map(testimonio =>
          <Testimonio 
          key = {testimonio.name}
          imagen = {testimonio.imagen}
          name = {testimonio.name}
          pais = {testimonio.pais}
          cargo = {testimonio.cargo}
          empresa = {testimonio.empresa}
          testimonio ={testimonio.testimonio}
        />
        )}
      </div>
    </div>
  );
}

export default App;
