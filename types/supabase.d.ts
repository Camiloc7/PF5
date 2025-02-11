// types/supabase.d.ts

export type Database = {
    public: {
      Tables: {
        profiles: {
          Row: {
            id: string;
            username: string;
            full_name: string | null;
            avatar_url: string | null;
            bio: string | null;
            role: 'user' | 'admin' | 'moderator';
            created_at: string;
            updated_at: string;
          };
          Insert: {
            username: string;
            full_name?: string;
            avatar_url?: string;
            bio?: string;
            role?: 'user' | 'admin' | 'moderator';
          };
          Update: {
            username?: string;
            full_name?: string;
            avatar_url?: string;
            bio?: string;
            role?: 'user' | 'admin' | 'moderator';
          };
        };
        products: {
          Row: {
            id: string;
            name: string;
            description: string | null;
            price: number;
            stock: number;
            images: string[];
            category: string;
            created_at: string;
            updated_at: string;
          };
          Insert: {
            name: string;
            description?: string;
            price: number;
            stock: number;
            images?: string[];
            category: string;
          };
          Update: {
            name?: string;
            description?: string;
            price?: number;
            stock?: number;
            images?: string[];
            category?: string;
          };
        };
        orders: {
          Row: {
            id: string;
            user_id: string;
            status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
            total: number;
            created_at: string;
            updated_at: string;
          };
          Insert: {
            user_id: string;
            status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
            total: number;
          };
          Update: {
            status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
            total?: number;
          };
        };
        order_items: {
          Row: {
            id: string;
            order_id: string;
            product_id: string;
            quantity: number;
            price: number;
          };
          Insert: {
            order_id: string;
            product_id: string;
            quantity: number;
            price: number;
          };
          Update: {
            quantity?: number;
            price?: number;
          };
        };
        posts: {
          Row: {
            id: string;
            user_id: string;
            title: string;
            content: string;
            created_at: string;
            updated_at: string;
          };
          Insert: {
            user_id: string;
            title: string;
            content: string;
          };
          Update: {
            title?: string;
            content?: string;
          };
        };
      };
    };
  };
  