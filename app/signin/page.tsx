"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Errors {
  email: string;
  password: string;
  general: string;
}

export default function LoginView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({ email: '', password: '', general: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = async () => {
    let valid = true;
    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
      emailError = 'Invalid email format';
      valid = false;
    }

    if (password.length === 0) {
      passwordError = 'Password cannot be empty';
      valid = false;
    }

    if (!valid) {
      setErrors({ ...errors, email: emailError, password: passwordError });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: `${window.location.origin}/`,
        redirect: false,
      });

      if (result?.error) {
        setErrors({ ...errors, general: result.error });
        setIsSubmitting(false);
        return;
      }

      router.push('/');
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: `${window.location.origin}/`,
      });

      if (result?.error) {
        setErrors({ ...errors, general: result.error });
        return;
      }

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-white via-white to-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?
          <Link href="/signup">
            <span className="text-blue-500 ml-1">Get started</span>
          </Link>
        </p>

        {errors.general && <p className="mt-2 text-xs text-red-500 text-center">{errors.general}</p>}

        <div className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.email && 'border-red-500'}`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full h-8 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.password && 'border-red-500'}`}
              />
              {showPassword ? (
                <FaEye
                  type="button"
                  className="absolute inset-y-0 right-4 mt-1 active:scale-75 flex items-center text-2xl leading-5 text-black cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  type="button"
                  className="absolute inset-y-0 right-4 mt-1 active:scale-75 flex items-center text-2xl leading-5 text-black cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Link href="/forgot-password">
            <span className="text-sm text-blue-500">Forgot password?</span>
          </Link>
        </div>

        <button
          className="w-full mt-6 bg-[#7a2536] text-white py-2 rounded-lg shadow-lg hover:bg-[#da536e] focus:outline-none"
          onClick={handleClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full h-12 border rounded-lg border-gray-300 gap-3">
            <Image alt="Google logo" src="/Google.svg" priority height={40} width={40} />
            <h1>Continue with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
