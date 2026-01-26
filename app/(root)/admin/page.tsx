import React from 'react';
import { auth } from '@/lib/auth'; // path to your Better Auth server instance
import { headers } from 'next/headers';
import SignOutButton from '@/components/auth/sign-out-button';

export default async function AdminPage() {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers objects
    })

    if (!session) {
        return <div>NO AUTORIZADO</div>
    }

    return (
        <>
            <div>AdminPage</div>
            <SignOutButton />
        </>
    )
}