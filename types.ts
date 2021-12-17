export type User = {
  id: number;
  name: string;
  email: string;
  skills: Array<string>;
  isActive: boolean;
  role: Array<string>; // 한글로 ex) 회장, 부회장, 총무, 인사부장, 프론트 리더, 백엔드 리더,  ..........
  image: string;
};

export const testUser1: User = {
  id: 1,
  name: '황인서',
  email: 'sjsjsj1246@gmail.com',
  skills: ['react', 'react-native', 'next', 'typescript'],
  isActive: true,
  role: ['웹 파트장'],
  image: 'https://avatars.githubusercontent.com/u/24623403?v=4',
};

export type Project = {
  id: number;
  title: string;
  category: 'study' | 'competition' | 'advance';
  status: 'recruit' | 'progress' | 'finish';
  member: Array<User>;
  startDate: Date | null;
  endDate: Date | null;
  image: string | null;
  source: string | null;
  description: string | null;
  skills: Array<string>;
};
