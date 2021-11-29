import React, {useState} from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber -1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize


    return <div>
        { <button disabled={portionNumber <= 1} onClick={()=>{setPortionNumber(portionNumber -1)}}>PREV</button>}

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)

            .map(p => <span onClick={(e) => {
            props.onPageChanged(p)
        }} className={props.currentPage === p ? s.selectedPage : s.pages}>{p}</span>)}


        {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber +1)}}>NEXT</button>}
    </div>

}
