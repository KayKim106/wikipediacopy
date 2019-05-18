const express = require('express')
const app = express()
const fetch = require('isomorphic-unfetch')
const cors = require('cors')

    app.use(cors())

    // Basic root

    app.get('/', (req, res) => {

        res.send('Hello Server')

    })

    // Get Insert string from Front end and return it back the result (List) to Front

    app.get('/api/v1/list', async (req,res) => {

        let URL = "http://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&srsearch=" + req.query.search + "&format=json"

        let wikiResult = await fetch(URL, {
            headers:{
                "content-Type": "application/javascript",
                'origin': 'love'
            },
        })
        .then(response => response.json() )
        .then(response => response)

        res.json(wikiResult)

        })


     // Get Insert string from Front end and return it back the result (Content) to Front

    app.get('/api/v1/content', async (req,res)=>{

        let URL = "http://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + req.query.titles;

        let wikiResult = await fetch(URL, {
            headers: {
                "content-Type": "application/javascript",
                'origin': 'love'
            },
        })

        .then(response => response.json() )
        .then(response => response)

        res.json(wikiResult);

        })

    // App Listening 

    app.listen(4000, () => {

        console.log('App is listening Port 4000')

    })