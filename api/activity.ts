import axios from 'axios';
import { Activity } from '../types';
import qs from 'qs';

export const getActivity = async (id: Activity['id']) => {
  const { data } = await axios.post<Activity>(`${process.env.NEXT_PUBLIC_API_URL}/activity/${id}`);
  return data;
};

export const getActivityList = async (
  category: Activity['category'],
  status: Activity['status'],
  page: number,
  size: number,
) => {
  const query = qs.stringify({ category, status, page, size });
  const { data } = await axios.post<Array<Activity>>(
    `${process.env.NEXT_PUBLIC_API_URL}/activity?${query}`,
  );
  return data;
};

export const createActivity = async (activity: Partial<Activity>) => {
  const { data } = await axios.post<Activity>(`${process.env.NEXT_PUBLIC_API_URL}/activity`, {
    activity,
  });
  return data;
};

export const editActivity = async (id: Activity['id']) => {
  const { data } = await axios.post<Activity>(`${process.env.NEXT_PUBLIC_API_URL}/activity/${id}`);
  return data;
};

export const deleteActivity = async (id: Activity['id']) => {
  const { data } = await axios.delete<Activity>(
    `${process.env.NEXT_PUBLIC_API_URL}/activity/${id}`,
  );
  return data;
};
