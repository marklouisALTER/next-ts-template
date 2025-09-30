"use client";

import LoginForm from "./login-form";

export default function PageComponent(){
    return(
        <section className="w-full min-h-screen flex items-center justify-center px-5"> 
            <div className="border border-gray-100 shadow-md rounded-md p-5 w-full max-w-[35rem]">  
                <h2 className="font-medium text-xl">Markme Corp</h2>
                <div className="mt-10">
                    <LoginForm />
                </div>
            </div>

        </section> 
    )
}