import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { PrimeReactProvider } from 'primereact/api';
import Tailwind from "primereact/passthrough/tailwind";

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import { PokeApp } from './PokeApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider value={{ pt: Tailwind }}>
        <PokeApp />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
