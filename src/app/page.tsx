import Link from 'next/link'

export default function Home() {
	return (
		<div className={``}>
			<main className={``}>
				<h1>Home</h1>
				<Link href="/catch-all"></Link>
			</main>
		</div>
	)
}
