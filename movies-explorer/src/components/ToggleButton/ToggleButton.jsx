import "./ToggleButton.css";

const ToggleButton = ({ label }) => {
  return (
      <div className="toggle-button__container">
        <input type="checkbox" id="toggle-button" className="toggle-button" defaultChecked/>
        <label for="toggle-button" className="search__text">
          {label}
        </label>
      </div>
  );
};

export default ToggleButton;
