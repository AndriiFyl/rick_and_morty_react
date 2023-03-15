import { Main } from 'pages/Main';
import { CardDetails } from 'pages/CardDetails';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="section_wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character_card/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
};
