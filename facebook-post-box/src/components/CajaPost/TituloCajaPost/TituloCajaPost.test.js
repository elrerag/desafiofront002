import React from "react";
import { shallow } from "enzyme";
import TituloCajaPost from "./TituloCajaPost";

describe("TituloCajaPost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TituloCajaPost />);
    expect(wrapper).toMatchSnapshot();
  });
});
