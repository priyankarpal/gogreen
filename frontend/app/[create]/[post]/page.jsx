import Hoteldashboard from 'components/Hoteldashboard'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation'

export default function Post() {
    const router = useRouter()
    const { user } = useUser();
    // console.log(user)
    if (!user) {
        router.push("/")
    }
    return (
        <div><Hoteldashboard /></div>
    )
}