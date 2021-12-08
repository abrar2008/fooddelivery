import './App.css';
import BannerTop from './components/bannertop/bannerTop';
import BestFeatures from './components/bestfeatures/bestFeatures';
import ExploreMenu from './components/exploremenu/exploreMenu';
import MerchantReviews from './components/merchantreviews/merchantReviews';
import AboutMerchant from './components/aboutmerchant/aboutMerchant';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BannerTop />
      <BestFeatures />
      <ExploreMenu />
      <MerchantReviews />
      <AboutMerchant />
      <Footer />
    </div>
  );
}

export default App;
