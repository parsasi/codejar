import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';



//Not sure if the dsn is a secret key, as it's not stated as so, in Sentry docs
Sentry.init({
  dsn: "https://073c6ef986ac4a31a2802985cc807fb3@o349957.ingest.sentry.io/5416890",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
