import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

export const revalidate = 0
export const fetchCache = 'force-no-store'

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
async function fetchDataSpace() {
	const storyblokApi = getStoryblokApi()
	return storyblokApi.get('cdn/spaces/me')
}

export default async function StoryPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug

	const [dataResponseStory, dataResponseSpace] = await Promise.all([
		fetchData(slug),
		fetchDataSpace(),
	])
	const dataStory = dataResponseStory.data.story
	const dataSpace = dataResponseSpace.data.space

	return (
		<div className="">
			<main className="">
				<StoryblokStory story={dataStory} />
			</main>
		</div>
	)
}
