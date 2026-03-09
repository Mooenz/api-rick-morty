import type { User } from '@/@types/user';
import axios from 'axios';

export async function getUSer(id: number): Promise<User> {
	return axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.data);
}
