import React from 'react';
import PostBox from './components/PostBox';

function App() {
  return (
    <div className="App">
      <PostBox
        avatar="https://example.com/avatar1.jpg"
        accountName="John Doe"
        daysAgo={2}
        isPublic={true}
        text="Esta es una publicación de prueba."
        image="https://example.com/image1.jpg"
      />
      {/* Agrega más PostBox aquí para probar con diferentes publicaciones */}
    </div>
  );
}

export default App;
