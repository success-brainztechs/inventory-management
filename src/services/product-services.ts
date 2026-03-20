import axios from "@/config/axios"
import type {
  CreateProductRequest,
  CreateProductResponse,
  ProductResponse,
} from "@/types/product-types"

// Retrieve Product List
export const productListService = async (): Promise<ProductResponse> => {
  const response = await axios.get<ProductResponse>(`/products/list-products`)
  return response.data
}

// Create a product
export const createProductService = async (
  payload: CreateProductRequest
): Promise<CreateProductResponse> => {
  const response = await axios.post<CreateProductResponse>(
    `/products/create`,
    payload
  )
  return response.data
}
