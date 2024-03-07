export default function FieldSet({ label, children }) {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && <legend>{label}</legend>}
      <div >
      {children}
      </div>
    </fieldset>
  );
}
