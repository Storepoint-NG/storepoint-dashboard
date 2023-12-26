"use client";

import TestComp from "@/components/TestComp";

function page() {
  function SquadPay() {
    const squadInstance = new squad({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: () => console.log(`Linked successfully`),
      key: "sandbox_pk_a72dd9f4b6baca3b692c21184d194ae68d736921fffc",
      //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
      email: "haruna2004@gmail.com",
      amount: 2000 * 100,
      //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
      currency_code: "NGN",
    });
    squadInstance.setup();
    squadInstance.open();
  }
  return (
    <div>
      {/* <button onClick={() => SquadPay()}>Load Modal</button> */}
      <TestComp />
    </div>
  );
}

export default page;
