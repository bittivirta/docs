
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/pro-solid-svg-icons'; // Import all solid icons.
import { fal } from '@fortawesome/pro-light-svg-icons'; // Import all solid icons.
import { fat } from '@fortawesome/pro-thin-svg-icons'; // Import all solid icons.
import { far } from '@fortawesome/pro-regular-svg-icons'; // Import all solid icons.

import Stepper, { Step } from "@site/src/components/Stepper";
import Hotkey from "@site/src/components/Hotkey";
import Image from "@theme/IdealImage";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CategoryIndex from '@site/src/components/CategoryIndex';

library.add(fab, fas, fal, fat, far); // Add all icons to the library so you can use them without importing them individually.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  icon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
  Hotkey,
  Stepper,
  Step,
  Image,
  Tabs,
  TabItem,
  CategoryIndex
};
