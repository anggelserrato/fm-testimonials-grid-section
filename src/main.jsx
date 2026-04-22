import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TestimonialsSection from './components/TestimonialsSection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestimonialsSection />
  </StrictMode>
);
