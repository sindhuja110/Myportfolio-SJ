import React from 'react';
import BasicButton from './BasicButton';
import { MdOutlineFileDownload } from 'react-icons/md';

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Replace 'your_resume.pdf' with the actual filename of your resume PDF
    const resumeUrl = 'https://drive.google.com/file/d/1qx421Yr6iwH3Egf2Qv3QB4mA9ci_gzz0/view?usp=sharing';
    
    // Trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BasicButton onClick={handleDownload}
    color="coral"
    tcolor="black"
    label="Download Resume"
    className=" boxsd"
    icon={<MdOutlineFileDownload size={30} />}
    />
     
    
  );
};

export default DownloadResumeButton;
