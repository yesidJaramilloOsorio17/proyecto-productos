
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal'

const Form = ( { createUser, selectedUser, updateUser } ) => {
   
    const[isOpenModal1,openModal1,closeModal1]= useModal(false)
    
    
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    

    
    useEffect(() => {
      
        if( selectedUser ){
         
            reset( selectedUser )    
        }else{
           
            emptyForm()
        }

    }, [ selectedUser ])


    const submit = data => {
        if( selectedUser ){
     
            updateUser( data )

        }else{
    

            data.id = Date.now()
          
            createUser( data )
           
            emptyForm()
        }
    }

    const emptyForm = () => {
        reset(
            {
                name: "",
                category: "",
                price: "",
                isAvailable: ""
               
            }
        )
    }
    
    return (
        <div>
 <button onClick={openModal1} className="products">+ Añadir o editar productos</button>
  <Modal isOpen={isOpenModal1} closeModal= {closeModal1} >

            <div>
            <form onSubmit={ handleSubmit( submit ) }>
                <div className="input-wrapper">
                    <label 
                    htmlFor="name">
                        Nombre
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="nombre"
                    { ...register("name", { required: true }) }
                    />
                </div>
                <div className="input-wrapper">
                    <label 
                    htmlFor="category">
                        categoria
                    </label>
                    <input 
                    type="text" 
                    id="category" 
                    placeholder="categoria"
                    { ...register("category", { required: true }) }
                    />
                </div>
                <div className="input-wrapper">
                    <label 
                    htmlFor="price">
                        Precio
                    </label>
                    <input 
                    type="price" 
                    id="price" 
                    placeholder="precio"
                    { ...register("price", { required: true }) }
                    />
                </div>
                <div className="input-wrapper">
                    <label 
                    htmlFor="isAvailable">
                        Disponibilidad
                    </label>
                    <input 
                    type="text" 
                    id="isAvailable" 
                    placeholder="Si = ( green )    No = ( red )"
                    { ...register("isAvailable", { required: true }) }
                    />
                </div>
            

                <button className='agregar' type="submit">
                    Agregar o añadir
                </button>
            </form>
        </div>
        </Modal>

        </div>
      
        
    );
}

export default Form


