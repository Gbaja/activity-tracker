import React from "react";
import { Link } from "react-router-dom";

const NewActivityForm = (props) =>{
    return (
    <div className="container">
        <section className='display-item'>
            <button>
                <Link className="anchor_tags" to="/activities"> View past logs</Link>
            </button>
        </section>
        <section className="add-item">
            <form onSubmit={props.handleSubmit}>
                <input type="date"
                    name="date"
                    onChange={props.handleChange}
                    value={props.date} />
                <input type="text"
                    name="notes"
                    placeholder="What are you doing?"
                    onChange={props.handleChange}
                    value={props.notes} />
                <button>Save</button>
            </form>
        </section>

    </div>
    )
}

export default NewActivityForm;
