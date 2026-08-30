import HeroBanner from '../components/home/HeroBanner';
import Navbar from '../components/layout/Navbar';
const Home = () => {
  return (
    <div className="bg-page-header-background min-h-screen">
      <Navbar />
      <div>
        <HeroBanner />
      </div>
    </div>
  );
};

export default Home;
