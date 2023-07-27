import { useContext, useRef } from "react";
import { Task } from "../Apis/TaskStore";
import { GrAdd } from "react-icons/gr";
import { AiFillDelete , AiFillEdit } from "react-icons/ai";

let TaskGen = () => {
    const textref = useRef();
    const { data, handleCreate, handleDelete, handleEdit,handleSave,edit } = useContext(Task);

    return (
        <section >
            <article>
                <form onSubmit={handleCreate}>
                    <textarea name="" id="" cols="30" rows="10" ref={textref}></textarea>
                  {edit?<button onClick={()=>{handleSave(textref)}}>Save</button>:<button><GrAdd></GrAdd></button>}
                </form>
            </article>

            <article className="">
                {
                    data.length !== 0 ? data.map(value => {
                        return <div key={Math.random() * 1000}>
                            <h2>{value.task}</h2>
                            <div>
                                <button onClick={()=>handleDelete(value.id)}><AiFillDelete/></button>
                                <button onClick={()=>
                                    handleEdit(value.id,textref)
                                }><AiFillEdit/></button>
                            </div>
                        </div>
                    }): <h2>No Task Available</h2>
                }
            </article>
        </section>
    )

}

export default TaskGen;