export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center bg-graydark px-6 py-2 text-lg text-white font-medium rounded-md uppercase tracking-wide hover:bg-body"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
