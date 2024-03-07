import { useForm } from "react-hook-form";
import Field from "./Field";
import FieldSet from "./FieldSet";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function submitForm(formData) {
    const user = { email: "test@gmail.com", password: "123456789" };
    const found =
      formData.email === user.email && formData.password === user.password;
    if (!found) {
      setError("root", {
        message: `User for ${formData.email} is not found.`,
      });
    } else {
      console.log(formData);
    }
  }

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-gray-300 p-4 mt-5 rounded-md"
      >
        <FieldSet label={"Login Form"}>
          <Field label={"Email"} error={errors?.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors?.email ? "border-red-500" : "border-gray-500"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label={"Password"} error={errors?.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Enter at least 8 characters.",
                },
                maxLength: {
                  value: 10,
                  message: "Never cross 10 characters.",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors?.password ? "border-red-500" : "border-gray-500"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password address"
            />
          </Field>

          {errors?.root && <div>{errors?.root?.message}</div>}
          <Field>
            <button className="px-8 py-3 bg-green-600 rounded-lg text-white font-bold">
              Login
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}
