import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formSubmit(formData) {
    console.log(formData);
  }
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="bg-gray-300 px-3 py-4 rounded-xl mt-5 w-[400px]"
      >
        <FieldSet label={"Register Form"}>
          <Field label={"Name"} error={errors.name}>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              className="w-full rounded-md px-2"
              name="name"
              id="name"
            />
          </Field>
          <Field label={"Email"} error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              className="w-full rounded-md px-2"
              name="email"
              id="email"
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password should be between 8 and 10 characters.",
                },
                maxLength: {
                  value: 10,
                  message: "Password should be between 8 and 10 characters.",
                },
              })}
              type="password"
              className="w-full rounded-md px-2"
              name="password"
              id="password"
            />
          </Field>
          <Field label={"Age"} error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required.",
                max: {
                  value: 100,
                  message: "Age should be between 0 and 100.",
                },
              })}
              type="age"
              className="w-full rounded-md px-2"
              name="age"
              id="age"
            />
          </Field>
          <Field label={"Picture"} error={errors.age}>
            <input
              {...register("picture", { required: "Age is required." })}
              type="file"
              className="w-full rounded-md px-2"
              name="picture"
              id="picture"
            />
          </Field>
        </FieldSet>
        <FieldSet>
          <Field>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl "
            >
              Register
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}
