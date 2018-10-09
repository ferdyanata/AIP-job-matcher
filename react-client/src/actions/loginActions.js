import axios from 'axios';
import {EMPLOYER_LOGIN, TALENT_LOGIN, LOGIN_FAILED} from './types';
import history from '../helpers/history';
import { alertActions } from './alertActions';

export function employerLogin(data){
    return dispatch => {
        return axios.post('/api/employer-login', data)
        .then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
           //George's temp fix
           localStorage.setItem('user_id', res.data.employer._id);
           localStorage.setItem('user_type', 'employer');
           history.push('/positions');
           dispatch({  
                type: EMPLOYER_LOGIN,
                payload: res.data.employer
            });
        })
        .catch(function (error) {
            dispatch({
                type: LOGIN_FAILED,
                payload: error
            });
            console.log(error.response.data.msg);
            dispatch(alertActions.error(error.response.data.msg));
        });
        
    }
}

export function talentLogin(data){
    return dispatch => {
        return axios.post('/api/talent-login', data).then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
           //George's temp fix
           localStorage.setItem('user_id', res.data.talent._id);
           localStorage.setItem('user_type', 'talent');
           history.push('/positions');
           dispatch({  
                type: TALENT_LOGIN,
                payload: res.data.talent
            });
        })
        .catch(function (error) {
            dispatch({
                type: LOGIN_FAILED,
                payload: error
            });
            console.log(error.response.data.msg);
            dispatch(alertActions.error(error.response.data.msg));
        });
    }
}