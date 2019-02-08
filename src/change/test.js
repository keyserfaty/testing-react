import React from "react";
import { create } from "react-test-renderer";
import Change from ".";

it("changes the value when typing on the input", () => {
  const component = create(<Change />);
  const rootInstance = component.root;

  const input = rootInstance.findByType("input");
  const container = rootInstance.findByType("div");

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  
  input.props.onChange({ target: { name: 'item', value: 'some' } });
  
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  
  expect(container.props.children).toContain("some");
});