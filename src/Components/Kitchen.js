import FohButton from "./FohButton";


const Kitchen = ({
    width,
    height,
    src
}) => {

//add logic here


    return(
        <div>
            <FohButton/>
        <img
            id={'kitchen'}
            src={src}
            alt={'test'}
            />
        </div>
    )
}

export default Kitchen;

