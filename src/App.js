import { ThemeProvider } from './context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import Nav from './components/nav/Nav';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';
import FallingStars from './components/bgFallingStars/FallingStars';

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
          <Landing />
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
