import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // State management
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState({
    numbers: false,
    specialChars: false,
  });

  // Reference to the password input field
  const passwordRef = useRef(null);

  // Function to generate a new password
  const generatePassword = useCallback(() => {
    // Define character sets
    const chars = {
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      specialChars: "~!@#$%^&*",
    };

    // Build the character set based on selected options
    let charSet = chars.letters;
    if (options.numbers) charSet += chars.numbers;
    if (options.specialChars) charSet += chars.specialChars;

    // Generate the password using Array.from
    const passwordArray = Array.from(
      { length },
      () => charSet[Math.floor(Math.random() * charSet.length)]
    );

    // Set the new password
    setPassword(passwordArray.join(""));
  }, [length, options]);

  // Function to copy the password to clipboard
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  // Generate a new password whenever length or options change
  useEffect(generatePassword, [length, options, generatePassword]);

  // Function to handle changes in password options
  const handleOptionChange = (option) => {
    setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-white text-3xl font-bold mb-6">
          Password Generator
        </h1>
        {/* Password display and copy button */}
        <div className="mb-4 flex">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="w-full px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          {/* Password length slider */}
          <div>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
            <label className="text-white mt-2 block">
              Password Length: {length}
            </label>
          </div>
          {/* Password option checkboxes */}
          {["numbers", "specialChars"].map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={option}
                checked={options[option]}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              <label htmlFor={option} className="text-white capitalize">
                {option === "specialChars" ? "Special Characters" : option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-white text-3xl font-bold mb-6">
          Password Generator
        </h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="w-full px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="range"
              min={6}
              max={16}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full"
            />
            <label className="text-white mt-2 block">
              Password Length: {length}
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="charInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
*/
