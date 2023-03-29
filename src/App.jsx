import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className='App bg-page-bg w-full min-h-screen h-[200vh]'>
      <Routes>
        {routes.map((route) => {
          return <Route {...route} key={crypto.randomUUID()} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
