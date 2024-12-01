import { MapProvider, PlacesProvider } from "./context"
import { HomePage } from "./pages/HomePage"

import './styles.css'

//Punto de entrada de aplicación
export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomePage />
            </MapProvider>
        </PlacesProvider>
    )
};