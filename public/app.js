document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const originalUrl = document.getElementById('originalUrl').value;
  
    try {
      const response = await fetch('/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      });
  
      const data = await response.json();
      if (response.ok) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
        resultDiv.style.display = 'block';
      } else {
        alert('Error shortening URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  