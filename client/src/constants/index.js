import { CircleHelp, UserLock, UserPen } from "lucide-react";

export const navLinks = [
  { path: "/find-property", label: "Find a Property" },
  { path: "/share-stories", label: "Share a stories" },
  { path: "/rental-guides", label: "Rental Guides" },
  { path: "/download-mobile-app", label: "Download Mobile App" },
];

export const optionDropdownItems = [
  { path: "/signup", label: "Sign Up", icon: UserPen },
  { path: "/login", label: "Log In", icon: UserLock },
  {
    path: "/help-center",
    label: "Help Center",
    icon: CircleHelp,
  },
];
