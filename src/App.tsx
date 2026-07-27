import { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import Header from './component/ui/Header';
import Footer from './component/ui/Footer';
import { Routes, Route, useLocation } from 'react-router';
import { ScrollTrigger } from './lib/gsap';

const Home       = lazy(() => import('./page/Home'));
const JS         = lazy(() => import('./page/JS/index.tsx'));
const ReactLearn = lazy(() => import('./page/ReactLearn/index.tsx'));
const _404       = lazy(() => import('./page/404'));

function ScrollManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach(st => st.kill());
    window.scrollTo(0, 0);
  }, [pathname]);

  // Early refresh on each route change (catches synchronous layout)
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Late refresh: fires whenever main content height settles after async loads
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    // After ALL page resources finish (images, iframes) — most reliable signal
    if (document.readyState === 'complete') {
      refresh();
    } else {
      window.addEventListener('load', refresh, { once: true });
    }

    // Catch font-metric shifts (SplitText, custom fonts)
    document.fonts.ready.then(refresh);

    // Catch height changes from lazy chunks, images, Lottie mounting, etc.
    const main = document.getElementById('main-content');
    if (!main) return;
    const ro = new ResizeObserver(refresh);
    ro.observe(main);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener('load', refresh);
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center" aria-label="Loading page" role="status">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          }
        >
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="js"             element={<JS />}>
              <Route path=":id"          element={<_404 />} />
            </Route>
            <Route path="react-learning" element={<ReactLearn />} />
            <Route path="*"              element={<_404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
