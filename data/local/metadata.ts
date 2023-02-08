export const clubData = {
  /** 동아리가 만들어진 년도 입니다.
   * @type {number}
   * @constant
   */
  createdYear: 1991,
  /** 현재 동아리 기수입니다.
   * @type {number}
   * @example 33
   */
  currentGeneration: 33,
  /**
   * 동아리 모집 여부입니다.
   * @type {boolean}
   * @example true
   */
  isRecruiting: false,
  /**
   * 동아리 모집 기간입니다.
   * @type {string}
   * @example "02. 13 ~ 02. 26"
   */
  recruitPeriod: '~ 03. 3',
  /**
   * 동아리 모집 공고 주소입니다.
   * @type {string}
   * @example "노션 페이지 등"
   */
  recruitNoticeAddress:
    'https://foregoing-stilton-93d.notion.site/Endless-Creation-33-b45ab47c05f643d88248389d37556a1a',
  /**
   * 동아리 활동 인원 수 입니다.
   * @type {number}
   * @example 30
   */
  activeMemberCount: 46,
  /**
   * 동아리에서 만든 프로젝트의 개수 입니다.
   * @type {number}
   * @example 84
   */
  projectCount: 85,
  /**
   * 동아리 깃허브 주소입니다.
   * @type {string}
   * @example ""
   */
  githubAddress: 'https://github.com/Endless-Creation-32nd',
  /**
   * 동아리 인스타그램 주소입니다.
   * @type {string}
   * @example ""
   */
  instagramAddress: 'https://www.instagram.com/endless__creation/',
  /**
   * 동아리 카카오톡 오픈채팅 주소입니다.
   * @type {string}
   * @example ""
   */
  openKakaoAddress:
    'https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_eMyib%2Fchat',
};

export const wantList = [
  '소속에 상관없이, 개발자 / 디자이너로 활동이 가능한 분',
  '협업하며 창작하는 즐거움을 경험하고 싶으신 분',
  '다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하시는 분',
];

export const QnAList = [
  {
    summary: '[공통] 활동 기간은 어떻게 되나요?',
    detail:
      '3월부터 시작하여 12월까지 활동하게 되어요. 크게 1학기와 2학기 활동으로 나누어져 있고, 세부 활동 계획은 추후 모집 공고를 통해 확인하실 수 있어요!',
  },
  {
    summary: '[공통] 시험 기간에도 활동하나요?',
    detail: '시험 기간 2주간은 동아리 활동을 하지 않아요. ',
  },
  {
    summary: '[공통] 대회에도 참여하나요?',
    detail:
      '2학기 활동인 EC:Advance 활동을 대회를 목표로 프로젝트를 진행 할 수 있어요. 1학기에 대회에 참가 하고싶으신 분은 마음이 맞는 팀원과 함께 대회에 참가하셔도 좋아요.',
  },
  {
    summary: '[공통] 2학기에도 동아리원 모집이 있나요?',
    detail: '2학기에 추가 모집 계획은 없어요',
  },
  {
    summary: '[공통] 개발부 모집 계획은 없나요?',
    detail: '23년도에는 개발부를 모집하지 않을 계획이에요.',
  },
];

export const developSteps = [
  { id: 100, label: '서류 접수', date: '2.12 ~ 2.25' },
  { id: 200, label: '면접 일정', date: '2.20 or 2.27 or 3.6' },
  { id: 300, label: '최종합격', date: '2.21 or 2.28 or 3.7' },
];

export const studySteps = [
  { id: 100, label: '서류 접수', date: '2.20 ~ 3.3' },
  { id: 200, label: '면접 일정', date: '2.26, 3.5' },
  { id: 300, label: '최종합격', date: '3.6' },
];
