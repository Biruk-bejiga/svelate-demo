import { fail, redirect } from '@sveltejs/kit';
import type { Actions, RequestEvent } from '@sveltejs/kit';
import { authenticateUser } from '$lib/auth';

const SESSION_COOKIE = 'session';

export const load = async (event: RequestEvent) => {
	const { locals } = event;
	if (locals.user) {
		throw redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		const { request, cookies } = event;
		const data = await request.formData();
		const email = String(data.get('email') ?? '').trim();
		const password = String(data.get('password') ?? '');

		if (!email || !password) {
			return fail(400, {
				success: false,
				message: 'Email and password are required',
				email
			});
		}

		const user = authenticateUser(email, password);
		if (!user) {
			return fail(400, {
				success: false,
				message: 'Invalid email or password',
				email
			});
		}

		cookies.set(SESSION_COOKIE, JSON.stringify(user), {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			maxAge: 60 * 60 * 24 * 7
		});

		throw redirect(303, '/');
	}
};
