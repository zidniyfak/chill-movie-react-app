import logoFull from '../../assets/images/brands/logo-full.png';

const AuthLayout = ({
  backgroundImage,
  title,
  subtitle,
  children,
}) => {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="flex w-full max-w-lg flex-col items-center gap-5 rounded-lg bg-auth-background p-6 lg:gap-8 lg:rounded-2xl lg:p-10">
        <img
          src={logoFull}
          alt="CHILL Logo"
          className="aspect-auto h-auto w-24 object-contain lg:w-32"
        />
        <header className="flex flex-col items-center gap-1">
          <h1 className="text-lg font-bold lg:text-3xl">{title}</h1>
          <p className="lg:text-base">{subtitle}</p>
        </header>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
