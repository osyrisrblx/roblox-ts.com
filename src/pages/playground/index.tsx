import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React from "react";
import Playground from "../../components/Playground";

export default () => {
	return (
		<BrowserOnly>
			<div style={{ overflow: "hidden" }}>
				<Layout noFooter>
					<Playground />
				</Layout>
			</div>
		</BrowserOnly>
	);
};
