export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    discount: number;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
  }
  
  export interface Order {
    id: string;
    status: string;
    totalPrice: number;
    user: User;
    products: Product[];
    createdAt: string;
  }
  