import React from 'react';

import {
    SApp,
    SHeader,
} from './assets/styles/app.styles';
import AppTodo from './components/AppTodo';

function App() {
    return (
        <SApp>
            <SHeader>
                <AppTodo/>
            </SHeader>
        </SApp>
    );
}

export default App;
