import './App.css';
import HeaderFooter from './components/headerfooter/headerfooter';
import MainPage from './components/mainPage/mainpage';
import About from './components/about/About';
import Widget from './components/Widget/Widget';
import BrowseSection from './components/browseSection/browseSection';
import Testimonials from './components/testimonials/testimonials';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <HeaderFooter data={{ name: 'Neelakshi', title: 'Member Login' }} />
      <MainPage />
      <About />
      <Widget />
      <BrowseSection />
      <Testimonials />
      <Portfolio />
      <HeaderFooter data={{ name: 'Powered By', titlename:'Exly', title: '© 2020, Myscoot Private Ltd', type: 'footer'}} />
    </div>
  );
}

export default App;
