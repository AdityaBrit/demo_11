
import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import UserContainer from './Components/UserContainer';
import store from './store'


function App () {

    return (

      <Provider store={store}>
        <div>
        <UserContainer/>
        </div>
      </Provider>

    )
  
}

   export default App;




















 
