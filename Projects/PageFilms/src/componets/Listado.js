import React, { useEffect, useCallback, useState} from 'react'
import Editar from './Editar';

const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([]);
    const [editar = false, setEditar] = useState(0);

    const conseguirPeliculas = useCallback(() => {
        let peliculas = JSON.parse(localStorage.getItem("pelis") || "[]");
        setListadoState(peliculas);
        return peliculas;
    },[setListadoState]);   

    useEffect(() => {
        console.log("Componente del listado cargado");
        conseguirPeliculas();
    }, [conseguirPeliculas]);


    
    const borrarPeli = (id) =>{
       //Conseguir peliculas almacenasdas
       let peli_almacenadas = conseguirPeliculas();
       //Filtar esas peliculas para que elimine del array la que no quiero
        let peli_nuevo_Array = peli_almacenadas.filter(peli => peli.id !== parseInt(id));
        
       //Actualizar el estado del listado
       setListadoState(peli_nuevo_Array);
       //Actualizar los dtos en el localstorage
       localStorage.setItem("pelis", JSON.stringify(peli_nuevo_Array));
       //Actualizar el listado
    };
    return (
        <div className='content'>
            <>
                {listadoState != null ? 
                        listadoState.map (peli => {
                        return (
                            <article className="peli-item" key={peli.id}>
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>
                                <button className="edit" onClick={() => {setEditar (peli.id)}}>Editar</button>
                                <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                                {/* Aparece formulario de editar */}
                                {editar === peli.id && ( 
                                    <Editar peli={peli}
                                            conseguirPeliculas={conseguirPeliculas}
                                            setEditar={setEditar}
                                            setListadoState={setListadoState}/>
                                )}
                            </article>
                        );
                    })
                    :<h2>No hay peliculas para mostrar</h2>
                } 
            </>
        </div>
    )
}

export default Listado
