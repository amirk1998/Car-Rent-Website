import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className='App bg-page-bg w-full min-h-screen h-[3000px] md:h-[2120px]'>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route {...route} key={crypto.randomUUID()} />;
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
