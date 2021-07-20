import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SimpleReactLightbox from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel.js';

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <App />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root')
);
