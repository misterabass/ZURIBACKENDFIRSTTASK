const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    const { slackName, track } = req.query

    if(!slackName || !track){
        return res.status(400).json({ error: 'Both slackName and track parameters are required'})
    }

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday, "Friday', 'Saturday']
    const currentDay = dayOfWeek[new Date().getUTCDay()]

    const currentUTCTime = new Date().toISOString()

    const response = {
        misterabass,
        current_day: currentDay,
        UTCtime: currentUTCTime,
        Backend,
        githubFileUrl:  
        githubRepoUrl:
        statusCode: 200
    }

    res.json(response)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


