import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { BrowserRouter } from 'react-router-dom';
import Routeur from './Component/Route';
import { UsersProvider } from './Component/Context/ContextUser';
 import { RDVProvider } from './Component/Context/ContextRDV';
import { DocteurProvider } from './Component/Context/ContextDocteur';

class App extends React.Component {
    render() {
        return (
          <div>
            <BrowserRouter>
                <UsersProvider>
                  <DocteurProvider>
                    <RDVProvider>
                     <Routeur></Routeur>
                    </RDVProvider>
                  </DocteurProvider>
                </UsersProvider>
            </BrowserRouter>
         
          </div>
        );
    }
}

export default App;
