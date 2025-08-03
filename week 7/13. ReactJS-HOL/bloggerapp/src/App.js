import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [choice, setChoice] = useState('book');

  // Switch-based rendering (optional)
  const renderComponent = () => {
    switch (choice) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <h3>Select a category above</h3>;
    }
  };

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>

      {/* Buttons for selection */}
      <button onClick={() => setChoice('book')}>Book</button>
      <button onClick={() => setChoice('blog')}>Blog</button>
      <button onClick={() => setChoice('course')}>Course</button>

      <hr />

      {/* Conditional rendering using switch */}
      {renderComponent()}

      {/* Ternary operator example */}
      <h3>{choice === 'book' ? 'You are viewing a book!' : 'Not viewing a book'}</h3>

      {/* Logical AND example */}
      {choice === 'blog' && <p>Reading blog posts helps improve your writing ✍️</p>}
    </div>
  );
}

export default App;
