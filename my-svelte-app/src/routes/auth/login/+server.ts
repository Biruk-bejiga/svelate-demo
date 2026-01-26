import { redirect, error, type RequestEvent } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase';

export const GET = async ({ url }: RequestEvent) => {
	const provider = url.searchParams.get('provider') ?? 'github';
	const redirectTo = `${url.origin}/auth/callback`;

	const { data, error: authError } = await supabase.auth.signInWithOAuth({
		provider: provider as any,
		options: { redirectTo }
	});

	if (authError || !data?.url) {
		throw error(500, 'Unable to start OAuth sign-in');
	}

	throw redirect(303, data.url);
};
