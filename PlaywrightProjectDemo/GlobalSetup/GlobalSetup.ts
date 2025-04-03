import dotenv from 'dotenv'
export default function setEnvironmentValue(){
    console.log(process.env.URL)
    console.log(process.env.APIBaseURL)
    dotenv.config({
        path:"./.env",
        override:true
    })
    console.log(process.env.URL)
    console.log(process.env.APIBaseURL)
}

