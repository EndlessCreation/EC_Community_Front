import axios from 'axios';
import { Project } from '../types';
import qs from 'qs';

export const getProject = async (id: Project['id']) => {
  const { data } = await axios.post<Project>(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`);
  return data;
};

export const getProjectList = async (
  category: Project['category'],
  status: Project['status'],
  page: number,
  size: number,
) => {
  const query = qs.stringify({ category, status, page, size });
  const { data } = await axios.post<Array<Project>>(
    `${process.env.NEXT_PUBLIC_API_URL}/project?${query}`,
  );
  return data;
};

export const createProject = async (project: Partial<Project>) => {
  const { data } = await axios.post<Project>(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
    project,
  });
  return data;
};

export const editProject = async (id: Project['id']) => {
  const { data } = await axios.post<Project>(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`);
  return data;
};

export const deleteProject = async (id: Project['id']) => {
  const { data } = await axios.delete<Project>(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`);
  return data;
};
