

const ClearButton = ({
    height,
    width
}) => {



    function clearCanvas(){
        console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d')
        ctx.reset()
    }


    return(
        <button
        height={height}
        width={width}
        onMouseDown={clearCanvas}
        id={'clearButton'}
        />
    )
}

export default ClearButton