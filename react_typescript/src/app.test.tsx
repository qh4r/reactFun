import * as React from 'react';
import { mount, shallow } from "enzyme";
import { SumComponent } from "./app";

describe("app", () => {
  it("works", () => {
    const component = mount(<SumComponent a={2} b={3} />);
    expect(component.find('span').text()).toBe("hidden");
    component.setState({isOpen: true});
    expect(component.find('span').text()).toBe("  5  ");
  });
});

// to run npx jest