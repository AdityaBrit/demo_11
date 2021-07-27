// import { FETCH_USERS_REQUEST } from "./userType"

// import { FETCH_USERS_SUCCESS } from "./userType"
import axios from 'axios'

 import {
     FETCH_USERS_REQUEST,
     FETCH_USERS_SUCCESS,
     FETCH_USERS_FAILURE
 } from './userType'


export const featchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

 const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}


const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {

        axios.get('https://reqres.in/api/users?page=2')
         .then(response => {
             const users = response.data
             dispatch(fetchUsersSuccess(users))
         })

         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchUsersFailure(errorMsg))
         })

    }
}


