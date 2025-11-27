function resultado(){

    const valor = document.getElementById("kwh").value;

    const coversion= parseFloat(valor)

    const twh= convierte_twh(coversion)

    const porcent=58.19

    const porcentaje= ((twh*100)/porcent).toFixed(4)

    const resultado2="Tu consumo promedio mensual fue de "+valor+"kwh, lo cual es quivalente al "+ porcentaje+"% a la totalidad consumida de la fuente solar producida en Colombia con respecto al año 2021";


    if(valor != ""){

        Swal.fire({
            title: 'Buen trabajo',
            text: resultado2,
            icon: 'success',
            confirmButtonText: 'Cool'
        })

        limpia()

    }else{

        Swal.fire({
            title: '¡Error!',
            text: 'no hay datos ingresados',
            icon: 'error',
            confirmButtonText: 'Close'
        })

    }
    
}

function convierte_twh(dato){

    return (dato/1000)*12

}

function limpia(){

    document.getElementById("kwh").value=""

}