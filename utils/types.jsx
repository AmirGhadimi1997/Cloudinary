/* eslint-disable no-unused-vars */

export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal) => void; // TypeScript type hint removed
  closeModal: () => void; // TypeScript type hint removed
  navigation: boolean;
  direction?: number; // TypeScript type hint removed
}

