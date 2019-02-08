import React from "react";
import { create } from "react-test-renderer";
import List from ".";

it("adds an item to the list", () => {
  const component = create(<List />);
  const rootInstance = component.root;

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const input = rootInstance.findByType("input");
  const button = rootInstance.findByType("button");

  input.props.onChange({ target: { name: 'item', value: 'some' } });
  button.props.onClick();

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const instance = component.getInstance();
  expect(instance.state.list).toContain("some");
});

it("removes an item from the list", () => {
  const component = create(<List />);
  const rootInstance = component.root;
  const instance = component.getInstance();

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const input = rootInstance.findByType("input");
  const addButton = rootInstance.findByProps({ className: "add" });

  input.props.onChange({ target: { name: 'item', value: 'some' } });
  addButton.props.onClick();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(instance.state.list).toContain("some");

  const removeButton = rootInstance.findByProps({ className: "remove" });
  removeButton.props.onClick();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(instance.state.list).toEqual([]);
});
