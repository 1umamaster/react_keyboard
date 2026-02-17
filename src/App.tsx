import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      setCurrentKey(event.key);
    };

    window.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {currentKey
          ? `The last pressed key is [${currentKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
