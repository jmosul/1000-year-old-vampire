import React from 'react';
import ReactDOM from 'react-dom/client';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import {RouterProvider} from 'react-router-dom';
import router from './router';
import {ThemeProvider} from '@aws-amplify/ui-react';
import theme from './theme';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
