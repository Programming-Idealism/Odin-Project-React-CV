import { useState } from 'react';
import './style.css';

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

  const handleClear = () => {
    onChange({
      name: '',
      email: '',
      phone: '',
      location: '',
      about: '',
    });
  };

  return (
    <>
      <form action="">
        <div className="general-form">
          <fieldset disabled={!isEditing}>
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
              />
              <label htmlFor="about" className="input-description">
                About Me:
              </label>
              <textarea
                name="about"
                id="about"
                value={data.about}
                onChange={handleInput}
              ></textarea>
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
