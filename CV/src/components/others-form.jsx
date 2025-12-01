import './style.css';
import { useState } from 'react';
export default function OthersForm({ onChange }) {
  const [tempSkill, setTempSkill] = useState('');
  const [tempLanguage, setTempLanguage] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [isSkillInputVisible, setIsSkillInputVisibile] = useState(false);
  const [isLanguageInputVisible, setIsLanguageInputVisibile] = useState(false);
  const [isPlusButtonVisible, setIsPlusButtonVisible] = useState({
    skills: true,
    languages: true,
  });
  const [isAddButtonVisible, setIsAddButtonVisible] = useState({
    skills: false,
    languages: false,
  });
  const [isReturnButtonVisible, setIsReturnbuttonVisible] = useState({
    skills: false,
    languages: false,
  });

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleClear = () => {
    onChange({
      skills: [],
      languages: [],
    });
    setTempSkill('');
    setTempLanguage('');
  };

  const handleReturn = (section) => {
    setIsPlusButtonVisible((prev) => ({
      ...prev,
      [section]: true,
    }));
    setIsAddButtonVisible((prev) => ({
      ...prev,
      [section]: false,
    }));
    setIsSkillInputVisibile(false);
    setIsLanguageInputVisibile(false);

    section === 'skllls'
      ? setIsSkillInputVisibile(false)
      : section === 'languages'
      ? setIsSkillInputVisibile(false)
      : null;

    setIsReturnbuttonVisible((prev) => ({
      ...prev,
      [section]: false,
    }));
  };

  const makeSkillPlusAppear = () => {
    setIsReturnbuttonVisible((prev) => ({
      ...prev,
      skills: true,
    }));
    setIsAddButtonVisible((prev) => ({
      ...prev,
      skills: true,
    }));
    setIsSkillInputVisibile(true);
    setIsPlusButtonVisible((prev) => ({
      ...prev,
      skills: false,
    }));
  };

  const makeLanguagePlusAppear = () => {
    setIsReturnbuttonVisible((prev) => ({
      ...prev,
      languages: true,
    }));
    setIsAddButtonVisible((prev) => ({
      ...prev,
      languages: true,
    }));
    setIsLanguageInputVisibile(true);
    setIsPlusButtonVisible((prev) => ({
      ...prev,
      languages: false,
    }));
  };

  const addSkill = () => {
    if (!tempSkill.trim()) return;
    onChange((prev) => ({
      ...prev,
      skills: [...prev.skills, tempSkill],
    }));
    setTempSkill('');
  };

  const addLanguage = () => {
    if (!tempLanguage.trim()) return;
    onChange((prev) => ({
      ...prev,
      languages: [...prev.languages, tempLanguage],
    }));
    setTempLanguage('');
  };

  return (
    <>
      <fieldset disabled={!isEditing}>
        <div className="others-input">
          <div className="append-wrapper">
            <label htmlFor="skill" className="input-description">
              Skills:
            </label>
            {isPlusButtonVisible.skills && (
              <button
                type="button"
                onClick={makeSkillPlusAppear}
                className="add-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Add</title>
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
              </button>
            )}

            {isAddButtonVisible.skills && (
              <button type="button" onClick={addSkill}>
                Add
              </button>
            )}
            {isReturnButtonVisible.skills && (
              <button
                type="button"
                className="return-button"
                onClick={() => handleReturn('skills')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Return</title>
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
              </button>
            )}
          </div>
          {isSkillInputVisible && (
            <input
              type="text"
              name="skill"
              id="skill"
              value={tempSkill}
              onChange={(e) => setTempSkill(e.target.value)}
            />
          )}
          <div className="append-wrapper">
            <label htmlFor="languages" className="input-description">
              Known Languages:
            </label>
            {isPlusButtonVisible.languages && (
              <button
                type="button"
                onClick={makeLanguagePlusAppear}
                className="add-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Add</title>
                  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
              </button>
            )}

            {isAddButtonVisible.languages && (
              <button type="button" onClick={addLanguage}>
                Add
              </button>
            )}
            {isReturnButtonVisible.languages && (
              <button
                type="button"
                className="return-button"
                onClick={() => handleReturn('languages')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Return</title>
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
              </button>
            )}
          </div>
          {isLanguageInputVisible && (
            <input
              type="text"
              name="languages"
              id="languages"
              value={tempLanguage}
              onChange={(e) => setTempLanguage(e.target.value)}
            />
          )}
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
    </>
  );
}
