import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import axios from 'axios'
import 'dotenv/config'
import process from 'process'

const app = express()
const PORT = 4242

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())


app.get('/api/getMovies', async (req,res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: req,
                include_adult: false,
                language: 'en-US',
                page: 1
              },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
            }
        })
        const movies = response.data.results.filter()
        console.log(movies)
        res.json(response.data.results)
    } catch (error) {
        console.log(error)
    }
}
)    
ViteExpress.listen(app,PORT,() => console.log(`what is the answer? http://localhost:${PORT}`))