import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Authorize = React.lazy(() => import("./components/authorize/authorize"));

type Props = {};

export default function Auth(props: Readonly<Props>) {
    const [isAuthorized] = useState(false);
    console.log('Auth index', isAuthorized);
    return (
        <Router>
            <Switch>
                <Route path="/auth/login">
                    <Authorize/>
                </Route>
            </Switch>

            {!isAuthorized && <Redirect to={{
                pathname: "/auth/login"
            }}/>}
        </Router>
    )
}
