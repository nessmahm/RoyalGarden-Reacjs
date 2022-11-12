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


export const navBarItems = [
    
  {name : 'Plants',
    submenu : ['Indoor plants','Outdoor plants', 'New in' ],
    filterList : [ [ ["type",indoor] , ["palms",pot1] , ["flower",flower] ,["tree",flower],["ferns",bertie] ],
                   [ [ "season" , indoor] , ["spring", flower ], ["winter", flower], ["summer", flower], ["autumn", flower]],
                   [ ["location" ,outdoor] ,  ["indoor",indoor] , ["outdoor",lemon] ],
                   [ ["Flower color" , flower],["red", rosared],["yellow",outdoor],["white",rosa ] ] 
                 ],
    products :[
             
      {name : "Lemon",
      description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
      image : lemon,
      price : 10 ,
      id: 15
      },

     { name : "Vennie",
     description : [ "indoor","flower","spring","indoor","white","small"],
     image : vennie,
     price : 10 
     ,id: 25
     },
     {name : "Rosa",
     description : ["indoor","flower","spring","outdoor","white", "meduim"],
     image : rosa,
     price : 10 
     ,id: 35
     },
     { name : "Rosa",
     description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
     image : rosared,
     price : 10 
     ,id: 45 
     },
     { name : "Pippa",
     description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
     image : pippa,
     price : 10 
     ,id: 54
     },
     { name : "Ziggy", 
     description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
     image : ziggy,
     price : 10 
     ,id: 55 
     },
     { name : "Venus", 
     description :[ "indoor","ferns","spring","winter","red","meduim"],
     image : vennus,
     price : 10 
     ,id: 61
     },
     { name : "Bertie", 
     description :[ "indoor","ferns","spring","indoor","red","meduim"],
     image : bertie,
     price : 10 
     ,id: 81
     },{name : "Lemon",
             description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
             image : lemon,
             price : 10 ,
             id: 15
             },
     
            { name : "Vennie",
            description : [ "indoor","flower","spring","indoor","white","small"],
            image : vennie,
            price : 10 
            ,id: 25
            },
            {name : "Rosa",
            description : ["indoor","flower","spring","outdoor","white", "meduim"],
            image : rosa,
            price : 10 
            ,id: 35
            },
            { name : "Rosa",
            description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
            image : rosared,
            price : 10 
            ,id: 45 
            },
            { name : "Pippa",
            description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
            image : pippa,
            price : 10 
            ,id: 54
            },
            { name : "Ziggy", 
            description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
            image : ziggy,
            price : 10 
            ,id: 55 
            },
            { name : "Venus", 
            description :[ "indoor","ferns","spring","winter","red","meduim"],
            image : vennus,
            price : 10 
            ,id: 61
            },
            { name : "Bertie", 
            description :[ "indoor","ferns","spring","indoor","red","meduim"],
            image : bertie,
            price : 10 
            ,id: 81
            },{name : "Lemon",
            description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
            image : lemon,
            price : 10 ,
            id: 15
            },
    
           { name : "Vennie",
           description : [ "indoor","flower","spring","indoor","white","small"],
           image : vennie,
           price : 10 
           ,id: 25
           },
           {name : "Rosa",
           description : ["indoor","flower","spring","outdoor","white", "meduim"],
           image : rosa,
           price : 10 
           ,id: 35
           },
           { name : "Rosa",
           description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
           image : rosared,
           price : 10 
           ,id: 45 
           },
           { name : "Pippa",
           description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
           image : pippa,
           price : 10 
           ,id: 54
           },
           { name : "Ziggy", 
           description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
           image : ziggy,
           price : 10 
           ,id: 55 
           },
           { name : "Venus", 
           description :[ "indoor","ferns","spring","winter","red","meduim"],
           image : vennus,
           price : 10 
           ,id: 61
           },
           { name : "Bertie", 
           description :[ "indoor","ferns","spring","indoor","red","meduim"],
           image : bertie,
           price : 10 
           ,id: 81
           },{name : "Lemon",
           description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
           image : lemon,
           price : 10 ,
           id: 15
           },
   
          { name : "Vennie",
          description : [ "indoor","flower","spring","indoor","white","small"],
          image : vennie,
          price : 10 
          ,id: 25
          },
          {name : "Rosa",
          description : ["indoor","flower","spring","outdoor","white", "meduim"],
          image : rosa,
          price : 10 
          ,id: 35
          },
          { name : "Rosa",
          description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
          image : rosared,
          price : 10 
          ,id: 45 
          },
          { name : "Pippa",
          description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
          image : pippa,
          price : 10 
          ,id: 54
          },
          { name : "Ziggy", 
          description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
          image : ziggy,
          price : 10 
          ,id: 55 
          },
          { name : "Venus", 
          description :[ "indoor","ferns","spring","winter","red","meduim"],
          image : vennus,
          price : 10 
          ,id: 61
          },
          { name : "Bertie", 
          description :[ "indoor","ferns","spring","indoor","red","meduim"],
          image : bertie,
          price : 10 
          ,id: 81
          },{name : "Lemon",
          description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
          image : lemon,
          price : 10 ,
          id: 15
          },
  
         { name : "Vennie",
         description : [ "indoor","flower","spring","indoor","white","small"],
         image : vennie,
         price : 10 
         ,id: 25
         },
         {name : "Rosa",
         description : ["indoor","flower","spring","outdoor","white", "meduim"],
         image : rosa,
         price : 10 
         ,id: 35
         },
         { name : "Rosa",
         description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
         image : rosared,
         price : 10 
         ,id: 45 
         },
         { name : "Pippa",
         description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
         image : pippa,
         price : 10 
         ,id: 54
         },
         { name : "Ziggy", 
         description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
         image : ziggy,
         price : 10 
         ,id: 55 
         },{name : "Lemon",
         description :["tree","outdoor","winter","autumn","summer","spring","white","meduim"],
         image : lemon,
         price : 10 ,
         id: 15
         },
 
        { name : "Vennie",
        description : [ "indoor","flower","spring","indoor","white","small"],
        image : vennie,
        price : 10 
        ,id: 25
        },
        {name : "Rosa",
        description : ["indoor","flower","spring","outdoor","white", "meduim"],
        image : rosa,
        price : 10 
        ,id: 35
        },
        { name : "Rosa",
        description :[ "flower","indoor","outddor" ,"spring","red","meduim"],
        image : rosared,
        price : 10 
        ,id: 45 
        },
        { name : "Pippa",
        description : ["flower","indoor","winter","autumn","summer","spring","indoor","white","meduim"],
        image : pippa,
        price : 10 
        ,id: 54
        },
        { name : "Ziggy", 
        description : ["indoor", "flower","winter","autumn","summer","spring","red","meduim"],
        image : ziggy,
        price : 10 
        ,id: 55 
        },
        { name : "Venus", 
        description :[ "indoor","ferns","spring","winter","red","meduim"],
        image : vennus,
        price : 10 
        ,id: 61
        },
        { name : "Bertie", 
        description :[ "indoor","ferns","spring","indoor","red","meduim"],
        image : bertie,
        price : 10 
        ,id: 81
        },
         { name : "Venus", 
         description :[ "indoor","ferns","spring","winter","red","meduim"],
         image : vennus,
         price : 10 
         ,id: 61
         },
         { name : "Bertie", 
         description :[ "indoor","ferns","spring","indoor","red","meduim"],
         image : bertie,
         price : 10 
         ,id: 81
         },
   
      ]
    } ,

    {name : 'Pots',
    filterList : [ [  ["type" ,indoor ] , ["indoor",indoor] , ["outdoor",outdoor] ] ,
                   [ ["material" , outdoor],["recyclable plastic",pot3] ],
                   [ ["color" , flower],["red", outdoor],["black",outdoor],["green",pot2],["white",pot1 ] ] 
                 ],
    products : [ 
        {name : "Fractured pot",
        id:"pot1",
        description: ["indoor","black","M","recycled plastic"],
        price : 10,
        image : pot1,
        new : true ,
        colors : ["white","blue","black"]
        } 
        ]
      }  ,
  
    {name : 'Plant care',
    filterList : [ 'Tools & accessories','Indoor plant care ' ,'Outdoor plant care' ] 
    } , 
 
  
    {name : 'Gifts',
    filterList : [ 'Easy to look after gifts ', 'Pet and child safe gifts', 'Patterned and unusual gifts','Gift Vouchers']
    } 
 ] ; 

  