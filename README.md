
# Professional Calculator 🧮

This project is a simple yet professional-looking calculator built using **HTML**, **CSS**, and **JavaScript**. It was created as part of a task for the **Codesoft Internship**.

## Features ✨

- **Basic Arithmetic Operations** ➕ ➖ ✖️ ➗: Supports addition, subtraction, multiplication, and division.
- **Responsive Design** 📱💻: The calculator adapts to various screen sizes, ensuring a smooth experience on both mobile and desktop devices.
- **Clear, Backspace, and Decimal Support** 🔄❌:
  - A **Clear** button to reset the display.
  - **Backspace** functionality to remove the last input.
  - **Decimal point** support for precise calculations.
- **Styled Interface** 🎨: The calculator features a modern design with distinct colors for numbers, operators, and control buttons, ensuring an intuitive user experience.

## Project Structure 📁

The project consists of the following files:

- **`index.html`**: Contains the structure and layout of the calculator.
- **`styles.css`**: Provides styling, ensuring the calculator looks clean and professional.
- **`script.js`**: Contains the JavaScript logic that powers the calculator's functionality.

## JavaScript Functions 💻

The JavaScript file (**`script.js`**) includes key functions that control the calculator's behavior:

- **`clearDisplay()`**: Resets the display to `'0'`.
- **`appendToDisplay(value)`**: Appends a number or operator to the display. If the display is `'0'`, it will replace the value.
- **`backspace()`**: Removes the last character from the display. If there's only one character left, it resets the display to `'0'`.
- **`calculateResult()`**: Evaluates the arithmetic expression shown on the display. If the expression is valid, it displays the result; otherwise, it shows `"Error"`.

## How to Use ⚙️

### 1. Clone the repository:
```bash
git clone https://github.com/himanshu7437/html-css-js-Calculator.git
```

### 2. Open the `index.html` in your browser 🌐:
- Simply double-click on the `index.html` file, or open it with your preferred browser.

### 3. Use the calculator 🧑‍💻:
- Click on the numbers and operators to perform calculations.
- Press the **`=`** button to evaluate the expression.
- Press the **`C`** button to clear the display.
- Use the **backspace** button (if implemented) to delete the last entered character.

## Styling Details 🎨

- **Body**: The calculator is centered on the screen with a neutral background color.
- **Calculator Container**: The container has rounded corners and a shadowed effect for a professional appearance.
- **Display**: The display features a dark background with light text for clear readability.
- **Buttons**:
  - **Numbers**: Light background with dark text, changing shades on hover and click.
  - **Operators**: Blue background with white text, darker on hover and click.
  - **Clear**: Red background with white text, indicating its importance.
  - **Equal**: Green background with white text, spanning the width of the calculator.

## License 📄

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute the code.
