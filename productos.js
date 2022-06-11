const productos = [
    {
    id : 1,
    nombre : "VEGAN BURGUER",
    descripcion : "Agua, proteína de guisante 21,8%, aceite de oliva virgen extra 4,5%, concentrado vegetal (remolacha, zanahoria, manzana), fibra vegetal, extracto de levadura, aromas, estabilizante (metilcelulosa), sal, antioxidante (ácido ascórbico), vinagre de alcohol, hierro y vitamina B12",
    precio : 350,
    presentacion: "caja de 2 unidades",
    imagen : "burguer.png",
    reemplaza: "vacuno",
    },
    {
    id : 2,
    nombre : "VEGAN CHORIZO",
    descripcion : "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
    precio : 450,
    presentacion: "caja de 4 unidades",
    imagen : "chorizo.jpg",
    reemplaza: "cerdo",
    },
    {
    id : 3,
    nombre : "BOCADOS NO POLLO",
    descripcion : "Agua, proteína de soja* concentrada 27.3%, aceite de oliva 2.5%, sal, aromas, especias <2% y vitamina B12.",
    precio : 500,
    presentacion: "caja de 160 gramos",
    imagen : "bocados.jpg",
    reemplaza: "pollo"
    },
    {
    id : 4,
    nombre : "ALBONDIDAS",
    descripcion : "Agua, proteína de guisante 22,2%, aceite de oliva virgen extra 4,5%, concentrado vegetal (remolacha, zanahoria, manzana), fibra vegetal, extracto de levadura, aromas, estabilizante (metilcelulosa), sal, perejil, antioxidante (ácido ascórbico), vinagre de alcohol, hierro y vitamina B12.",
    precio : 400,
    presentacion: "caja de 8 unidades",
    imagen : "albondigas.jpg",
    reemplaza: "vacuno",
    },
    
    {
    id : 5,
    nombre : "SALCHICHAS",
    descripcion : "Agua, concentrado de proteína de soja 18,3%, aceite de karité 5,9%, aceite de oliva virgen extra 3,5%, aromas, estabilizante (metilcelulosa), extractos vegetales de manzana, remolacha, rábano, hibisco y zanahoria, sal, fibra vegetal, antioxidante (ácido ascórbico), recubierta comestible [estabilizante (alginato de calcio)], perejil, hierro y vitamina B12.",
    precio : 550,
    presentacion: "caja de 4 unidades",
    imagen : "salchichas.jpg",
    reemplaza: "cerdo",
    },
    {
    id : 6,
    nombre : "NUGGETS",
    descripcion : "Agua, concentrado de proteína de soja 14,2%, harina de arroz, harina de maíz, aceite de girasol, almidón de patata y de maíz, aromas, estabilizante fibra vegetal, vinagre de alcohol, sal, dextrosa y vitamina B12.",
    precio : 750,
    presentacion: "caja de 8 unidades",
    imagen : "nugget.jpg",
    reemplaza: "pollo",
    },
    {
        id : 7,
        nombre : "QUESO ESTILO GRIEGO",
        descripcion : "Agua, aceite de coco (29%), almidón, sal marina, regulador de acidez: glucono delta-lactone, aromas, extracto de aceituna, vitamina B12",
        precio : 450,
        presentacion: "10 fetas 230 gramis",
        imagen : "queso-tipo-griego.jpg",
        reemplaza: "vacuno",
        },
        {
        id : 8,
        nombre : "BROCHETAS",
        descripcion : "Proteina de guisante puro, SOJA, APIO, MOSTAZA, especias, verduras y aceite de oliva virgen extra.",
        precio : 950,
        presentacion: "Cajas de 8 unidades",
        imagen : "brochetas.jpeg",
        reemplaza: "vacuno",
        },
        {
        id : 9,
        nombre : "FILETES ESTILO PESCADO",
        descripcion : "Proteína de Soja Texturizada, Proteína Aislada de Soja, Konjac, Almidón de Tapioca, Almidón de Patata, Aceite Vegetal de maíz, Sal, Azúcar, Algas Nori",
        precio : 850,
        presentacion: "300 gramos",
        imagen : "filetes-pescado.jpg",
        reemplaza: "pescado",
        },
        {
        id : 10,
        nombre : "HUEVO LIQUIDO VEGANO",
        descripcion : "Agua filtrada, concentrado de proteína de altramuces, aceite de girasol alto en ácido oleico, betaglucano sin gluten, sabores naturales, lactato de calcio (fuente vegana), enzima vegana, pirofosfato tetrasódico, agar, goma xantana, extractos naturales de cúrcuma, extractos naturales de zanahoria, nisina ( un conservante natural).",
        precio : 850,
        presentacion: "botella de 473ml",
        imagen : "eggless.jpg",
        reemplaza: "pollo",
        },
        {
        id : 11,
        nombre : "ATUN VEGANO",
        descripcion : "Proteína de soja texturizada 50% (agua, proteína de soja, gluten de trigo, sal, aceite de soja, sabores naturales, agua, aceite de colza, dextrosa, concentrado de zumo de limón, almidón, hierbas, verduras deshidratadas (perejil, tomates, ajo, pimienta, orégano, albahaca, romero).",
        precio : 500,
        presentacion: "Lata de 150 gramos",
        imagen : "atun.jpg",
        reemplaza: "pescado",
        },
        {
            id : 12,
            nombre : "FILETES ESTILO PESCADO",
            descripcion : "Proteína de Soja Texturizada, Proteína Aislada de Soja, Konjac, Almidón de Tapioca, Almidón de Patata, Aceite Vegetal de maíz, Sal, Azúcar, Algas Nori",
            precio : 850,
            presentacion: "300 gramos",
            imagen : "filetes-pescado.jpg",
            reemplaza: "pescado",
            },
            {
                id : 13,
                nombre : "ATUN VEGANO",
                descripcion : "Proteína de soja texturizada 50% (agua, proteína de soja, gluten de trigo, sal, aceite de soja, sabores naturales, agua, aceite de colza, dextrosa, concentrado de zumo de limón, almidón, hierbas, verduras deshidratadas (perejil, tomates, ajo, pimienta, orégano, albahaca, romero).",
                precio : 500,
                presentacion: "Lata de 150 gramos",
                imagen : "atun.jpg",
                reemplaza: "pescado",
                },

        {
            id : 14,
            nombre : "VEGAN CHORIZO",
            descripcion : "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
            precio : 450,
            presentacion: "caja de 4 unidades",
            imagen : "chorizo.jpg",
            reemplaza: "cerdo",
            },
            {
                id : 15,
                nombre : "VEGAN CHORIZO",
                descripcion : "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
                precio : 450,
                presentacion: "caja de 4 unidades",
                imagen : "chorizo.jpg",
                reemplaza: "cerdo",
                },
                {
                    id : 16,
                    nombre : "NUGGETS",
                    descripcion : "Agua, concentrado de proteína de soja 14,2%, harina de arroz, harina de maíz, aceite de girasol, almidón de patata y de maíz, aromas, estabilizante fibra vegetal, vinagre de alcohol, sal, dextrosa y vitamina B12.",
                    precio : 750,
                    presentacion: "caja de 8 unidades",
                    imagen : "nugget.jpg",
                    reemplaza: "pollo",
                    },
    ]
    let enJson = JSON.stringify(productos, null, 4);
    console.log(enJson)
    /* aca esta el JSON, no tocarlo
    [
    {
        "id": 1,
        "nombre": "VEGAN BURGUER",
        "descripcion": "Agua, proteína de guisante 21,8%, aceite de oliva virgen extra 4,5%, concentrado vegetal (remolacha, zanahoria, manzana), fibra vegetal, extracto de levadura, aromas, estabilizante (metilcelulosa), sal, antioxidante (ácido ascórbico), vinagre de alcohol, hierro y vitamina B12",
        "precio": 350,
        "presentacion": "caja de 2 unidades",
        "imagen": "burguer.png",
        "reemplaza": "vacuno"
    },
    {
        "id": 2,
        "nombre": "VEGAN CHORIZO",
        "descripcion": "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
        "precio": 450,
        "presentacion": "caja de 4 unidades",
        "imagen": "chorizo.jpg",
        "reemplaza": "cerdo"
    },
    {
        "id": 3,
        "nombre": "BOCADOS NO POLLO",
        "descripcion": "Agua, proteína de soja* concentrada 27.3%, aceite de oliva 2.5%, sal, aromas, especias <2% y vitamina B12.",
        "precio": 500,
        "presentacion": "caja de 160 gramos",
        "imagen": "bocados.jpg",
        "reemplaza": "pollo"
    },
    {
        "id": 4,
        "nombre": "ALBONDIDAS",
        "descripcion": "Agua, proteína de guisante 22,2%, aceite de oliva virgen extra 4,5%, concentrado vegetal (remolacha, zanahoria, manzana), fibra vegetal, extracto de levadura, aromas, estabilizante (metilcelulosa), sal, perejil, antioxidante (ácido ascórbico), vinagre de alcohol, hierro y vitamina B12.",
        "precio": 400,
        "presentacion": "caja de 8 unidades",
        "imagen": "albondigas.jpg",
        "reemplaza": "vacuno"
    },
    {
        "id": 5,
        "nombre": "SALCHICHAS",
        "descripcion": "Agua, concentrado de proteína de soja 18,3%, aceite de karité 5,9%, aceite de oliva virgen extra 3,5%, aromas, estabilizante (metilcelulosa), extractos vegetales de manzana, remolacha, rábano, hibisco 
y zanahoria, sal, fibra vegetal, antioxidante (ácido ascórbico), recubierta comestible [estabilizante (alginato de calcio)], perejil, hierro y vitamina B12.",
        "precio": 550,
        "presentacion": "caja de 4 unidades",
        "imagen": "salchichas.jpg",
        "reemplaza": "cerdo"
    },
    {
        "id": 6,
        "nombre": "NUGGETS",
        "descripcion": "Agua, concentrado de proteína de soja 14,2%, harina de arroz, harina de maíz, aceite de girasol, almidón de patata y de maíz, aromas, estabilizante fibra vegetal, vinagre de alcohol, sal, dextrosa y vitamina B12.",
        "precio": 750,
        "presentacion": "caja de 8 unidades",
        "imagen": "nugget.jpg",
        "reemplaza": "pollo"
    },
    {
        "id": 7,
        "nombre": "QUESO ESTILO GRIEGO",
        "descripcion": "Agua, aceite de coco (29%), almidón, sal marina, regulador de acidez: glucono delta-lactone, aromas, extracto de aceituna, vitamina B12",
        "precio": 450,
        "presentacion": "10 fetas 230 gramis",
        "imagen": "queso-tipo-griego.jpg",
        "reemplaza": "vacuno"
    },
    {
        "id": 8,
        "nombre": "BROCHETAS",
        "descripcion": "Proteina de guisante puro, SOJA, APIO, MOSTAZA, especias, verduras y aceite de oliva virgen extra.",
        "precio": 950,
        "presentacion": "Cajas de 8 unidades",
        "imagen": "brochetas.jpeg",
        "reemplaza": "vacuno"
    },
    {
        "id": 9,
        "nombre": "FILETES ESTILO PESCADO",
        "descripcion": "Proteína de Soja Texturizada, Proteína Aislada de Soja, Konjac, Almidón de Tapioca, Almidón de Patata, Aceite Vegetal de maíz, Sal, Azúcar, Algas Nori",
        "precio": 850,
        "presentacion": "300 gramos",
        "imagen": "filetes-pescado.jpg",
        "reemplaza": "pescado"
    },
    {
        "id": 10,
        "nombre": "HUEVO LIQUIDO VEGANO",
        "descripcion": "Agua filtrada, concentrado de proteína de altramuces, aceite de girasol alto en ácido oleico, betaglucano sin gluten, sabores naturales, lactato de calcio (fuente vegana), enzima vegana, pirofosfato tetrasódico, agar, goma xantana, extractos naturales de cúrcuma, extractos naturales de zanahoria, nisina ( un conservante natural).",
        "precio": 850,
        "presentacion": "botella de 473ml",
        "imagen": "eggless.jpg",
        "reemplaza": "pollo"
    },
    {
        "id": 11,
        "nombre": "ATUN VEGANO",
        "descripcion": "Proteína de soja texturizada 50% (agua, proteína de soja, gluten de trigo, sal, aceite de soja, sabores naturales, agua, aceite de colza, dextrosa, concentrado de zumo de limón, almidón, hierbas, verduras deshidratadas (perejil, tomates, ajo, pimienta, orégano, albahaca, romero).",
        "precio": 500,
        "presentacion": "Lata de 150 gramos",
        "imagen": "atun.jpg",
        "reemplaza": "pescado"
    },
    {
        "id": 12,
        "nombre": "FILETES ESTILO PESCADO",
        "descripcion": "Proteína de Soja Texturizada, Proteína Aislada de Soja, Konjac, Almidón de Tapioca, Almidón de Patata, Aceite Vegetal de maíz, Sal, Azúcar, Algas Nori",
        "precio": 850,
        "presentacion": "300 gramos",
        "imagen": "filetes-pescado.jpg",
        "reemplaza": "pescado"
    },
    {
        "id": 13,
        "nombre": "ATUN VEGANO",
        "descripcion": "Proteína de soja texturizada 50% (agua, proteína de soja, gluten de trigo, sal, aceite de soja, sabores naturales, agua, aceite de colza, dextrosa, concentrado de zumo de limón, almidón, hierbas, verduras deshidratadas (perejil, tomates, ajo, pimienta, orégano, albahaca, romero).",
        "precio": 500,
        "presentacion": "Lata de 150 gramos",
        "imagen": "atun.jpg",
        "reemplaza": "pescado"
    },
    {
        "id": 14,
        "nombre": "VEGAN CHORIZO",
        "descripcion": "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
        "precio": 450,
        "presentacion": "caja de 4 unidades",
        "imagen": "chorizo.jpg",
        "reemplaza": "cerdo"
    },
    {
        "id": 15,
        "nombre": "VEGAN CHORIZO",
        "descripcion": "Agua, concentrado de proteína de soja 18,4%*, aceite de karité 5,5%, aceite de oliva virgen extra 3,5%, aromas, extractos vegetales de rábano y zanahoria, estabilizante (metilcelulosa), antioxidante (ácido ascórbico), sal, fibra vegetal, recubierta comestible [estabilizante (alginato de calcio)], colorante (extracto de pimentón), hierro y vitamina B12 ",
        "precio": 450,
        "presentacion": "caja de 4 unidades",
        "imagen": "chorizo.jpg",
        "reemplaza": "cerdo"
    },
    {
        "id": 16,
        "nombre": "NUGGETS",
        "descripcion": "Agua, concentrado de proteína de soja 14,2%, harina de arroz, harina de maíz, aceite de girasol, almidón de patata y de maíz, aromas, estabilizante fibra vegetal, vinagre de alcohol, sal, dextrosa y vitamina B12.",
        "precio": 750,
        "presentacion": "caja de 8 unidades",
        "imagen": "nugget.jpg",
        "reemplaza": "pollo"
    }
] */
    module.exports = productos
    