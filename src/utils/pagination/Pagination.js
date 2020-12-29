import s from "../../components/main/users/Users.module.css";
import React, {useState} from "react";

const Pagination = ({totalItemsCount, pageSize, currentPage, portionSize= 10, onPageChanged}) => {
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const numberOfPortion = Math.ceil(pageCount / portionSize);
  const [currentPortion, changePortion] = useState(1)
  let currentPortionLeft = (currentPortion - 1) * portionSize + 1;
  let currentPortionRight = currentPortion * portionSize;

  let pages = [];
  while (pages.length < pageCount) {
    pages.push(pages.length)
  }

  return (
    <div>
      {currentPortion > 1 && <button onClick={() => changePortion(currentPortion-1)}>Prev</button>}
      {
        pages.filter(p => p >= currentPortionLeft && p <= currentPortionRight)
          .map(p => {
            return <span
              key={p}
              className={currentPage === p ? s.pagesActive : null}
              onClick={() => {
                onPageChanged(p)
              }}
            >{p}</span>
        })
      }
      {currentPortion <= numberOfPortion && <button onClick={() => changePortion(currentPortion+1)}>Next</button>}
    </div>
  )
}

export default Pagination