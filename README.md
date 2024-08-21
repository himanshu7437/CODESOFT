# CODESOFT
This repository include the task provide by the codesoft for my web development internship. 

--------task-1 ------ 
Professional Calculator
This project is a simple yet professional-looking calculator built using HTML, CSS, and JavaScript. It was created as part of a task for the Codesoft Internship.

Features
Basic Operations: The calculator can handle basic arithmetic operations such as addition, subtraction, multiplication, and division.
Responsive Design: The calculator is designed to work well on various screen sizes, ensuring a consistent user experience on both mobile and desktop devices.
Clear, Backspace, and Decimal Support: Includes a clear button to reset the display, a backspace function to remove the last input, and decimal point support for precise calculations.
Styled Interface: The calculator has a modern, professional design with distinct colors for different button types, providing an intuitive user experience.
Project Structure
The project consists of the following files:

index.html: Contains the structure and layout of the calculator.
styles.css: Provides styling for the calculator, ensuring it looks clean and professional with different color schemes for numbers, operators, and control buttons.
script.js: Contains the JavaScript logic that powers the calculator's functionality.
JavaScript Functions
The JavaScript file (script.js) includes several key functions that control the calculator's behavior:

clearDisplay(): Resets the display to '0'.
appendToDisplay(value): Appends a number or operator to the display. If the display is currently showing '0', the value will replace it.
backspace(): Removes the last character from the display. If there's only one character left, it resets the display to '0'.
calculateResult(): Evaluates the arithmetic expression shown on the display. If the expression is valid, it displays the result; if not, it shows "Error".
How to Use
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/calculator-project.git
Open index.html in your web browser:
Simply double-click on the index.html file or open it with your preferred browser.

Use the calculator:

Click on the numbers and operators to perform calculations.
Use the "=" button to evaluate the expression.
Use the "C" button to clear the display.
Use the backspace button (if implemented) to delete the last entered character.
Styling Details
Body: The calculator is centered on the screen with a neutral background color.
Calculator Container: The calculator has a rounded, shadowed container for a professional appearance.
Display: The display has a dark background with light text for clear readability.
Buttons:
Numbers: Light background with dark text, changing shades on hover and click.
Operators: Blue background with white text, darker on hover and click.
Clear: Red background with white text, indicating its importance.
Equal: Green background with white text, spanning the width of the calculator.
Preview
You can see the calculator in action by opening index.html in any web browser.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
