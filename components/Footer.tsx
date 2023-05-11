import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Site Map",
      children: [
        { name: "Home", href: "#" },
        { name: "Services", href: "#" },
        { name: "Contact", href: "#" },
        { name: "About", href: "#" },
      ],
    },
    {
      title: "Contact",
      children: [
        { name: "Email", href: "mailto:contact@ayrscott.com" },
        { name: "Discord", href: "http://discord.ayrscott.com/" },
      ],
    },
    {
      title: "Utilities",
      children: [
        { name: "Ping", href: "https://ping.ayrscott.com/" },
        { name: "Status", href: "https://status.ayrscott.com/" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Ayrscott, LLC
          </div>
        </div>
        <div class="text-gray-500">
          Web, Software & Automation
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2023 Ayrscott, LLC<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/ayrscott/ayrscott-fresh"
          class="inline-block hover:text-black transition-colors"
        >
          <IconBrandGithub class="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
