import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface LocationError {
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    console.log(latitude,longitude)

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setLoading(false);
            setError({ showError: false });
            console.log(latitude,longitude)
        } catch (e) {
            setError({ showError: true, message: e.message });
            setLoading(false);
        }
    }

    return (
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonButton color="primary" onClick={getLocation}>{latitude ? `${latitude} ${longitude}` : "Get Location"}</IonButton>
        </>
    );
};

export default GeolocationButton;