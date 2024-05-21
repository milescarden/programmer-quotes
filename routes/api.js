const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to get a random quote
router.get('/quote', async (req, res) => {
  try {
    const response = await axios.get('https://programming-quotesapi.vercel.app/api/random');
    const quote = response.data;

    console.log('API response:', quote);  // Log the API response

    res.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

module.exports = router;