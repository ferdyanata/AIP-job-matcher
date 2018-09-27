import {EMPLOYER_LOGIN} from './types';
import {TALENT_LOGIN} from './types';
import axios from 'axios';
import history from '../helpers/history';

export function employerLogin(data){
    return dispatch => {
        return axios.post('/api/employer-login', data).then(res => {
           const token = res.data.token;
           localStorage.setItem('jwtToken', token);
        }).then(employer => {
            dispatch({  
                type: EMPLOYER_LOGIN,
                payload: employer
            });
            history.push('/employer/positions');
        });
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
        });
    }
}