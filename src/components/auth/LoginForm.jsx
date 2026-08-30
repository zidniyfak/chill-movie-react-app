import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import Input from '../common/Input';
import GoogleIcon from '../icons/GoogleIcon';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Username wajib diisi';
    } else if (username.trim().length < 3) {
      newErrors.username = 'Username minimal 3 karakter';
    }

    if (!password) {
      newErrors.password = 'Kata sandi wajib diisi';
    } else if (password.length < 6) {
      newErrors.password = 'Kata sandi minimal 6 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulating API request
    setTimeout(() => {
      setLoading(false);
      alert(`Berhasil Masuk! Selamat datang kembali, ${username}!`);
    }, 1000);

    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 lg:gap-8"
      noValidate
    >
      <div className="flex flex-col gap-1">
        <Input
          id="username"
          label="Username"
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && (
          <span className="text-error-default pl-1 text-xs">
            {errors.username}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Input
            id="password"
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <span className="text-error-default pl-1 text-xs">
              {errors.password}
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center justify-between text-[10px] text-white lg:text-sm">
          <span className="text-text-light-secondary flex gap-1">
            Belum punya akun?
            <Link
              to="/register"
              className="font-medium text-white hover:underline"
            >
              Daftar
            </Link>
          </span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Fitur Lupa Kata Sandi belum tersedia.');
            }}
            className="text-text-light-secondary font-medium transition-colors hover:text-white hover:underline"
          >
            Lupa kata sandi?
          </a>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center gap-2 lg:gap-3">
        <Button type="submit" variant="outline" isFullWidth>
          {loading ? 'Memproses...' : 'Masuk'}
        </Button>

        <div className="text-text-light-secondary my-1 text-xs lg:text-sm">
          <span>Atau</span>
        </div>

        <Button
          type="button"
          variant="outline"
          isFullWidth
          href="https://accounts.google.com/login"
          icon={GoogleIcon}
        >
          Masuk dengan Google
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
