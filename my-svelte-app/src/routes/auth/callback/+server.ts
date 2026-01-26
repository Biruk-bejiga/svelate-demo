import { error, redirect, type RequestEvent } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase';
import type { User } from '$lib/auth';

const SESSION_COOKIE = 'session';

export const GET = async ({ url, cookies }: RequestEvent) => {
	const code = url.searchParams.get('code');

	if (!code) {
		throw error(400, 'Missing authorization code');
	}

	const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

	if (exchangeError || !data.session?.user) {
		throw error(400, 'Failed to exchange code for session');
	}

	const supaUser = data.session.user;
	const appUser: User = {
		id: supaUser.id,
		name: (supaUser.user_metadata as any)?.full_name ?? supaUser.email ?? 'User',
		email: supaUser.email ?? ''
	};

	cookies.set(SESSION_COOKIE, JSON.stringify(appUser), {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: true,
		maxAge: 60 * 60 * 24 * 7
	});

	throw redirect(303, '/dashboard');
};
