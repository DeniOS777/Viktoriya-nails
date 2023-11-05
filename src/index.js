import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Loader } from 'components/Loader';
import { MyThemeProvider } from 'context/themeContext';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyThemeProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </MyThemeProvider>
  </React.StrictMode>
);
