import type { LucideIcon } from "lucide-react";
export interface Course {
  id: string;
  courseName: string;
  courseSubname: string;
  duration: string;
  forWho: string;
  abilities: string[];
  price: number;
  isFeatured?: boolean;
}
export interface Benefit {
  id: string;
  benefitName: string;
  benefitInfo: string;
  icon: LucideIcon;
}
