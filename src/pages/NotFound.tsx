import { NavLink } from 'react-router';

const NotFound = () => {
	return (
		<section className="flex justify-center items-center min-h-dvh">
			<div>
				<h1 className="text-4xl font-bold text-center mb-4">404 - Not Found</h1>
				<p className="text-center opacity-50">The page you are looking for does not exist.</p>
				<p className="text-center opacity-50">Please check the URL or return to the homepage.</p>
				<NavLink to="/" className="block hover:bg-blue-500 hover:text-white text-center mt-4 text-blue-500 py-2 px-4 rounded transition-colors duration-300 ease-in-out">
					Go to Homepage
				</NavLink>
			</div>
		</section>
	);
};

export default NotFound;
