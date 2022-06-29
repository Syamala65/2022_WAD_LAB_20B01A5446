// var nd=require('needle')

// var url="https://api.themoviedb.org/3/movie/550?api_key=a5afd9ac99041a0759bdfb134d346113"

// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         var results=body.results
//         for(ele in results)
//             console.log(results[ele].body)
// })

// var nd=require('needle')

// var url="https://api.mapbox.com/geocoding/v5/mapbox.places/ongole.json?access_token=pk.eyJ1Ijoic3lhbWFsYTY1IiwiYSI6ImNsM28xM2ZqMDA0dXgzY3JzcHFybGpjb2YifQ.PDxVb_h25xY3MTuv3kT2Ew"

// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(JSON.parse(body))
// });

// nd.get(url,(err,response,body)=>{
//     if(err)
//         console.log(err)
//     else
//         var results=body.results
//         for(ele in results)
//             console.log(results[ele].body)
// })

var nd=require('needle')

var url="http://api.weatherstack.com/current?access_key=1e4251a458657f146c06091c1ab39a49&query=New York"

nd.get(url,(err,response,body)=>{
    if(err)
        console.log(err)
    else
        console.log(body)
});

var nd=require('needle')

var url="http://api.weatherstack.com/current?access_key=1e4251a458657f146c06091c1ab39a49&query=New York"

nd.get(url,(err,response,body)=>{
    if(err)
        console.log(err)
    else
        console.log(body.current.temperature)
        console.log(body.location.lat)
        console.log(body.location.lon)
        var desc=body.current.weather_descriptions
        for(ele in desc)
            console.log(desc[ele])
});