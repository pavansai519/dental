'use client'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
}
const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    number: yup.string().required().label("Number"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"), 

  })
  .required();


const RegisterArea = () => {
  
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => { 
    const notify = () => toast("Request Quote Successful");
    notify()
    reset();
    console.log(data);
  };


  return (
    <>
      <section className="login-area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Request Quote Here</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="name">Name <span>*</span></label>
                  <input id="name" type="text" {...register("name")} placeholder="Enter Your Name ..." />
                  <p className="form_error">{errors.name?.message}</p>

                  <label htmlFor="number">Number <span>*</span></label>
                  <input id="number" type="text" {...register("number")} placeholder="Enter Mobile Number..." />
                  <p className="form_error">{errors.number?.message}</p>

                  <label htmlFor="email-id">Email Address <span>*</span></label>
                  <input id="email-id" type="text" {...register("email")} placeholder="Enter Email address..." />
                  <p className="form_error">{errors.email?.message}</p>

                  <label htmlFor="message">Message <span>*</span></label>
                  <input id="message" type="text" {...register("message")} placeholder="Enter Message..." />
                  <p className="form_error">{errors.number?.message}</p>

                  <div className="mt-10"></div>
                  <button className="primary_btn theme-btn-2 w-100">Request Quote</button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;