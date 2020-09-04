import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import './style.css';
import { PageWrapper } from '../../components/PageWrapper';

const SIGN_UP = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;

export function SignUp() {
  const [signUp, { loading, error, data }] = useMutation(SIGN_UP);
  const [values, setValues] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await signUp({ variables: { name: values.name, email: values.email, password: values.password } });
      //TODO: Save tokens & redirect
    }
    catch (e) {
      // TODO: Handle error
    }
  };

  return (
    <PageWrapper>
      <form onSubmit={handleFormSubmit} className="Sign-Up-Form-Submit">
        <p className="Sign-Up-Title">Welcome!</p>
        <p className="Sign-Up-Subtitle">Sign up to start using Simpledo today.</p>

        <input name="name" type="text" className="Sign-Up-Full-Name" placeholder="Full Name" onChange={handleInputChange} value={values.name} />
        <input name="email" type="email" className="Sign-Up-Email" placeholder="Email" onChange={handleInputChange} value={values.email} />
        <input name="password" type="password" className="Sign-Up-Password" placeholder="Password" onChange={handleInputChange} value={values.password} />

        <a href="/">
          <p className="Log-In-Option">Do have an account? Sign in.</p>
        </a>

        <div className="Sign-Up-Button-Content">
          <button type="submit" className="Sign-Up-Label" disabled={loading || !values.name || !values.email || !values.password}>
            Sign up
            </button>
        </div>
        {
          error && <p>Ops! Could not complete your request ...</p>
        }
      </form>
    </PageWrapper>
  );
}