import LoginForm from '../components/auth/LoginForm';
import AuthLayout from '../components/layout/AuthLayout';
import loginBg from '../assets/images/backgrounds/auth-bg-login.webp';

const Login = () => {
  return (
    <AuthLayout
      backgroundImage={loginBg}
      title="Masuk"
      subtitle="Selamat datang kembali!"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
