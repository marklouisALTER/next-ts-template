import { loginSchema } from "@/schema/auth/auth-schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export default function LoginForm(){

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmitData = () => {
        const data = form.getValues();
        console.log(data);
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitData)} className="space-y-5">
                <div className="grid gap-5">
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email">
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input className='border border-gray-300 py-5' id="email" placeholder="Enter Email" {...field} /> 
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input className="border border-gray-300 py-5" id="password" placeholder="Enter Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />    
                    <Button type="submit" className="bg-black py-5 text-white hover:bg-slate-900 transition-colors ease-in-out cursor-pointer">Submit</Button>    
                </div>
            </form>
        </Form>
    )
}