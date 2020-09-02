import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Route path='/:page?/:userId?' render={() => <HeaderContainer/>} />
			<Navigation />
			<main className='content'>

				{/* <Route path='/profile' component={Profile} /> */}
				<Route path='/profile/:userId?'
							 render={() => <ProfileContainer/>}/>
				{/* <Route path='/dialogs' component={Dialogs} /> */}
				<Route path='/dialogs'
					   render={() => <DialogsContainer/>}/>
				<Route path='/users'
               render={() => <UsersContainer/>}/>
               <Route path='/login' render={()=> <Login/>}/>
				<Route path='/feed' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>
			</main>
		</div>
	);
}

export default App;
