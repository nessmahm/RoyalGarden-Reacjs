import flower from './Images/flower.webp'
import outdoor from '../assets/Images/outdoor.webp'
import indoor from '../assets/Images/indoor.jpg'
import pot1 from '../assets/Images/pot1.webp'
import pot2 from '../assets/Images/pot2.webp'
import pot3 from '../assets/Images/pot3.webp'
import pot4 from '../assets/Images/pot4.webp'
import lemon from '../assets/Images/lemon.webp'
import lemon1 from '../assets/Images/lemon1.webp'
import lemon2 from '../assets/Images/lemon.jpg'
import vennie from '../assets/Images/Vennie.webp'
import vennie1  from '../assets/Images/Vennie1.webp'
import rosa from '../assets/Images/rosa.jpg'
import rosa1  from '../assets/Images/rosa1.webp'
import rosared from '../assets/Images/rosared.webp'
import rosared1  from '../assets/Images/rosa1.webp'
import pippa from '../assets/Images/pippa.webp'
import pippa1  from '../assets/Images/pippa1.webp'
import ziggy from '../assets/Images/ziggy.webp'
import ziggy1  from '../assets/Images/ziggy1.webp'
import vennus from '../assets/Images/vennus.webp'
import vennus1  from '../assets/Images/venus.webp'
import bertie from '../assets/Images/Bertie.webp'
import bertie1  from '../assets/Images/bertie1.webp'
import fractured from '../assets/Images/fractured.webp'
import fractured1  from '../assets/Images/fractured1.jpg'
import fracturedblue from '../assets/Images/fracturedblue.webp'
import fracturedblue1 from '../assets/Images/fracturedblue1.webp'
import fracturedblue2 from '../assets/Images/fracturedblue2.jpg'
import fracturedgreen  from '../assets/Images/fracturedgreen.webp'
import fracturedgreen1 from '../assets/Images/fracturedgreen1.webp'
import plant1 from './Images/plant1.webp'
import plant2 from './Images/plant2.jpg'
import potting from './Images/potting.jpg'
import potting1 from './Images/potting1.jpg'


export const navBarItems = ['Plants','Pots','Plant care','Gifts' ];

 export const Plants = {
  filterList : [ [ ["type",indoor] , ["palms",pot1] , ["flower",flower] ,["tree",flower],["ferns",bertie] ],
  [ [ "season" , indoor] , ["spring", flower ], ["winter", flower], ["summer", flower], ["autumn", flower]],
  [ ["location" ,outdoor] ,  ["indoor",indoor] , ["outdoor",lemon] ],
  [ ["Flower color" , flower],["red", rosared],["yellow",outdoor],["white",rosa ] ] 
],
products: [
    {name : "Lemon",
    description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
    image : [lemon,lemon1,lemon2],
    height : ["S","M","XL"],
    price : 10 ,
    id: 15
    },
   { name : "Vennie",
   description : [ "indoor","flower","spring","indoor","white","small"],
   image : [vennie,vennie1],
   price : 10 ,
   height : ["S","M","XL"],
   id: 25
   },
   {name : "Rosa",
   description : ["indoor","flower","spring","outdoor","white", "meduim"],
   image :[ rosa,rosa1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 35
   },
   { name : "Rosa",
   description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
   image : [rosared,rosared1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 45 
   },
   { name : "Pippa",
   description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
   image : [pippa,pippa1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 54
   },
   { name : "Ziggy", 
   description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
   image : [ziggy,ziggy1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 55 
   },
   { name : "Venus", 
   description :[ "indoor","ferns","spring","winter","red","meduim"],
   image : [vennus,vennus1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 61
   },
   { name : "Bertie", 
   description :[ "indoor","ferns","spring","indoor","red","meduim"],
   image : [bertie,bertie1],
   height : ["S","M","XL"],
   price : 10 
   ,id: 81
   }]
}


export const Pots = {
  filterList : [ [  ["type" ,indoor ] , ["indoor",indoor] , ["outdoor",outdoor] ] ,
                 [ ["material" , outdoor],["recyclable plastic",pot3] ],
                 [ ["color" , flower],["red", outdoor],["black",outdoor],["green",pot2],["white",pot1 ] ] 
               ],
  products : [ 
      {name : "Fractured pot",
      id:"pot1",
      description: ["indoor","blue","M","recycled plastic"],
      price : 10,
      image : [fractured,fractured1],
      new : true ,
      colors : [["blue",[fracturedblue,fracturedblue1,fracturedblue2] ] , ["green",[fracturedgreen,fracturedgreen1]]] ,
      sizes : ["S","M","XL"],
      } ,
     
      ]
}


export const Tips = {
  filterList : [ 'Tools & accessories','Indoor plant care ' ,'Outdoor plant care' ] ,
  articles : [

{
  title: "The Benefits of Houseplants : ",
  name:"benefits-of-houseplants",
  id:"tip1" ,
  introduction :"Not only do indoor plants enhance the overall appearance of a space, but studies show they boost moods, increase creativity, reduce stress, and eliminate air pollutants—making for a healthier, happier you. ",
  image :plant1 ,
  content : 
    [
    {text : '<p>Do you love plants, but find that gardening stresses you out?Do you cringe every time someone hands you a plant and tell them you’re “sure to kill it within a week?” Do you envy the green thumbs of your neighbors, friends and relatives, while struggling to keep even one houseplant yourself ? " , <br/> If this sounds like you, there’s nothing to be embarrassed about. Plenty of people struggle to keep plants alive at first, but with time, practice and a little instruction, anyone can learn to do it. Just because it isn’t something that comes naturally to you doesn’t mean you have to accept that you’ll never be able to do it.<br/>Keeping potted plants alive is a learned skill, and there is no reason you can’t learn to do it, too. To help you out and get you started on your plant-care journey, we’ve put together this tutorial on everything you need to know about how to take care of potted plants. By the time we’re finished here, you’ll be ready to put these skills into practice. So grab your gardening gloves and potting soil and let’s get started.</p> ',
     image : plant1 
    },
    
    
  ],
  linktext :"Read More",
  bg : "#faf7f2",
  linkcolor : "#856e51"
}
,{
  title: "How to Keep Potted Plants Alive : ", 
  name:"keep-potted-plants-alive",
  id:"tip2",
  introduction : "While the rules for all plants are fairly similar, they will differ slightly depending on the environment your plant is going to be living in. If you’re mostly wondering how to take care of potted indoor plants, then this is the section for you. Here are our best tips to keep houseplants alive:",
  image :plant2 ,
  content : [ ] ,
  linktext :"Here",
  bg : "#f0f6fb",
  linkcolor : "#7f7d7a"
}]
}

export const Gifts= {
  filterList : [ 'Easy to look after gifts ', 'Pet and child safe gifts', 'Patterned and unusual gifts','Gift Vouchers']
 } 
; 