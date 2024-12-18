export function Submit(props) {
  return (
    <div>
      <button onClick={props.hideInputContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="svg-right"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
        </svg>
        Submit
      </button>
    </div>
  );
}
