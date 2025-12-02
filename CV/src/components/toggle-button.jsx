export default function EditToggleButton({ isEditing, onToggle }) {
  return (
    <button type="button" onClick={onToggle}>
      {isEditing ? 'Save' : 'Edit'}
    </button>
  );
}
