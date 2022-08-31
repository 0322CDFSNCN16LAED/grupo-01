const validations = [			
    {			
        inputName : "nombre",		
        validations : [		
        {		
            errorMsg : "Nombre no puede estar vacio"	,
            validator : (input) => input.value != "" ,       
        },	
        {		
            errorMsg : "Debe tener al menos dos caracteres"	,
            validator : (input) => input.value.length >= 2       
        },		
        ]		
    },	
    {			
        inputName : "apellido",		
        validations : [		
        {		
            errorMsg : "Apellido no puede estar vacio"	,
            validator : (input) => input.value != "" ,      
        },	
        {		
            errorMsg : "Debe tener al menos dos caracteres"	,
            validator : (input) => input.value.length >= 2       
        },		
        ]		
    },
    {			
        inputName : "celular",		
        validations : [		
        {		
            errorMsg : "Celular no puede estar vacio"	,
            validator : (input) => input.value != "" ,       
        },	
        ]		
    },
    {			
        inputName : "email",		
        validations : [		
        {		
            errorMsg : "Mail no puede estar vacio"	,
            validator : (input) => input.value != "" ,       
        },	
        {		
            errorMsg : "Mail debe ser valido"	,
            validator : (input) => validator.isEmail(input.value)       
        },	
        ]		
    },
    {			
        inputName : "contrasena",		
        validations : [		
        {		
            errorMsg : "Contraseña no puede estar vacio",
            validator : (input) => input.value != "" ,       
        },	
        {		
            errorMsg : " La contraseña debe tener al menos 8 caracteres",
            validator : (input) => input.value.length >= 8       
        },	
        ]		
    },
    {			
        inputName : "imagenusuario",		
        validations : [		
        {		
            errorMsg : "Debe seleccionar un avatar"	,
            validator : (input)=> input.value != "",
        },	
      

        

        ]		
    },
    
    ]		


window.onload = function () {
    console.log("hola")

    const formulario = document.querySelector(".formulario")

    
    
    formulario.addEventListener("submit", (evt)=> { 
        evt.preventDefault();
        const errores = [ ]

        validations.forEach((unInput)=>{
            const input = formulario[unInput.inputName];

            for (const validation of unInput.validations){	
                const isValid = validation.validator(input)	
                if(!isValid){	
                errores.push(validation.errorMsg)	
                input.parentElement.classList.add("is-invalid");	
                input.parentElement.classList.remove("is-valid");	
                input.parentElement.querySelector(".error").innerHTML = validation.errorMsg	
                return;
                } 
                } 
                    
                input.parentElement.classList.add("is-valid");	
                input.parentElement.classList.remove("is-invalid");	
                input.parentElement.querySelector(".error").innerHTML = " "	
        })

        if(errores.length == 0){

            formulario.submit();
        }else {
            console.log(errores)
        }
    })

}