

const Kitchen = ({
    width,
    height,
    src
}) => {

//add logic here

    return(
        <div>
        {/* <canvas
            width={width}
            height={height}
            id={'kitchen'}
            style={canvasStyle}
        /> */}
        <img
            id={'kitchen'}
            src={src}
            alt={'test'}
            />
        </div>
    )
}

export default Kitchen;

// const canvasStyle = {
//     border: "1px solid black"
// }
