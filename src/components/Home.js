
import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from '../context/AppContext'
const Home = () => {

    const {newsArticles} = useContext(AppContext)

    return (
        <div id='news'>
            <h2 >This is where you would view the home page content</h2> <br></br>

            <h2> This is the news that you care about </h2>

            {newsArticles.map(article => <li> {article.title} <br></br> {article.article} </li> )}            
        </div>
    )
}

export default Home