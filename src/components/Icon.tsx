// components/Icon.ts
import type { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import {
  IoLogoAngular,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";

export type IconComponent = IconType;

export type IconDef = {
  key: string;
  label: string;
  icon: IconComponent;
};

export const FRAMEWORK_ICONS: IconDef[] = [
  { key: "angular", label: "Angular", icon: IoLogoAngular },
  { key: "react", label: "React", icon: IoLogoReact },
  { key: "scss", label: "SCSS", icon: IoLogoSass },
  { key: "html", label: "HTML", icon: IoLogoHtml5 },
  { key: "java", label: "Java", icon: DiJava },
  { key: "nodejs", label: "NodeJs", icon: IoLogoNodejs },
];

export const ICONS_BY_KEY: Record<string, IconDef> = Object.fromEntries(
  FRAMEWORK_ICONS.map((i) => [i.key, i])
);

//TODO: add color for specifix icon for their framework color of logo