import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Layout from '@/layout/Layout';
import NotFound from '@/pages/NotFound.tsx';
import '@/styles/global.css';

const Home = lazy(() => import('@/pages/Home.tsx'));
const DetailUser = lazy(() => import('@/pages/DetailUser.tsx'));

function App() {
	return (
		<Layout>
			<Suspense fallback={<p>Contenido está cargando</p>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/user/:id" element={<DetailUser />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
