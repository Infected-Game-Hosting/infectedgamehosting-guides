// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://guides.infectedgamehosting.com",
  integrations: [
    starlight({
      title: "Infected Games Hosting Guides",
      description: "Professional game server hosting guides and documentation",
      logo: {
        src: "./src/assets/logo.png", // Add your logo here
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/7qEeMGMcg",
        },
        {
          icon: "twitter",
          label: "Twitter",
          href: "https://x.com/INFECTEDGA38152", // Update with your Twitter
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/infectedgamehosting/", // Update with your Twitter
        },
        {
          icon: "tiktok",
          label: "Tiktok",
          href: "https://www.tiktok.com/@infectedgaming20?lang=en", // Update with your Twitter
        },
      ],
      customCss: [
        // "./src/tailwind.css",
        "./src/styles/global.css",
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Welcome", slug: "index" },
            {
              label: "Beginners Guide",
              slug: "getting-started/beginners-guide",
            },
            {
              label: "Adding Subusers",
              slug: "getting-started/adding-subusers",
            },
            { label: "Backups", slug: "getting-started/backups" },
            {
              label: "Creating Databases",
              slug: "getting-started/creating-databases",
            },
            { label: "Schedules", slug: "getting-started/schedules" },
          ],
        },
        {
          label: "Game Guides",
          items: [
            {
              label: "Palworld",
              collapsed: false,
              items: [
                {
                  label: "Getting Started",
                  slug: "games/palworld/getting-started",
                },
                {
                  label: "Server Configuration",
                  slug: "games/palworld/configuration",
                },
                {
                  label: "Admin Commands",
                  slug: "games/palworld/admin-commands",
                },
                {
                  label: "Troubleshooting",
                  slug: "games/palworld/troubleshooting",
                },
              ],
            },
          ],
        },
        {
          label: "Support",
          items: [
            {
              label: "Support",
              link: "https://billing.infectedgamehosting.com/submitticket.php",
            },
          ],
        },
      ],
    }),
  ],
});
