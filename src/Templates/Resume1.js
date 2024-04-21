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
    const [experienceTitle, setExperienceTitle] = useState('Nov. 2020 - Jan. 2023 | Radisoon Blu Hotel, Ikeja, Lagos, Nigeria')
    const [experience, setExperience] = useState('EXPERIENCE')
    const [position, setPosition] = useState(props.user.position[0].title)
    const [summaryTitle, setSummaryTitle] = useState('SUMMARY')
    const [summaryText, setSummaryText] = useState(props.user.summary)
    const [firstname, setFirstname] = useState(props.user.firstName)
    const [lastname, setLastname] = useState(props.user.lastName)
    const addListItem = () => {
        setExperienceItems([...experienceItems, ""]);
    };
    // const handleChange = (index, value, stateName) => {
    //     const newText = [ ...stateName ]
    //     newText[index] = value
    //     setExperienceItems(newText)
    //     adjustTextareaRows(index);
    // }
    // console

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
        const textarea = document.querySelectorAll('textarea')
        textarea.forEach((item) => {
            item.style.height = `${item.scrollHeight}px`
        })
    }, [experienceItems, summaryText, experienceTitle]);
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

            {/* summary section starts */}
            <div className='mb-5'>
                <input type='text' onChange={(e) => setSummaryTitle(e.target.value)} value={summaryTitle} className='titleClass text-muted' />
                <textarea cols='100' rows='1' onChange={(e) => setSummaryText(e.target.value)} value={summaryText} className='d-block' />
            </div>
            {/* summary section stops */}


            {/* EXPERIENCE SECTION starts */}
            <div className='mb-5'>
                {/* experience title */}
                <input type='text' onChange={(e) => setExperience(e.target.value)} value={experience} className='titleClass text-muted' />
                {/* experience date and office */}
                <textarea rows="1" cols="100" value={experienceTitle}
                    onChange={(e) => {
                        setExperienceTitle(e.target.value)
                    }}
                />
                <input type='text' onChange={(e) => setPosition(e.target.value)} value={position} className='positionTitle text-muted' />
                

                {/* experience items - list */}
                <div style={{ marginLeft: '20px' }}>
                    {experienceItems.map((item, index) => (
                        <div className='d-flex'>
                            <i>1</i>
                            <textarea rows="1" cols="100" placeholder='Add new text' autoFocus value={item} onBlur={listHandler}
                                onChange={(e) => {
                                    const expitems = [...experienceItems]
                                    expitems[index] = e.target.value
                                    setExperienceItems(expitems)
                                }}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addListItem}>+Add</button>
                </div>
            </div>
            {/* EXPERIENCE SECTION stops */}

            {/* education section starts */}
            <div className='mb-5'>
                <h5 className='text-muted'>EDUCATION</h5>
                <p>2020 | Federal University of Nigeria, Lagos, Nigeria</p>
                <ul>
                    <li>Teaching c++ to over 500 students</li>
                    <li>Designing Interfaces</li>
                </ul>
            </div>
            {/* education section stops */}


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
