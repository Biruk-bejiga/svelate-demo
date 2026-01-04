import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email is required';
    if (!service) errors.service = 'Please select a service';

    if (Object.keys(errors).length) {
      return { success: false, errors };
    }

    // Stub: simulate processing (e.g., email or saving) without external dependencies
    console.log('Booking request:', { name, email, phone, service, message });

    return { success: true, message: 'Thanks! We will confirm shortly.' };
  }
};
