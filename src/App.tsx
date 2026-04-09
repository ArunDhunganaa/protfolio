import Home from './page/Home';
import JS from './page/JS/index.tsx';
import _404 from './page/404';
import Header from './component/ui/Header';
import Footer from './component/ui/Footer';
import { practice } from './component/animations/index.ts';
import { useGSAP } from '@gsap/react';
import { Routes, Route } from 'react-router';
import ReactLearn from './page/ReactLearn/index.tsx';
import { APIProvider } from '@vis.gl/react-google-maps';
const API_KEY = import.meta.env.VITE_MAP_API;

function App() {
  useGSAP(() => {
    practice();
  });

  return (
    <APIProvider
      apiKey={API_KEY}
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="js" element={<JS></JS>}>
          <Route path=":id" element={<_404></_404>}></Route>
        </Route>
        <Route
          path="react-learning"
          element={<ReactLearn></ReactLearn>}
        ></Route>
        <Route path="*" element={<_404></_404>}></Route>
      </Routes>
      <Footer></Footer>
    </APIProvider>
  );
}

export default App;
