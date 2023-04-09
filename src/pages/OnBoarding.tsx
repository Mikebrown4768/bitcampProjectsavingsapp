import React, { useState } from "react";
import PlaidLink from "react-plaid-link";

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = ({}) => {
  const [accessToken, setAccessToken] = useState(null);

  const onSuccess = (token: string, metadata: string) => {
    // Send the token to your server to retrieve the access_token
    fetch("/api/plaid/token-exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_token: token }),
    })
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Plaid Integration</h1>
      {/* <PlaidLink
        clientName="Your Client Name"
        env="sandbox" // Change this to "production" for live accounts
        product={["auth", "transactions"]}
        publicKey="your_public_key"
        onSuccess={onSuccess}
      >
        Connect a bank account
      </PlaidLink> */}
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
};

export default OnBoarding;
