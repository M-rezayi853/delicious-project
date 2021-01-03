import React, { useState } from 'react';

import Navigation from '../../components/navigation/navigation';
import CreateAccount from '../../components/createAccount/createAccount';
import InputForm from '../../components/inputForm/inputForm';
import BtnSimple from '../../components/btnSimple/btnSimple';
import './signUp.scss';

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';


const SignUp = ( { currentUser } ) => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            alert('password don\'t match!');
            return;
        };

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });

            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setState({...state, [name]: value});
    };

    return (
        <div className="body">
            <div className="signInContainer">
                <CreateAccount unShowBtn signUpBg />

                <div className="signIn">
                    <Navigation 
                        nameClass={'navigation__sign navigation__sign-Up'}
                        currentUser={currentUser}
                    />
                    <h3 className="signIn__heading-3 heading-3-light">Create a Free Account!</h3>

                    <form className="form" onSubmit={handleSubmit}>
                        <InputForm 
                            name='displayName'
                            type='text'
                            label='Display Name'
                            required
                            value={state.displayName}
                            handleChange={handleChange}
                        />
                        <InputForm 
                            name='email'
                            type='email'
                            label='Email'
                            required
                            value={state.email}
                            handleChange={handleChange}
                        />
                        <InputForm 
                            name='password'
                            type='password'
                            label='Password'
                            required
                            value={state.password}
                            handleChange={handleChange}
                        />
                        <InputForm 
                            name='confirmPassword'
                            type='password'
                            label='Confirm Password'
                            value={state.confirmPassword}
                            handleChange={handleChange}
                        />

                        <BtnSimple
                            nameClass={'form__btnSimple'}
                            type='submit'
                        >
                            Sign up
                        </BtnSimple>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default SignUp;