import React from "react";
import { shallow } from "enzyme";
import CuerpoCajaPost from "./CuerpoCajaPost";

describe("CuerpoCajaPost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CuerpoCajaPost />);
    expect(wrapper).toMatchSnapshot();
  });
});
