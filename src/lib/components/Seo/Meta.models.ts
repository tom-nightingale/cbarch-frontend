export interface MetaModel {
  title?: string;
  description?: string;
  keywords?: string[];
  shareGraphic?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  ogType?: string;
}
