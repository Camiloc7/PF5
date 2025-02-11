// import { NextResponse } from 'next/server';
// import { MercadoPagoConfig, Preference } from 'mercadopago';

// // Inicializar el cliente de MercadoPago con el accessToken
// const client = new MercadoPagoConfig({
//   accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
// });

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { items, userId } = body;

//     // Crear la preferencia de pago
//     const preference = new Preference(client);

//     const preferenceData = {
//       items: items.map((item: any) => ({
//         title: item.name,
//         unit_price: Number(item.price),
//         quantity: item.quantity,
//         currency_id: 'ARS', // Asegúrate de que sea la moneda correcta
//       })),
//       back_urls: {
//         success: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
//         failure: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/failure`,
//       },
//       auto_return: 'approved',
//       external_reference: userId,
//     };

//     // Crear la preferencia con los datos
//     const createdPreference = await preference.create(preferenceData);

//     // Devuelve el ID de la preferencia
//     return NextResponse.json({ preferenceId: createdPreference.body.id });
//   } catch (error) {
//     console.error('Error creating preference:', error);
//     return NextResponse.json(
//       { error: 'Error creating payment preference' },
//       { status: 500 }
//     );
//   }
// }








import { NextResponse } from 'next/server';
// import { MercadoPagoConfig, Preference } from 'mercadopago'; // Comentado temporalmente

// const client = new MercadoPagoConfig({
//   accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
// });

export async function POST(request: Request) {
  try {
    // const body = await request.json();
    // const { items, userId } = body;

    // Aquí estaría el código para crear la preferencia, lo comentamos temporalmente.
    // const preference = new Preference(client);
    // const preferenceData = {
    //   items: items.map((item: any) => ({
    //     title: item.name,
    //     unit_price: Number(item.price),
    //     quantity: item.quantity,
    //     currency_id: 'ARS',
    //   })),
    //   back_urls: {
    //     success: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success`,
    //     failure: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/failure`,
    //   },
    //   auto_return: 'approved',
    //   external_reference: userId,
    // };

    // const createdPreference = await preference.create(preferenceData);
    // return NextResponse.json({ preferenceId: createdPreference.body.id });

    // Para el despliegue, podemos retornar una respuesta de prueba:
    return NextResponse.json({ message: 'Mercado Pago está temporalmente deshabilitado.' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error en la solicitud.' },
      { status: 500 }
    );
  }
}
