# Backend Mastery: Interview Flashcards

A sleek, premium, fast, and dependency-free web application for studying backend engineering interview questions via interactive flashcards.

## Features

- **1000 Curated Questions:** An extensive database of questions covering Python, JavaScript, System Design, Cloud/AWS, Networking, Git, SQL, Docker, and more.
- **Premium Minimalist UI:** A sophisticated dark-mode aesthetic inspired by top developer tools, featuring crisp typography, subtle shadows, and clean layouts.
- **Interactive 3D Flashcards:** Physics-based 3D card flips for a tactile study experience.
- **Topic Filtering:** Quickly drill down into specific subject areas using the intuitive dropdown filter.
- **Progress Tracking:** Mark cards as "Known" and watch your progress bar fill up as you master each topic.
- **Keyboard Navigation:** Navigate blazingly fast using your keyboard (`Left/Right Arrows` to skip, `Spacebar/Enter` to flip).
- **Markdown Support:** Cleanly rendered code snippets and structured text for complex backend architectures and code examples.
- **Zero Dependencies:** Built entirely with raw HTML, CSS, and Vanilla JavaScript. No node modules, build steps, or frameworks required!

## Running Locally

Because the application has zero build steps, you can run it instantly using any basic HTTP server.

If you have Python installed, simply run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

*(Alternatively, you can use the VS Code "Live Server" extension, or `npx serve`, or just open `index.html` directly in your browser, though running via a local server is recommended for the best experience).*

## Project Structure

- `index.html`: The core application structure and layout.
- `style.css`: The premium minimalist dark-theme styling, CSS variables, and 3D animations.
- `app.js`: The application logic (card navigation, topic filtering, markdown parsing, and progress tracking).
- `data.js`: The massive JSON-like array containing all 1000 questions, answers, and topic tags.

## Contributing / Adding Questions

To add more questions to your study deck, simply open `data.js` and add a new object to the array:

```javascript
{
    "id": 1001,
    "topic": "System Design",
    "question": "What is the primary benefit of microservices?",
    "answer": "Independent deployment, scaling, and technology choices per service."
}
```
The application will automatically pick up the new question and add its topic to the filter dropdown!

---
*Happy Studying and Good Luck on your Interviews!*
