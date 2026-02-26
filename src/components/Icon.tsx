// components/Icon.ts
import type { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import {
  IoLogoAngular,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import { SiSpring } from "react-icons/si";

export type IconComponent = IconType;

export type IconDef = {
  key: string;
  label: string;
  icon: IconComponent;
  color: string;
};

export const FRAMEWORK_ICONS: IconDef[] = [
  { key: "angular", label: "Angular", icon: IoLogoAngular, color: "#bd498d" },
  { key: "react", label: "React", icon: IoLogoReact, color: "#4b7ce7" },
  { key: "scss", label: "SCSS", icon: IoLogoSass, color: "#e74ba6" },
  { key: "html", label: "HTML", icon: IoLogoHtml5, color: "#e48124" },
  { key: "java", label: "Java", icon: DiJava, color: "#a59ea2" },
  { key: "nodejs", label: "NodeJs", icon: IoLogoNodejs, color: "#77b45f" },
  { key: "springboot", label: "SpringBoot", icon: SiSpring, color: "#5d8a4b" },
  { key: "firebase", label: "Firebase", icon: IoLogoFirebase, color: "#e26640" },
];

export const ICONS_BY_KEY: Record<string, IconDef> = Object.fromEntries(
  FRAMEWORK_ICONS.map((i) => [i.key, i])
);

//TODO: add color for specifix icon for their framework color of logo