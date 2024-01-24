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
    // const movie = req.query.movie
    try {
        const movie = req.query.movie
        if (!movie) {
            return res.status(400).send('No movie query provided');
        }
        console.log(movie)
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${req.query.movie}`, {
            params: {
                include_adult: false,
                language: 'en-US',
                page: 1
              },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
            }
        })
        const movies = response.data.results.slice(0,10)
        console.log(movies)
    //    for (let i = 0; i <= movies.length; i++){
    //     console.log(movies[i].title)
    //    }
        res.json(movies)
    } catch (error) {
        console.log(error)
    }
}
)    
ViteExpress.listen(app,PORT,() => console.log(`what is the answer? http://localhost:${PORT}`))