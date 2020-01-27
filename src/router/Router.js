import React from 'react';
import Login from '../pages/Login';
import { Router,Scene } from 'react-native-router-flux';
import Listviewscreen from '../components/Listviewscreen';

const Yonlendirme = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#518FB8' }} titleStyle={{ color: 'white' }} >
            <Scene key="root" initial>
                <Scene hideNavBar={true}>
                    <Scene key="Login" hideNavBar={true} component={Login} />
                </Scene>
                <Scene key="Listviewscreen" component={Listviewscreen} title={"Anasayfa"} />
            </Scene>
        </Router>);
};


export default Yonlendirme;