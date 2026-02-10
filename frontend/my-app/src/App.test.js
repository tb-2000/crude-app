import { render, screen } from '@testing-library/react';
import App from './App';

// screen wird hier tatsächlich benutzt, z. B. so (füge mindestens eine Assertion hinzu):
test('renders learn react link', () => {
  render(<App />);
  // Beispiel-Assertion – passe sie an deine App an
  expect(screen.getByText(/Namen-App/i)).toBeInTheDocument();
  // oder: screen.getByRole('heading', { name: /Namen-App/i });
});