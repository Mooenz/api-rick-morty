import type { Response } from '@/@types/index.ts';
import axios from 'axios';

export async function getAllUsers(): Promise<Response> {
	return axios.get('https://rickandmortyapi.com/api/character').then((response) => response.data);
}
