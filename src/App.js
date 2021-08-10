import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


let someComponentMusic = () => <Music/>
let someComponentSettings = () => <Settings attr='massive maybe'/>
/*Эта функция теперь имеет название someComponent и мы ее можем вызвать далее*/


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav state={props.state.sideBar}/>

            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                       stateDialogs={props.state.messagesPage}
                       dispatch={props.dispatch}
                       />}
                />
                <Route path='/profile'
                       render={() => <Profile
                           state={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}
                />

                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={someComponentMusic}/>
                <Route path='/settings'
                       component={someComponentSettings}/>
                <Route path='/friends'
                    // exact=''
                       render={() => {
                           return (
                               <div>Friends</div>
                           )
                       }}/>

                {/*<Route path='/dialogs' component={Dialogs}/>*/}
            </div>
        </div>
    );
}

export default App;
