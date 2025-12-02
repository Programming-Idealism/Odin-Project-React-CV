import { useState } from 'react';

export default function EditListField({
  label,
  items,
  onChangeItems,
  disabled,
  name,
  id,
}) {
  const [tempValue, setTempValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setTempValue('');
  };

  const handleAdd = () => {
    if (!tempValue.trim()) return;
    const nextItems = [...items, tempValue];
    onChangeItems(nextItems);
    setTempValue('');
  };

  return (
    <div className="append-wrapper">
      {!isOpen && !disabled && (
        <button type="button" onClick={handleToggle} className="add-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Add</title>
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
          </svg>
        </button>
      )}
      <label htmlFor={id} className="input-description">
        {label}
      </label>
      {isOpen && !disabled && (
        <>
          <div className="elements-wrapper">
            <input
              type="text"
              name={name}
              id={id}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>
              Add
            </button>
            <button
              type="button"
              className="return-button"
              onClick={handleToggle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Return</title>
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
