import { For } from "solid-js"
import Link from "#src/renderer/Link.jsx"
import {
	IconFlutter,
	IconJavascript,
	IconNextjs,
	IconReact,
	IconSolid,
	IconSvelte,
	IconVue,
} from "#src/interface/custom-icons/subcategoryIcon.jsx"

const cards = [
	{
		title: "CLI - Automate Translations",
		description: "Command line interface for inlang projects.",
		href: "/m/2qj2w8pu",
		logo: "/images/cli-logo-landingpage.png",
		cover: "/images/cli-cover-landingpage.png",
	},
	{
		title: "IDE Extension for i18n",
		description: "Supercharge i18n within VS Code.",
		href: "/m/r7kp499g",
		logo: "https://cdn.jsdelivr.net/gh/inlang/monorepo@main/inlang/source-code/ide-extension/assets/icon-vscode-marketplace.png",
		cover: "/images/ide-extension-cover-landingpage.png",
	},
]

const stacks = [
	{
		name: "Svelte",
		param: "svelte",
		icon: <IconSvelte class="w-8 h-8" />,
		link: "/c/svelte",
	},
	{
		name: "Next.js",
		param: "nextjs",
		icon: <IconNextjs class="w-8 h-8" />,
		link: "/c/nextjs",
	},
	{
		name: "Solid",
		param: "solid",
		icon: <IconSolid class="w-8 h-8" />,
		link: "/c/solid",
	},
	{
		name: "React",
		param: "react",
		icon: <IconReact class="w-8 h-8" />,
		link: "/c/react",
	},
	{
		name: "Vue",
		param: "vue",
		icon: <IconVue class="w-8 h-8" />,
		link: "/c/vue",
	},
	{
		name: "Javascript",
		param: "javascript",
		icon: <IconJavascript class="w-8 h-8" />,
		link: "/c/javascript",
	},
	{
		name: "Flutter",
		param: "flutter",
		icon: <IconFlutter class="w-8 h-8" />,
		link: "/c/flutter",
	},
]

const DeveloperSlide = () => {
	return (
		<div class="flex flex-col gap-4 px-8 py-6 h-full">
			<div>
				<div class="flex items-center justify-between">
					<h3 class="font-medium text-surface-600">Apps for Developer</h3>
					<Link class="flex items-center gap-2 text-surface-500 group" href="/c/apps">
						<p class="group-hover:text-surface-600">More Apps</p>
						<div class="w-8 h-8 border border-surface-300 rounded-full flex justify-center items-center group-hover:bg-surface-100 transition-all text-surface-500 group-hover:text-surface-900">
							<Arrow />
						</div>
					</Link>
				</div>
				<div class="grid grid-cols-2 h-[244px] gap-4 mt-4">
					<For each={cards}>
						{(card) => (
							<Link
								class="relative bg-gradient-to-b from-surface-200 rounded-xl p-[1px] hover:from-surface-300 transition-all"
								href={card.href}
							>
								<div class="absolute w-full top-0 left-0 pointer-events-none">
									<img src={card.cover} alt="cover" />
								</div>
								<div class="flex flex-col justify-end col-span-1 h-full rounded-[11px] bg-gradient-to-b from-surface-50 hover:from-surface-100 to-background hover:to-background p-6">
									<div class="flex items-center gap-4">
										<div class="w-10 h-10 rounded overflow-hidden">
											<img src={card.logo} alt="logo" />
										</div>
										<div>
											<h4 class="font-bold text-surface-600">{card.title}</h4>
											<p class="text-surface-500 text-sm">{card.description}</p>
										</div>
									</div>
								</div>
							</Link>
						)}
					</For>
				</div>
			</div>
			<div>
				<h3 class="font-medium text-surface-600">Stack-based Tooling</h3>
				<div class="flex gap-4 mt-4">
					<For each={stacks}>
						{(stack) => (
							<Link href={stack.link} class="flex-1">
								<div class="w-full flex flex-col items-center gap-2">
									<div class="flex w-full justify-center items-center border border-surface-200 hover:border-surface-300 bg-gradient-to-b from-surface-50 hover:from-surface-100 rounded-lg h-[60px] overflow-hidden">
										{stack.icon}
									</div>
									<p class="text-center text-sm">{stack.name}</p>
								</div>
							</Link>
						)}
					</For>
				</div>
			</div>
		</div>
	)
}

export default DeveloperSlide

export function Arrow() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28">
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2.75"
				d="M3 14h22m0 0l-8.25 8.25M25 14l-8.25-8.25"
			/>
		</svg>
	)
}