import React, { useState } from 'react'

const Filter = () => {
    const [search, setSearch] = useState('')
    const students = ["Shashank", "Anmol", "Shivam", "Anshul", "Zahid", "Mukesh"]


    const filtered = students.filter((item) => item.includes(search));
    console.log(filtered);

    return (
        <>

            <div className='App'>
                <h2>Filter</h2>
                <div className='d-flex justify-content-center'>
                    <input onChange={(e) => setSearch(e.target.value)} placeholder='Search students ...' type='search' className='form-control w-25' />
                </div>
                <div className='mt-4'>
                    <h4>Students</h4>
                    {
                        students.filter((item) => item.includes(search)).map((item) => {
                            return <div>{item}</div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Filter