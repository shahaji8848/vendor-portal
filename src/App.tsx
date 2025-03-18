import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayoutProvider } from './layout/context/layoutcontext';
import { Suspense } from 'react';
import Layout from './layout/layout';
// import ProtectedRoutes from './utils/ProtectedRoutes';
import { routes } from './utils/RoutesConfis';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '',
          // Component: ProtectedRoutes,
          children: [
            {
              path: '',
              Component: Layout,
              children: routes.map((route) => ({
                path: route.path,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <route.component />
                  </Suspense>
                ),
              })),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <PrimeReactProvider>
        <LayoutProvider>
          <RouterProvider router={router} />
        </LayoutProvider>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
