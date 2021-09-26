import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Particles from "react-tsparticles";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
			</Head>

			<div className="body__container">
				<section className={utilStyles.headingMd}>
					<p>Frontend Web Developer</p>
					<p>
						(This is a sample website - you’ll be building a site like this on{" "}
						<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
					</p>
				</section>

				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
					<h2 className={utilStyles.headingLg}>Blog</h2>
					<ul className={utilStyles.list}>
						{allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className={utilStyles.lightText}>
									<Date dateString={date} />
								</small>
							</li>
						))}
					</ul>
				</section>
			</div>
			<Particles
				id="tsparticles"
				options={{
					fullScreen: {
						enable: "true",
					},
					background: {
						color: {
							value: "#1C1C1C",
						},
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "window",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 8,
								opacity: 0.8,
								size: 4,
							},
							push: {
								quantity: 3,
							},
							repulse: {
								distance: 85,
								duration: 1,
							},
						},
					},
					particles: {
						color: {
							value: "#fff",
						},
						links: {
							color: "#d8d8d8",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 1500,
							},
							value: 85,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
							polygon: {
								nb_sides: 8,
							},
						},
						size: {
							random: true,
							value: 2,
						},
					},
					detectRetina: true,
				}}
			/>
		</Layout>
	);
}
