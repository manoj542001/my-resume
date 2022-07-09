import React from "react";
import { shallow } from "enzyme";
import DisplayContent from "./display-content";

describe("DisplayContent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DisplayContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
