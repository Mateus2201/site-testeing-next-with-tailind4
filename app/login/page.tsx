'use client'

import { useRouter } from "next/navigation";
import { FC } from "react";

interface ILoginProps {

};

const Login: FC<ILoginProps> = (props) => {
    const router = useRouter();

    return (
        <div>
            teste

        <button type="button" onClick={() => router.push('/')}>
            Pagina inicial
        </button>
        </div>
    );
}

export default Login
