import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

const GoTop = ()=>{
    let routePath = useLocation();
    
    const onTop=()=>{
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        onTop();
    },[routePath])

    // console.log(routePath);

    return;
}

export default GoTop;