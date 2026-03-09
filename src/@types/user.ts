export type User = {
	id: number;
	name: string;
	status: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	species: string;
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
};


