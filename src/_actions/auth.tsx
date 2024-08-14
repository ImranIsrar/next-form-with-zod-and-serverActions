"use server";
import { SignupFormSchema } from "@/_lib/definations";

export async function signup(prevState: any, formData: FormData) {
  // Validate form fields
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const validatedFields = SignupFormSchema.safeParse(data);
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      ...prevState,
      error: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  return {
    response: true,
    data: validatedFields?.data,
  };
}