import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {


    const { map, isMapReady } = useContext( MapContext );
    const { userLocation } = useContext( PlacesContext )

    const onClick = () => {
        if( !isMapReady ) throw new Error('El mapa no está listo aún.');
        if( !userLocation ) throw new Error('No hay ubicación de usurio.');
            
        map?.flyTo({ 
            zoom: 15,
            center: userLocation
        })
    }



    return (
        <button 
            className="btn btn-primary"
            onClick = {onClick}
            style={{
                position: 'fixed',
                top: '25px',
                right: '25px',
                zIndex: 999,
            }}
        >
            Mi ubicación actual
        </button>
    )
};