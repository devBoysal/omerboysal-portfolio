import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Particles from "react-particles-js";

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
			</Head>

			<div className="body__container">
				<section className={utilStyles.headingMd}>
					<p>Ömer Boysal | Web Developer</p>
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
				params={{
					background: {
						color: {
							value: "#343434",
						},
					},
					fullScreen: {
						enable: true,
					},
					particles: {
						number: {
							value: 80,
						},
						size: {
							value: 2,
						},
						move: {
							speed: 1,
						},
						shape: {
							polygon: {
								nb_sides: 10
							}
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "repulse",
							},
							onclick: {
								enable: true,
								mode: "push",
							},
							resize: true,
						},
						detect_on: "window",
					},
				}}
			/>
		</Layout>
	);
}
