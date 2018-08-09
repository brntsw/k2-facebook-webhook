module.exports = (req, res) => {
    const hubChallenge = req.query['hub.challenge']

    const hubMode = req.query['hub.mode']
    const verifyTokenMatches = (req.query['hub.verify_token'] === 'k2chatbot'); //It will be used on Facebook --- crowdbotics

    if (hubMode && verifyTokenMatches) {
        res.status(200).send(hubChallenge);
    } else {
        res.status(403).end();
    }
}