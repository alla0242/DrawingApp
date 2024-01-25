

const SaveButton = ({
    height,
    width
}) => {



    function saveCanvas(){
        console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d')
        ctx.save()
    }


    return(
        <button
        height={height}
        width={width}
        onMouseDown={saveCanvas}
        id={'saveButton'}
        />
    )
}

export default SaveButton