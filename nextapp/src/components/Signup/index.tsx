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
              email: 'user1@gmail.com',
              username: 'user1',
              password: 'user1',
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
