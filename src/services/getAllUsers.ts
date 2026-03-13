import type { Response } from '@/@types/index.ts';
import axios from 'axios';

export async function getAllUsers(url: string): Promise<Response> {
	return axios.get(url).then((response) => response.data);
}
