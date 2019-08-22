import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ConsomeApi from './pages/ConsomeApi';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/ConsomeApi"  component={ConsomeApi} exat />
        </BrowserRouter>
    );
}