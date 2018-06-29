import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import Loading from "../Loading"

const Activities = props => {

  const {activities, removeItem, loading} = props;

  return (
    <Fragment>
      <div className="app">

        <section className="display-item">
          <div>
            <button>
              <Link className="anchor_tags" to="/landing">
                Back
              </Link>
            </button>
          </div>
          <div className="wrapper">
            {loading ? <Loading/> : <ul>
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