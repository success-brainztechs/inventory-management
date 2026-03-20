import type { BaseResponse, OffsetPaginationBase } from "./base-types";

// Identity type
export interface Product {
  id: string;
  product_name: string;
  sku: string;
  category: string;
  unit: string;
  cost_price: number;
  price: number;
  stock: number;
  currency: string;
}

// Retrieval types
export interface ProductData extends OffsetPaginationBase {
  products: Product[]
}

export interface ProductResponse extends BaseResponse {
  data: ProductData
}

// Create Product type
export interface CreateProductRequest {
  category: string;
  unit: string;
  product_name: string;
  sku: string;
  cost_price: number;
  default_price: number;
  minimum_stock_level: number;
}

export interface CreateProductResponse extends BaseResponse {
  data: Product
}