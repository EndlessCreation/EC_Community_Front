import React from 'react';
import Notice from '../../components/community/Notice';
import CommunityLayout from '../../components/layouts/CommunityLayout';

const NoticePage = () => {
  return (
    <CommunityLayout>
      <Notice noticeList={null} />
    </CommunityLayout>
  );
};

export default NoticePage;
