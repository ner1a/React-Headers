import React, {useState,useEffect} from "react"
import './App.css';
import Header from './components/Header';
import UserCard from './components/UserCard';
import "./CSS/style.css";

const headerLinks = [
  {
    "id": 1,
    "title": "Ana Sayfa",
    "link": "/"
  },
  {
    "id": 2,
    "title": "Yazılar",
    "link": "/blog"
  },
  {
    "id": 3,
    "title": "Projeler",
    "link": "/projects"
  },
  {
    "id": 4,
    "title": "Hakkımda",
    "link": "/about"
  }
]


function App() {
  const [ name, setName ] = useState("")
  return <>
    <Header links={headerLinks}/>
    <main className="main">
      <input type="text" placeholder="İsminiz" value={name} onChange={(e) =>setName(e.target.value)} />
      <UserCard name={name} />
    </main>
  </>
}
export default App;