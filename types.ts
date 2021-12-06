export type User = {
  id: number;
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

export type Project = {
  id: number;
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
