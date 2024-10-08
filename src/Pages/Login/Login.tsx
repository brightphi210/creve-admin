import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Input } from "@chakra-ui/react"
import { generalImage } from "../../utils/images"
import { loginIcon } from "../../utils/Icon"
import { useLogin } from "../../hooks/mutatons/useLogin"
import { useForm } from 'react-hook-form';

const Login = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  // Define your form data type
  interface FormData {
    email: string;
    password: string;
  }
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData >();

  const { mutate: loginMutate, isPending } = useLogin();
  const onSubmit =  (data : any) => {
    loginMutate(data, {
      onError : (error:any)=>{
        console.log('This is the error', error);
      },
      
      onSuccess : ()=>{
        navigate("/overview");
      }
    })
  }


  return (
    <div className="flex justify-center items-center m-auto w-[100%] h-screen">
      <div className="w-[35%]">

        <img src={generalImage.logo1} className="w-14 h-14 flex justify-center m-auto" alt="" />
        <h2 className="text-4xl font-bold py-3 text-center ">Hello, Admin</h2>
        <p className="text-center">Good to see you again</p>
        <form action="" className="w-full mt-6 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder='Enter Email Address: ' 
            py={'1.5rem'} 
            size='sm' 
            type="email"
            {...register("email", {required : 'Email is required'})}
            variant='filled'
            pl={'1rem'}
            rounded={'0.3rem'}
          />

            {errors.email && (
              <span>{errors.email.message}</span>
            )}

          <div className="relative">
            <Input placeholder='Enter Email Address: ' 
              py={'1.5rem'} 
              size='sm' 
              type={show ? "text" : "password"}
              {...register("password", {required : 'Password is required'})}
              variant='filled'
              pl={'1rem'}
              rounded={'0.3rem'}
            />
            <p className="absolute cursor-pointer text-lg top-0 right-0 h-full bg-transparent " 
              onClick={handleClick}><p className="pt-5 px-5">{show === false ? loginIcon.hidden : loginIcon.visible}</p>
            </p>
          </div>

          <button type="submit" disabled={isPending} className={`w-full py-3 ${isPending && 'cursor-not-allowed'} text-white bg-black rounded-md hover:bg-neutral-700 flex items-center justify-center gap-3`}>
            {isPending ? <><span className="loading loading-spinner loading-sm"></span> Login . .</> : 'Login'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
