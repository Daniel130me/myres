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

function Resume1({ user }) {
    const [userData, setUserData] = useState(user)
    const [isText, setIsText] = useState(true)
    // const [positionData, setPositionData] = useState(user.position)
    const monthsList = ['Present', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { firstName, lastName, summary, experience } = userData
    // console.log(typeof experience[1].start.month.toString())
    const removezero = (monthNum) => monthNum.startsWith("0") ? monthNum.split("")[1] : monthNum
    const addzero = (monthNum) => monthNum.length === 1 ? '0' + monthNum : monthNum

    const changeToDateEdu = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.educations[index].start = await { ...userData.educations[index].start, isFlagged: true }
        }
        else {
            newArray.educations[index].end = await { ...userData.educations[index].end, isFlagged: true }
        }
        setUserData(newArray)
        element.type = 'month'
    }

    const changeToTextEdu = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.educations[index].start = await { ...userData.educations[index].start, isFlagged: false }
        }
        else {
            newArray.educations[index].end = await { ...userData.educations[index].end, isFlagged: false }
        }
        // newArray.experience[index] = await { ...userData.experience[index], isFlagged: false }
        setUserData(newArray)
        element.type = 'text'
    }
    const changeToDateCert = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.certifications[index].start = await { ...userData.certifications[index].start, isFlagged: true }
        }
        else {
            newArray.certifications[index].end = await { ...userData.certifications[index].end, isFlagged: true }
        }
        setUserData(newArray)
        element.type = 'month'
    }

    const changeToTextCert = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.certifications[index].start = await { ...userData.certifications[index].start, isFlagged: false }
        }
        else {
            newArray.certifications[index].end = await { ...userData.certifications[index].end, isFlagged: false }
        }
        // newArray.experience[index] = await { ...userData.experience[index], isFlagged: false }
        setUserData(newArray)
        element.type = 'text'
    }
    const changeToDateExp = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.experience[index].start = await { ...userData.experience[index].start, isFlagged: true }
        }
        else {
            newArray.experience[index].end = await { ...userData.experience[index].end, isFlagged: true }
        }
        setUserData(newArray)
        element.type = 'month'
    }

    const changeToTextExp = async (element, index, datePosition) => {
        const newArray = await { ...userData }
        if (datePosition == 'start') {
            newArray.experience[index].start = await { ...userData.experience[index].start, isFlagged: false }
        }
        else {
            newArray.experience[index].end = await { ...userData.experience[index].end, isFlagged: false }
        }
        // newArray.experience[index] = await { ...userData.experience[index], isFlagged: false }
        setUserData(newArray)
        element.type = 'text'
    }
    // console.log(removezero('6'))
    return (
        <>
            <div className='text-center mb-5'>
                <h1 className='mb-4'>{firstName ? firstName + ' ' + lastName : 'John Doe'}</h1>
                <div className='d-flex align-items-center justify-content-around'>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Email: </span><input type='text' onChange={(e) => {
                        const newValue = { ...userData }
                        newValue.email = e.target.value
                        setUserData(newValue)
                    }} value={userData.email} /></p>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Tel: </span><input type='text' value={userData.tel} onChange={(e) => {
                        const newValue = { ...userData }
                        newValue.tel = e.target.value
                        setUserData(newValue)
                    }} /> </p>
                    <p className='mr-2 oswald_font' style={{ fontWeight: "300", fontSize: '15px' }}><span style={{ fontWeight: "400" }}>Address: </span><input type='text' value={userData.address} onChange={(e) => {
                        const newValue = { ...userData }
                        newValue.address = e.target.value
                        setUserData(newValue)
                    }} /> </p>
                </div>
            </div>
            {/* summary section starts */}
            <div className='mb-5'>
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[0] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[0]} className='titleClass text-muted' />
                <textarea cols='100' rows='1' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.summary = e.target.value
                    setUserData(newValue)
                }} value={summary} className='d-block' />
            </div>
            {/* summary section stops */}

            {/* EXPERIENCE SECTION starts */}
            <div className='mb-5'>
                {/* //experience title */}
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[1] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[1]} className='titleClass text-muted' />
                {userData.experience.map((item, index) => {
                    // console.log(item, index)
                    const { companyName, title, location, description } = item
                    const monthNumStart = monthsList[item.start.month]
                    const monthNumEnd = monthsList[item.end.month]
                    var yearEnd;
                    if (item.end.year === 0) {
                        yearEnd = 'Present'
                    }
                    else {
                        yearEnd = monthNumEnd + ' ' + item.end.year
                    }
                    // console.log(item.isFlagged)
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            {/* "Nov. 2019 - Present | Radisoon blue Hotel, Lagos, Niegria" */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.experience[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.experience[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeToTextExp(e.target, index, 'start')}
                                        onFocus={(e) => changeToDateExp(e.target, index, 'start')} value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                    <p>-</p>
                                    <input type='text' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.experience[index].end.month = removezero(e.target.value.split("-")[1])
                                        newValue.experience[index].end.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeToTextExp(e.target, index, 'end')}
                                        onFocus={(e) => changeToDateExp(e.target, index, 'end')} value={!item.end.isFlagged ? yearEnd : item.end.year + '-' + addzero(item.end.month.toString())} placeholder='February 2024' />
                                </div>
                                {/* <input type='text' className='col-sm-8' value={`${' | ' + companyName + ', ' + location}`} /> */}

                                <div> | </div>
                                <input type='text' className='col-sm-8' onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.experience[index].companyName = e.target.value
                                    setUserData(newValue)
                                }} value={companyName} />
                                <input type='text' className='col-sm-8' value={location} onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.experience[index].location = e.target.value
                                    setUserData(newValue)
                                }} />
                            </div>
                            <input type='text' value={item.title} className='positionTitle text-muted' />
                            {/* experience items - list */}
                            <div style={{ marginLeft: '20px' }}>
                                {item.description.map((eachitem, descIndex) => (
                                    <div className='d-flex' key={descIndex}>
                                        <i>1</i>
                                        <textarea rows="1" cols="100" placeholder='Add new text' autoFocus value={eachitem}
                                            onChange={(e) => {
                                                const newValue = { ...userData }
                                                newValue.experience[index].description[descIndex] = e.target.value
                                                setUserData(newValue)
                                            }}

                                        />
                                    </div>
                                ))}
                                <button type="button">+Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* EXPERIENCE SECTION stops */}
            {/* -------------------------------------------------------- */}


            <div className='mb-5'>
                {/* //education title */}
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[2] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[2]} className='titleClass text-muted' />
                {userData.educations.map((item, index) => {
                    // console.log(item, index)
                    const { companyName, title, location, description } = item
                    const monthNumStart = monthsList[item.start.month]
                    const monthNumEnd = monthsList[item.end.month]
                    var yearEnd;
                    if (item.end.year === 0) {
                        yearEnd = 'Present'
                    }
                    else {
                        yearEnd = monthNumEnd + ' ' + item.end.year
                    }
                    // console.log(item.isFlagged)
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            {/* "Nov. 2019 - Present | Radisoon blue Hotel, Lagos, Niegria" */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.educations[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.educations[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeToTextEdu(e.target, index, 'start')}
                                        onFocus={(e) => changeToDateEdu(e.target, index, 'start')} value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                    <p>-</p>
                                    <input type='text' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.educations[index].end.month = removezero(e.target.value.split("-")[1])
                                        newValue.educations[index].end.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeToTextEdu(e.target, index, 'end')}
                                        onFocus={(e) => changeToDateEdu(e.target, index, 'end')} value={!item.end.isFlagged ? yearEnd : item.end.year + '-' + addzero(item.end.month.toString())} placeholder='February 2024' />
                                </div>
                                {/* <input type='text' className='col-sm-8' value={`${' | ' + companyName + ', ' + location}`} /> */}

                                <div> | </div>
                                <input type='text' className='col-sm-8' onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.educations[index].companyName = e.target.value
                                    setUserData(newValue)
                                }} value={companyName} />
                                <input type='text' className='col-sm-8' value={location} onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.educations[index].location = e.target.value
                                    setUserData(newValue)
                                }} />
                            </div>
                            <input type='text' value={item.title} className='positionTitle text-muted' />
                            {/* experience items - list */}

                        </div>
                    )
                })}
            </div>
            <div className='mb-5'>
                {/* //education title */}
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[3] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[3]} className='titleClass text-muted' />
                {userData.certifications.map((item, index) => {
                    // console.log(item, index)
                    const { name, authority } = item
                    const monthNumStart = monthsList[item.start.month]
                    const monthNumEnd = monthsList[item.end.month]
                    var yearEnd;
                    if (item.end.year === 0) {
                        yearEnd = 'Present'
                    }
                    else {
                        yearEnd = monthNumEnd + ' ' + item.end.year
                    }
                    // console.log(item.isFlagged)
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            {/* "Nov. 2019 - Present | Radisoon blue Hotel, Lagos, Niegria" */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.certifications[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.certifications[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeToTextCert(e.target, index, 'start')}
                                        onFocus={(e) => changeToDateCert(e.target, index, 'start')} value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                </div>
                                {/* <input type='text' className='col-sm-8' value={`${' | ' + companyName + ', ' + location}`} /> */}

                                <div> | </div>
                                <input type='text' className='col-sm-8' onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.certifications[index].name = e.target.value
                                    setUserData(newValue)
                                }} value={name} />
                                <input type='text' className='col-sm-8' value={authority} onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.certifications[index].authority = e.target.value
                                    setUserData(newValue)
                                }} />
                            </div>
                            <input type='text' value={item.title} className='positionTitle text-muted' />
                            {/* experience items - list */}

                        </div>
                    )
                })}
            </div>


        


           
            <div className='mb-5'>
                <h5 className='text-muted'>{userData.sections[4]}</h5>
                <div style={{ marginLeft: '20px' }}>
                    {userData.skills.map((eachitem, skillIndex) => (
                        <div className='d-flex' key={skillIndex}>
                            <i>1</i>
                            <textarea onChange={(e) => {
                                const newValue = { ...userData }
                                newValue.skills[skillIndex].name = e.target.value
                                setUserData(newValue)
                            }} rows="1" cols="100" placeholder='Add new text' autoFocus value={eachitem.name}
                            />
                        </div>
                    ))}
                    <button type="button">+Add</button>
                </div>
            </div>
        </>
    );
}

export default Resume1;
