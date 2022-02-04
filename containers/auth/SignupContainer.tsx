import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signup from '../../components/auth/Signup';
import { RootState } from '../../module';
import { uploadImage } from '../../module/api/image';

const SignupContainer = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const { image } = useSelector((state: RootState) => state.image);
  const router = useRouter();
  const dispatch = useDispatch();

  const onUploadImage = (formData: FormData) => {
    try {
      dispatch(uploadImage(formData));
    } catch (error) {}
  };

  useEffect(() => {
    if (!accessToken) {
      alert('로그인을 먼저 해주세요');
      router.replace('/login');
    }
  }, [dispatch]);
  return <Signup image={image} onUploadImage={onUploadImage} />;
};
export default SignupContainer;
