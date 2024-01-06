import { useState } from "react";
import { states } from "./states";

export default function DropdownState() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>(
    states.reduce(
      (obj, state) => ({
        ...obj,
        [state.abbreviation]: false,
      }),
      {}
    )
  );

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => setIsOpened((prevState) => !prevState)}>
          Select your states
        </button>
        {isOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        )}
      </div>
      {isOpened && (
        <div className="dropdown-panel">
          {states.map((state) => {
            return (
              <div className="input-box">
                <input
                  onChange={(e) =>
                    setSelectedStates({
                      ...selectedStates,
                      [state.abbreviation]: e.target.checked,
                    })
                  }
                  checked={selectedStates[state.abbreviation]}
                  id={state.abbreviation}
                  key={`input-${state.abbreviation}`}
                  type="checkbox"
                />
                <label htmlFor={`input-${state.abbreviation}`}>
                  {state.name}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
