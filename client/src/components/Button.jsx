import React from 'react';

export default function Button(props) {
    return (
        <>
            <div className="col-10 text-end ms-5 bg-primary">
                <button className='col-10 btn btn-secondary my-5'>
                    {props.text}
                </button>
            </div>
        </>
    )
}
