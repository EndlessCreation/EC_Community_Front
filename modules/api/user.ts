import axios from 'axios';
import { User } from '../../types';
import qs from 'qs';

export const getUserData = async (id?: User['id']) => {
  const { data } = await axios.get<User>(
    `${process.env.NEXT_PUBLIC_API_URL}/user${id && '/' + id}`,
  );
  return data;
};

export const editProfile = async (user: Partial<User>) => {
  const { data } = await axios.patch<User>(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    user,
  });
  return data;
};

export const getUserList = async (isActive: User['isActive'], page: number, size: number) => {
  const query = qs.stringify({ isActive, page, size });
  const { data } = await axios.delete<any>(`${process.env.NEXT_PUBLIC_API_URL}/user/list?${query}`);
  return data;
};
