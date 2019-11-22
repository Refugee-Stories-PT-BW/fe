import React, {useState} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import * as nonprofitsData from '../../data/nonprofits.json'
import mapStyle from './MapStyle'
import { api_key } from '../../utils/data'

function Map() {
    const [selectedOrg, setSelectedOrg] = useState(null);
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 40.771073, lng: -73.989189}}
            defaultOptions={{styles: mapStyle}}
            >
           {nonprofitsData.features.map((nonprofit) => (
                    <Marker key={nonprofit.properties.ORG_ID} position={{
                        lat: nonprofit.geometry.coordinates[1],
                        lng: nonprofit.geometry.coordinates[0]
                    }} 
            onClick={() => {
                setSelectedOrg(nonprofit);
            }}
              />
           ))}
            {selectedOrg && (
                <InfoWindow
                    position={{
                        lat: selectedOrg.geometry.coordinates[1],
                        lng: selectedOrg.geometry.coordinates[0],
                    }}
                    onCloseClick={() => {
                        setSelectedOrg(null);
                    }}
                    >
                    <div> 
                        <h2>{selectedOrg.properties.NAME}</h2>
                        <h3>{selectedOrg.properties.ADDRESS}</h3>
                        <p>{selectedOrg.properties.DESCRIPTION}</p>
                        <h4><a href='{selectedOrg.properties.URL}' onClick={(e) => { e.preventDefault();window.open(selectedOrg.properties.URL)}}>{selectedOrg.properties.URL}</a></h4>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>

)}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Connect() {
    return (
        <div style={{ width:'100vw', height: '100vh'}} >
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api_key}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
             />
        </div>
    )
} 