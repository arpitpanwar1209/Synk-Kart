import React, { useEffect } from 'react';

function TestApi() {
  useEffect(() => {
    fetch('http://localhost:8000/api/test/')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []); // empty dependency array to run once on mount

  return (
    <div>
      Check the browser console for API response!
    </div>
  );
}

export default TestApi;
