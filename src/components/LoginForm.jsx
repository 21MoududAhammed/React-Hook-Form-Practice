import Field from "./Field";
import FieldSet from "./FieldSet";

export default function LoginForm() {
  return (
    <FieldSet>
      <Field label={"Email"}>
        <input
          className="p-2 border box-border w-[300px] rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
        />
      </Field>
      <Field label={"Password"}>
        <input
          className="p-2 border box-border w-[300px] rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password address"
        />
      </Field>
      <Field>
        <button className="px-8 py-3 bg-green-600 rounded-lg text-white font-bold">
          Login
        </button>
      </Field>
    </FieldSet>
  );
}