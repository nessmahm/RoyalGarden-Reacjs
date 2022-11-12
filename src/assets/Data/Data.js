import React from 'react';
import lizzie from '../Images/lizzie.jpg'
import tam from '../Images/lizzie.jpg'
export const SidebarData = [
    {
        title: 'Our Plants',
        path: '/plants',
        
        subNav: [

          {title : 'outdoor'},
          {title : 'indoor'}

          
          /*
          {
            title: 'border plants ',
            path: '/plants',
          },
          {
            title: 'flowering plants ',
            path: '/',
          },
          {
            title: 'garminated & aquatic',
            path: '/'
          },
          {
            title: 'grasses & cacti',
            path: '/',
          },
          {
            title: 'Trees',
            path: '/',
          },{
            title: 'Palm trees',
            path: '/',
          },
          {
            title: 'shrubs',
            path: '/',
          },
          */
        ]
      },

      {
        title: 'Our Products',
        path: '/',
       
        subNav: [
         
        ]
      },
      {
        title: 'Our Pets',
        path: '',
      
      },

      {
        title: 'Accessories',
        path: '/accessories',
      },
      {
        title: 'Gardening Tips',
        path: '/tips',
      }
    ];



    export const plantsData = [
      { type : 'indoor ' ,
        products : [

          {name : 'Lizzie',
           id : 1,
           price : '10$',
           image : lizzie
          }, 
           {name : 'Lizzie',
           id : 2,
           image : lizzie
,
           price : '10$'},

            {name : 'Lizzie',
           id : 3,      
           image : lizzie,
           price : '10$'},

            {name : 'Lizzie',
           id : 4,
           price : '10$',  
           image :lizzie
          }, 

           {name : 'Lizzie',
           id : 5, 
           image : lizzie,
           price : '10$'}

        ] } ,


      { type : 'outdoor ',
        products : [
          {name : 'tam',
           id : 1 ,
           price :'50$',
           image : tam
          },

           {name : 'tam',
           id : 2 ,
           price :'50$' ,
           image : tam
          },

           {name : 'tam',
           id : 3 ,
           price :'50$',
           image :tam
          },

           {name : 'tam',
           id : 4 ,
           price :'50$',
           image : tam
          },

           {name : 'tam',
           id : 5 ,
           price :'50$',
           image : tam
          },

           {name : 'tam',
           id : 6 ,
           price :'50$',
           image : tam
          },

           {name : 'tam',
           id : 7 ,
           price :'50$',
           image : tam
          },
        ] } ,

     
    
    ]
