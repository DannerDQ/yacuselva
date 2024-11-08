import UserManagement from "./user";
import LogInButton from "./login";
import { getSession } from '@auth0/nextjs-auth0';

export default async function AuthState() {
    const { user } = (await getSession()) ?? {user: null};

    return (
        user ? <UserManagement user={user} /> : <LogInButton/>
    )
}