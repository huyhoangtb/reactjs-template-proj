import React from 'react'
import {Route, Link} from 'react-router-dom';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import AppReducers from './reducers/AppStore';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './components/user/auth/login/Login';
import LoginLink from 'components/user/auth/login/Link';
import Register from './components/user/auth/register/Register';
//multi language (i18n)

import {IntlProvider, FormattedMessage} from 'react-intl';
import {i18nIntegration} from './i18n';
//support for material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
//support for tab on material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createBrowserHistory();
const middleware = routerMiddleware(history)

const lightMuiTheme = getMuiTheme(lightBaseTheme);

let store = createStore(
    AppReducers,
    compose(applyMiddleware(middleware),
        devToolsEnhancer ? devToolsEnhancer() : f => f)
);

i18nIntegration((locale) => {
    render(
        <Provider store={store}>
            <IntlProvider
                locale={locale}
                messages={window.i18nMessages[locale]}>
                <MuiThemeProvider muiTheme={lightMuiTheme}>
                    <ConnectedRouter history={history}>
                        <div>
                            {/*<AuthButton/>*/}
                            <LoginLink/>
                            <ul>
                                <li>
                                    <Link to="/public">
                                        <FormattedMessage
                                            id="app.en"
                                        />
                                    </Link>
                                </li>
                                <li><Link to="/login">Protected Page</Link></li>
                                <li><Link to="/contact-us">Contact Page</Link></li>
                            </ul>
                            <Route path="/public" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/contact-us" component={Login}/>
                            {/*<PrivateRoute path="/protected" component={Protected}/>*/}
                        </div>
                    </ConnectedRouter>
                </MuiThemeProvider>
            </IntlProvider>
        </Provider>
        ,
        document.getElementById('root')
    )
});