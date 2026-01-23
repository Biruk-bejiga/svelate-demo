import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

export const load = async (event: RequestEvent) => {
	const { locals } = event;

	if (!locals.user) {
		throw redirect(303, '/login');
	}

	return {};
};
