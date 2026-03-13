import { useStoreUsers } from '@/store/storeUsers.ts';
import ArrowLeft from '@/assets/ArrowLeft';
import ArrowRight from '@/assets/ArrowRight';

export const Pagination = () => {
	const next = useStoreUsers((state) => state.next);
	const prev = useStoreUsers((state) => state.prev);
	const page = useStoreUsers((state) => state.page);
	const pages = useStoreUsers((state) => state.pages);
	const setPage = useStoreUsers((state) => state.setPage);

	const handleNextPage = () => {
		if (next) {
			setPage(next);
		}
	};

	const handleFinalNextPage = () => {
		if (next) {
			const pageString = pages.toString();
			setPage(pageString);
		}
	};

	const handlePrevPage = () => {
		if (prev) {
			setPage(prev);
		}
	};

	const handleFinalPrevPage = () => {
		if (prev) {
			setPage('1');
		}
	};

	return (
		<section className="flex items-center justify-center gap-6 mb-4 lg:mb-6">
			<button className="flex items-center justify-center cursor-pointer text-blue-950 underline underline-offset-4 hover:text-blue-500 focus-within:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-300 disabled:pointer-events-none disabled:opacity-50" onClick={handleFinalPrevPage} disabled={!prev}>
				<ArrowLeft />
			</button>

			<button className="flex items-center justify-center cursor-pointer text-blue-950 underline underline-offset-4 hover:text-blue-500 focus-within:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-300 disabled:pointer-events-none disabled:opacity-50" onClick={handlePrevPage} disabled={!prev}>
				Previous
			</button>

			<p className="text-blue-950 font-semibold">
				Page {page}/{pages}
			</p>

			<button className="flex items-center justify-center cursor-pointer text-blue-950 underline underline-offset-4 hover:text-blue-500 focus-within:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-300 disabled:pointer-events-none disabled:opacity-50" onClick={handleNextPage} disabled={!next}>
				Next
			</button>

			<button className="flex items-center justify-center cursor-pointer text-blue-950 underline underline-offset-4 hover:text-blue-500 focus-within:text-blue-500 focus:text-blue-500 transition-colors ease-in-out duration-300 disabled:pointer-events-none disabled:opacity-50" onClick={handleFinalNextPage} disabled={!next}>
				<ArrowRight />
			</button>
		</section>
	);
};
