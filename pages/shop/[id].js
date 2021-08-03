import { useRouter } from "next/dist/client/router";
import React from "react";
import MainHeader from './../../component/header/MainHeader';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MainHeader />
    </>
  );
}
