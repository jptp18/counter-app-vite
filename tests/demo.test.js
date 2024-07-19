describe('Pruebas <DemoComponent/>', () => { 
    
    test('Esta prueba no debe de fallar', ()=>{
        
        //1. inicialización
        const msj1 = 'Hola Mundo'; 
    
        //2. Estimulo
        const msj2 = msj1.trim();
    
    
        //3. Observar el comportamiento
        expect( msj1 ).toBe( msj2 );
    
    });

});

