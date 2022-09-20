import "./custom-button.styles.scss";

const CustomButton = ({
  className: propClass,
  onClick: propClickHandler,
  title: propTitle,
  children,
}) => {
  return (
    <div
      className={`dev-button ${propClass ? propClass : ""}`}
      onClick={propClickHandler}
      title={propTitle}
      role="button"
    >
      {children}
    </div>
  );
};

export default CustomButton;
