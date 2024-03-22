
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/pro-solid-svg-icons'; // Import all solid icons.
import { fal } from '@fortawesome/pro-light-svg-icons'; // Import all solid icons.
import { fat } from '@fortawesome/pro-thin-svg-icons'; // Import all solid icons.
import { far } from '@fortawesome/pro-regular-svg-icons'; // Import all solid icons.

import Link from '@docusaurus/Link';
import Image from "@theme/IdealImage";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from "@site/src/components/BrowserWindow";
import Button from '@site/src/components/Button';
import CategoryIndex from '@site/src/components/CategoryIndex';
import Stepper, { Step } from "@site/src/components/Stepper";
import InfoField from "@site/src/components/InfoField";
import Hotkey from "@site/src/components/Hotkey";

library.add(fab, fas, fal, fat, far); // Add all icons to the library so you can use them without importing them individually.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Icon: FontAwesomeIcon,
  Link,
  Image,
  Tabs,
  TabItem,
  BrowserWindow,
  Button,
  CategoryIndex,
  Hotkey,
  InfoField,
  Stepper,
  Step,
};
