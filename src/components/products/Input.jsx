export default function Input({
  label,
  placeholder,
  type,
  handleChange,
  name,
  form,
  options,
  value,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="font-medium">
        {label}
      </label>
      {type == "textarea" ? (
        <textarea
          defaultValue={value || form[name]}
          name={name}
          onChange={handleChange}
          className="p-3 outline-none border focus:border-black"
          rows="5"
          placeholder={placeholder}
        ></textarea>
      ) : type == "select" ? (
        <select
          defaultValue={value || form[name]}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-3 outline-none border focus:border-black"
        >
          <option disabled selected>
            Select product categrory
          </option>
          {options?.map((opt) => (
            <option key={opt?.value} value={opt?.value}>
              {opt?.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          defaultValue={value || form[name]}
          name={name}
          onChange={handleChange}
          className="p-3 outline-none border focus:border-black"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
