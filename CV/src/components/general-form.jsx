import { useState } from 'react';
import './style.css';
import DeleteButton from './delete-button';
import { INITIAL_GENERAL } from '../modules/constants';
import EditToggleButton from './toggle-button';

export default function GeneralForm({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 12) return;
    }
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form action="">
        <fieldset>
          <div className="general-inputs">
            <label htmlFor="name" className="input-description">
              Full Name:
            </label>
            <input
              required
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleInput}
              disabled={!isEditing}
            />
            <label htmlFor="email" className="input-description">
              Email:
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleInput}
              disabled={!isEditing}
            />
            <label htmlFor="phone" className="input-description">
              Contact:
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleInput}
              disabled={!isEditing}
            />
            <label htmlFor="location" className="input-description">
              Location:
            </label>
            <input
              required
              type="text"
              id="location"
              name="location"
              value={data.location}
              onChange={handleInput}
              disabled={!isEditing}
            />
            <label htmlFor="about" className="input-description">
              About Me:
            </label>
            <textarea
              name="about"
              id="about"
              value={data.about}
              onChange={handleInput}
              disabled={!isEditing}
            ></textarea>
          </div>
          <div className="buttons-wrapper">
            <DeleteButton onChange={onChange} resetState={INITIAL_GENERAL} />
            <EditToggleButton isEditing={isEditing} onToggle={toggleEdit} />
          </div>
        </fieldset>
      </form>
    </>
  );
}
