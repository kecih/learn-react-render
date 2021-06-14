import React from "react";

const UncontrolledForm = () => {
    const inputName = React.useRef(null);
    const inputFile = React.useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        alert(inputName.current.value);
        alert(inputFile.current.files[0].name);
    }
    return <form onSubmit={handleSubmit}>
        <label>
            Name: <input type="text" placeholder='Your Name' ref={inputName} />
        </label>
        <br />
        <label>
            File: <input type="file" ref={inputFile} />
        </label>
        <br />
        <input className='btn btn-primary' type="submit" value="Submit" />
    </form>
}
export default UncontrolledForm;