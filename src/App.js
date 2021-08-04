import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


let someComponentMusic = () => <Music />
let someComponentSettings = () => <Settings attr='massive maybe'/>
/*Эта функция теперь имеет название someComponent и мы ее можем вызвать далее*/
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               state={props.state.messagesPage} /> } />
                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage} /> } />
                    <Route path='/news'
                           render={ () => <News /> } />
                    <Route path='/music'
                           render={ someComponentMusic } />
                    <Route path='/settings'
                           component={ someComponentSettings } />

                    {/*
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
