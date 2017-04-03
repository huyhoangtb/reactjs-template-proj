/**
 * Created by Peter Hoang Nguyen on 3/17/2017.
 */
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const ACTIVE_LOGIN_TAB_ACTION = 'ACTIVE_LOGIN_TAB_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export function login(username, password, remember) {
    return {type: LOGIN_ACTION, username, password, remember}
}

export function activeLoginTab() {
    return {type: ACTIVE_LOGIN_TAB_ACTION}
}

export function logout(redirectUrl) {
    return {type: LOGOUT_ACTION, redirectUrl}
}
