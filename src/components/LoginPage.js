import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Piggy Bank</h1>
            <p>'Welcome! This is the first step to start learning how to manage your finances.'</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
//I.t.
export default connect(undefined, mapDispatchToProps)(LoginPage);