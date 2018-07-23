import * as React from "react";
import { SampleWidget } from "../src/components/examplewidget/widget";

import { storiesOf } from "@storybook/react";

storiesOf("TypeScript and Storybook", module).add("Sample Widget", () => (
  <SampleWidget name="Michael" />
));
