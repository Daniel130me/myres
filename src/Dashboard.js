import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { Helmet } from 'react-helmet';
import './Dashboard.css'
import Data from './Data';
import Resume1 from './Templates/Resume1';
const Dashboard = () => {
    const [hideSideBar, setHideSideBar] = useState(true)
    const [fullName, setFullName] = useState('John Doe')
    const [userData, setUserData] = useState({})
    const sidebarHandler = () => {
        setHideSideBar(!hideSideBar); // Toggle the state
    }
    const fetchuserdata = () => {
        // axios fecth the data from the local database, 
        // if no data in localdb
        // fecth from realdb
        // save as recent in localdb history, and update the states for actual data
        let res = Data //data from local or realdb
        // res.firstName = ''
        setUserData(res)
        userData.firstName = null
        // console.log(userData.firstName)
    }

    useEffect(() => {
        fetchuserdata()
    }, [])
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className={`${hideSideBar ? 'd-none' : ''} col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark`}>
                    <div className="flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='first_name'>First name</label>
                                    <input type='text' placeholder='John' onChange={(e) => setFullName(e.target.value)} required></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='first_name'>Last name</label>
                                    <input type='text' placeholder='John' required></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='first_name'>First name</label>
                                    <input type='text' placeholder='John' required></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='first_name'>First name</label>
                                    <input type='text' placeholder='John' required></input>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col p-0 m-0">
                    <div className='p-2 d-flex justify-content-center shadow'>
                        <h4>MyRes</h4>
                    </div>
                    <div className='mt-5 mx-auto' style={{ maxWidth: "80%" }}>
                        <Resume1 user={userData} />
                    </div>
                    <button type='button' className='btn btn-primary' onClick={sidebarHandler} style={{ position: "fixed", bottom: "10px", right: "10px" }}>Edit</button>
                    <button type='button' className='btn btn-primary' onClick={fetchuserdata} style={{ position: "fixed", bottom: "50px", right: "10px" }}>Use Template</button>
                    {/* <Outlet /> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard