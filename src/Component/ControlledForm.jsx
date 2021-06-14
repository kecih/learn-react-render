import React from 'react';

const ControlledForm = () => {
const [name, setName] = React.useState('');
const [isMember, setIsMember] = React.useState(false);
const [gender, setGender] = React.useState(0);
const [category, setCategory] = React.useState('');
const [textarea, setTextArea] = React.useState('');

const handleSubmit = event => {
event.preventDefault()
const formData = {name, isMember, gender, category, textarea};
console.log(formData);
alert('Name: ' + formData.name + '\n' +
'isMember: ' + formData.isMember + '\n' +
'Gender: ' + formData.gender + '\n' +
'Category: ' + formData.category + '\n' +
'Textarea: ' + formData.textarea);
}
return (
<div className="container">
    <h1 className="text-center">Animals Form</h1>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>
                Name: <input type="text" className='form-control' value={name} onChange={(e)=>
                setName(e.target.value)} />
            </label>
        </div>
        <br />
        <div className='form-group'>
            <label>
                Member: <input type="checkbox" checked={isMember} onChange={(e)=>
                setIsMember(e.target.checked)}/>
            </label>
        </div>
        <br />
        <div className='form-group'>
            <label>
                <input type="radio" name='gender' onChange={(e)=> setGender(1)}/> Male
                <br />
                <input type="radio" name='gender' onChange={(e)=> setGender(2)}/> Female
            </label>
        </div>
        <br />
        <div className="form-group">
            <label>Animals</label>
            <select defaultValue={category} className="form-control" onChange={(e)=>
                setCategory(e.target.value)}>
                <option value="">Choose your animal</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Elephant">Elephant</option>
                <option value="Giraffe">Giraffe</option>
            </select>
        </div>
        <br />
        <div className="form-group">
            <label>Text Area</label>
            <textarea defaultValue={textarea} cols="30" rows="10" className="form-control"
                onChange={(e)=> setTextArea(e.target.value)}></textarea>
        </div>
        <br />
        <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
</div>
)
}
export default ControlledForm;