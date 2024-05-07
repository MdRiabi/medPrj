
import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void;
}

const ListGroup = ({items, heading, onSelectItem}:Props) => {
    const handelClick = (event: MouseEvent) => console.log(event);
    const [selectIndex, setSelectIndex] = useState(-1);
  return (
    <>
        <h1>{heading}</h1>
      <ul className="list-group">
        {
            items.map((item, index) => (
                <li
                className= {selectIndex === index ? "list-group-item active" :"list-group-item"}
                key={item}  
                onClick={() =>{setSelectIndex(index);
                    onSelectItem(item)
                }}
                >{item}</li>))
        }
      
      </ul>
    </>
  );
};

export default ListGroup;
