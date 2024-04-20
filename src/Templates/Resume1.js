import React, { useState, useEffect } from 'react';

// function EducationItem({ initialText, onTextChange }) {
//     const [text, setText] = useState(initialText);
//     console.log('1')
//     const handleChange = (e) => {
//         const newText = e.target.value;
//         setText(newText);
//         onTextChange(newText);
//     };
//     return (

//     );
// }

function Resume1(props) {
    const [experienceItems, setExperienceItems] = useState([
        "Teaching c++ to over 500 students",
        "Designing Interfaces",
        "I am here"
    ]);
    const [ experienceTitle, setExperienceTitle ] = useState('Nov. 2020 - Jan. 2023 | Radisoon Blu Hotel, Ikeja, Lagos, Nigeria')
    const addListItem = () => {
        setExperienceItems([...experienceItems, ""]);
    };
    // const handleChange = (index, value, stateName) => {
    //     const newText = [ ...stateName ]
    //     newText[index] = value
    //     setExperienceItems(newText)
    //     adjustTextareaRows(index);
    // }
    const adjustTextareaRows = (index) => {
        const textarea = document.getElementById(`textarea-${index}`);
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    const listHandler = () => {
        console.log(experienceItems)
        for (let i = 0; i < experienceItems.length; i++) {
            if (experienceItems[i] === '') {
                experienceItems.splice(i, 1)
            }
        }
        setExperienceItems([...experienceItems])
    }
    useEffect(() => {
        experienceItems.forEach((item, index) => adjustTextareaRows(index));
    }, [experienceItems]);
    return (
        <>
            <div className='text-center mb-5'>
                <h1 className='mb-4'>{props.user.firstName ? props.user.firstName + ' ' + props.user.lastName : 'John Doe'}</h1>
                <div className='d-flex align-items-center justify-content-around'>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Email: </span>koskodaniel@gmail.com</p>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Tel: </span>+23481-78-1234</p>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Address: </span>Oswald, US</p>
                </div>
            </div>
            <div className='mb-5'>
                <h5 className='text-muted'>SUMMARY</h5>
                <p className=''>A mobile and web developer for over a decade, transforming complex challenges to simple repetitive tasks for human use. A lover of dogs and men, training people to gain full knowledge of their potentials</p>
            </div>
            <div className='mb-5'>
                <h5 className='text-muted'>EXPERIENCE</h5>
                <textarea 
                id={`textarea`}
                rows="1"
                cols="100"
                style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    resize: 'none',
                    padding: '0',
                    margin: '0',
                    width: '100%',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    fontWeight: 'inherit'
                }}
                    value={experienceTitle}
                    onChange={ (e)=> setExperienceTitle(e.target.value) }
                />
                <div className='mylist' style={{ marginLeft: '20px' }}>
                    {experienceItems.map((item, index) => (
                        <div className='d-flex'>
                            <i>1</i>
                            <textarea
                                id={`textarea-${index}`}
                                rows="1"
                                cols="100"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    resize: 'none',
                                    padding: '0',
                                    margin: '0',
                                    width: '100%',
                                    fontFamily: 'inherit',
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit'
                                }}
                                placeholder='Add new text'
                                autoFocus
                                value={item}
                                onBlur={listHandler}
                                onChange={(e) => {
                                    const expitems = [ ...experienceItems ]
                                    expitems[index] = e.target.value
                                    setExperienceItems(expitems)
                                }}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addListItem}>+Add</button>
                </div>
            </div>
            <div className='mb-5'>
                <h5 className='text-muted'>EDUCATION</h5>
                <p>2020 | Federal University of Nigeria, Lagos, Nigeria</p>
                <ul>
                    <li>Teaching c++ to over 500 students</li>
                    <li>Designing Interfaces</li>
                </ul>
            </div>
            <div className='mb-5'>
                <h5 className='text-muted'>CERTIFICATION</h5>
                <p>2020 | Intermediate Python for Data analysis</p>
                <p>2021 | Intermediate Python for Data analysis</p>
                <p>2022 | Intermediate Python for Data analysis</p>
            </div>
            <div className='mb-5'>
                <h5 className='text-muted'>SKILLS</h5>
                <ul>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>Javascript</li>
                </ul>
            </div>
        </>
    );
}

export default Resume1;
