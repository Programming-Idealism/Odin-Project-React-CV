import './style.css';
import { useState } from 'react';
export default function EducationalForm({ data, onChange }) {
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
      school: '',
      university: '',
      specialization: '',
      degree: '',
      completion: '',
    });
  };
  return (
    <>
      <form action="">
        <div className="education-form">
          <fieldset disabled={!isEditing}>
            <div className="education-inputs">
              <label htmlFor="school" className="input-description">
                School:
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={data.school}
                onChange={handleInput}
              />
              <label htmlFor="university" className="input-description">
                University/College:
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={data.university}
                onChange={handleInput}
              />
              <label htmlFor="specialization" className="input-description">
                Specialization:
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={data.specialization}
                onChange={handleInput}
              />
              <label htmlFor="degree" className="input-description">
                Degree:
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={data.degree}
                onChange={handleInput}
              />
              <label htmlFor="completion" className="input-description">
                Education Completion:
              </label>
              <input
                type="text"
                id="completion"
                name="completion"
                value={data.completion}
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
