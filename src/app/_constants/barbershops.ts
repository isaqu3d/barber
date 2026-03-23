export interface Barbershop {
  id: string
  name: string
  address: string
  rating: number
  imageUrl: string
}

const FIGMA_ASSET = "https://www.figma.com/api/mcp/asset"

export const recommendedBarbershops: Barbershop[] = [
  {
    id: "1",
    name: "Vintage Barber",
    address: "Avenida São Sebastião, 357, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/3c9c69c5-e70a-4ae8-a4d2-658fa3362c49`,
  },
  {
    id: "2",
    name: "Clássica Cortez",
    address: "Rua Castro Alves, 331, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/ded5c5a5-9ced-4ec9-bd43-712450fd3bd5`,
  },
  {
    id: "3",
    name: "Los Barberos",
    address: "Rua Sete de Setembro, 428, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/ed041b65-d275-4fec-8a2c-a443d5679546`,
  },
  {
    id: "4",
    name: "Homem Elegante",
    address: "Rua Projetada, 529, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/0f52d0ec-1239-4ce7-b518-7a2e3f160493`,
  },
]

export const popularBarbershops: Barbershop[] = [
  {
    id: "3",
    name: "Los Barberos",
    address: "Rua Sete de Setembro, 428, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/ed041b65-d275-4fec-8a2c-a443d5679546`,
  },
  {
    id: "4",
    name: "Homem Elegante",
    address: "Rua Projetada, 529, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/0f52d0ec-1239-4ce7-b518-7a2e3f160493`,
  },
  {
    id: "1",
    name: "Vintage Barber",
    address: "Avenida São Sebastião, 357, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/3c9c69c5-e70a-4ae8-a4d2-658fa3362c49`,
  },
  {
    id: "2",
    name: "Clássica Cortez",
    address: "Rua Castro Alves, 331, São Paulo",
    rating: 5.0,
    imageUrl: `${FIGMA_ASSET}/ded5c5a5-9ced-4ec9-bd43-712450fd3bd5`,
  },
]
