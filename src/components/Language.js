import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Eng');

  const handleLanguageSelect = (code, language) => {
    setSelectedLanguage(code);
    // Save the selected language code to local storage
    localStorage.setItem('selectedLanguage', code);
    // You can add additional logic here when a language is selected
  };

  const languageOptions = [
    { code: 'Eng', name: 'Eng' },
    { code: 'Tam', name: 'Tam' }
    // Add more language options as needed
  ];

  return (
    <Dropdown >
      <Dropdown.Toggle  id="language-dropdown"  style={{ backgroundColor: 'coral', color:'black',border:'none', marginTop:'3px'}}>
        {selectedLanguage}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languageOptions.map((language, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => handleLanguageSelect(language.code, language.name)}
          >
            {language.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;