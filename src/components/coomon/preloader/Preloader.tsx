import preloader from "../../../assets/images/preloader.gif";
import React from "react";
type PreloaderPropsType = {

}

export const Preloader = (props: PreloaderPropsType) => {
    return  <div style={{position: 'absolute', margin: '30vh 40%'}}>
        <img src={preloader} style={{width: '60px', height: '60px'}}/>
    </div>
}