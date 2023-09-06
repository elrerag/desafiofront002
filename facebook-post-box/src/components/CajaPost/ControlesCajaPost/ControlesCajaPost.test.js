import React from "react";
import { shallow } from "enzyme";
import ControlesCajaPost from "./ControlesCajaPost";

describe("ControlesCajaPost", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ControlesCajaPost />);
    expect(wrapper).toMatchSnapshot();
  });
});
