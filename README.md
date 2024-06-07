## Live Demo

https://eclectic-fairy-2295f6.netlify.app/

# Take home assignment

## Goal

Create a react app and build a few screens as specified in a figma file which will be shared separately via email.

## Users

This app will be used by patients when they submit their information to get the dermatologist's assessment.

## Getting Started

- Run `npm install` to install all the dependencies.
- Run `npm start` to start the app.
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# QuestionField Component Documentation

## Overview

The `QuestionField` component is a React component designed to render a question field with Input field or date picker functionality. It provides features such as validation, error handling, and customizable appearance.

## Props

The `QuestionField` component accepts the following props:

- `onFieldChange` (`Function`): Function to handle the change event of the field. It receives the new value as an argument.
- `title` (`String`): The title text displayed above the field.
- `placeHolder` (`String`): Placeholder text for the text input field.
- `date` (`Boolean`): If `true`, renders a date picker instead of a text field.
- `rows` (`Number`): Number of rows for multi-line text input. If `0`, the text field will be single-line.
- `defaultValue` (`String` or `Object`): Default value of the field. If `date` is `true`, this should be a date object.
- `validateErrorMsg` (`String`): Custom validation error message to be displayed if the validation fails.
- `error` (`String`): Error message to display.
- `validation` (`Function`): Function to validate the field value. It receives the field value as an argument and should return `true` if the value is valid, otherwise `false`.

### Example

Here's an example of how to use the `QuestionField` component with props:

```jsx
import React, { useState } from "react";
import QuestionField from "<your-component-package>";

const App = () => {
  const [fieldValue, setFieldValue] = useState("");

  const handleFieldChange = (value) => {
    setFieldValue(value);
  };

  return (
    <div>
      <QuestionField
        title="Your Question"
        placeHolder="Type your answer here..."
        date={false}
        rows={4}
        defaultValue=""
        validateErrorMsg="This field is required."
        error=""
        validation={(value) => value.length > 0}
        onFieldChange={handleFieldChange}
      />
    </div>
  );
};

export default App;
```

# QuestionWithChoices Component

A simple and customizable multiple-choice question component for React, built with Material-UI.

## Features

- **Multiple Choices**: Display multiple choice options for a question.
- **Customizable Styling**: Utilizes Material-UI for easy customization.
- **Event Handling**: Custom event handler for option selection.

## Props

The `QuestionWithChoices` component accepts the following props:

- `question` (`String`): The question text to be displayed.
- `choices` (`Array`): An array of choice objects. Each choice object can have the following properties:
  - `title` (`String`): The text to be displayed for the choice.
  - `value` (`String`): The value associated with the choice.
- `onSelectOption` (`Function`): Function to handle the selection of an option. It receives the selected option's value and index as arguments.

### Example

Here's an example of how to use the `QuestionWithChoices` component with props:

```jsx
import React, { useState } from "react";
import QuestionWithChoices from "<your-component-package>";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (value, index) => {
    setSelectedOption(value);
    console.log(`Selected option: ${value} at index: ${index}`);
  };

  const question = "What is your favorite color?";
  const choices = [
    { title: "Red", value: "red" },
    { title: "Green", value: "green" },
    { title: "Blue", value: "blue" },
  ];

  return (
    <div>
      <QuestionWithChoices
        question={question}
        choices={choices}
        onSelectOption={handleSelectOption}
      />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
```

# FooterSubmit Component

A simple footer component with a submit button, built with Material-UI.

## Features

- **Submit Button**: Provides a submit button at the footer.
- **Customizable Styling**: Utilizes Material-UI for easy customization.

## Props

The `FooterSubmit` component accepts the following props:

- `onSubmit` (`Function`): Function to handle the submit button click event. It is called when the submit button is clicked.

### Example

Here's an example of how to use the `FooterSubmit` component with props:

```jsx
import React from "react";
import FooterSubmit from "<your-component-package>";

const App = () => {
  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ paddingBottom: "60px" }}>{/* Your main content goes here */}</div>
      <FooterSubmit onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
```

# useHandlePageSubmit Custom Hook

A custom hook for handling page submission in React applications with Redux and React Router.

## Features

- **Dispatch Redux Actions**: Dispatches Redux actions to update the state.
- **Navigation**: Navigates to the next page using React Router.

## Usage

Here's an example of how to use the `useHandlePageSubmit` custom hook in your project:

```jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHandlePageSubmit from "<your-hook-package>";

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePageSubmit = useHandlePageSubmit();

  const handleSubmit = (value) => {
    // Define your Redux action here
    const yourReduxAction = (value) => ({ type: "YOUR_ACTION_TYPE", payload: value });

    // Dispatch action and navigate to next page
    handlePageSubmit(value, yourReduxAction, "/next-page");
  };

  return (
    <div>
      {/* Your component UI  */}
      <button onClick={() => handleSubmit("someValue")}>Submit</button>
    </div>
  );
};

export default ExampleComponent;
```

# useCohere Custom Hook Component

## Purpose

The `useCohere` custom hook component facilitates interactions with the Cohere API for generating text based on provided prompts. It handles asynchronous data fetching, tracks loading states, and manages error handling within a React application.

## Features

- State Management using `useState` hook.
- Asynchronous Data Fetching with error handling using `fetch` API.
- Loading state management for UI responsiveness.

## Usage

```javascript
import React, { useState } from "react";
import useCohere from "./useCohere";

const CohereComponent = () => {
  const { generateText, data, error, loading } = useCohere();
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateText(prompt);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit" disabled={loading}>
          Generate
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Generated Text: {data}</p>}
    </div>
  );
};

export default CohereComponent;
```
