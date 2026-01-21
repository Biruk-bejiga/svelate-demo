import type { Handle } from '@sveltejs/kit';
import type { User } from '$lib/auth';

const SESSION_COOKIE = 'session';

export const handle: Handle = async ({ event, resolve }) => {
	const raw = event.cookies.get(SESSION_COOKIE);

	if (raw) {
		try {
			const parsed = JSON.parse(raw) as User;
			event.locals.user = parsed;
		} catch (e) {
			console.error('Failed to parse session cookie', e);
			event.locals.user = null;
		}
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);
	return response;
};
