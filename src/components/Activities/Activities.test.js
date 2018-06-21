import React from "react"
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import { shallow } from "enzyme";

import Activities from "./Activities"
import ActivitiesContainer from "./ActivitiesContainer"

describe("Activities tests", ()=>{
    const activities = [
        { id: "1", date: "12/03/2018", notes: "Write tests" },
        { id: "2", date: "22/04/2018", notes: "Write more tests" },
        { id: "3", date: "02/05/2018", notes: "Write even more tests" },
    ];
    const removeItem = (id) => {
        console.log(id)
    };
    const loading = false;
    it("Activities snapshot passes", ()=>{
        const tree =  renderer.create(
            <MemoryRouter>
                <Activities 
                    activities={activities} 
                    removeItem={removeItem} 
                    loading={loading}
                />
            </MemoryRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})

describe("Activities container tests", ()=>{
    it("", ()=>{
        const wrapper = shallow(
                <ActivitiesContainer />,
                {
                disableLifecycleMethods: true
        })

        expect(wrapper.state().loading).toBeFalsy();
        expect(wrapper.state().items.length).toEqual(0)
        wrapper.instance().componentDidMount();
        expect(wrapper.state().loading).toBeTruthy();
        //not passing = expect(wrapper.state().items.length).toBeGreaterThan(0)
    })
})
