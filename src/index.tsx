/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import { StoreonProvider } from '@storeon/solidjs';
import { store } from './store';
import './index.scss';
import App from './App';

render(() => (
    <StoreonProvider store={store}>
        <Router>
            <App/>
        </Router>
    </StoreonProvider>
    ),
    document.getElementById('root') as HTMLElement
);
