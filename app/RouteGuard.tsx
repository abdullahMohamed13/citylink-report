import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function RouteGuard({children}: {children: React.ReactNode}) {
    const router = useRouter();
    const isAuth = false;

    useEffect(() => {
        if(!isAuth) {
            setTimeout(() => {
                router.replace('/auth')
            }, 0)
        }
    })

    return <>{children}</>
}
