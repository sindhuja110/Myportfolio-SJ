import React from 'react';
import { Form } from 'react-bootstrap';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';

const ToggleButton = ({ toggleDarkMode }) => {
  return (
    <Form>
      <div
        className="mt-2"
        onClick={toggleDarkMode}
        style={{ cursor: 'pointer' }}
      >
        {toggleDarkMode ? (
          < MdLightMode size={25} />
        ) : (
          <MdOutlineLightMode size={25} />
        )}
      </div>
    </Form>
  );
};

export default ToggleButton;
