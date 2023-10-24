import React, { useState } from "react";
import "./App.css";


const Maintodo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const additem = () => {

        if (!inputData) {
            /** !inputData means if there is no data in inputData   **/
        } else {
            setItems([...items, inputData]); /**   ...items = this is a spreac operator used with items to store previous data with new data   **/
            setInputData("");
        }

    }

    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updateditems);
    }

    const RemoveAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className="main_div">

                <div className="child_div">

                    <div className="heading">
                    
                            <img src="todo.png" height="95px"></img><br></br>
                            <span >chiraᧁ.dare𝒌ar</span>
                        
                    </div>

                    <div className="section1">
                        <div className="addItems">
                            <input type="text" placeholder="✍️ Add Items...." id="" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                            <img onClick={additem} src="add.png" height="30px " />

                        </div>
                    </div>




                    <div className="section2">

                        <div className="showItems">

                            {
                                items.map((element, ind) => {
                                    return (
                                        <div className="eachItem" key={ind}>
                                            <span>{element}</span>
                                            <img onClick={() => deleteItem(ind)}src="delete.png" height="35px" />
                                        </div>

                                    )

                                })
                            }



                        </div>


                    </div>

                    <div className="remove-item">
                        
                        <img onClick={RemoveAll} src="delete.png" height="45px" />
                    </div>

                </div>
            </div>

        </>
    );
}
export default Maintodo;