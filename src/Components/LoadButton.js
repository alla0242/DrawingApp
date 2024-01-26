

const LoadButton = ({
    height,
    width
}) => {



    function loadCanvas(){
        console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d')
        let imageData = ctx.restore()
        console.log(imageData)
    }


    return(
        <button
        height={height}
        width={width}
        id={'loadButton'}
                onMouseDown={loadCanvas}>
            Load
        </button>
        
    )
}

export default LoadButton