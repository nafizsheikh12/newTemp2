import React from 'react';
import {InitialFormData} from "../MainRegister";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error/index";

export type StepProps = {
  setFormData: Dispatch<SetStateAction<InitialFormData>>;
  formData: InitialFormData;
};

type RegistrationFirstStepFromData = {
  title: string;
  firstName: string;
  lastName: string;
  studentType:string;
  email:string;
  country:string;
  state:string;
}

const Step = (props:any) => {
    const {onNext, setFormData, formData} = props

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegistrationFirstStepFromData>({
      defaultValues: {
        title: formData.title,
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      // resolver: zodResolver(registrationFirstStepFromSchema)
    });

    const submitFirstStep = (data: RegistrationFirstStepFromData) => {
      setFormData((prev:any) => ({ ...prev, ...data }));
      onNext();
    };
  
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit(submitFirstStep)}>
                 <div>
                    <div className=" font-bold  mt-1 ">
                           <div className="">
                             <p className="font-bold"> Title:</p>
                           </div>
                           <div className="pt-1 flex mb-3 items-center justify-between">
                               <div className='flex gap-2 items-center'>
                                 <input
                                   type="radio"
                                   id="Mr"
                                   value="Mr"
                                   {...register("title", { required: true })}
                                 />
                                  <label htmlFor="Mr">Mr</label>
                               </div>
                               <div className="xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 xsm:mx-2">
                                 <input
                                   type="radio"
                                   id="Mrs"
                                   value="Mrs"
                                   {...register("title", { required: true })}
                                 />{" "}
                                 <label htmlFor="Mrs">Mrs</label>
                               </div>
                                <div className="xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 xsm:mx-2">
                                  <input
                                    type="radio"
                                    id="Ms"
                                    value="Ms"
                                    {...register("title", { required: true })}
                                  />{" "}
                                  <label htmlFor="Ms">Ms</label>
                                </div>
                                 <div>
                                   <input
                                     type="radio"
                                     id="Dr"
                                     value="Dr"
                                     {...register("title", { required: true })}
                                   />{" "}
                                   <label htmlFor="Dr">Dr</label>
                                 </div>
                           </div>
                           {errors.title && <InputErrorMessage message={"Select your title"} />}
                   </div>
               </div>
               <div className='py-4 pt-8 mb-5'> 
                     <label className='font-jakarta font-semibold'>Full Name</label>
                     <div className='flex flex-col md:flex-row gap-5 justify-between pt-2'>
                          <div className='w-full md:w-[50%]'>
                               <input  {...register("firstName", { required: true })} type='text' placeholder='Enter first name' className='w-full px-3 border-[#CED4DA] rounded-md py-4'/>
                               {errors.firstName && <InputErrorMessage message={"Select your first name"} />}
                          </div>
                          <div className='w-full md:w-[50%]'>
                               <input  {...register("lastName", { required: true })} type='text' placeholder='Enter last name' className='w-full px-3 border-[#CED4DA] rounded-md py-4'/>
                               {errors.lastName && <InputErrorMessage message={"Select your last name"} />}
                          </div>
                     </div>
               </div>
               <div className='mb-5'> 
                     <div className='mb-5 pb-3'>
                          <label className='font-jakarta font-semibold '>Email</label>
                          <input  {...register("email", { required: true })} type='email' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter email'/>
                          {errors.email && <InputErrorMessage message={"Enter your email"} />}
                     </div>
               </div>
               <div className='flex flex-col md:flex-row gap-5 justify-between mt-5'>
                   <div className='w-full md:w-[50%]'>
                         <label className='font-jakarta font-semibold'>Country</label>
                         <select  {...register("country", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                              <option value={""}>{"Select Your Country"}</option>
                                                     {[
                                   "Afghanistan",
                                   "Albania",
                                   "Algeria",
                                   "Andorra",
                                   "Angola",
                                   "Antigua and Barbuda",
                                   "Argentina",
                                   "Armenia",
                                   "Australia",
                                   "Austria",
                                   "Azerbaijan",
                                   "Bahamas",
                                   "Bahrain",
                                   "Bangladesh",
                                   "Barbados",
                                   "Belarus",
                                   "Belgium",
                                   "Belize",
                                   "Benin",
                                   "Bhutan",
                                   "Bolivia",
                                   "Bosnia and Herzegovina",
                                   "Botswana",
                                   "Brazil",
                                   "Brunei",
                                   "Bulgaria",
                                   "Burkina Faso",
                                   "Burundi",
                                   "Cambodia",
                                   "Cameroon",
                                   "Canada",
                                   "Cape Verde",
                                   "Central African Republic",
                                   "Chad",
                                   "Chile",
                                   "China",
                                   "Colombia",
                                   "Comoros",
                                   "Congo",
                                   "Costa Rica",
                                   "Croatia",
                                   "Cuba",
                                   "Cyprus",
                                   "Czechia",
                                   "Denmark",
                                   "Djibouti",
                                   "Dominica",
                                   "Dominican Republic",
                                   "Ecuador",
                                   "Egypt",
                                   "El Salvador",
                                   "Equatorial Guinea",
                                   "Eritrea",
                                   "Estonia",
                                   "Eswatini",
                                   "Ethiopia",
                                   "Fiji",
                                   "Finland",
                                   "France",
                                   "Gabon",
                                   "Gambia",
                                   "Georgia",
                                   "Germany",
                                   "Ghana",
                                   "Greece",
                                   "Grenada",
                                   "Guatemala",
                                   "Guinea",
                                   "Guinea-Bissau",
                                   "Guyana",
                                   "Haiti",
                                   "Honduras",
                                   "Hungary",
                                   "Iceland",
                                   "India",
                                   "Indonesia",
                                   "Iran",
                                   "Iraq",
                                   "Ireland",
                                   "Israel",
                                   "Italy",
                                   "Jamaica",
                                   "Japan",
                                   "Jordan",
                                   "Kazakhstan",
                                   "Kenya",
                                   "Kiribati",
                                   "Kuwait",
                                   "Kyrgyzstan",
                                   "Laos",
                                   "Latvia",
                                   "Lebanon",
                                   "Lesotho",
                                   "Liberia",
                                   "Libya",
                                   "Liechtenstein",
                                   "Lithuania",
                                   "Luxembourg",
                                   "Madagascar",
                                   "Malawi",
                                   "Malaysia",
                                   "Maldives",
                                   "Mali",
                                   "Malta",
                                   "Marshall Islands",
                                   "Mauritania",
                                   "Mauritius",
                                   "Mexico",
                                   "Micronesia",
                                   "Moldova",
                                   "Monaco",
                                   "Mongolia",
                                   "Montenegro",
                                   "Morocco",
                                   "Mozambique",
                                   "Myanmar (Burma)",
                                   "Namibia",
                                   "Nauru",
                                   "Nepal",
                                   "Netherlands",
                                   "New Zealand",
                                   "Nicaragua",
                                   "Niger",
                                   "Nigeria",
                                   "North Korea",
                                   "North Macedonia",
                                   "Norway",
                                   "Oman",
                                   "Pakistan",
                                   "Palau",
                                   "Panama",
                                   "Papua New Guinea",
                                   "Paraguay",
                                   "Peru",
                                   "Philippines",
                                   "Poland",
                                   "Portugal",
                                   "Qatar",
                                   "Romania",
                                   "Russia",
                                   "Rwanda",
                                   "Saint Kitts and Nevis",
                                   "Saint Lucia",
                                   "Saint Vincent and the Grenadines",
                                   "Samoa",
                                   "San Marino",
                                   "Sao Tome and Principe",
                                   "Saudi Arabia",
                                   "Senegal",
                                   "Serbia",
                                   "Seychelles",
                                   "Sierra Leone",
                                   "Singapore",
                                   "Slovakia",
                                   "Slovenia",
                                   "Solomon Islands",
                                   "Somalia",
                                   "South Africa",
                                   "South Korea",
                                   "South Sudan",
                                   "Spain",
                                   "Sri Lanka",
                                   "Sudan",
                                   "Suriname",
                                   "Sweden",
                                   "Switzerland",
                                   "Syria",
                                   "Taiwan",
                                   "Tajikistan",
                                   "Tanzania",
                                   "Thailand",
                                   "Timor-Leste (East Timor)",
                                   "Togo",
                                   "Tonga",
                                   "Trinidad and Tobago",
                                   "Tunisia",
                                   "Turkey",
                                   "Turkmenistan",
                                   "Tuvalu",
                                   "Uganda",
                                   "Ukraine",
                                   "United Arab Emirates (UAE)",
                                   "United Kingdom (UK)",
                                   "United States of America (USA)",
                                   "Uruguay",
                                   "Uzbekistan",
                                   "Vanuatu",
                                   "Vatican City (Holy See)",
                                   "Venezuela",
                                   "Vietnam",
                                   "Yemen",
                                   "Zambia",
                                   "Zimbabwe",
                                 ].map((item, id) => (
                                   <option value={item} key={id}>
                                     {item}
                                   </option>
                                 ))}
                         </select>
                         {errors.country && <InputErrorMessage message={"Select your country"} />}
                   </div>
                   <div className='w-full md:w-[50%]'>
                         <label className='font-jakarta font-semibold'>State</label>
                         <select  {...register("state", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                              <option value={""}>{"Select Your State"}</option>
                                                     {[
                                               "Alabama",
                                               "Alaska",
                                               "Arizona",
                                               "Arkansas",
                                               "California",
                                               "Colorado",
                                               "Connecticut",
                                               "Delaware",
                                               "Florida",
                                               "Georgia",
                                               "Hawaii",
                                               "Idaho",
                                               "Illinois",
                                               "Indiana",
                                               "Iowa",
                                               "Kansas",
                                               "Kentucky",
                                               "Louisiana",
                                               "Maine",
                                               "Maryland",
                                               "Massachusetts",
                                               "Michigan",
                                               "Minnesota",
                                               "Mississippi",
                                               "Missouri",
                                               "Montana",
                                               "Nebraska",
                                               "Nevada",
                                               "New Hampshire",
                                               "New Jersey",
                                               "New Mexico",
                                               "New York",
                                               "North Carolina",
                                               "North Dakota",
                                               "Ohio",
                                               "Oklahoma",
                                               "Oregon",
                                               "Pennsylvania",
                                               "Rhode Island",
                                               "South Carolina",
                                               "South Dakota",
                                               "Tennessee",
                                               "Texas",
                                               "Utah",
                                               "Vermont",
                                               "Virginia",
                                               "Washington",
                                               "West Virginia",
                                               "Wisconsin",
                                               "Wyoming",
                                 ].map((item, id) => (
                                   <option value={item} key={id}>
                                     {item}
                                   </option>
                                 ))}
                         </select>
                         {errors.state && <InputErrorMessage message={"Select your state"} />}
                   </div>
                </div>
                <div className='my-5'>
                    <label className='font-jakarta font-semibold'>User Type</label>
                    <select  {...register("studentType", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                         <option value={"instructor-led"}>Instructor-led</option>
                         <option value={"self-pace"}>Self-Pace</option>
                    </select>
                    {errors.studentType && <InputErrorMessage message={"Select type"} />}
                </div>

                <div className='w-full'>
                          <button type='submit' className='bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>Next Step</button>
                </div>   
          </form> 
      </div>
   </div> 
  )
}

export default Step