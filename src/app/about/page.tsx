import { Metadata } from "next"

export const metadata: Metadata ={
     title: "About CodeEvolution" // now this metadata will override the page normal one coz this on is deeper
}

export default function About(){
    return <h1>About Me</h1>
}