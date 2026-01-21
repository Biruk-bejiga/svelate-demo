export interface User {
	id: number;
	name: string;
	email: string;
}

const USERS: Array<User & { password: string }> = [
	{
		id: 1,
		name: 'Demo User',
		email: 'demo@example.com',
		password: 'password123'
	}
];

export function authenticateUser(email: string, password: string): User | null {
	const user = USERS.find((u) => u.email === email && u.password === password);
	return user ? { id: user.id, name: user.name, email: user.email } : null;
}
