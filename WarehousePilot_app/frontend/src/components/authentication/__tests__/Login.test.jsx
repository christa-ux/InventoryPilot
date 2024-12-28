import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Login from '../Login';


jest.mock('axios');

describe('Login Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders login form', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('handles login successfully', async () => {
    const mockResponse = {
      data: {
        access: 'mockAccessToken',
        user: { username: 'testuser', role: 'manager' }
      }
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('mockAccessToken');
      expect(localStorage.getItem('user')).toBe(JSON.stringify({ username: 'testuser', role: 'manager' }));
    });
  });

  test('handles login failure', async () => {
    axios.post.mockRejectedValueOnce(new Error('Invalid credentials'));

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText(/login failed/i)).toBeInTheDocument();
    });
  });

  test('remembers username if remember me is checked', () => {
    localStorage.setItem('rememberedUsername', 'rememberedUser');

    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByLabelText(/username/i).value).toBe('rememberedUser');
    expect(screen.getByLabelText(/remember me/i).checked).toBe(true);
  });
});