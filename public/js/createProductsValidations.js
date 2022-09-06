const validations = [			
    {			
        inputName : "nombre",		
        validations : [		
        {		
            errorMsg : "Nombre no puede estar vacio"	,
            validator : (input) => input.value != "" ,       
        },	
        {		
            errorMsg : "Debe tener al menos cinco caracteres"	,
            validator : (input) => input.value.length >= 5       
        },		
        ]		
    },	
    {			
        inputName : "descripcion",		
        validations : [		
        {		
            errorMsg : "Descripcion no puede estar vacio"	,
            validator : (input) => input.value != "" ,      
        },	
        {		
            errorMsg : "Debe tener al menos veinte caracteres"	,
            validator : (input) => input.value.length >= 20       
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