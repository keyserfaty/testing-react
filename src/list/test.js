import React from "react";
import { create } from "react-test-renderer";
import List from ".";

describe("tests list", () => {
  const component = create(<List />);
  const rootInstance = component.root;
  const instance = component.getInstance();

  const input = rootInstance.findByType("input");
  const addButton = rootInstance.findByProps({ className: "add" });

  it("adds an item to the list", () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    input.props.onChange({ target: { name: 'item', value: 'some' } });
    addButton.props.onClick();
  
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  
    const instance = component.getInstance();
    expect(instance.state.list).toContain("some");
  });
  
  it("removes an item from the list", () => {
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  
    const removeButton = rootInstance.findByProps({ className: "remove" });
    removeButton.props.onClick();
  
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    expect(instance.state.list).toEqual([]);
  });

})
