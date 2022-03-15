const FormRow = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
  labelChild,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelChild}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder ?? ''}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
