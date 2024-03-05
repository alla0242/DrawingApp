import FohButton from "../Components/FohButton";
const BoH = ({
    width,
    height,
    src
}) => {

//add logic here

    return(
        <div>
            <FohButton
      width={200}
      height={200}/>
        <img
            id={'kitchen'}
            src={src}
            alt={'test'}
            />
        </div>
    )
}

export default BoH;