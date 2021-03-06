import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet' 

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'


import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Cotia</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.6705104,-47.0169717]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    position={[-23.6705104,-47.0169717]}
                    icon={mapIcon}
                >
                    
                <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup" >
                    Las das meninas
                    <Link to="">
                        <FiArrowRight size={20} color="#fff" />
                    </Link>
                </Popup>

                </Marker>    
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={28} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;