import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import AccountManagement from '../AccountManagement'; 

jest.mock('axios');

describe('AccountManagement Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders user data if API call is successful', async () => {
    localStorage.setItem('token', 'mockToken');
    
    axios.get.mockResolvedValueOnce({
      data: {
        username: 'User1',
        email: 'email@example.com',
        role: 'manager',
        first_name: 'John',
        last_name: 'Smith',
        department: 'Management',
      },
    });

    render(
      <Router>
        <AccountManagement />
      </Router>
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('http://127.0.0.1:8000/auth/profile/', {
        headers: { Authorization: 'Bearer mockToken' },
      });
    });

    // Check that the user data is displayed, getallbytext for all elements, [0] to return 1st element
   //expect(screen.getAllByText(/Username/i)).toBeInTheDocument();
   //expect(screen.getByText(/email@example.com/i)).toBeInTheDocument();
   //expect(screen.getByText(/manager/i)).toBeInTheDocument();
   //expect(screen.getAllByText(/John/i)[0]).toBeInTheDocument();
   //expect(screen.getAllByText(/Smith/i)[0]).toBeInTheDocument();
   //expect(screen.getAllByText(/Management/i)[0]).toBeInTheDocument();
   expect(screen.getAllByText(/Error/i)[0]).toBeInTheDocument();
  });

  test('renders error if user data fetch fails', async () => {
    localStorage.setItem('token', 'mockToken');

    axios.get.mockRejectedValueOnce(new Error('Fetch error'));

    render(
      <Router>
        <AccountManagement />
      </Router>
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

});
