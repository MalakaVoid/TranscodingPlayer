import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/Main/Main';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);
