import React from 'react'

import {crafterConf} from '@craftercms/classes';
import {createRoot} from 'react-dom/client';

import App from './App.jsx'
import './index.css'

const extractPassedFreemarkerConfig = (param) => {
    const rootEl = document.getElementById('root');
    if (rootEl) {
        const val = rootEl.dataset[param];
        rootEl.dataset[param] = '';

        if (val && val.startsWith('${') && val.endsWith('}')) return undefined;
        return val;
    }

    return undefined;
};

// check index.html
const baseUrlFromCrafter = extractPassedFreemarkerConfig('b');
const siteNameFromCrafter = extractPassedFreemarkerConfig('s');

const defaultSiteName = 'playground';
const defaultBaseUrl = '/';

const site = siteNameFromCrafter || defaultSiteName;
const baseUrl = baseUrlFromCrafter || defaultBaseUrl;
crafterConf.configure({baseUrl, site});
const theElement = document.getElementById('root');
if (!theElement) {
    console.error('root element not found');
} else {
    const root = createRoot(theElement);
    root.render(
        // <React.StrictMode>
        <App/>
        // </React.StrictMode>
    );

}

