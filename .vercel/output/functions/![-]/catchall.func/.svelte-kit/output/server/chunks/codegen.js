import { createHttpLink, ApolloClient, InMemoryCache, from } from "@apollo/client/core/index.js";
import fetch from "cross-fetch";
import { onError } from "@apollo/client/link/error/error.cjs";
import gql from "graphql-tag";
const ENDPOINT = `https://tkusp14l.apicdn.sanity.io/v1/graphql/production/default`;
const httpLink = createHttpLink({
  uri: ENDPOINT,
  fetch
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(
      ({ message, locations, path }) => console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});
const isServer = typeof window === "undefined";
const ssrOptions = {
  watchQuery: {
    fetchPolicy: "cache-first",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "cache-first",
    errorPolicy: "all"
  }
};
const client = new ApolloClient({
  ssrMode: isServer,
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  //@ts-ignore
  defaultOptions: isServer ? ssrOptions : null
});
const SeoFragmentDoc = gql`
  fragment seo on Seo {
    metaTitle
    metaDesc
    keywords
    shareGraphic {
      asset {
        url
        altText
      }
    }
  }
`;
const ImageAssetFragmentDoc = gql`
  fragment imageAsset on SanityImageAsset {
    url
    altText
  }
`;
const ImageHotspotFragmentDoc = gql`
  fragment imageHotspot on SanityImageHotspot {
    x
    y
    width
    height
  }
`;
const ImageCropFragmentDoc = gql`
  fragment imageCrop on SanityImageCrop {
    top
    bottom
    left
    right
  }
`;
const TextWithImageFragmentFragmentDoc = gql`
  fragment TextWithImageFragment on TextWithImage {
    reverseLayout
    applyBackground
    subtitle
    title
    contentRaw
    links {
      label
      href
    }
    image {
      image {
        asset {
          ...imageAsset
          metadata {
            lqip
          }
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
`;
const ContentBlockFragmentFragmentDoc = gql`
  fragment ContentBlockFragment on ContentBlocks {
    contentblocks {
      ... on TextWithImage {
        ...TextWithImageFragment
      }
    }
  }
  ${TextWithImageFragmentFragmentDoc}
`;
const NavigationSectionFragmentDoc = gql`
  fragment NavigationSection on NavigationSection {
    target {
      ... on Page {
        title
        slug {
          current
        }
      }
      ... on Home {
        title
        slug {
          current
        }
      }
      ... on About {
        title
        slug {
          current
        }
      }
      ... on Projects {
        title
        slug {
          current
        }
      }
      ... on Team {
        title
        slug {
          current
        }
      }
      ... on Page {
        title
        slug {
          current
        }
      }
    }
    children {
      title
      target {
        ... on Home {
          title
          slug {
            current
          }
        }
        ... on About {
          title
          slug {
            current
          }
        }
        ... on Projects {
          title
          slug {
            current
          }
        }
        ... on Team {
          title
          slug {
            current
          }
        }
        ... on Page {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
const GetHomeDoc = gql`
  query GetHome {
    allHome {
      mobileHeroImages {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      heroImages {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      heroHeadline
      copySubtitle
      copyTitle
      copyRaw
      copyImage {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      contentBlocks {
        ... on ContentBlocks {
          ...ContentBlockFragment
        }
      }
      projectsSubtitle
      featuredProjects {
        title
        slug {
          current
        }
        featuredProjectGallery {
          asset {
            ...imageAsset
          }
          hotspot {
            ...imageHotspot
          }
          crop {
            ...imageCrop
          }
        }
        gallery {
          asset {
            ...imageAsset
          }
          hotspot {
            ...imageHotspot
          }
          crop {
            ...imageCrop
          }
        }
      }
      gallery {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      slug {
        current
      }
      seo {
        ...seo
      }
    }
    testimonials: allTestimonial {
      testimonial
      testimonialAuthor
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${ContentBlockFragmentFragmentDoc}
  ${SeoFragmentDoc}
`;
const GetAboutDoc = gql`
  query GetAbout {
    allAbout {
      firstSubtitle
      firstTitle
      firstCopyRaw
      secondSubtitle
      secondTitle
      secondCopyRaw
      copyImage {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      thirdSubtitle
      thirdTitle
      thirdCopyRaw
      thirdCopyImage {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      slug {
        current
      }
      seo {
        ...seo
      }
      contentBlocks {
        ... on ContentBlocks {
          ...ContentBlockFragment
        }
      }
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
  ${ContentBlockFragmentFragmentDoc}
`;
const GetTeamDoc = gql`
  query GetTeam {
    allTeam {
      teamSubtitle
      teamTitle
      team {
        name
        email
        phone
        bioRaw
        image {
          asset {
            ...imageAsset
          }
          hotspot {
            ...imageHotspot
          }
          crop {
            ...imageCrop
          }
        }
      }
      slug {
        current
      }
      seo {
        ...seo
      }
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
`;
const GetContactDoc = gql`
  query GetContact {
    allContact {
      introSubtitle
      introTitle
      introCopyRaw
      team {
        name
        email
        phone
        bioRaw
        image {
          asset {
            ...imageAsset
          }
          hotspot {
            ...imageHotspot
          }
          crop {
            ...imageCrop
          }
        }
      }
      gallery {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      slug {
        current
      }
      seo {
        ...seo
      }
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
`;
const GetProjectSingletonDoc = gql`
  query GetProjectSingleton {
    page: allProjects {
      introSubtitle
      introTitle
      introCopyRaw
      slug {
        current
      }
      contentBlocks {
        ... on ContentBlocks {
          ...ContentBlockFragment
        }
      }
      seo {
        ...seo
      }
    }
    projects: allProject(sort: [{ orderRank: ASC }]) {
      heroImages {
        asset {
          ...imageAsset
        }
        crop {
          ...imageCrop
        }
        hotspot {
          ...imageHotspot
        }
      }
      title
      projectLocation
      slug {
        current
      }
      seo {
        ...seo
      }
    }
  }
  ${ContentBlockFragmentFragmentDoc}
  ${SeoFragmentDoc}
  ${ImageAssetFragmentDoc}
  ${ImageCropFragmentDoc}
  ${ImageHotspotFragmentDoc}
`;
const GetProjectDoc = gql`
  query GetProject($slug: String) {
    project: allProject(where: { slug: { current: { eq: $slug } } }) {
      mobileHeroImages {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      heroImages {
        asset {
          ...imageAsset
        }
        crop {
          ...imageCrop
        }
        hotspot {
          ...imageHotspot
        }
      }
      title
      projectCopyRaw
      projectCopyImage {
        asset {
          ...imageAsset
        }
        hotspot {
          ...imageHotspot
        }
        crop {
          ...imageCrop
        }
      }
      projectLocation
      projectValue
      projectInvolvement
      gallery {
        asset {
          ...imageAsset
        }
        crop {
          ...imageCrop
        }
        hotspot {
          ...imageHotspot
        }
      }
      slug {
        current
      }
      seo {
        ...seo
      }
      contentBlocks {
        ... on ContentBlocks {
          ...ContentBlockFragment
        }
      }
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
  ${ContentBlockFragmentFragmentDoc}
`;
const GetNavigationByIdDoc = gql`
  query GetNavigationById($id: ID!) {
    Navigation(id: $id) {
      _id
      title
      sections {
        ...NavigationSection
      }
    }
  }
  ${NavigationSectionFragmentDoc}
`;
const GetPageBySlugDoc = gql`
  query GetPageBySlug($slug: String) {
    page: allPage(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      contentBlocks {
        ... on ContentBlocks {
          ...ContentBlockFragment
        }
      }
      seo {
        ...seo
      }
    }
  }
  ${ContentBlockFragmentFragmentDoc}
  ${SeoFragmentDoc}
`;
export {
  GetNavigationByIdDoc as G,
  GetHomeDoc as a,
  GetPageBySlugDoc as b,
  client as c,
  GetAboutDoc as d,
  GetContactDoc as e,
  GetProjectSingletonDoc as f,
  GetProjectDoc as g,
  GetTeamDoc as h
};
