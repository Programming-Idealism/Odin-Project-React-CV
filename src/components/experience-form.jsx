import { useState } from 'react';
import './style.css';
import DeleteButton from './delete-button';
import { INITIAL_EXPERIENCE } from '../modules/constants';
import EditToggleButton from './toggle-button';

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

  return (
    <>
      <form action="">
        <div className="experience-form">
          <fieldset>
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
                disabled={!isEditing}
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
                disabled={!isEditing}
              />
              <label htmlFor="start" className="input-description">
                Starting Year:
              </label>
              <input
                type="text"
                id="start"
                name="start"
                value={data.start}
                onChange={handleInput}
                disabled={!isEditing}
                maxLength={4}
              />
              <label htmlFor="end" className="input-description">
                Ending Year:
              </label>
              <input
                type="text"
                id="end"
                name="end"
                value={data.end}
                onChange={handleInput}
                disabled={!isEditing}
                maxLength={4}
              />
              <label htmlFor="responsibilities" className="input-description">
                Responsibilities:
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={data.responsibilities}
                onChange={handleInput}
                disabled={!isEditing}
              />
            </div>
            <div className="buttons-wrapper">
              <DeleteButton
                onChange={onChange}
                resetState={INITIAL_EXPERIENCE}
              />
              <EditToggleButton isEditing={isEditing} onToggle={toggleEdit} />
            </div>
          </fieldset>
        </div>
      </form>
    </>
  );
}
