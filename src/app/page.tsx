import Link from 'next/link'
import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

async function fetchData(slug: string) {
	const storyblokApi = getStoryblokApi()
	await storyblokApi.flushCache()
	return storyblokApi.get(
		'cdn/stories/' + slug,
		{
			version: 'draft',
			//cv: new Date().getTime()
		},
		{ cache: 'no-store' }
	)
}

export default async function Home() {
	const dataResponseStory = await fetchData('home')
	const dataStory = dataResponseStory.data.story

	return (
		<div className={``}>
			<main className={``}>
				<h1>Home</h1>
				<StoryblokStory story={dataStory} />
			</main>
		</div>
	)
}
