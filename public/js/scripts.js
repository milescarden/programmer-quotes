document.getElementById('punForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const word = document.getElementById('wordInput').value;
    const response = await fetch(`/api/pun?word=${word}`);
    const data = await response.json();
    document.getElementById('punResult').innerText = data.pun || 'No pun found!';
  });