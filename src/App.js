import {useState} from "react";
import './App.css';
import Grades from "./Grades";
import Radians from "./Radians";

function App() {

  const grad = 57.2958,
        rad = 0.0174533;

  const [_grades, setGrades] = useState(0);
  const [_radian, setRadian] = useState(0);


  const toGrades = (radians) => {
    setRadian(radians.target.value * grad);
    setGrades(radians.target.value);
  };

  const toRadian = (grades) => {
    setGrades(grades.target.value * rad);
    setRadian(grades.target.value); 
  };

  return (
    <div className="App">
      <h2 className="Title">Conversor de Unidades</h2>

      <h4><a href="https://es.wikipedia.org/wiki/Grado_sexagesimal" target="_blank"
      >Grados</a></h4>
      <Grades work={(grades) => {
        toRadian(grades);
      }}
        value = {_radian}/>

      <h4><a href="https://es.wikipedia.org/wiki/Radi%C3%A1n" target="_blank"
      >Radianes</a></h4>
      <Radians work={(radians) =>{
        toGrades(radians);
      }}
      value = {_grades}/>
    </div>
  );
}

export default App;
