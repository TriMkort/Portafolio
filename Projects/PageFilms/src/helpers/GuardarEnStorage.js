export const GuardarEnStorage = (clave, elemento) => {
    //Conseguir los elementos que ya hay en el local storage
    let elements = JSON.parse(localStorage.getItem(clave));
    console.log(elements);
    
    //Comprobar si es un array
    if(Array.isArray(elements)){
        //Añadir el nuevo elemento al array
        elements.push(elemento);
    }else{
        //Crear array de elemento
        elements = [elemento];
    }
    //Guardar localstorage
    localStorage.setItem(clave,JSON.stringify(elements));
    //Devolver objeto guardado
    return elemento;
}