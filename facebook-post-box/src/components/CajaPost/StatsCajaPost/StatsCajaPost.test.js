import React from "react";
import { shallow } from "enzyme";
import StatsCajaPost from "./StatsCajaPost";

describe("StatsCajaPost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StatsCajaPost />);
    expect(wrapper).toMatchSnapshot();
  });
});
