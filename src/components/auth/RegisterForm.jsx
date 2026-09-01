import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import Input from '../common/Input';
import GoogleIcon from '../icons/GoogleIcon';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi wajib diisi';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi tidak cocok';
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
      alert(`Pendaftaran Berhasil! Selamat bergabung, ${username}!`);
      navigate('/login');
    }, 1000);
  };

  const handleGoogleRegister = () => {
    alert('Pendaftaran dengan Google sedang dialihkan...');
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

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Input
            id="confirmPassword"
            label="Konfirmasi Kata Sandi"
            type="password"
            placeholder="Masukkan ulang kata sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <span className="text-error-default pl-1 text-xs">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div className="mt-1 flex items-center justify-between text-[10px] text-white lg:text-sm">
          <span className="text-text-light-secondary flex gap-1">
            Sudah punya akun?
            <Link
              to="/login"
              className="font-medium text-white hover:underline"
            >
              Masuk
            </Link>
          </span>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center gap-2 lg:gap-3">
        <Button type="submit" variant="outline" isFullWidth disabled={loading}>
          {loading ? 'Memproses...' : 'Daftar'}
        </Button>

        <div className="text-text-light-secondary my-1 text-xs lg:text-sm">
          <span>Atau</span>
        </div>

        <Button
          type="button"
          variant="outline"
          isFullWidth
          onClick={handleGoogleRegister}
          icon={GoogleIcon}
        >
          Daftar dengan Google
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
