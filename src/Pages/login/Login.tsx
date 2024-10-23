import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { setUser } from '../../redux/feature/auth/authSlice';
import { useLoginMutation } from '../../redux/feature/auth/auth.api';
import { useAppDispatch } from '../../redux/hook';
import Cursor from '../../Components/Cursor/Cursor';

type Inputs = {
    email: string
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm();

    const [login] = useLoginMutation()

    const onSubmit = async (data: FieldValues) => {
        console.log(data)

        try {
            const userInfo = {
                email: data.email,
                password: data.password
            }
            const res = await login(userInfo).unwrap()
            console.log(res)
            const { token, data: user } = res
            dispatch(setUser({ user: res.data, token: res.token }))
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully",
                icon: "success"
            });
            navigate('/')
            // if (user.role === 'ADMIN') {
            //     navigate('/admin/dashboard/admin-profile');
            // } else {
            //     navigate('/user/dashboard/profile');
            // }
        } catch {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }

    }

    return (
        <div>
            <Cursor />
            <div className="flex justify-center items-center min-h-screen ">
                <div className="bg-white  shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 dark:text-gray-100"
                            placeholder="Email"
                            type="email"
                            {...register('email', { required: true })}
                        />
                        <input
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 dark:text-gray-100"
                            placeholder="Password"
                            type="password"
                            {...register('password', { required: true })}
                        />
                        <button
                            type="submit"
                            className="w-full p-3 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        Don't have an account?
                        <Link to='/signup' className="text-orange-500 hover:underline ml-2">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login