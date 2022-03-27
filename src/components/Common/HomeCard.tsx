import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { changeMedium } from "../../features/typeSlice";

type Props = {
    featured : boolean,
    title: string,
    description: string,
    image: any,
    type: boolean

}

const HomeCard = (props: Props) =>{

    const dispatch = useDispatch()

    return(
        <div className= "col-lg-3 art-item">
            <div className="card card-shadow">
            <img className="card-img-top rounded float-start" width="200px" height="200px" src={props.image} alt="..."/>
            {props.featured ? 
                <div className="card-header">
                  Featured
                </div>
                :
                null}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group" >
                    <Link to='/portfolio' type="button" className="btn btn-sm btn-outline-primary btn-block" onClick={() =>{dispatch(changeMedium(props.type))}}>Visit</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCard;