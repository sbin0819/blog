import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 520px;
  width: 800px;
  z-index: 30;
  display: flex;
  background: #eee;
  border-radius: 34px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const InfoContainer = styled.div`
  background: teal;
  /* flex: 1.5; */
  aspect-ratio: 2/3;
  border-radius: 32px 0 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  h3 {
    letter-spacing: 3.5px;
  }
  @media only screen and (max-width: 900px) {
    display: none;
    border-radius: 0;
  }
`;

export const FormContainer = styled.div`
  flex: 1 0;
  border-radius: 0 32px 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 50px 40px 50px;
  color: black;
  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    input {
      width: 100%;
      height: 36px;
    }
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-right: auto;
`;

export const AuthModeContainer = styled.div`
  margin-left: auto;
  span {
    padding-left: 10px;
    color: #4169e1;
    cursor: pointer;
  }
`;
