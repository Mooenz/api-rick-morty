// import React, { useState } from 'react';
import { useUsers } from '@/hooks/useUsers.ts';
import UserInfo from '@/components/UserInfo.tsx';
import type { User } from '@/@types/user.ts';
// import { Link } from 'react-router';
import ArrowLeft from '@/assets/ArrowLeft';
import ArrowRight from '@/assets/ArrowRight';

const Home = () => {
	// const [filterData, serFilterData] = useState<User[] | null>(null);
	// const [selectInputSpaces, setSelectInputSpaces] = useState<string>('');
	// const [textInput, setTextInput] = useState<string>('');
	const { data, isError, isLoading } = useUsers();

	const handleChangeSpaces = () => {
		// setSelectInputSpaces(e.target.value);
	};

	const handleFilterText = () => {
		// setTextInput(e.target.value);
	};

	const handleClearFilters = () => {
		
	};

	// if (!isLoading && !error) {
	// 	serFilterData(selectInputSpaces ? data?.results.filter((speciesFilter) => speciesFilter !== selectInputSpaces) : data);
	// }

	// const pages = data?.info.pages;
	// const count = data?.info.count;

	// const { next, prev } = data?.info;

	return (
		<>
			{isLoading && <p>El contenido está cargando</p>}

			{isError && <p>Error al traer los datos</p>}

			{!isLoading && !isError && (
				<section>
					<section className="min-h-65 flex items-center justify-center bg-blue-950 text-white rounded-2xl mb-4 lg:mb-6">
						<hgroup className="p-4 lg:p-10 text-center">
							<h1 className="font-bold text-4xl mb-2">Personajes de Rick and Morty</h1>
							<p className="text-lg opacity-50">Explora los personajes de la serie animada Rick and Morty</p>
						</hgroup>
					</section>

					<section className="flex flex-wrap items-center justify-between mb-4 lg:mb-6">
						<form className="flex flex-wrap lg:flex-nowrap gap-4">
							<div className="border border-transparent">
								<select className="cursor-pointer bg-blue-950 pl-3 rounded-2xl text-white h-12  border-r-12 border-blue-950 transition-colors ease-in-out duration-300" name="selectSpecies" id="filterSelect" onChange={handleChangeSpaces}>
									<option value="">All users</option>
									<option value="human">Human</option>
									<option value="alien">Alien</option>
								</select>
							</div>

							<fieldset className="h-12.5 border-2 border-blue-950 text-blue-950 rounded-2xl w-full max-w-90 hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 transition-colors ease-in-out duration-300">
								<input className="h-full  px-4 outline-none!" type="text" name="filterText" id="filterText" placeholder="Search a personage" onChange={handleFilterText} />
							</fieldset>

							<button className="cursor-pointer h-12.5 px-3 hover:bg-blue-100 focus:bg-blue-100 focus-within:bg-blue-100 rounded-2xl border-2 border-blue-950 text-blue-950 hover:text-blue-500 hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 active:scale-95 transition-colors ease-in-out duration-300" onClick={handleClearFilters}>
								Clear
							</button>
						</form>

						<section className="flex items-center justify-center gap-4">
							<button className="flex items-center justify-center cursor-pointer rounded-2xl h-12.5 w-12.5 bg-blue-950 text-white border-2 border-transparent hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 transition-colors ease-in-out duration-300">
								<ArrowLeft />
							</button>
							<button className="flex items-center justify-center cursor-pointer rounded-2xl h-12.5 w-12.5 bg-blue-950 text-white border-2 border-transparent hover:border-blue-500 focus-within:border-blue-500 focus:border-blue-500 transition-colors ease-in-out duration-300">
								<ArrowRight />
							</button>
						</section>
					</section>

					<section className="flex flex-wrap items-center gap-4 lg:gap-6">
						{data?.results.map((dataUser: User) => (
							<UserInfo key={dataUser.id} dataUser={dataUser} />
						))}
					</section>
				</section>
			)}
		</>
	);
};

export default Home;
