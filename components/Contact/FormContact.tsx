"use client"
import { SendEmail } from "@/lib/email";
import useContactForm from "@/shared/hook/useContactForm";
import { Button } from "@/shared/utils/form/Button";

export function FormContact() {
  const {values, handleChange} = useContactForm();
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const data = {
        email: values.email,
        message: values.message
      }
      const req = await SendEmail(data);
      console.log(req)
    } catch (e) {
      console.log(e);
    }
  } 

  return (
    <form
      className="mt-10"
      onSubmit={handleSubmit}
    >
      <input

        type="text"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email or number phone..."
        className="w-full px-3 py-2.5 mb-4 text-base font-medium border rounded-md outline-none border-body-color border-opacity-10 text-body-color focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />

      <input
        type="type"
        name="message"
        id="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Enter your question..."
        className="w-full px-3 py-2.5 mb-4 text-base font-medium border rounded-md outline-none border-body-color border-opacity-10 text-body-color focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
      />
      <Button text="Submit now" className={"rounded-2xl bg-primary !px-8 !py-3"}/>
    </form>
  );
}
