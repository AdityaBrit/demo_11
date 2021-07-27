// import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userType'

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true
                
            }
            case FETCH_USERS_SUCCESS:

            return{
                loading : false,
                users : action.playload,
                error : ''
            }

            // case FETCH_USERS_FAILURE:
            //     return{
            //         loading : false,
            //     }
            
            case FETCH_USERS_FAILURE :
                return{
                    loading : false,
                    users : [],
                    error : action.playload
                }

                default : return state
       
    }
}

export default reducer