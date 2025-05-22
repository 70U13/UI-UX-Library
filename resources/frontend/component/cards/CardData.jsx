import Card0 from './Card0'; 
import Card1 from './Card1';
import Card2 from './Card2';
import image1 from '../../assets/images/cards/landscape.jpg'

const CardData = [
  {
    id: 1,
    Component: Card1, 
    text: "25 Outstanding Scenic Views",
    image: image1,
    description: "If hiking for you is all about the amazing scenery, try these gorgeous day hikes.",
    subtext: "2 hours ago",
  },
  {
    id: 2,
    Component: Card0, 
    text: "25 Outstanding Scenic Views",
    image: image1,
    description: "If hiking for you is all about the amazing scenery, try these gorgeous day hikes.",
  },
  {
    id: 3,
    Component: Card2, 
    text: "25 Outstanding Scenic Views",
    image: image1,
    description: "If hiking for you is all about the amazing scenery, try these gorgeous day hikes.",
  },
];

export default CardData;
