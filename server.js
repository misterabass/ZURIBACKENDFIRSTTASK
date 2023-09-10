const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query

    if(!slack_name || !track){
        return res.status(400).json({ error: 'Both slack_name and track parameters are required'})
    }

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday, "Friday', 'Saturday']
    const currentDay = dayOfWeek[new Date().getUTCDay()]

    const currentUTCTime = new Date().toISOString()

    const response = {
        slack_name: 'misterabass',
        current_day: currentDay,
        utc_time: currentUTCTime,
        track: 'backend',
        github_file_url: 'https://github.com/misterabass/ZURIBACKENDFIRSTTASK/blob/master/server.js', 
        github_repo_url: 'https://github.com/misterabass/ZURIBACKENDFIRSTTASK',
        status_code: 200
    }

    res.json(response)

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


