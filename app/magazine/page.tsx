// "use client";
// import { useEffect, useState } from "react";
// import { Order } from "@/types/order";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const OrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]); // Ahora TypeScript reconoce `orders`

//   useEffect(() => {
//     fetch(`${API_URL}/orders`)
//       .then((res) => res.json())
//       .then((data: Order[]) => setOrders(data)) // Forzar que la API devuelve un array de Order[]
//       .catch((err) => console.error("Error cargando órdenes", err));
//   }, []);

//   return (
//     <div>
//       <h1>Órdenes</h1>
//       <ul>
//         {orders.map((order) => (
//           <li key={order.id}>
//             <p>Pedido ID: {order.id}</p>
//             <p>Usuario: {order.user.name}</p>
//             <p>Total: ${order.totalPrice}</p>
//             <a href={`${API_URL}/orders/${order.id}/pdf`} download>
//               Descargar PDF
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrdersPage;

// "use client";

// import { useEffect, useState } from "react";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// type Order = {
//   id: string;
//   totalPrice: number;
//   status: string;
//   createdAt: string;
//   user: {
//     name: string;
//     email: string;
//   };
// };

// const OrdersPage = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_URL}/orders`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Órdenes recibidas:", data);
//         setOrders(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error cargando órdenes", err);
//         setLoading(false);
//       });
//   }, []);
  

//   if (loading) return <p>Cargando órdenes...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Todas las Órdenes</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">ID</th>
//             <th className="border border-gray-300 px-4 py-2">Usuario</th>
//             <th className="border border-gray-300 px-4 py-2">Correo</th>
//             <th className="border border-gray-300 px-4 py-2">Total</th>
//             <th className="border border-gray-300 px-4 py-2">Estado</th>
//             <th className="border border-gray-300 px-4 py-2">Fecha</th>
//             <th className="border border-gray-300 px-4 py-2">PDF</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id} className="text-center">
//               <td className="border border-gray-300 px-4 py-2">{order.id}</td>
//               <td className="border border-gray-300 px-4 py-2">{order.user.name}</td>
//               <td className="border border-gray-300 px-4 py-2">{order.user.email}</td>
//               <td className="border border-gray-300 px-4 py-2">${order.totalPrice.toFixed(2)}</td>
//               <td className="border border-gray-300 px-4 py-2">{order.status}</td>
//               <td className="border border-gray-300 px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <a href={`${API_URL}/orders/${order.id}/pdf`} className="text-blue-500" download>
//                   📄 Descargar
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersPage;



"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Order = {
  id: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Órdenes recibidas:", data);
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando órdenes", err);
        setLoading(false);
      });
  }, []);

  const downloadPdf = async (orderId: string) => {
    try {
      const response = await fetch(`${API_URL}/orders/${orderId}/pdf`, {
        method: "GET",
      });

      if (!response.ok) throw new Error("Error al descargar el PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `order-${orderId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
    }
  };

  if (loading) return <p>Cargando órdenes...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todas las Órdenes</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Usuario</th>
            <th className="border border-gray-300 px-4 py-2">Correo</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
            <th className="border border-gray-300 px-4 py-2">Estado</th>
            <th className="border border-gray-300 px-4 py-2">Fecha</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{order.id}</td>
              <td className="border border-gray-300 px-4 py-2">{order.user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{order.user.email}</td>
              <td className="border border-gray-300 px-4 py-2">${order.totalPrice.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2">{order.status}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => downloadPdf(order.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  📄 Descargar PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
