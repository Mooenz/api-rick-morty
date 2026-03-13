import React, { useRef, useState } from 'react';
import { useStoreUsers } from '@/store/storeUsers.ts';

export const Filters = () => {
	const timeoutId = useRef(0);
	const setPage = useStoreUsers((state) => state.setPage);
	const filterState = useStoreUsers((state) => state.filterState);
	const setFilterState = useStoreUsers((state) => state.setFilterState);
	const setFilterText = useStoreUsers((state) => state.setFilterText);
	const [textInput, setTextInput] = useState<string>('');

	const handleChangeSpaces = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterState(e.target.value);
	};

	const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;

		setTextInput(text);

		if (timeoutId.current) {
			clearTimeout(timeoutId.current);
		}

		timeoutId.current = setTimeout(() => {
			setFilterText(text);
			setPage('1');
		}, 500);
	};

	const handleClearFilters = () => {
		setFilterState('');
		setFilterText('');
		setPage('1');
		setTextInput('');
	};
	return (
		<section className="flex flex-wrap items-center justify-between mb-4 lg:mb-6">
			<div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
				<div className="border border-transparent">
					<select className="cursor-pointer bg-blue-950 pl-3 rounded-2xl text-white h-12  border-r-12 border-blue-950 transition-colors ease-in-out duration-300" name="selectSpecies" id="filterSelect" value={filterState} onChange={handleChangeSpaces}>
						<option value="">All users</option>
						<option value="human">Human</option>
						<option value="alien">Alien</option>
					</select>
				</div>

				<fieldset className="order-3 lg:order-2 h-12.5 border-2 border-blue-950 text-blue-950 rounded-2xl w-full hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 transition-colors ease-in-out duration-300 overflow-hidden">
					<input className="h-full w-full px-4 outline-none!" type="text" name="filterText" id="filterText" placeholder="Search a personage" onChange={handleFilterText} value={textInput} />
				</fieldset>

				<button className="order-2 lg:order-3 cursor-pointer h-12.5 px-3 hover:bg-blue-100 focus:bg-blue-100 focus-within:bg-blue-100 rounded-2xl border-2 border-blue-950 text-blue-950 hover:text-blue-500 hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 active:scale-95 transition-colors ease-in-out duration-300 disabled:opacity-50 disabled:pointer-events-none user-select-none" onClick={handleClearFilters} disabled={!filterState && !textInput}>
					Clear
				</button>
			</div>
		</section>
	);
};
