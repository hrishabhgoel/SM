const Alert = ({ alertType, alertMessage }) => {
  const classname = `alert alert-${alertType}`;
  return <div className={classname}>{alertMessage}</div>;
};
export default Alert;
