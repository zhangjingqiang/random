import React, { useState } from 'react';
import { Avatar, Button } from 'antd';

const options = process.env.OPTIONS.split(',');

const Random: React.FC = () => {
  const [value, setValue] = useState(options[0]);
  const [showValue, setShowValue] = useState(false);

  const handleClick = () => {
    const randomValue = options[Math.floor(Math.random() * options.length)];
    setValue(randomValue);
    setShowValue(true);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          height: '20%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '300px',
        }}
      >
        <Button type="primary" size="large" onClick={handleClick}>
          Random
        </Button>
      </div>
      <div
        style={{
          height: '40%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {showValue && (
          <Avatar
            size={100}
            style={{ backgroundColor: 'green', fontWeight: 'bold' }}
          >
            {value}
          </Avatar>
        )}
      </div>
      <div
        style={{
          height: '40%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '300px',
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              width: '100px',
              height: '50px',
              margin: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '20px',
              textAlign: 'center',
              boxShadow: '2px 2px 10px #ccc',
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random;
