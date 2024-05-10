// DarkLightModeToggle.js
import React from 'react';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from './Themecontext';
import { Form } from 'react-bootstrap';

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleModeToggle = () => {
    toggleTheme();
  };

  return (
    <Form>
      <div
        className="mt-2"
        onClick={handleModeToggle}
        style={{ cursor: 'pointer' }}
      >
        {isDarkMode ? <MdLightMode size={25} /> : <MdOutlineLightMode size={25} />}
      </div>
    </Form>
  );
};

export default ToggleButton;
