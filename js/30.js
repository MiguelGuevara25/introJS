const usuarioAuntenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //?EL PROMISE SE CUMPLE
    }
    else{
        reject('No se puede iniciar sesión'); //?EL PROMISE NO SE CUMPLE
    }
});

usuarioAuntenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )