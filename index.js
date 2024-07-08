
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './app/store/store';

import './app/localization/languages/i18n.config'

const AppRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)



AppRegistry.registerComponent(appName, () => AppRedux);
