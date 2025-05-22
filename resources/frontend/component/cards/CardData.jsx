import Card0 from './Card0'; 
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';
import image1 from '../../assets/images/cards/landscape.jpg'
import image2 from '../../assets/images/cards/environment-issue.jpg'
import image3 from '../../assets/images/cards/revolution.jpg'
import image4 from '../../assets/images/cards/road.jpeg'
import image5 from '../../assets/images/cards/cabbage.jpg'

const CardData = [
  {
    id: 1,
    Component: Card1, 
    text: "25 Outstanding Scenic Views",
    image: image1,
    description: "If hiking for you is all about the amazing scenery, try these gorgeous day hikes.",
  },
  {
    id: 2,
    Component: Card4, 
    description: "Are you interested in this post?",
  },
  {
    id: 2,
    Component: Card0, 
    text: "25 Outstanding Scenic Views",
    image: image1,
    description: "If hiking for you is all about the amazing scenery, try these gorgeous day hikes.",
    subtext: "2 hours ago",  
  },
  {
    id: 3,
    Component: Card2, 
    text: "The New Revolution!",
    image: image3,
    description: "Join us in the fight for a better future. Together, we can make a difference.",
  },
  {
    id: 4,
    Component: Card3, 
    text: "15 Biggest Environmental Problems of 2025",
    image: image2,
    description: "From deforestation and plastic pollution to fast fashion and food waste.",
  },
  {
    id: 4,
    Component: Card5, 
    image: image4,
    description: "Company Corp | Financial Roles",
  },
  {
    id: 4,
    Component: Card6, 
    text: "Cabbage",
    image: image5,
    description: "A popular cruciferous vegetable known for its dense, leafy heads and versatility in cooking.",
  },
   {
    id: 4,
    Component: Card7, 
    text: "Cabbage",
    image: image5,
    description: "A popular cruciferous vegetable known for its dense, leafy heads and versatility in cooking.",
  },
];

export default CardData;
