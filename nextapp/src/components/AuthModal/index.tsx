import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  InfoContainer,
  FormContainer,
  SocialLoginContainer,
  AuthModeContainer,
} from './styles';

import { Icon, Modal } from '@common';

import useOnClickOutside from '@hooks/useOnClickOutside';
import { useForm, FieldErrors } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGNUP, LOGIN } from '@graphql/queries';
import { useCookies } from 'react-cookie';

import Form from './form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const ref = useRef<any>();
  useOnClickOutside(ref, () => {
    onClose();
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const [
    signup,
    { data: signupData, loading: signupLoading, error: signupError },
  ] = useMutation(SIGNUP);
  const [login, { data: loginData, loading: loginLoading, error: loginError }] =
    useMutation(LOGIN);
  const [_, setCookie] = useCookies(['Authorization']);

  const onValid = async (data: LoginForm) => {
    const { username, email, password } = data;
    if (authMode === 'signup') {
      try {
        await signup({
          variables: { username, email, password },
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    } else {
      try {
        await login({
          variables: {
            identifier: email,
            password,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log('errors', errors);
  };

  useEffect(() => {
    if (signupData) {
      const value = `${signupData.register.jwt}`;
      setCookie('Authorization', value);
      onClose();
    }
  }, [signupData]);
  useEffect(() => {
    if (loginData || signupData) {
      const value = `${loginData.login.jwt}`;
      setCookie('Authorization', value);
      onClose();
    }
  }, [loginData]);
  const handleAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    reset();
  };
  return (
    <Modal>
      <div ref={ref}>
        <Container>
          <InfoContainer>
            <h3>WELCOME!</h3>
          </InfoContainer>
          <FormContainer>
            <Form
              register={register}
              authMode={authMode}
              handleSubmit={handleSubmit}
              onValid={onValid}
              onInvalid={onInvalid}
            />
            <SocialLoginContainer>
              <Icon />
              <Icon />
              <Icon />
            </SocialLoginContainer>
            <AuthModeContainer>
              {authMode === 'login' ? (
                <p className="authmode_signup">
                  아직 회원이 아니신가요?{' '}
                  <span onClick={() => handleAuth('signup')}>회원가입</span>
                </p>
              ) : (
                <p className="authmode_login">
                  계정이 이미 있으신가요?
                  <span onClick={() => handleAuth('login')}>로그인</span>
                </p>
              )}
            </AuthModeContainer>
          </FormContainer>
        </Container>
      </div>
    </Modal>
  );
}

export default LoginModal;
