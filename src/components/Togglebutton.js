import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { MdLightMode ,MdOutlineLightMode } from "react-icons/md";

const DarkLightModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    // Toggle between dark and light mode
    setIsDarkMode(prevMode => !prevMode);

    // You can add additional logic here to apply dark/light mode styles to your entire app
    // For example, you might want to update CSS variables or apply different theme classes
    // based on the selected mode.
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="darkModeSwitch"
        label={isDarkMode ? <MdLightMode size={20} /> : <MdOutlineLightMode size={20}/>}
        checked={isDarkMode}
        onChange={handleModeToggle}
        className='mt-2'
      />
    </Form>
  );
};

export default DarkLightModeToggle;
