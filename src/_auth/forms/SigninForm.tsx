import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidation } from '@/lib/validation'
import { z } from 'zod';


const SigninForm = () => {

  const isLoading = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    
    console.log(values)
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Sign in to your account</h2>
        <p className='text-light-3 small-medium md:base-regular mt-2'>To use Penguin enter your account details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} 
          className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='shad-button_primary'>
            {isLoading ?  (
              <div className="flex-center gap-2">
                Loading...
              </div>
            ) : "Submit"}
            </Button>
          <div className="flex-center">
            <p className='mr-1 text-light-2'>Don't already have an account?</p>
            <Link to='/sign-up' className='text-primary-500 text-small-semibold'>Sign Up</Link>
          </div>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm;