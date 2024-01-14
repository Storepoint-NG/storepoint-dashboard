export default function Input({
  label,
  placeholder,
  type,
  handleChange,
  name,
  form,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="font-medium">
        {label}
      </label>
      {type == "textarea" ? (
        <textarea
          value={form[name]}
          name={name}
          onChange={handleChange}
          className="p-3 outline-none border focus:border-black"
          rows="5"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          value={form[name]}
          name={name}
          onChange={handleChange}
          className="p-3 outline-none border focus:border-black"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
