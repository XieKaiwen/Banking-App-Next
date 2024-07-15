import React, { useCallback, useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import { createLinkToken, exchangePublicToken } from "@/lib/actions/user.actions";

export default function PlaidLink({ user, variant }: PlaidLinkProps) {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user) //we will create this as a server action
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
          publicToken: public_token,
          user,
      }) // Another server action
      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button className="plaidlink-primary" onClick={()=>{open()}} disabled={!ready}>Connect bank</Button>
      ) : variant === "ghost" ? (
        <Button className="">Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
      )}
    </>
  );
}
