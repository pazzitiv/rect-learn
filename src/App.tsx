import React, {useState} from 'react';
import './App.scss';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Modules from "./components/module/module";
import {AppData} from "./types/appdata";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export const AppContext = React.createContext<AppData>({
    authenticate: {
        user: null,
        auth: null
    }
});

function App() {
    const [isAuthorized] = useState(false);
    let App: AppData = {
        authenticate: {
            user: null,
            auth: null
        }
    };
    return (
        <AppContext.Provider value={App}>
            <Modules code="auth" testprop={true}/>

            <Router>
                <Switch>
                    <Route path="/">
                        {isAuthorized && <Header/>}
                        <Content/>
                    </Route>
                </Switch>
            </Router>

        </AppContext.Provider>
    );
}

export default App;
