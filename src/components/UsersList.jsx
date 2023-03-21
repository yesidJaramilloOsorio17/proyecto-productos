
const UsersList = ( { usersData, deleteUserAction, selectUser } ) => {
   
    const confirmDelete =(id)=>{

        const resultConfirm = confirm("Deseas eliminar al producto?")
        if(resultConfirm){
            deleteUserAction(id)
        }
    }

       
    const confirmEdit=(id)=>{

        const resultConfirm = confirm("Deseas editar al usuario?     !!Click en +añadir o editar para continuar¡¡")
        if(resultConfirm){
            selectUser(id)
        }
    }
   
   
   
    return (
        <ul className="caja-principal">
            {
                usersData?.map( user => (
                <li key={ user.id }>
                    <h4><span>Nombre:</span> {user.name}</h4>
                    <h4><span>ategoria:</span> {user.category} </h4>
                    <h4><span>Precio:</span> {user.price} </h4>
                    <h4 className="ch"><span>Disponibilidad:</span> {user.isAvailable}<div  style={{backgroundColor: user.isAvailable === true ? "green": "red"}} className="status"></div> </h4>
                    <div className="ch1">
                             <button onClick={ () => confirmDelete( user.id ) } className="eliminar"><img  src="./eliminar.png" alt="" /></button>
                    <button onClick={ () => confirmEdit(user) } className="editar" ><img src="./editar.png" alt="" /></button>
                    </div>
               
                     <h4 className="ch3"><span>si :</span><div style={{backgroundColor: "green"}} className="status"></div><span>no :</span><div style={{backgroundColor: "red"} }className="status"></div></h4>
                </li>
                ))
            }
            
        </ul>
    );
}

export default UsersList;
