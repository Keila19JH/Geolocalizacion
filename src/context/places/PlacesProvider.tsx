import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";

export interface PlacesState{
    isLoading: boolean;
    userLocation?: [number, number],
};

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined
};

export interface Props{
    children: JSX.Element | JSX.Element[]
};

export const PlacesProvider = ({ children }: Props) =>{
    
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    //Optención de Geolocalización   
    useEffect( () => {
        getUserLocation()
            .then( LngLtd => dispatch( { type: 'setUserLocation', payload: LngLtd }))
    }, [])


    return (
        <PlacesContext.Provider value={{
            ...state,
        }}>
            { children }
        </PlacesContext.Provider>
    )
};