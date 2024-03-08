import { useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function NewRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "links",
    control,
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

        <FieldSet>
          {fields.map((field, index) => {
            return (
              <div className="flex" key={field.id}>
                <Field label={"Name"}>
                  <input
                    {...register(`links.${index}.name`)}
                    type="text"
                    name={`links.${index}.name`}
                    id={`links.${index}.name`}
                    placeholder="Enter name"
                  />
                </Field>
                <Field label={"Url"}>
                  <input
                    {...register(`links.${index}.url`)}
                    type="text"
                    name={`links.${index}.url`}
                    id={`links.${index}.url`}
                    placeholder="Enter link"
                  />
                </Field>
                <Field>
                  <button
                    className="text-red-600"
                    onClick={() => {
                      remove(`links.${index}`);
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
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl "
              onClick={(e) => {
                e.preventDefault();
                append({ name: "", url: "" });
              }}
            >
              Add Account
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
