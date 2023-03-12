import { useNavigate } from 'react-router';
import { getUser } from '../data/authApi'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../feature/authSlice'

function useUser() {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    if (!user) {
        getUser().then((user) => {
            if (!user) {
                navigate('/admin/login');
            } else {
                dispatch(set(user));
            }
        });
    }

    return user;
}

export default useUser;