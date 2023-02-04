export const Select = ({ values, name, register }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select name={name} id={name} {...register(name)}>
        <option value="">--Please choose an option--</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  )
}