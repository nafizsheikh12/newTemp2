/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { InputErrorMessage } from "../../utils/error";
import { useLoginMutation } from "../../../feature/api/authApi";
import ButtonLoader from "../../utils/loaders/ButtonLoader";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../app/hooks";
import { signin } from "../../../feature/auth/authSlice";
import { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import msgIcon from "../../../assets/ui/msg.png"
import {BsEnvelopeFill} from "react-icons/bs"
import logo from "../../../assets/ui/logo.png";
import {RiLockFill} from "react-icons/ri"
import Image from "next/image";
import facebook from "../../../assets/ui/facebook.png"
import google from "../../../assets/ui/Google.png";


const signinFormSchema = z
  .object({
    email: z.string().email("Enter a Valid Email Address!"),
    password: z.string(),
  })
  .superRefine(({ password }, ctx) => {
    if (password.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Enter your password!",
        path: ["password"],
      });
    }
  });

type SigninFormData = z.infer<typeof signinFormSchema>;

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
  });
  const [login, { error, data, isLoading, isSuccess, isError }] =
    useLoginMutation();
  const dispatch = useAppDispatch();
  // console.log("user data", data);

  const handleSignin = (data: SigninFormData) => {
    login(data);
  };

  // console.log("error", error);
  // console.log("data", data.user);
  // console.log("loading", isLoading, "isError", isError);
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // toast.error(error?.data?.message);
    } else if (isSuccess) {
      const {
        id,
        _id,
        title,
        firstName,
        lastName,
        gender,
        email,
        phone,
        state,
        country,
        currentJob,
        studentType,
        status,
        highestStudy,
        avatar,
        roles = [],
        expertise = "",
        houseOrFlat = "",
        landMark = "",
        streetAddress = "",
        townOrCity = "",
        stateOrCountry = "",
        postalOrZip = "",
        userName = "",
      } = data.data.user;

      dispatch(
        signin({
          id,
          _id,
          title,
          firstName,
          lastName,
          gender,
          email,
          phone,
          state,
          country,
          currentJob,
          studentType,
          status,
          highestStudy,
          avatar,
          roles,
          expertise,
          houseOrFlat,
          landMark,
          streetAddress,
          townOrCity,
          stateOrCountry,
          postalOrZip,
          userName,
        })
      );

      toast.success("Sign in Successfully!");
      setTimeout(() => {
        Router.push("/dashboard");
      }, 1500);
    }
  }, [isError, isSuccess]);

  return (
    <form
      className="rounded-2xl shadow-2xl   w-full  max-w-[28rem] bg-white p-5 relative font-nunito"
      onSubmit={handleSubmit(handleSignin)}
    >
         <div className="px-4">
              <div className="">
                  <div className="text-cneter flex flex-col justify-center items-center mb-8">
                        <div className="h-[45px] cursor-pointer">
                           <Link href={"/"} className="cursor-pointer
                           ">
                              <Image src={logo} alt="logo" className="" width={"70px"} height={"48px"}/>
                            </Link>   
                        </div>
                        <div>
                            <h2 className="font-jakarta font-bold text-lg">Login</h2>
                        </div>
                  </div>
                  <div> 
                       <div className="w-full mb-4">
                            <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block">
                                  <input 
                                    type="email"
                                    placeholder="name@flowbite.com"
                                    className="w-full bg-white border-[#6132fd] rounded-md border-1"
                                    {...register("email",{required:true})}
                                  />
                                   <BsEnvelopeFill className=" pointer-events-none w-[18px] h-4 text-[#6132fd] absolute top-1/2 transform -translate-y-1/2 right-3" />
                            </label>        
                            {errors.email && (
                              <InputErrorMessage message={errors.email?.message || ""} />
                            )}
                       </div>
                        <div className="w-full">
                           <label htmlFor="passowrd" className="relative text-gray-400 focus-within:text-gray-600 block">
                                  <input 
                                    type="password"
                                    placeholder="name@flowbite.com"
                                    className="w-full bg-white border-[#6132fd] rounded-md border-1"
                                    {...register("password",{required:true})}
                                  />
                                   <RiLockFill className=" pointer-events-none w-5 h-5 text-[#6132fd] absolute top-1/2 transform -translate-y-1/2 right-3" />
                            </label> 
                             {errors.password && (
                               <InputErrorMessage message={errors.password?.message || ""} />
                             )}
                        </div>
                        <div className="flex items-center py-4 w-full justify-between mb-3">
                              <div className="gap-2">
                                <Checkbox id="remember" className="border-[#6132fd] bg-white  focus:outline-none"/>
                                <Label htmlFor="remember" className="ml-2">
                                  Remember me?
                                </Label>
                              </div>
                               <div>
                                 <Link href="/forget-password">
                                   <a className="text-[#485470] underline">Forgot password?</a>
                                 </Link>
                               </div>
                         </div>
                         <div className="flex justify-center">
                           <Button className="min-w-[7rem] rounded shadow-2xl hover:placeholder-purple-900 font-jakarta font-medium h-[37px] bg-[#6132fd] text-white" color={"#6132fd"} type="submit" >
                             {isLoading ? <ButtonLoader /> : "Login"}
                           </Button>
                         </div>
                  </div>
                  <div className="text-center pt-9">
                        <span className="text-sm  font-jakarta text-[#828282] pb-2">Or continue with</span>
                        <div className="flex gap-3 justify-center items-center pt-1">
                              <div >
                                   <Image src={google}  className="shadow-lg"/>
                              </div>
                              <div>
                                   <Image src={facebook} width={"24px"} height={"24px"} className="shadow-xl"/>
                              </div>
                        </div>
                        <div>
                            <p className="text-[#000000] font-jakarta font-normal flex gap-2 justify-center">Don’t have an account?
                            <span className="text-[#0056D2] underline">
                               <Link href={"/registration"}>
                                    Signup
                               </Link>
                            </span></p>
                        </div>
                  </div>
              </div>
         </div>
    </form>
  );
};

export default SigninForm;
