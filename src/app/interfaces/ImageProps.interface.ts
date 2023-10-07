import { type ImageProps as ImagePropsNextJS } from 'next/image'

// extends of the interface ImagePropsNextJS to avoid add manually each prop
export interface ImageProps extends ImagePropsNextJS {
  url?: string
  name?: string
  customStyles?: string
}
