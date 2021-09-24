import Head from "next/head";

import Link from "next/link";
import Layout from '../../components/layout';

export default function FirstPost() {
	return (
		<Layout>
            <Head>
                <title>Projects | Omer Boysal</title>
            </Head>
			<h1>Projects</h1>
			<h2>
				<Link href="/">
					<a>home</a>
				</Link>
			</h2>
		</Layout>
	);
}
