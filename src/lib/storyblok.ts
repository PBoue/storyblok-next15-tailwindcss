import Page from '@/components/storyblok/Page'
import Teaser from '@/components/storyblok/Teaser'
import Grid from '@/components/storyblok/Grid'
import Feature from '@/components/storyblok/Feature'
import FallbackComponent from '@/components/storyblok/FallbackComponent'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
	accessToken: 'UhOV2Togo8xxAI4m07ZkWwtt',
	use: [apiPlugin],
	components: {
		teaser: Teaser,
		page: Page,
		grid: Grid,
		feature: Feature,
	},
	apiOptions: {
		region: 'eu',
		cache: {
			type: 'none',
		},
	},

	enableFallbackComponent: true,
	customFallbackComponent: FallbackComponent,
})
