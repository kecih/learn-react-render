const BlueButton = ({onCustomClick, caption}) => {
    return <div>
    <button className='btn btn-primary' onClick={onCustomClick}>
        {caption}
    </button>
    </div>
}
export default BlueButton;