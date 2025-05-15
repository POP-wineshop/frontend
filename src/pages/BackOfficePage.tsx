import BackOfficeContent from '@/components/backOffice/BackOfficeContent';
import BackOfficeSidebar from '@/components/backOffice/BackOfficeSidebar';
import { useState } from 'react';

const BackOfficePage = () => {
  return (
    <>
      <div className="flex">
        <BackOfficeSidebar />
        <BackOfficeContent />
      </div>
    </>
  );
};

export default BackOfficePage;
