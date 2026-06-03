"use client";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
  Separator,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });
    console.log({ data, error });
    if(data){
      redirect('/')
    }
    if(error){
      alert("Error")
    }
  };


  
    const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-3">
        <h1 className="text-2xl font-bold ">Create Account</h1>
        <p>Start Your Adventure With Wanderlust</p>
      </div>
      <Card className="border rounded-none">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Enter Your Image URL" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"rounded-none w-full bg-cyan-500"} type="submit">
              Create Account
            </Button>
          </div>
        </Form>
         <div className="flex max-w-7xl mx-auto justify-center items-center gap-3">
                  <Separator />
                  <div className="whitespace-nowrap  ">Or Signup with</div>
                  <Separator />
                </div>
                <div>
                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className={"rounded-none w-full"}
                  >
                    <FaGoogle />
                    SignIn with GOOGLE
                  </Button>
                </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
