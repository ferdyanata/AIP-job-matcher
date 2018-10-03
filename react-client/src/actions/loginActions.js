import axios from 'axios';
import {EMPLOYER_LOGIN, TALENT_LOGIN, LOGIN_FAILED} from './types';
import history from '../helpers/history';
import { alertActions } from './alertActions';

export function employerLogin(data){
    return dispatch => {
        return axios.post('/api/employer-login', data).then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
           //George's temp fix
           localStorage.setItem('user_id', res.data.employer._id);
           localStorage.setItem('user_type', 'employer');
        }).then(
        employer => {
            dispatch({  
                type: EMPLOYER_LOGIN,
                payload: employer
            });
            history.push('/positions');
        },
        error => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: error
                });
                console.log(error);
                //Message is tempoorary till its fixed
                dispatch(alertActions.error('Login failed'));
            }
        );
    }
}

export function talentLogin(data){
    return dispatch => {
        return axios.post('/api/talent-login', data).then(res => {
            console.log(res.data);
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
           //George's temp fix
           localStorage.setItem('user_id', res.data.talent._id);
           localStorage.setItem('user_type', 'talent');
        }).then(talent => {
            dispatch({  
                type: TALENT_LOGIN,
                payload: talent
            });
            history.push('/positions');
        },
        error => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: error
                });
                console.log(error);
                //Message is tempoorary till its fixed
                dispatch(alertActions.error('Login failed'));
            }
        );
    }
}