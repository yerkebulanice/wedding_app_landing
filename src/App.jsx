import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import InvitePage from './pages/InvitePage.jsx';
import RsvpSuccessPage from './pages/RsvpSuccessPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/i/:inviteId" element={<InvitePage />} />
      <Route path="/i/:inviteId/rsvp/success" element={<RsvpSuccessPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
