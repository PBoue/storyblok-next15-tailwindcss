'use client'

import { getStoryblokApi } from '@/lib/storyblok'

export function StoryblokProvider({ children }: any) {
	getStoryblokApi() // Re-initialize on the client
	return children
}
