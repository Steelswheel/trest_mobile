import { ComponentType } from 'react'

export type TypeRootStackParamsList = {
  main: undefined
  Auth: undefined
  Home: undefined
  AddProduct: undefined,
  OffersDetail: undefined,
  LastNewsDetail: undefined,
  ForYou: undefined,
  Doc: undefined,
  Chat: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamsList
  component: ComponentType<any>
  isAdmin?: boolean
}
