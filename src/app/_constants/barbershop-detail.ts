const FIGMA = "https://www.figma.com/api/mcp/asset"

export const BARBERSHOP_DETAIL = {
  id: "1",
  name: "Vintage Barber",
  address: "Avenida São Sebastião, 357, São Paulo",
  rating: 5.0,
  reviewsCount: 889,
  description:
    "Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.",
  imageUrl: `${FIGMA}/39d5b7ff-34df-4003-8382-86f6a3c660e1`,
  phones: ["(11) 98204-5108", "(11) 99503-2351"],
  hours: [
    { day: "Segunda", time: "Fechado" },
    { day: "Terça-Feira", time: "09:00 - 21:00" },
    { day: "Quarta-Feira", time: "09:00 - 21:00" },
    { day: "Quinta-Feira", time: "09:00 - 21:00" },
    { day: "Sexta-Feira", time: "09:00 - 21:00" },
    { day: "Sábado", time: "08:00 - 17:00" },
    { day: "Domingo", time: "Fechado" },
  ],
  services: [
    {
      id: "1",
      name: "Corte de Cabelo",
      description: "Estilo personalizado com as últimas tendências.",
      price: 50,
      imageUrl: `${FIGMA}/70f2aaf2-75b7-466d-8aac-9690f9fab25a`,
    },
    {
      id: "2",
      name: "Barba",
      description: "Modelagem completa para destacar sua masculinidade.",
      price: 45,
      imageUrl: `${FIGMA}/5961c068-02d7-4c25-9447-4a201e9d6758`,
    },
    {
      id: "3",
      name: "Pézinho",
      description: "Acabamento perfeito para um visual renovado.",
      price: 20,
      imageUrl: `${FIGMA}/3d13102e-eaf1-480f-ade5-32bc6c3b670d`,
    },
    {
      id: "4",
      name: "Sobrancelha",
      description: "Expressão acentuada com modelagem precisa.",
      price: 25,
      imageUrl: `${FIGMA}/e83952e1-cf86-4b13-89f2-0e82636807de`,
    },
    {
      id: "5",
      name: "Massagem",
      description: "Relaxe e renove com nossos tratamentos revitalizantes.",
      price: 35,
      imageUrl: `${FIGMA}/4a4ecfa1-108b-4e06-9320-0f5539c1b45d`,
    },
    {
      id: "6",
      name: "Hidratação",
      description: "Fios hidratados, macios e brilhantes.",
      price: 30,
      imageUrl: `${FIGMA}/6aaae133-fe3b-4195-a5e6-cb3bc8bf2dc9`,
    },
  ],
}

export type BarbershopDetail = typeof BARBERSHOP_DETAIL
export type Service = (typeof BARBERSHOP_DETAIL.services)[number]
