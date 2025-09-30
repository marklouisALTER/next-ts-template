"use client";

import dynamic from "next/dynamic"
import AuthLoader from "./_modules/page-loader"

const LoginComponent = dynamic(() => import('./_modules/page-component'), {
    loading: () => <AuthLoader />,
    ssr: false
})

export default function LoginPage(){
    return <LoginComponent />
}