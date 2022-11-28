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
import GettyImages from './Images/GettyImages.webp'
import stress from './Images/stress.jpg'


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
    {title : "Health benefits of indoor plants",
    text : [ ["Not only do indoor plants make for beautiful home décor, they may also boost your health and well-being. Research suggests we spend more than 85 percent of our lives indoors and houseplants are an easy way to bring nature into your home."],[" 'If you’re receiving cancer treatment and not getting out as much as you used to, that time indoors can increase even more,” says Lauren Garvey, LPC, CRC, NCC, a counselor and facilitator at Cancer Wellness at Piedmont. “That’s why it’s important to think about your physical environment.” "] ]},
     
    {title : "Indoor plants can offer the following benefits:" } ,
 
    {title : "Improve air quality.",
    text: [ [" According to Kathy Kennedy, a master gardener with whom Garvey collaborates at Farm Chastain, there are many things in our homes that create air pollution – cleaning products, paint, mold and mildew. Plants also replace carbon dioxide with fresh oxygen."],
    ["According to a 1989 NASA study, houseplants can help improve air quality by removing cancer-causing chemicals like formaldehyde and benzene from the air. Another study found that the soil in potted plants can also help clean indoor air."],
    [" “Microorganisms in the soil of the plant help clean the air as well,” says Garvey. “These microorganisms have also been found to have anti-depressive effects.”"],
    [" The bigger and leafier the plant, the better, says the NASA study author. Garvey recommends peace lilies, bamboo, aloe vera, figs and Boston ferns."] ]
    },
    
    { title : "Reduce stress",   
    text : [ ["A 2015 study found that caring for indoor plants reduced psychological and physiological stress in study participants. Interacting with plants helped suppress sympathetic nervous system activity and diastolic blood pressure. Participants reported feelings of comfort when working with plants versus working on a computer."] , [" “There are many psychological benefits to spending time outdoors – it creates a sense of belonging and connection to something greater than ourselves – and it gives us what I like to call ‘outdoor-phins,’” she says. “When we bring plants inside, we are welcoming nature into our own space.' "] ] ,
    image : stress,
  } ,
    
    { title : "Improve your sense of well-being. ",
     text: [ ["A Scandinavian study found that exposure to indoor plants improved feelings of well-being in participants compared to those who weren’t exposed to plants. And we know that feelings of well-being can help improve your physical health too."],[" “Studies have shown that indoor plants can improve focus, decrease depressive moods and lessen symptoms of anxiety,” says Garvey. “When your mind and body are relaxed, it can improve your blood pressure, heart rate and cortisol levels.”"]]},
    
    { title : "Support cognitive health.",
    text: [ [" Exposure to indoor plants helped people recover from mental fatigue, researchers found."],["“A Rutgers study found that people with dementia showed improved short-term memory after a session in a Japanese garden,” adds Garvey."]]
    ,image : GettyImages},
    
    { title : "Improve environmental wellness.",
      text: [ [" “Our environment has a major impact on our overall wellness,” she says. “All areas of our wellness are interconnected. Living in an environment that is healthy and peaceful can be beneficial to your overall wellness. Our home is our sanctuary and a place for us to recharge.” "]]},
    
    { title : "A symbiotic relationship.",
      text: [ [ " “One of the best things about caring for indoor plants is the beautiful exchange that happens: Plants depend on us for care and in turn, they take care of us by improving the air we breathe and making our space more beautiful,” says Garvey. “I also think plants are hopeful. As they grow and blossom, they can be an important reminder for us of things to come.”"]]}
    
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
  content : [ 
    {title : " " ,
     text : [ ["Do you love plants, but find that gardening stresses you out? Do you cringe every time someone hands you a plant and tell them you’re “sure to kill it within a week?” Do you envy the green thumbs of your neighbors, friends and relatives, while struggling to keep even one houseplant yourself ? ,"],["If this sounds like you, there’s nothing to be embarrassed about. Plenty of people struggle to keep plants alive at first, but with time, practice and a little instruction, anyone can learn to do it. Just because it isn’t something that comes naturally to you doesn’t mean you have to accept that you’ll never be able to do it."],["Keeping potted plants alive is a learned skill, and there is no reason you can’t learn to do it, too. To help you out and get you started on your plant-care journey, we’ve put together this tutorial on everything you need to know about how to take care of potted plants. By the time we’re finished here, you’ll be ready to put these skills into practice. So grab your gardening gloves and potting soil and let’s get started."] ],
     image : plant1 
    },
    {title : "Choose the Correct Pot",
     text : [ ["Drainage is extremely important for your plant. Ideally, a pot should have a hole in the bottom so that excess water can drain out of the soil and collect in a tray underneath the pot. If there is no such hole, all the extra water is trapped in the soil. Often, this is more water than the plant can successfully absorb, and this will result in a plant “drowning.” If you notice your plant looks wilted and droopy, but the soil is still damp, the odds are good that you have a drainage problem, and the plant is too wet."],["In the same way, plants need plenty of space to grow. If the roots run out of room to stretch out, the plant will become top-heavy, and the roots won’t be able to support the amount of foliage on your plant. This will cause it to wither and die."],["While it’s easiest to simply leave the plant in the pot or basket you got it in, this isn’t always the best way to keep your plant healthy and strong. For your plant to stay healthy, it needs to be in a pot that gives it room to grow and stretch its roots. It will also require a pot that allows for adequate drainage." ] ],
    },

    {title:"Use Good Potting Soil",
    text : [ ["If you’re re-potting your houseplant from the container it came in and putting it in a better pot, you’ll also need to think about what type of potting soil you’re using. It isn’t enough to just scoop some dirt out of your backyard. Instead, buy a bag of potting soil. These mixes often contain extra nutrients or fertilizers that will help your houseplant stay strong and healthy."] , ["Depending on what type of plant you’re working with, you may be able to find a potting mix designed specifically for that species. If you’re planting a cactus or succulent, for example, there are often potting soils that are crafted with just the right nutrients for these types of plants. "] ],
    image: potting 
    },

    {title : "Watering: Not Too Much and Not Too Little",
     text : [ ["Watering can be a little bit tricky, especially if you’re new to plant care. Water too much, and your plant can easily drown. Water too little, and the plant will dry up and die. For happy and healthy plants, you’ll need to find a delicate balance between these two extremes. While some plants prefer to live in moist soil, the vast majority of plants do best when you allow the soil to dry out between watering."],["To tell whether or not your plant needs water, feel the soil, preferably near the edge of the pot. If the dirt feels dry and crumbly, it’s time to water. If it still feels damp, it probably doesn’t need more just yet. After a few weeks of this practice, you should begin to get the hang of knowing when your plants need water."],["Of course, you’ll also be able to tell if your plants are dying of thirst. If you notice the leaves are turning dry, brown and shriveled, your plant is in desperate need of water. Hopefully, however, you’ll water your plant long before it gets to this point."],["When giving your plant a drink, water it until the water begins to run out the hole in the bottom of the pot, or until the soil no longer absorbs any water. If the water begins to pool on top of the soil refusing to soak in any more, then it’s time to stop watering.It’s difficult to prescribe exactly how often you should water your plant because every plant and every plant species is different. You can read up on your specific plant to gain more information, but in general, it’s better to let your plant tell you when it needs water."], ["Learn to read the soil and the leaves of a plant, and recognize when it’s asking you for some water."] ],
    },

    {title :"Give Them Plenty of Light",
     text : [ ["While every plant has different preferences in terms of shade versus sun, no plant will grow with absolutely no light whatsoever. If you put your plant in the closet, high on a dark shelf or backed into a shadowy corner, it is not going to do well."],["Your plant needs at least some sun to thrive. For this reason, windowsills are great places to put plants. If you don’t have a windowsill large enough, though, there are other options. Put them on a table or a cart in front of a window, or in some place that experiences plenty of sunlight."] ],
    },

    {title :"Keep Your Pet Away",
    text : [ ["This should go without saying, but it’s something you might not have thought of if you’re new to houseplants. Animals may love your plants, but unfortunately, this often translates into loving them to death. Specifically, your pet might eat your plant, or tear it up in their enthusiasm."]],
    image : potting1,
    }
    
    
  ] ,
  linktext :"Here",
  bg : "#f0f6fb",
  linkcolor : "#7f7d7a"
}]
}

export const Gifts= {
  filterList : [ 'Easy to look after gifts ', 'Pet and child safe gifts', 'Patterned and unusual gifts','Gift Vouchers']
 } 
; 