import { useState } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DonatShop from "../components/prebuilt/DonatShop";
import CheckoutForm from "../components/CheckoutForm";
import getDonatPrice from "../utils/get-donat-price";

const MainPage = props => {
  const [numDonats, setNumDonats] = useState(1);

  const addDonat = () => setNumDonats(num => Math.min(12, num + 1));
  const remDonat = () => setNumDonats(num => Math.max(1, num - 1));

  return (
    <Layout title="Donation">
      <Row>
        <DonatShop
          onAddDonat={addDonat}
          onRemoveDonat={remDonat}
          numDonats={numDonats}
        />
      </Row>
      <CheckoutForm
        price={getDonatPrice(numDonats)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
