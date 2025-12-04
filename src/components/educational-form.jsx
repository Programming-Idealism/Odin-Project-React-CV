import { useState } from 'react';
import './style.css';
import { INITIAL_EDUCATION } from '../modules/constants';
import DeleteButton from './delete-button';
import EditToggleButton from './toggle-button';

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

  return (
    <>
      <form action="">
        <div className="education-form">
          <fieldset>
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
              />
            </div>
            <div className="buttons-wrapper">
              <DeleteButton
                onChange={onChange}
                resetState={INITIAL_EDUCATION}
              />
              <EditToggleButton isEditing={isEditing} onToggle={toggleEdit} />
            </div>
          </fieldset>
        </div>
      </form>
    </>
  );
}
