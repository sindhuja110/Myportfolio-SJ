// DarkLightModeToggle.js
import React from 'react';
import { Form } from 'react-bootstrap';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from './Themecontext';

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const handleModeToggle = () => {
    toggleTheme();
  };
  return (
    <Form>
      <Form.Check
        type="switch"
        id="darkModeSwitch"
        label={isDarkMode ? <MdLightMode size={20} /> : <MdOutlineLightMode size={20} />}
        checked={isDarkMode}
        onChange={handleModeToggle}
        className='mt-2'
      />
    </Form>
  );
};
export default ToggleButton;







