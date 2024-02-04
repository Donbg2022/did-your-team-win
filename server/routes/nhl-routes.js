const express = require('express')


const router = express.Router()


router.get('/:teamAbb/club-schedule', async (req, res) => {
  const { teamAbb } = req.params;
  try {
    const response = await axios.get(`https://api-web.nhle.com/v1/club-schedule-season/${teamAbb}/now`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:gameID/boxscore', async (req, res) => {
  const { gameID } = req.params;
  try {
    const response = await axios.get(`https://api-web.nhle.com/v1/gamecenter/${gameID}/boxscore`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/standings', async (req, res) => {
  try {
    const response = await axios.get("https://api-web.nhle.com/v1/standings/now");
    res.json(response.data);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router