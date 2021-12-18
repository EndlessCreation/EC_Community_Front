import axios from 'axios';
import { User } from '../types';

export const kakaoOauth = async (accessToken: string) => {
  const { data } = await axios.post<any>(`${process.env.NEXT_PUBLIC_API_URL}/oauth/kakao`, {
    accessToken,
  });
  return data;
};

export const googleOauth = async (accessToken: string) => {
  const { data } = await axios.post<any>(`${process.env.NEXT_PUBLIC_API_URL}/oauth/google`, {
    accessToken,
  });
  return data;
};

export const signUp = async (user: Partial<User>) => {
  const { data } = await axios.post<User>(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
    user,
  });
  return data;
};

export const signUser = async (id: User['id']) => {
  const { data } = await axios.post<any>(`${process.env.NEXT_PUBLIC_API_URL}/auth/${id}`);
  return data;
};

export const dropUser = async (id: User['id']) => {
  const { data } = await axios.delete<any>(`${process.env.NEXT_PUBLIC_API_URL}/auth/${id}`);
  return data;
};
