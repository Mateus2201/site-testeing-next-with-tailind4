'use client'

import { useRouter } from "next/navigation";
import { FC } from "react";

interface ILoginProps {

};

const Login: FC<ILoginProps> = (props) => {
    const router = useRouter();

    return <>
        <button type="button" onClick={() => router.push('/')}>
            Pagina inicial
        </button>
    </>
}

export default Login
