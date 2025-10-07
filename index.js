module.exports = (req, res) => {
  const { user, status, id } = req.query;

  if (!user || !id) {
    res.status(400).send('Lien invalide');
    return;
  }

  const redirectUrl = `https://fixvx.com/${user}/status/${id}`;
  res.writeHead(301, { Location: redirectUrl });
  res.end();
};
