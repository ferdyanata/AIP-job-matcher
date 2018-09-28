
import axios from 'axios';
import {EMPLOYER_LOGIN, TALENT_LOGIN, LOGIN_FAILED} from './types';
import history from '../helpers/history';
import { alertActions } from './alertActions';

export function employerLogin(data){
    return dispatch => {
        return axios.post('/api/employer-login', data).then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
        }).then(
        employer => {
            dispatch({  
                type: EMPLOYER_LOGIN,
                payload: employer
            });
            history.push('/employer/positions');
        },
        error => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: error
                });
                dispatch(alertActions.error(error));
            }
        );
    }
}

export function talentLogin(data){
    return dispatch => {
        return axios.post('/api/talent-login', data).then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
        }).then(talent => {
            dispatch({  
                type: TALENT_LOGIN,
                payload: talent
            });
            history.push('/talent/positions');
        },
        error => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: error
                });
                dispatch(alertActions.error(error));
            }
        );
    }
}