import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function MyApp() {
  const [value, onChange] = useState('10:00');

  return (
    <div className='w-['>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}