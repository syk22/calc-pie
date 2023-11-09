import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MultipleProvider } from './providers/MultipleProvider';
import { TopPageView } from './pages/TopPageView';
import { MultipleView } from './pages/MultipleView';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <TopPageView />,
    },
    {
      path: '/multiple',
      element: <MultipleView />,
    },
  ]);

  return (
    <MultipleProvider>
      <RouterProvider router={router} />
    </MultipleProvider>
  );
};

export default App;
