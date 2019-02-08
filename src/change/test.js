import React from "react";
import { create } from "react-test-renderer";
import Change from ".";

describe('tests change', () => {
  const component = create(<Change />);
  const rootInstance = component.root;

  const input = rootInstance.findByType("input");
  const container = rootInstance.findByType("div");

  it("changes the value when typing on the input", () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
    input.props.onChange({ target: { name: 'item', value: 'some' } });
    
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    
    expect(container.props.children).toContain("some");
  });
})