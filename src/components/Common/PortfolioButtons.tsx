import React from "react";
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'
import { RootState } from "../../app/store";
import { useDispatch } from 'react-redux';
import {changeMedium} from "../../features/typeSlice"

type Props = {
  children: any,
}
function PortfolioButtons(props: Props){

 const medium = useSelector((state: RootState)=> state.medium.value)
 const dispatch = useDispatch();

        return(
          <div className="container">
            <div className="d-grid gap-2 d-sm-block">
                <Button className="btn btn-lg btn-success web-btn mx-2" type="button" id="digitalBtn" aria-expanded="false" onClick={()=>dispatch(changeMedium({medium: "digital"}))} >
                    Digital
                </Button>
                <Button className="btn btn-lg btn-success web-btn mx-2" type="button" id="traditionalBtn"  aria-expanded="false" onClick={()=>dispatch(changeMedium({medium: "traditional"}))}>
                    Traditional
                </Button>
                </div>
                <div className="text-muted" id="btn-explainer">
                Click buttons to switch between art media.
            </div>
            {props.children}
            
          </div>
        );
      
}

export default PortfolioButtons;

