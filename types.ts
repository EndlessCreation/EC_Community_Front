export type User = {
  id: number;
  name: string;
  email: string;
  skills: Array<string>;
  isActive: boolean;
  role: Array<string>; // 한글로 ex) 회장, 부회장, 총무, 인사부장, 프론트 리더, 백엔드 리더,  ..........
  image: string;
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
