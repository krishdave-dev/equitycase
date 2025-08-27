'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function Formsection() {
  const [showPassword, setShowPassword] = useState(false)

  const schema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })

  type FormData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => console.log('✅ Valid Data:', data)

  return (
    <Card className="flex-1 w-full bg-card rounded-l-4xl rounded-r-none">
      <CardContent className="flex flex-col">

        {/* Form */}
        <div className=" flex flex-col  items-start gap-5  px-13 py-17 w-full max-w-2xl">
          <div className='w-full'>
            <h2 className="text-4xl  mb-8 font-medium  text-[#525252] font-helvetica-neue-medium">Sign In</h2>

          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-10 w-full">

            {/* Username */}
            <div>
              <Label htmlFor="username" className="mb-2 text-xl">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Enter Your Username"
                {...register('username')}
                className={`${errors.username ? 'border-destructive outline-destructive' : 'border-border outline-primary-blue-100'}`}
              />
              {errors.username && (
                <small className="text-destructive">{errors.username.message}</small>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-2 text-xl">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Your Password"
                  {...register('password')}
                  className={`${errors.password ? 'border-destructive outline-destructive' : 'border-border outline-primary-blue-100'} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 cursor-pointer -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <small className="text-destructive">{errors.password.message}</small>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant={'primary'}
              className='mt-10 text-xl h-10'
            >
              Sign In
            </Button>

            {/* Sign up link */}
            <div className="text-start  pt-4">
              <p className="text-[#A1A1A1]">
                Don&apos;t have an account?{' '}
                <Link href="/register">
                  <Button variant={'link'} className='px-0'>

                    Sign up
                  </Button>
                </Link>
              </p>
            </div>

          </form>
        </div>
      </CardContent>
    </Card>
  )
}
