import React from 'react';
import Notice from '../../components/community/Notice';
import CommunityLayout from '../../components/layouts/CommunityLayout';

const MemberPage = () => {
  return (
    <CommunityLayout>
      <Notice noticeList={null} />
    </CommunityLayout>
  );
};

export default MemberPage;
