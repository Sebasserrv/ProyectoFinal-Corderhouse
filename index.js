const botonLogin = document.getElementById("btn_login")

const users= [ 

    {"nombre":"fede", "clave":"12345", tipo: "admin" },
    {"nombre":"maria", "clave":"12345", tipo: "comun" }
    
    ]

    botonLogin.onclick = () => {
        const userName = document.getElementById("username").value
        const password = document.getElementById("password").value

            //Validando si el usuario escribio en el formulario//

        if(userName.length > 0 && password.length > 0){

            //Iterando arreglo de usuarios para buscar considencias//

            for(const user of users){

                //Validacion de Usuario con valores del formulario//

                if(user.nombre.toUpperCase() == userName.toUpperCase() && user.clave.toUpperCase() == password.toUpperCase()){
                    
                    redired()
                    return
                }

            }
            showAlert()
            
        }else{
            showAlert()
        }

    }

    function showAlert () {
        alert ("Datos invalidos")
    }

    function redired () {
        window.location.href='https://google.com';
    }