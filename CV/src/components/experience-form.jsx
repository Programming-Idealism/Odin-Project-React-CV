import { useState } from 'react';
import './style.css';

export default function ExperienceForm({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    onChange({
      corporation: '',
      position: '',
      start: '',
      end: '',
      responsibilities: '',
    });
  };
  return (
    <>
      <form action="">
        <div className="experience-form">
          <fieldset disabled={!isEditing}>
            <div className="experience-inputs">
              <label htmlFor="corporation" className="input-description">
                Corporation:
              </label>
              <input
                type="text"
                id="corporation"
                name="corporation"
                value={data.corporation}
                onChange={handleInput}
              />
              <label htmlFor="position" className="input-description">
                Position:
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={data.position}
                onChange={handleInput}
              />
              <label htmlFor="start" className="input-description">
                Starting Date:
              </label>
              <input
                type="text"
                id="start"
                name="start"
                value={data.start}
                onChange={handleInput}
              />
              <label htmlFor="end" className="input-description">
                Ending Date:
              </label>
              <input
                type="text"
                id="end"
                name="end"
                value={data.end}
                onChange={handleInput}
              />
              <label htmlFor="responsibilities" className="input-description">
                Responsibilities:
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={data.responsibilities}
                onChange={handleInput}
              />
            </div>
          </fieldset>
          <div className="buttons-wrapper">
            <button type="button" className="clear-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={handleClear}
              >
                <title>Delete</title>
                <path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" />
              </svg>
            </button>
            <button type="button" onClick={toggleEdit}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
