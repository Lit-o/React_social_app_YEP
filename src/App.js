import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


let someComponentMusic = () => <Music/>
let someComponentSettings = () => <Settings attr='massive maybe'/>
/*Эта функция теперь имеет название someComponent и мы ее можем вызвать далее*/


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavContainer />

            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />} />
                <Route path='/profile'
                       render={() => <Profile />} />

                <Route path='/users'
                       render={() => <UsersContainer />}  />


                {/*NOT WORKING AREA---NOT WORKING AREA---NOT WORKING AREA---NOT WORKING AREA---NOT WORKING AREA---*/}
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
            </div>
        </div>
    );
}

export default App;
