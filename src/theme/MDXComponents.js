
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
import BrowserWindow from "@site/src/components/BrowserWindow";
import InfoField from "@site/src/components/InfoField";
import Image from "@theme/IdealImage";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CategoryIndex from '@site/src/components/CategoryIndex';
import Link from '@docusaurus/Link';

library.add(fab, fas, fal, fat, far); // Add all icons to the library so you can use them without importing them individually.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Icon: FontAwesomeIcon,
  Hotkey,
  BrowserWindow,
  InfoField,
  Stepper,
  Step,
  Image,
  Tabs,
  TabItem,
  CategoryIndex,
  Link
};
