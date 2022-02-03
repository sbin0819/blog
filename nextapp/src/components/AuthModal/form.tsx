import React from 'react';
interface FormProps {
  register: any;
  handleSubmit: any;
  onValid: any;
  onInvalid: any;
  authMode: any;
}
function form({
  register,
  authMode,
  handleSubmit,
  onValid,
  onInvalid,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {authMode === 'signup' && (
        <label>
          <p>닉네임</p>
          <input
            {...register('username', {
              required: 'Username',
              minLength: {
                message: 'The username should be longer then 5 char.',
                value: 5,
              },
            })}
            type="text"
            placeholder="닉네임을 입력해주세요..."
          />
        </label>
      )}
      <label>
        <p>이메일</p>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="이메일을 입력해주세요..."
        />
      </label>
      <label>
        <p>비밀번호</p>
        <input
          {...register('password', { required: true })}
          type="password"
          placeholder="비밀번호를 입력해주세요..."
        />
      </label>
      <input
        type="submit"
        value={authMode === 'login' ? '로그인' : '회원가입'}
      />
    </form>
  );
}

export default form;
