import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './Layout/Layout';
import Wrapper from './Components/HOC/Wrapper';

function App() {
  return (
    <div className='App bg-page-bg w-full min-h-screen h-auto'>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Wrapper height={route.wrapperHeight}>
                    {route.element}
                  </Wrapper>
                }
              />
            );
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
