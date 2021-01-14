import { Redirect, Router } from '@reach/router';
import Header from '../components/Header';
import PageNotFound from '../pages/404';
import AboutPage from '../pages/About';
import BlogPage from '../pages/Blog';
import ContactPage from '../pages/Contact';
import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';

const AppRouter = () => {
  return (
    <div>
      <Header/>
      <Router>
        <HomePage path='/' />
        <Redirect from="/home" to='/' noThrow/>
        <AboutPage path='/about' />
        <ServicesPage path="/services" />
        <BlogPage path="/blog" />
        <ContactPage path="/contact" />
        <PageNotFound default />
      </Router>
    </div>
  );
};

export default AppRouter;