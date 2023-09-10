import "./ToggleButton.css";

const ToggleButton = ({ label }) => {
  return (
    <div className="search__toggle-button-container link">
      <input
        type="checkbox"
        id="toggle-button"
        className="search__toggle-button"
        defaultChecked
      />
      <label for="toggle-button" className="search__text">
        {label}
      </label>
    </div>
  );
};

export default ToggleButton;
