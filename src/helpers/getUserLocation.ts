//función asincrona porque no es facil o un procedimiento secuencial 
export const getUserLocation = async(): Promise<[number, number]> => {

    return new Promise( (resolve, reject) =>{
        navigator.geolocation.getCurrentPosition(
            ( {coords} ) => {
                //mapbox
                resolve( [ coords.longitude, coords.latitude ])
            },
            ( error ) => {
                alert('No se puedo obtener su geolocalización');
                console.log(error);
                reject();
            }
        )
    });
}