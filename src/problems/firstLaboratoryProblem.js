//Actividad nro 1.

//El archivo firstProblem.js
//Es importante notar la diferencia entre la variable let, const vs la variable var, este, problema en
// concreto mostrará. porque se diferencian, y la razón del porque ya no se debe usar var.
//en el archivos firstProblem.js, escriba el siguiente código,


const createDivElement = (label) => {
    let btn = document.createElement("button");
    btn.innerHTML = label;
    let root = document.getElementById("root");
    root.append(btn);
    return btn;
   };
   const createMenu = () => {
    for (let i = 0; i < 10; i++) {
      let btn = createDivElement("Button" + i);
      btn.addEventListener("click", () => {
        alert("I'm the button " + i);
      });
    }
   };
   export default createMenu;
   