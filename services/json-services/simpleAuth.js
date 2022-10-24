module.exports = (req, res, next) => {
    console.log('Validating request');
    if (req.header('Authorization') !== 'Bearer 1234') {
        console.log('Invalid - ', req.header('Authorization'));
        res.status(401).send('You do not have the correct Bearer token') 
        return;
    }

    next()
}