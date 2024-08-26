import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;

    // Here, you would handle the login logic (e.g., call an API)
    // For demonstration purposes, let's assume the correct credentials are 'admin' and 'password'

    if (username === 'admin' && password === 'password') {
      toast.success('Login successful!');
    } else {
      toast.error('Wrong credentials. Please try again.');
    }
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg_img.jpg'), linear-gradient(to bottom right, #780000, transparent)`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl text-center text-gray-700 font-normal"><span className='font-extrabold'>PUP</span> FAMO</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('username', { required: true })}
            />
            {errors.username && <span className="text-sm text-red-500">Username is required</span>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline"
              onClick={() => toast.info('Forgot Password functionality not implemented')}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login