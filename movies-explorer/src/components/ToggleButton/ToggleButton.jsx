import "./ToggleButton.css";

const ToggleButton = ({ label, handleCheckbox, isShort }) => {
  return (
    <div className="search__toggle-button-container link">
      <input
        type="checkbox"
        id="toggle-button"
        className="search__toggle-button"
        checked={isShort}
        onChange={handleCheckbox}
      />
      <label htmlFor="toggle-button" className="search__text">
        {label}
      </label>
    </div>
  );
};

export default ToggleButton;
