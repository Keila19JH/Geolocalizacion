import { PlacesState } from "./PlacesProvider";

//payload = infor que puede tener la acción, va a tener su tipo de number, number

                                                        //longitud y latitud
type PlacesAction = {  type: 'setUserLocation', payload: [number, number] };

export const placesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState =>{
    switch( action.type ){
        case 'setUserLocation':
            return{
                ...state,
                isLoading: false,
                userLocation: action.payload
            }

        default:
            return state;
    }
};