import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@graphql/queries';
const mockLoginInfo = {
  identifier: 'strapi',
  password: 'strapi',
};
function Login() {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const onHandleLogin = () => {
    login({
      variables: {
        ...mockLoginInfo,
      },
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <h1>login</h1>
      <button onClick={onHandleLogin}>login click</button>
    </div>
  );
}

export default Login;
