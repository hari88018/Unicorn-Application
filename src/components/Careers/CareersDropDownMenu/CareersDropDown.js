import React,{useState} from 'react'
import { CareersDropdown } from '../../Navitems'
import { Link } from 'react-router-dom'
import './CareersDropdown.css'
import Polygon from "../../../assets/Polygon 2.svg";

const CareersDropDown = () => {
    const [dropdown,setDropdown] = useState(false)
  return (
      <>
          <ul className={dropdown ? "CareersDropdown_Clicked" : "CareersDropdown-Submenu"}
              onClick={() => {
              setDropdown(!dropdown)
          }}>
              {CareersDropdown.map(item => {
                  return (
                      <li  key={item.id}>
                          <Link to={item.path} className={item.Cname} >
                              {item.title}
                              
                          </Link>
                      </li>
                  )
              })}
          </ul>
      </>
  )
}

export default CareersDropDown