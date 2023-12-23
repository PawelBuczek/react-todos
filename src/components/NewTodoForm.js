import React from "react";

function NewTodoForm() {

    const descriptionChange = (event) => {
        console.log('description', event.target.value);
    } 

    const assignedChange = (event) => {
        console.log('assigned', event.target.value);
    } 

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    required
                    onChange={assignedChange}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                    className='form-control' 
                    rows={3} 
                    required
                    onChange={descriptionChange}
                    ></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm