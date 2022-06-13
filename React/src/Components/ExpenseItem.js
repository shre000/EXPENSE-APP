import './ExpemseItem.css';
import React  from "react";
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) { //making of components


    // let title = props.title;
    // const [Newtitle, setNewTitle] = useState("");
    // const [title, setTitle] = useState(props.title);//setTitle is function 

    // function clickhandler() {
    //     setTitle('New Title...');

    //     // title = "new titile";
    //     // console.log(title);
    //     // alert("New Title");
    // }

    // function changeHandler (event){
    //     setNewTitle(event.target.value);
    // }

    return (
        <div className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-info">
                <h2>{  props.title }</h2>
                <div className="expense-price">Rs.{props.amount}</div>
            </div>
            {/* <input type="number" value = {Newtitle}  onChange = {changeHandler}></input>
            <button onClick={clickhandler}>Change Title</button> */}

        </div>
    );
}
//{ props.date.toISOString()}
export default ExpenseItem;