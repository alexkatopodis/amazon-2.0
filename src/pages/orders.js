import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import db from "../../firebase";
import { doc, collection } from "firebase/firestore";
import moment from "moment";

const Orders = ({ orders }) => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;

// export async function getServerSideProps(context) {
//   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//   const session = getSession(context);

//   if (!session) return { props: {} };

//   const stripeOrders = await db
//     .collection("users")
//     .doc(await session.user.email)
//     .collections("orders")
//     .orderBy("timestamp", "desc")
//     .get();

//   const orders = await Promise.all(
//     stripeOrders.docs.map(async (orders) => ({
//       id: orders.id,
//       amount: orders.data().amount,
//       amountShipping: orders.data().amount_shipping,
//       images: orders.data().images,
//       timestamp: moment(order.data().timestamp.toDate()).unix(),
//       items: (
//         await stripe.checkout.sessions.listLineItems(order.id, {
//           limit: 100,
//         })
//       ).data,
//     }))
//   );
// }
