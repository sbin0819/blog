import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@graphql/queries';
import { useCookies } from 'react-cookie';

import { Header } from '@common';

const mockLoginInfo = {
  identifier: 'user1',
  password: 'gktmqls1',
};
function Login() {
  const [cookies, setCookie] = useCookies(['Authorization']);
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const onHandleLogin = async () => {
    await login({
      variables: {
        ...mockLoginInfo,
      },
    });
  };

  useEffect(() => {
    if (data) {
      console.log('data', data);
      const value = `${data.login.jwt}`;
      setCookie('Authorization', value);
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
