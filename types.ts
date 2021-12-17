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

export const testUser2: User = {
  id: 1,
  name: '김건훈',
  email: 'dnatuna123@gmail.com',
  skills: ['express', 'nest', 'typescript', 'devOps'],
  isActive: true,
  role: ['회장'],
  image: 'https://avatars.githubusercontent.com/u/28949165?v=4',
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

export const testProject1: Project = {
  id: 1,
  title: '모여런',
  category: 'competition',
  status: 'finish',
  member: [testUser1, testUser2],
  startDate: new Date('2021-09-12'),
  endDate: new Date('2021-11-12'),
  image:
    'https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png',
  source: 'https://github.com/MoyeoRun',
  description:
    'MoyeoRun은 실시간으로 같이 달릴 수 있는 모바일 앱 플랫폼입니다. 같은 공간에서 달리지 않아도 앱 서비스를 통해 함께 달릴 수 있도록 지원합니다.',
  skills: ['react', 'react-native', 'nest', 'docker', 'kafka', 'k8s', 'FCM'],
};

export const testProject2: Project = {
  id: 1,
  title: 'Upgle',
  category: 'competition',
  status: 'finish',
  member: [testUser1],
  startDate: new Date('2021-08-12'),
  endDate: new Date('2021-10-12'),
  image:
    'https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png',
  source: 'https://github.com/Jandy-SeoulTech/Jandy_Web_Front',
  description:
    'Upgle 은 웹 사이트 환경에서 자신이 잘하는 분야를 공유하는 공유자와 배우고 싶은 분야를 배우는 사람들이 실시간으로 인터렉션 할 수 있게 도와주는 사이트입니다.',
  skills: ['react', 'Redux', 'material-ui'],
};
