export default function FieldSet({ label, children }) {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && <legend className="text-3xl font-semibold text-center pb-3">{label}</legend>}
      <div >
      {children}
      </div>
    </fieldset>
  );
}
