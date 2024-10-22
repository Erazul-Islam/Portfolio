import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../redux/feature/auth/auth.signup';
import Swal from 'sweetalert2';

const Signup = () => {

    const navigate = useNavigate()

    const [signup] = useSignupMutation()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {

        try {
            const userInfo = {
                email: data.email,
                password: data.password,
                name: data.name,
                role: 'user',
            }
            const res = await signup(userInfo).unwrap()
            console.log(res.data)


            Swal.fire({
                title: "Good job!",
                text: "Sign up Successfully",
                icon: "success"
            });

            navigate('/login')
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
           <div className="min-h-screen flex items-center justify-center bg-gradient-to-r ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-700">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
            type="email"
            {...register('email', { required: true })}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Name"
            type="text"
            {...register('name', { required: true })}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="profilePhoto"
            type="text"
            {...register('profilePhoto', { required: true })}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
            type="password"
            {...register('password', { required: true })}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-white rounded-md transition-all duration-300 ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
          <div className="text-center">
            <p className="text-gray-600">Already have an account?</p>
            <Link className="text-indigo-600 hover:underline" to="/login">Login Now</Link>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Signup;