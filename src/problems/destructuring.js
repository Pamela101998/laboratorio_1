//Actividad Nro 2.

//En esta actividad se verán conceptos basados en la desestructuración de objetos, en la carpeta 
//problems cree el archivo destructuring.js. y copie el siguiente código.

const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,
    roles: [
      { name: "Manager", method: "get" },
      { name: "Client", method: "post" },
      { name: "User", method: "get" },
    ],
    address: {
      address: {
        street: "3914 Woodruff Ave",
        location: "Oakland, CA 94602Glenview",
      },
      position: {
        lat: 123.221,
        lng: 124.544,
      },
    },
   };
   
   //const showPersonalInformation = (person) => {
    //var information = "";
    //information += "Nombres " + person.name + "\n";
    //information += "Apellidos" + person.lastname + "\n";
    //information += "Edad" + person.age;
    //return information;
   //};

   const showRoles = (person) => {
    let information = "";
    let roles = person.roles;
    for (let i = 0; i < roles.length; i++) {
      information += "Nombre del rol " + roles[i].name + "\n";
      information += "Tipo del rol " + roles[i].method + "\n";
    }
    return information;
   };

   //const getPosition = (person) => {
   //return person.address.position;
   //};
  
   const getFirstRol = (person) => {
   return person.roles[0];
   };

   
   //añada una función de nombre getAddress, que retorne la dirección del objeto person:
   const getAddress = (person) => {
    return person.address.address;

   };

   //Cree una función se nos pide crear una función que añade atributos en la raíz del mismo, 
   //así que rápidamente creamos la siguiente función.
//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------


  //Actividad 3: 
   //Cree una función se nos pide crear una función que añade atributos en la raíz del mismo, así que rápidamente creamos la siguiente función.
   
   //const addIdUser = (person, id) => {
   // return { ...person, id };
   //};
   

   // Primer Desafío
//Ahora se nos piden algo más complejo, y es añadir un rol de tipo { name: "User", method: "get" }, en el arreglo roles,
//proponga una solución usando push.

   person.roles.push({Name: "nuevo", get: "nuevoo"})

  //Segundo Desafío
//Ahora mejore la función usando el operador spread.
  
const addIdUser = {...person, id:2021}
  

   const main = () => {
    //console.log ("Nombres  " + name + "\n" + "Apellidos  " + lastname +  "\n"+ "Edad  " + age );
    console.log (" Nombres "+ person.name + "\n","Apellidos " + person.lastname + "\n","Edad "+ person.age);
//  console.log(showPersonalInformation(person));
    console.log(showRoles(person));

    console.log(person.address.position);
    console.log(getFirstRol(person));
    console.log(getAddress(person));
    //console.log(addIdUser(person, 123456));
    console.log(addIdUser);

};
export default main;
