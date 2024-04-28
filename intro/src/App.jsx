import { Header } from "./components/ui/Header.jsx";
import { Recommended } from "./components/activity/Recommended.jsx";
import { Upcoming } from "./components/activity/Upcoming.jsx";
import {Example} from './components/ui/Nav.jsx';
import {Summary} from './components/activity/Summary.jsx';

import "./index.css";

export function App() {
  const events = [
      { "id":1, "title":"UI/UX", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"},
      { "id": 2, "title": "React JS", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"},
      { "id":3, "title": "Webflow", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"}
  ]

  const upcomingEvents = [
    { "id":1, "title":"Digital marketing: Get Started", "speaker": "Howard Burns", "image": "https://www.fakepersongenerator.com/Face/female/female20161024679180481.jpg"},
    { "id": 2, "title": "Design Systems: Modern Design Systems", "speaker": "Anna Faris", "image": "https://www.fakepersongenerator.com/Face/female/female1021667970703.jpg"},
    { "id":3, "title": "Lightning Fast Websites with Webflow", "speaker": "Peter Deltondo", "image": "https://www.fakepersongenerator.com/Face/female/female20161024721989257.jpg"},
    { "id":4, "title": "Beginner's guide to UI/UX Designing", "speaker": "Elizabeth Olsen", "image": "https://www.fakepersongenerator.com/Face/male/male1085610736145.jpg"}
]

  return (
    <div className="">
      
      <Example />
      <Summary />
    </div>
  );
}