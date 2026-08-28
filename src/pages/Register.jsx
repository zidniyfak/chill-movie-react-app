import AuthLayout from '../components/layout/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';
import registerBg from '../assets/images/backgrounds/auth-bg-register.webp';

const Register = () => {
  return (
    <AuthLayout
      backgroundImage={registerBg}
      title="Daftar"
      subtitle="Selamat datang!"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
