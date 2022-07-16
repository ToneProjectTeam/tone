import { useState } from "react";
import Layout from '../../../components/home/layout'

const IndexPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/bpc.jpg"
  );

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <img src={catImageUrl} />
      </Layout>
    </div>
  );
};

export default IndexPage;
