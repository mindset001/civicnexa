import React from 'react'
import { render, fireEvent } from '@vitest/react'
import Login from '../components/pages/auth/login'
import { describe } from 'vitest'

describe('Login', () => {
    test('should render the login page', () => {
        const { getByText } = render(<Login />)
        const loginButton = getByRole('button', { name: /login/i });
        fireEvent.loginButton(loginButton, new Event('click'));

        // Assert: Check if the login button is disabled
        expect(loginButton).toBeDisabled();
    })
})
