import { useEffect, useState } from 'react';
import { Wrapper } from '../styles/RegisterPage';
import { Logo, FormRow, Alert } from '../components';

const state = {
  name: '',
  email: '',
  password: '',
  isMember: '',
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(state);

  const toggleMemberOptions = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Wrapper className="full-page">
      <form action="" className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Signup'}</h3>
        {values.showAlert && (
          <Alert alertType="danger" alertMessage="RED ALERT" />
        )}
        {/* form start */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            placeholder="Matt Damon"
            handleChange={handleChange}
            labelChild="Name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          placeholder="goodwillhunting@harvard.com"
          handleChange={handleChange}
          labelChild="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          placeholder="bostonGuyInEverMovie69"
          handleChange={handleChange}
          labelChild="Password"
        />
        {/* form end */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member?' : 'Already a member?'}
          <button
            type="button"
            onClick={toggleMemberOptions}
            className="member-btn"
          >
            {values.isMember ? 'Signup' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
