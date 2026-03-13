const SkeletonListUser = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
			{Array.from({ length: 9 }).map((_, index) => (
				<div key={index} className="flex flex-col sm:flex-row items-center w-full max-w-73.5 sm:max-w-full border-2 border-gray-200 bg-gray-100 rounded-2xl animate-pulse">
					<div className="max-w-73.5 sm:max-w-53 rounded-2xl sm:rounded-l-2xl w-full h-full bg-gray-300" />
					<div className="w-full p-4 min-h-50 text-start">
						<div className="mb-4">
							<h2 className="text-xl font-bold max-w-57 bg-gray-300 h-6 w-3/4 mb-2 rounded-full"></h2>
							<div className="inline-flex items-center bg-gray-300 w-9/10 h-4 rounded-full">
							</div>
						</div>
						<span className="block mb-4 font-medium text-sm max-w-57 bg-gray-300 h-4 w-1/2 rounded-lg"></span>
						<div></div>
						<h3 className="opacity-50 font-semibold text-sm bg-gray-300 h-4 w-2/3 mb-2 rounded-full"></h3>
						<p className="max-w-57 bg-gray-300 h-4 w-full rounded-full"></p>
					</div>
				</div>
			))}
		</section>
	);
};

export default SkeletonListUser;
