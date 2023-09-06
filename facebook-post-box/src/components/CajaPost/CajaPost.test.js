import React from "react";
import { shallow } from "enzyme";
import CajaPost from "./CajaPost";

describe("CajaPost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CajaPost />);
    expect(wrapper).toMatchSnapshot();
  });
});
