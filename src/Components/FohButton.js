import React from "react";
const FohButton = ({
    height,
    width
}) => {

let imageData

    function saveCanvas(){
        // console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext('2d')
        imageData = canvas.toDataURL('image/png', 1)
        console.log(imageData)



        //Cache
    let imageName = crypto.randomUUID();
          let avatarReq = new Request(imageName);
    let avatarRes = new Response(imageData);
        caches.open('myCache').then((cache)=>{
            let myCache = cache
console.log(imageData)
            return myCache.put(avatarReq, avatarRes)
        })


        //API

        // app.post(()=>{

        // })
    }

        function loadCanvas(){
 
// let myImage = document.getElementById('kitchen')
// myImage.src = imageData;


caches.open('myCache')
      .then((cache) => {
        return cache.keys()
          .then((requests) => {
            const dataPromises = requests.map((request) => {
              return cache.match(request)
            });

            return Promise.all(dataPromises);
          }).then((allFriendData) => {
            allFriendData.forEach((friendData) => {
              })
                  let myImage = document.getElementById('kitchen')
myImage.src = imageData;

          });
      })
      .catch((error) => {
        console.error(error.message);
      });


    // const link = document.createElement('a');
    // link.src = imageData;
    // link.download = `${new Date()}`;
    // link.click();
        // console.log(imageData)

    }

        function clearCanvas(){
        // console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d')
        ctx.reset()
    }

    return(
        <div>
        <button
        height={height}
        width={width}
        id={'saveButton'}
                onMouseDown={saveCanvas}>
            Save
        </button>
                <button
        height={height}
        width={width}
        id={'loadButton'}
                onMouseDown={loadCanvas}>
            Load
        </button>
                <button
        height={height}
        width={width}
        onMouseDown={clearCanvas}
        id={'clearButton'}>
            Clear
        </button>
        
        </div>
        
    )
}

export default FohButton