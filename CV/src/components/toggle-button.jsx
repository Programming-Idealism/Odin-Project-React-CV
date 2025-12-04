export default function EditToggleButton({ isEditing, onToggle }) {
  return (
    <button type="button" className="edit-button" onClick={onToggle}>
      {isEditing ? 'Save' : 'Edit'}
    </button>
  );
}
