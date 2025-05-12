import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Forgotten Realm",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "long98191.github.io/lost-mine",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
          header: {
			name: "Cinzel",
			weights: [400, 900],
			includebold: true
					},
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#e8dcb8", /* page background */
          lightgray: "#e5e5e5", /* borders */
          gray: "#b8b8b8", /* graph links, heavier borders */
          darkgray: "#B80000", /* body text */
          dark: "#B80000", /* header text and icons */
          secondary: "#B80000", /* link colour, current graph node */
          tertiary: "#84a59d", /* hover states and visited graph nodes */
          highlight: "rgb(199, 29, 0, 0.15)", /* internal link background, highlighted text, highlighted lines of code */
          textHighlight: "#B80000", /* markdown highlighted text background */
        },
        darkMode: {
          light: "#e8dcb8", /* page background */
          lightgray: "#393639", /* borders */
          gray: "#646464", /* graph links, heavier borders */
          darkgray: "#B80000", /* body text */
          dark: "#B80000", /* header text and icons */
          secondary: "#B80000", /* link colour, current graph node */
          tertiary: "#84a59d", /* hover states and visited graph nodes */
          highlight: "rgb(199, 29, 0, 0.15)", /* internal link background, highlighted text, highlighted lines of code */
          textHighlight: "#B80000", /* markdown highlighted text background */
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
