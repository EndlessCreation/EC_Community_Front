import React from 'react';
import UserManagement from '../../components/admin/UserManagement';
import AdminLayout from '../../components/layouts/AdminLayout';
import { testUser1, testUser2, testUser3 } from '../../types';

const UserPage = () => {
  return (
    <AdminLayout>
      <UserManagement userList={[testUser1, testUser2, testUser3]} />
    </AdminLayout>
  );
};

export default UserPage;
