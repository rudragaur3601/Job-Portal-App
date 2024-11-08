import cookieParser from "cookie-parser";//This imports the cookie-parser middleware, which is used to parse cookies that come with HTTP requests. It makes it easy to handle cookies (small pieces of data) sent from the client (usually a browser).
import cors from "cors" //This imports the cors middleware, which is used to handle Cross-Origin Resource Sharing (CORS) issues. CORS is a mechanism that allows or restricts resources on a web server to be requested from another domain. It’s particularly useful when your frontend and backend are on different ports or domains.
import express from "express"; //This imports the express framework. Express is a minimalist web framework for Node.js that simplifies building APIs and web servers. It helps you manage routes, middleware, and requests.
const app = express();
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"







dotenv.config({})

// express() when called it create and returns an express application object . object represent the express application and provide methods for handling HTTP requests , defining routes , middlesware
// app that holds the express application object returned by express()

// Middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOption))




const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user",userRoute)












app.listen(PORT, () => {
    connectDB()
    console.log(`Server running at Port ${PORT}`)

})

