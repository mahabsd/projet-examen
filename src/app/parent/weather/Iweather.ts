export interface Iweather 
    {
      coord:{
        // "lon":-0.13,
        // "lat":51.51
     },
     weather:[
        {
          //  "id":300,
          //  "main":"Drizzle",
          //  "description":"light intensity drizzle",
          //  "icon":"09d"
        }
     ],
     base:"",
     main:{
        // "temp":280.32,
        // "pressure":1012,
        // "humidity":81,
        // "temp_min":279.15,
        // "temp_max":281.15
     },
     visibility: number,
     wind:{
        // "speed":4.1,
        // "deg":80
     },
     clouds:{
        // "all":90
     },
     dt:number,
     sys:{
        // "type":1,
        // "id":5091,
        // "message":0.0103,
        // "country":"GB",
        // "sunrise":1485762037,
        // "sunset":1485794875
     },
     id :number,
     name:"",
     cod: number
     }