import { useState } from 'react';
import './style.css';
import { INITIAL_OTHERS } from '../modules/constants';
import DeleteButton from './delete-button';
import EditToggleButton from './toggle-button';
import EditListField from './edit-list-field';

export default function OthersForm({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const updateSkills = (nextItems) =>
    onChange((prev) => ({ ...prev, skills: nextItems }));

  const updateLanguages = (nextItems) =>
    onChange((prev) => ({ ...prev, languages: nextItems }));

  return (
    <>
      <fieldset>
        <div className="others-input">
          <EditListField
            label="Skills:"
            items={data.skills}
            onChangeItems={updateSkills}
            disabled={!isEditing}
            name="skill"
            id="skill"
          />

          <EditListField
            label="Languages:"
            items={data.languages}
            onChangeItems={updateLanguages}
            disabled={!isEditing}
            name="languages"
            id="languages"
          />
        </div>
        <div className="buttons-wrapper">
          <DeleteButton onChange={onChange} resetState={INITIAL_OTHERS} />
          <EditToggleButton isEditing={isEditing} onToggle={toggleEdit} />
        </div>
      </fieldset>
    </>
  );
}
