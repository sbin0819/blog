import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '@graphql/queries';

// cookie 저장
function Signup() {
  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  return (
    <div>
      <h1>signup</h1>
      <button
        onClick={() => {
          signup({
            variables: {
              email: 'user5@gmail.com',
              username: 'user5',
              password: 'user5s',
            },
          });
        }}
      >
        click
      </button>
    </div>
  );
}

export default Signup;
