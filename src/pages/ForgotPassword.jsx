import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [isPinSent, setIsPinSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (isPinSent) {
      if (data.pinCode === '123456') {
        toast.success('Pin code is correct!');
      } else {
        toast.error('Wrong pin code. Please try again.');
      }
    } else {
      toast.info('Pin code has been sent to your email/phone.');
      setIsPinSent(true);
      reset(); 
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #780000, transparent), url('/bg_img.jpg')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isPinSent ? (
            <div className="mb-4">
              <label htmlFor="emailOrPhone" className="block mb-2 text-sm font-bold text-gray-700">
                Phone Number or Email Address
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.emailOrPhone ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('emailOrPhone', { required: true })}
              />
              {errors.emailOrPhone && <span className="text-sm text-red-500">This field is required</span>}
            </div>
          ) : (
            <div className="mb-4">
              <label htmlFor="pinCode" className="block mb-2 text-sm font-bold text-gray-700">
                Enter Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.pinCode ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('pinCode', { required: true })}
              />
              {errors.pinCode && <span className="text-sm text-red-500">Pin code is required</span>}
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isPinSent ? 'Submit Pin Code' : 'Send Pin Code'}
            </button>
          </div>

          {/* Cancel Button */}
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-red-500 hover:underline"
              // onClick={() => navigate('/')} // Navigate back to the login page
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default ForgotPassword