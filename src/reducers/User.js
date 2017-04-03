/**
 * Created by Peter Hoang Nguyen on 3/17/2017.
 */

import {LOGIN_ACTION, LOGOUT_ACTION, ACTIVE_LOGIN_TAB_ACTION} from "components/user/auth/login/LoginActions";
import {ACTIVE_REGISTER_TAB_ACTION} from "components/user/auth/register/RegisterActions";

const userInitialState = {
    playing: false,
    isLoginTabActivated: true
};

export const User = (state = userInitialState, action) => {
    let newState = {};
    switch (action.type) {

        case ACTIVE_LOGIN_TAB_ACTION:
            newState = {
                ...state,
                isLoginTabActivated: true
            }
            break;

        case LOGIN_ACTION:
            newState = {
                ...state,
                isLoginTabActivated: true
            }
            break;

        case LOGOUT_ACTION:

            newState = {
                ...state,
                isLoginTabActivated: true
            }
            break;

        case ACTIVE_REGISTER_TAB_ACTION:
            newState = {
                ...state,
                isLoginTabActivated: false
            }
            break;
        default:
            return state;

    }
    return newState
};