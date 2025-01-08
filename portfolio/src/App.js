import { ThemeProvider } from './context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rending from './pages/rending';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import Nav from './components/nav';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';
import FallingStars from './components/bgFallingStars';

function App() {
  const Layout = ({ children }) => (
    <>
      <Nav />
      <LeftSide />
      <RightSide />
      <FallingStars />
      {children}
    </>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Rending />
        </Layout>
      ),
    },
    {
      path: '/about',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: '/project',
      element: (
        <Layout>
          <Project />
        </Layout>
      ),
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
