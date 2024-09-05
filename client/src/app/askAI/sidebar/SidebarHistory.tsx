import React, { useEffect, useState } from 'react';

interface SidebarHistoryProps {
  onSelectHistory: (history: string) => void;
}

const SidebarHistory: React.FC<SidebarHistoryProps> = ({ onSelectHistory }) => {
  const [historyList, setHistoryList] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('chatHistoryList') || '[]');
    setHistoryList(storedHistory);
  }, []);

  const handleSelectHistory = (history: string) => {
    onSelectHistory(history);
  };

  return (
    <div className="sidebar">
      <h2>Chat History</h2>
      <ul>
        {historyList.map((history, index) => (
          <li key={index} onClick={() => handleSelectHistory(history)}>
            Chat {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarHistory;
