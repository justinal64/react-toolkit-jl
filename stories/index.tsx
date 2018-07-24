import * as React from "react";
import { SampleWidget } from "../src/components/examplewidget/widget";
import Dropdown from "../src/components/dropdown/dropdown";
import { storiesOf } from "@storybook/react";

storiesOf("Widgets", module)
  .add("Sample Widget", () => <SampleWidget name="Justin" />)
  .add("Dropdown", () => <Dropdown options={["test", "another test"]} />);
