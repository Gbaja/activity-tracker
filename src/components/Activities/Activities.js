import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import Header from "../Header"

const Activities = props => {

  const {activities, removeItem, loading} = props;

  return (
    <Fragment>
      <div className="app">
        <Header />
        <section className="display-item">
          <div>
            <button>
              <Link className="anchor_tags" to="/">
                Back
              </Link>
            </button>
          </div>
          <div className="wrapper">
            {loading ? <div> Loading </div> : <ul>
              {activities.map(activity => {
                return <li key={activity.id}>
                  <h3>Date: {activity.date}</h3>
                  <p>Notes: {activity.notes}</p>
                  <button
                    onClick={() => removeItem(activity.id)}
                  >
                    Remove Item
                          </button>
                </li>
              })}
            </ul>
            }
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Activities;