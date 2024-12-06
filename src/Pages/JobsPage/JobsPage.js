import React, { useState } from 'react'

import coverImg from '../../assets/images/coverImg.webp'
import profileImg from '../../assets/images/profileImg.webp'

import './JobsPage.scss'
import Card from '../../Components/Card/Card'
import JobSection from '../../Components/JobSection/JobSection'

function JobsPage() {

  let [toggle, setToggle] = useState("")

  return (
    <div className='findJobPageMain'>
      <div className='container'>
        <div className="pageLayout">
          <div className="profileInfo">
            <Card className="info">
              <div className="coverImg">
                <img src={coverImg} alt='Albert Flores Cover' />
              </div>
              <div className='profileImageDiv'>
                <img src={profileImg} alt='Albert Flores Profile' />
              </div>
              <div className='profileContent'>
                <div className='heading'>
                  <h2>Albert Flores</h2>
                </div>
                <div className='textDiv'>
                  <p>Senior Product Designer &nbsp; | &nbsp; UI/UX Designer &nbsp; | &nbsp; Graphic Designer &nbsp; | &nbsp; Web...</p>
                </div>
                <div className='textDiv2'>
                  <p>Clinton, Maryland</p>
                </div>
              </div>
            </Card>

            <Card className="actions">
              <div className='actionList'>
                <div className='list'>
                  <div className='textDiv'>
                    <p>Profile Visitors</p>
                  </div>
                  <div className='count'>
                    <span>140</span>
                  </div>
                </div>
                <hr />
                <div className='list'>
                  <div className='textDiv'>
                    <p>Resume Viewers</p>
                  </div>
                  <div className='count'>
                    <span>20</span>
                  </div>
                </div>
                <hr />
                <div className='list'>
                  <div className='textDiv'>
                    <p>My Jobs</p>
                  </div>
                  <div className='count'>
                    <span>88</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="calender">
              <div className={`calenderCorousel ${toggle}`} onClick={() => setToggle(toggle ? "" : "active")}>
                <div className='content'>
                  <div className='heading'>
                    <h3>My calendar</h3>
                  </div>
                  <div className='textDiv'>
                    <p>Upcoming Interviews</p>
                  </div>
                </div>
                <div className='icon'>
                  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.91 0.433005L12.97 1.49401L7.19297 7.27301C7.1004 7.36616 6.99033 7.44009 6.86908 7.49054C6.74783 7.54098 6.6178 7.56696 6.48647 7.56696C6.35514 7.56696 6.22511 7.54098 6.10386 7.49054C5.98261 7.44009 5.87254 7.36616 5.77997 7.27301L-3.04452e-05 1.49401L1.05997 0.434005L6.48497 5.85801L11.91 0.433005Z" fill="#333333" />
                  </svg>
                </div>
              </div>

              <div className={`carouselBody ${toggle}`}>
                <div className='heading'>
                  <h2>Your Content Or List</h2>
                </div>
              </div>
            </Card>
          </div>

          <div className="jobListingMain">
            <div className='heading'>
              <h1>Find your Dream Job, <span>Albert!</span></h1>
            </div>
            <div className='textDiv'>
              <p>Explore the latest job openings and apply for the best opportunities available today!</p>
            </div>

            <div className='filterDiv'>
              <div className='inputDiv searchInput'>
                <input type='text' placeholder='Job Title, Company, or Keywords' />
              </div>

              <div className='blockLine' />

              <div className='inputDiv'>
                <select>
                  <option>Select Location</option>
                  <option>Lorem Ipsum</option>
                  <option>Lorem Ipsum</option>
                  <option>Lorem Ipsum</option>
                </select>
              </div>

              <div className='blockLine' />

              <div className='inputDiv two'>
                <select>
                  <option>Job Type</option>
                  <option>Lorem Ipsum</option>
                  <option>Lorem Ipsum</option>
                  <option>Lorem Ipsum</option>
                </select>
              </div>
              <div className='btnDiv'>
                <button>
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 17L13.6566 14.4066" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                    <path d="M12.8477 7.5487C12.8428 8.96647 12.3401 10.3375 11.4274 11.4224C10.5146 12.5072 9.24973 13.237 7.85367 13.4842C6.45762 13.7315 5.01908 13.4805 3.78925 12.775C2.55943 12.0696 1.61647 10.9546 1.12504 9.62471C0.63362 8.29482 0.624957 6.83456 1.10057 5.49894C1.57618 4.16331 2.50583 3.0372 3.7272 2.31723C4.94857 1.59726 6.38403 1.32921 7.78292 1.55986C9.18181 1.79051 10.4552 2.50521 11.3808 3.57917" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                  </svg>
                  &nbsp;
                  Search
                </button>
              </div>
            </div>

            <div className='similarDiv'>
              <div className='textDiv'>
                <p>Similar:</p>
              </div>
              <div className='badgesMain'>
                <div className='badge'>
                  <div className='textDiv'>
                    <p>Frontend</p>
                  </div>
                </div>
                <div className='badge'>
                  <div className='textDiv'>
                    <p>Backend</p>
                  </div>
                </div>
                <div className='badge'>
                  <div className='textDiv'>
                    <p>Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='JobLists'>
              <div className='JobListings'>
                <JobSection title="Featured Jobs" />
              </div>

              <div className='JobListings'>
                <JobSection promted={false} title="Recommended Jobs" />
              </div>

              <div className='JobListings'>
                <JobSection promted={false} title="Recommended Jobs" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsPage