import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import general from "../styles/general.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const name = "Ömer Boysal";
export const siteTitle = "Omer Boysal | Portfolio";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="A portfolio site built with Next.js" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header>
				<div className={general.socialIconsContainer}>
					<Link href="https://github.com/devBoysal">
						<FontAwesomeIcon icon={faGithubSquare} className={general.socialIcons} />
					</Link>
					<Link href="https://www.linkedin.com/in/oboysal/">
						<FontAwesomeIcon icon={faLinkedin} className={general.socialIcons} />
					</Link>
				</div>
				<div className={styles.header}>
					{home ? (
						<>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={160}
								width={160}
								alt={name}
							/>
							<h1 className={utilStyles.heading2Xl}>{name}</h1>
							<p className={`${utilStyles.headingMd} ${utilStyles.subheading}`}>Frontend Web Developer</p>
						</>
					) : (
						<>
							<Link href="/">
								<a>
									<Image
										priority
										src="/images/profile.jpg"
										className={utilStyles.borderCircle}
										height={160}
										width={160}
										alt={name}
									/>
								</a>
							</Link>
						</>
					)}
				</div>
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
