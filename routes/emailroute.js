import express from 'express';
const router =express.Router();  

// Define a basic route
router.post('', (req, res) => {
    res.json({msg:'Hello, World!'});
});
export default router;