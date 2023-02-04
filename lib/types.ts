export type User = {
  id: number;
  /** 유저 이름입니다. */
  name: string;
  /** 유저 이메일입니다. */
  email: string;
  /** 유저 프로필 사진입니다. */
  image: string;
};

export type Project = {
  id: number;
  title: string;
  category: 'study' | 'competition' | 'advance';
  status: 'recruit' | 'progress' | 'finish';
  startDate: string;
  endDate: string;
  image: string;
  source: string;
  description: string;
  skills: Array<string>;
};
