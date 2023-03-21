
import './App.css';
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";
import axios from 'axios';


function App() {


  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState(null);


  useEffect(() => {

    
getData()
 

  }, [])


  const getData =() => {
   axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp => setUsers(resp.data) )
      .catch( error => console.error(error) )
  }



  const addUser = userData => {

  axios
  .post("https://products-crud.academlo.tech/products/",userData)
  .then(()=> getData())
  .catch(error =>console.error(error))
 
  };



  const deleteUser = idUser => {
   

 axios
    .delete(`https://products-crud.academlo.tech/products/${idUser}/`)
    .then(()=>getData())
    .catch(error =>console.error(error))
  };

  const selectUser = userData => {
    setUserUpdate(userData);
  };

  const userActualization = userData => {
    axios
     .put(`https://products-crud.academlo.tech/products/${userData.id}/`,userData)
     .then(()=>{
      getData()
       setUserUpdate(null)
    })
     .catch(error=>console.error(error))

  };

  return (
    <div className="App">
       
      

      <Form
        createUser={(data) => addUser(data)}
        selectedUser={userUpdate}
        updateUser={(data) => userActualization(data)}
      />
      <UsersList
        usersData={users}
        deleteUserAction={(id) => deleteUser(id)}
        selectUser={(data) => selectUser(data)}
      />
    </div>
  );
}

export default App;
