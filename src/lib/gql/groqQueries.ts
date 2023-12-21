import { client } from "$lib/utils/sanity";
import type { ImageAsset, Slug, Image } from "@sanity/types";
import groq from "groq";

export async function getLanding(): Promise<Landing> {
  return await client.fetch(
    groq`
        *[_type == "landing"][0] {
            title,
            landingImage {
                asset->
            },
            seo {
                metaTitle,
                    metaDesc,
                    keywords,
                shareGraphic {
                asset->
                }
            }
        }
    `,
  );
}

export interface MetaModel {
  metaTitle?: string;
  metaDesc?: string;
  keywords?: string[];
  shareGraphic: {
    src: string;
    alt: string;
    asset?: {
      url: string;
    };
  };
  ogType?: string;
}

export interface Landing {
  _type: "landing";
  _createdAt: string;
  title?: string;
  landingImage?: ImageAsset | Image;
  seo: MetaModel;
  slug: Slug;
}
