import React from 'react'
import './Property.css'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { AiTwotoneCar } from 'react-icons/ai'
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md'
import { FaShower } from "react-icons/fa"
import Heart from '../../components/Heart/Heart'

const Property = () => {

  // Fetch data of an individual property
  const { pathname } = useLocation()  // using react-hook to get id path
  const id = pathname.split("/").slice(-1)[0]
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))

  if (isLoading || !data) {
    return (
      <div className="wrapper flexCenter" style={{ height: '100vh' }}>
        <span>Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        <div className="like">
          <Heart id={id} />
        </div>

        <img src={data?.image} alt="" />

        <div className="flexCenter property-details">
          <div className="flexColStart left">
            <div className="flexStart head">
              <span className='primaryText'>{data?.title}</span>
              <span className='orangeText' style={{ fontSize: "1.5rem" }}>${data?.price}</span>
            </div>

            {/* Facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>

              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parking} Parkings</span>
              </div>

              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Bedrooms</span>
              </div>
            </div>

            <div className="flexColStart des">
              <span className="secondaryText" style={{ textAlign: "justify" }}> {data?.description} </span>
            </div>

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className='secondaryText'>
                {data?.address}, {data?.city}, {data?.country}
              </span>
            </div>

            <div className="flexStart btn">
              <button className='button'>Book your visit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
