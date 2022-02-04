import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/auth/Login';
import setAuth from '../../lib/util/setAuth';
import { RootState } from '../../module';
import { kakaoOauth, googleOauth } from '../../module/auth';
import { getUserData } from '../../module/user';

const LoginContainer = () => {
  const { auth } = useSelector((state: RootState) => state);
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const onOauth = async (mode: string, accessToken: string) => {
    //Oauth 시도
    try {
      switch (mode) {
        case 'kakao':
          await dispatch(kakaoOauth(accessToken));
          break;
        case 'google':
          await dispatch(googleOauth(accessToken));
          break;
      }
      console.log(auth);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (auth) {
      switch (auth.status) {
        case 'auth':
          router.push('/signup');
          break;
        case 'wait':
          alert('가입 승인 대기중입니다. 잠시만 기다려주세요!');
          router.push('/');
          break;
        case 'login':
          dispatch(getUserData());
          break;
      }
    }
  }, [dispatch, auth]);

  useEffect(() => {
    if (user) {
      alert(`${user.name}님 환영합니다!`);
      router.push('/');
    }
  }, [dispatch, user]);

  return <Login onOauth={onOauth} />;
};
export default LoginContainer;
