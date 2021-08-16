import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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
                                    {/*мы здесь реакту подсказали, что тут бывают параметры
                                    ? - говорит о том, что параметр необязателен*/}
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />} />
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
