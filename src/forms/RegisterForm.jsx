import { useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });

  //   console.log(fields);
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
              type="number"
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

        <FieldSet label={"Add Social Accounts"}>
          {fields.map((field, index) => {
            return (
              <div className="flex" key={field.id}>
                <Field label={"Name"} error={errors.password}>
                  <input
                    {...register(`socials.${index}.name`, {
                      required: "Password is required.",
                    })}
                    type="text"
                    className="w-full rounded-md px-2"
                    name={`socials.${index}.name`}
                    id={`socials.${index}.name`}
                  />
                </Field>
                <Field label={"url"} error={errors.password}>
                  <input
                    {...register(`socials.${index}.name`, {
                      required: "Url is required.",
                    })}
                    type="text"
                    className="w-full rounded-md px-2"
                    name={`socials.${index}.url`}
                    id={`socials.${index}.url`}
                  />
                </Field>
                <Field label={"Remove"}>
                  <button
                    className="bg-red-600 rounded-xl px-2 text-white"
                    onClick={() => {
                      remove(`socials.${index}`);
                    }}
                  >
                    Remove
                  </button>
                </Field>
              </div>
            );
          })}

          <Field>
            <button
              className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl "
              onClick={(e) => {
                e.preventDefault();
                append({ name: "", url: "" });
              }}
            >
              Add Accounts
            </button>
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
