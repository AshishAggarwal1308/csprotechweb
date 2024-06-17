"use client"
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { TextField, Box, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignupForm: React.FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; password: string; confirmPassword: string }>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    let valid = true;
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';

    if (!validateEmail(email)) {
      emailError = 'Invalid email format';
      valid = false;
    }

    if (password.length < 6) {
      passwordError = 'Password should be at least 6 characters';
      valid = false;
    }

    if (password !== confirmPassword) {
      confirmPasswordError = 'Passwords do not match';
      valid = false;
    }

    if (!valid) {
      setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
      return;
    }

    try {
      const response = await axios.post<{ data: any }>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle successful registration (e.g., redirect to login page)
        console.log('Registration successful', response.data);
      } else {
        throw new Error('Something went wrong with the registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle registration error
    }
  };

  return (
    
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      
    >
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white"
        
      >
        <Typography variant="h4" className="mb-6 text-center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <div className="relative">
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password}
              required
            />
            {showPassword ? (
              <VisibilityIcon
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VisibilityOffIcon
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            required
          />
          <button
            className="w-full mt-6 bg-[#7a2536] text-white py-2 rounded-lg shadow-lg hover:bg-[#da536e] focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <Typography variant="body2" className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/signin">
            Log in
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignupForm;
