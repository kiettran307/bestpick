import { Button } from "@/shared/utils/form/Button";

export function FormContact() {
  return (
    <form
      className="mt-10"
      
    >
      <input
        type="text"
        name="email"
        placeholder="Enter your email or number phone..."
        className="w-full px-3 py-2.5 mb-4 text-base font-medium border rounded-md outline-none border-body-color border-opacity-10 text-body-color focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />

      <input
        type="type"
        name="content"
        placeholder="Enter your question..."
        className="w-full px-3 py-2.5 mb-4 text-base font-medium border rounded-md outline-none border-body-color border-opacity-10 text-body-color focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
      />
      <Button text="Submit now" className={"rounded-2xl bg-primary !px-8 !py-3"} />
    </form>
  );
}
