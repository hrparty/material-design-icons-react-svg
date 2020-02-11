# Material Design Icons React components

Material design icons as React components.

This project exports the SVG icons from [https://github.com/google/material-design-icons](https://github.com/google/material-design-icons) as React components, intended to be used on the web.

## Example usage

```JS
import React from "react";
import { Add, BatteryFull } from "material-design-icons-react-svg";

// Find icons at: https://material.io/resources/icons/
const IconList = () => {
  return (
    <ul>
      <li>This is the add icon: <Add /></li>
      <li>This is the battery_full icon: <BatteryFull /></li>
    </ul>
  );
}

export default IconList;
```

The icons are named the same their files, with `ic_` and the size at the end (e.g. `_24px`) stripped off and in CamelCase. **The one exception is the icon 3d_rotation, which is named ThreeDRotation in this project**.
