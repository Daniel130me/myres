import React, { useState, useEffect } from 'react';

function Resume1({ user }) {
    const [userData, setUserData] = useState(user)
    const [isText, setIsText] = useState(true)
    const monthsList = ['Present', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { firstName, lastName, summary, experience } = userData
    const [history, setHistory] = useState(() => {
       return localStorage.getItem('firstTemplate') ? JSON.parse(localStorage.getItem('firstTemplate')) : [] 
    })

    // var history = []
    // console.log(history)
    const [current, setCurrent] = useState(history.length-1) 
    // console.log("histo")
    // console.log(history[14])
    const handleChange = () => {
        // console.log(current)
        const newHistory = history.slice(0,current+1)
        setHistory(newHistory)
        console.log(userData)
        const newArray = { ...userData }
        newHistory.push(newArray)
        console.log(newArray)
        console.log(newHistory)
        
        // // get the curent index
        // // set new current
        // setCurrent(newHistory.length)
        // slice the history up to that point before it
        // push data into history
        // setitem into localStorage
        localStorage.setItem('firstTemplate', JSON.stringify(newHistory))
        console.log(current+1)
        setCurrent(current+1)
    }
    const handlePrev = () => {
        const newcurrent = current-1
        setCurrent(newcurrent)
        setUserData(history[newcurrent])
        console.log(newcurrent)
        console.log(history[newcurrent])
    }
    const handleNext = () => {
        const newcurrent = current+1
        setCurrent(newcurrent)
        setUserData(history[newcurrent])
        console.log(newcurrent)
        console.log(history[newcurrent])
        // history[current]
        // setUserData()
        // history.push(newArray)
        // localStorage.setItem('firstTemplate', JSON.stringify(history))
    }
    
    const removezero = (monthNum) => monthNum.startsWith("0") ? monthNum.split("")[1] : monthNum
    const addzero = (monthNum) => monthNum.length === 1 ? '0' + monthNum : monthNum
    const filterList = (index) => {
        const newArray = { ...userData }
        let filt = newArray.experience[index].description.filter((item) => item !== '')
        newArray.experience[index].description = filt
        setUserData(newArray)
    }

    const filterObject = () => {
        const newArray = { ...userData }
        let newObject = newArray.skills.filter((item) => {
         return(   item.name != '')
        })
        newArray.skills = newObject
        console.log(newArray)
        setUserData(newArray)
    }
    const changeDateType = (element, index, section, datePosition, flag) => {
        const newArray = { ...userData }
        newArray[section][index][datePosition].isFlagged = flag
        element.type = flag ? 'month' : 'text'
        setUserData(newArray)
    }

    const eduDup = {
        "start": {
            "year": 1970,
            "month": 9,
            "day": 0
        },
        "end": {
            "year": 1971,
            "month": 11,
            "day": 0
        },
        "fieldOfStudy": "Field of study",
        "degree": "Degree type",
        "schoolName": "Name of institution"
    }
    const certDup = {
        "name": "Certificate Name",
        "start": {
            "year": 2021,
            "month": 6,
            "day": 0
        },
        "end": {
            "year": 0,
            "month": 0,
            "day": 0
        },
        "authority": "Name of institution"
    }
    const expDup =    {
        "companyName": "SalesPlat Technologies",
        "title": "Lead Product Designer",
        "location": "Lagos, Nigeria",
        "description": [
            "Managing and leading multiple teams of designers, providing guidance, and feedback on their work.",
            "Overseeing the development of multiple products and their respective teams ensuring that each product's design aligns with its specific goals and objectives and that the user experience is intuitive and engaging."
        ],
        "start": {
            "year": 2022,
            "month": 10,
            "day": 0
        },
        "end": {
            "year": 0,
            "month": 0,
            "day": 0
        }
    }
        
    return (
        <>
            <div className='text-center mb-5'>
                <input type='text' className='mb-4' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.firstName = e.target.value
                    setUserData(newValue)
                }} value={userData.firstName} />
                <input type='text' className='mb-4' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.lastName = e.target.value
                    setUserData(newValue)
                }} value={userData.lastName} autoFocus />

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
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.experience[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.experience[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeDateType(e.target, index, 'experience', 'start', false)}
                                        onFocus={(e) => changeDateType(e.target, index, 'experience', 'start', true)}
                                        value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                    <p>-</p>
                                    <input type='text' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.experience[index].end.month = removezero(e.target.value.split("-")[1])
                                        newValue.experience[index].end.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeDateType(e.target, index, 'experience', 'end', false)}
                                        onFocus={(e) => changeDateType(e.target, index, 'experience', 'end', true)}
                                        value={!item.end.isFlagged ? yearEnd : item.end.year + '-' + addzero(item.end.month.toString())} placeholder='February 2024' />
                                </div>
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
                                        <textarea rows="1" cols="100" placeholder='Add new text' value={eachitem}
                                            onChange={(e) => {
                                                const newValue = { ...userData }
                                                newValue.experience[index].description[descIndex] = e.target.value
                                                setUserData(newValue)
                                            }} onBlur={() => filterList(index)}

                                        />
                                    </div>
                                ))}
                                <button type="button" id={'btn-' + index} onClick={() => {
                                    const newItem = { ...userData }
                                    newItem.experience[index].description = [...userData.experience[index].description, ""]
                                    setUserData(newItem)
                                }}>+Add New</button>
                            </div>
                        </div>
                    )
                })}
                <button type="button" onClick={() => {
                    const newItem = { ...userData }
                    newItem.experience.push(expDup)
                    setUserData(newItem)
                }}>+Add New</button>
                <button type='button' onClick={handleChange}>history</button>
                <button type='button' onClick={handlePrev} disabled={current === 0}>prev</button>
                <button type='button' onClick={handleNext} disabled={current === history.length-1}>next</button>
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
                    const { schoolName, degree, fieldOfStudy } = item
                    const monthNumStart = monthsList[item.start.month]
                    const monthNumEnd = monthsList[item.end.month]
                    var yearEnd;
                    if (item.end.year === 0) {
                        yearEnd = 'Present'
                    }
                    else {
                        yearEnd = monthNumEnd + ' ' + item.end.year
                    }
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.educations[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.educations[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeDateType(e.target, index, 'educations', 'start', false)}
                                        onFocus={(e) => changeDateType(e.target, index, 'educations', 'start', true)}
                                        value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                    <p>-</p>
                                    <input type='text' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.educations[index].end.month = removezero(e.target.value.split("-")[1])
                                        newValue.educations[index].end.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeDateType(e.target, index, 'educations', 'end', false)}
                                        onFocus={(e) => changeDateType(e.target, index, 'educations', 'end', true)}
                                        value={!item.end.isFlagged ? yearEnd : item.end.year + '-' + addzero(item.end.month.toString())} placeholder='February 2024' />
                                </div>

                                <div> | </div>
                                <input type='text' className='col-sm-8' onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.educations[index].schoolName = e.target.value
                                    setUserData(newValue)
                                }} value={schoolName} />
                                <div> | </div>
                                <input type='text' className='col-sm-8' value={fieldOfStudy} onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.educations[index].fieldOfStudy = e.target.value
                                    setUserData(newValue)
                                }} />
                            </div>
                            <div>
                                <input type='text' className='col-sm-8' value={degree} onChange={(e) => {
                                    const newValue = { ...userData }
                                    newValue.educations[index].degree = e.target.value
                                    setUserData(newValue)
                                }} />

                                {/* experience items - list */}
                            </div>
                        </div>
                    )
                })}
                <button type="button" onClick={() => {
                    const newItem = { ...userData }
                    newItem.educations.push(eduDup)
                    setUserData(newItem)
                }}>+Add New</button>
            </div>
            <div className='mb-5'>
                {/* //education title */}
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[3] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[3]} className='titleClass text-muted' />
                {userData.certifications.map((item, index) => {
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
                    return (
                        <div key={index}>

                            {/* //experience date and office */}
                            <div className='d-flex'>
                                <div className='d-flex col-sm-4 flex-grow-1'>
                                    <input type='text' className='textDateInput' onChange={(e) => {
                                        const newValue = { ...userData }
                                        newValue.certifications[index].start.month = removezero(e.target.value.split("-")[1])
                                        newValue.certifications[index].start.year = e.target.value.split("-")[0]
                                        setUserData(newValue)
                                    }} style={{ border: 'none', resize: 'none', backgroundColor: 'transparent' }}
                                        onBlur={(e) => changeDateType(e.target, index, 'certifications', 'start', false)}
                                        onFocus={(e) => changeDateType(e.target, index, 'certifications', 'start', true)}
                                        value={!item.start.isFlagged ? monthsList[item.start.month] + ' ' + item.start.year : item.start.year + '-' + addzero(item.start.month.toString())} placeholder='February 2024' />
                                </div>
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
                            {/* experience items - list */}
                        </div>
                    )
                })}
                <button type="button" onClick={() => {
                    const newItem = { ...userData }
                    newItem.certifications.push(certDup)
                    setUserData(newItem)
                }}>+Add New</button>
            </div>
            <div className='mb-5'>
                <input type='text' onChange={(e) => {
                    const newValue = { ...userData }
                    newValue.sections[4] = e.target.value
                    setUserData(newValue)
                }} value={userData.sections[4]} className='titleClass text-muted' />
                <div style={{ marginLeft: '20px' }}>
                    {userData.skills.map((eachitem, skillIndex) => (
                        <div className='d-flex' key={skillIndex}>
                            <i>1</i>
                            <textarea onChange={(e) => {
                                const newValue = { ...userData }
                                newValue.skills[skillIndex].name = e.target.value
                                setUserData(newValue)
                            }} rows="1" cols="100" onBlur={filterObject} placeholder='Add new text' value={eachitem.name}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={(e) => {
                        const newValue = { ...userData }
                        newValue.skills[newValue.skills.length] = {"name":"" }
                        setUserData(newValue)
                    }}>+Add</button>
                </div>
            </div>
        </>
    );
}

export default Resume1;
