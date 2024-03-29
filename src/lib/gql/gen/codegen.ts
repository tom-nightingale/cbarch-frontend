import client from "../apolloClient";
import type {
  ApolloQueryResult,
  ObservableQuery,
  WatchQueryOptions,
} from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type About = Document & {
  __typename?: "About";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  copyImage?: Maybe<Image>;
  firstCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the first heading */
  firstSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** First title */
  firstTitle?: Maybe<Scalars["String"]["output"]>;
  secondCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the second heading */
  secondSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** H1 */
  secondTitle?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  thirdCopyImage?: Maybe<Image>;
  thirdCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the copy heading */
  thirdSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** H1 */
  thirdTitle?: Maybe<Scalars["String"]["output"]>;
  /** Only used to generate the slug. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type AboutFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  copyImage?: InputMaybe<ImageFilter>;
  firstSubtitle?: InputMaybe<StringFilter>;
  firstTitle?: InputMaybe<StringFilter>;
  secondSubtitle?: InputMaybe<StringFilter>;
  secondTitle?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thirdCopyImage?: InputMaybe<ImageFilter>;
  thirdSubtitle?: InputMaybe<StringFilter>;
  thirdTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AboutSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  copyImage?: InputMaybe<ImageSorting>;
  firstSubtitle?: InputMaybe<SortOrder>;
  firstTitle?: InputMaybe<SortOrder>;
  secondSubtitle?: InputMaybe<SortOrder>;
  secondTitle?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  thirdCopyImage?: InputMaybe<ImageSorting>;
  thirdSubtitle?: InputMaybe<SortOrder>;
  thirdTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: "Block";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<Scalars["String"]["output"]>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Contact = Document & {
  __typename?: "Contact";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  gallery?: Maybe<Array<Maybe<Image>>>;
  introCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the intro heading */
  introSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** Introduction title at the top of the page */
  introTitle?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  team?: Maybe<Array<Maybe<TeamMember>>>;
  /** Only used to generate the slug. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContactFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  introSubtitle?: InputMaybe<StringFilter>;
  introTitle?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ContactSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  introSubtitle?: InputMaybe<SortOrder>;
  introTitle?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  __typename?: "CrossDatasetReference";
  _dataset?: Maybe<Scalars["String"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  _projectId?: Maybe<Scalars["String"]["output"]>;
  _ref?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  _weak?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: "File";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Geopoint = {
  __typename?: "Geopoint";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  alt?: Maybe<Scalars["Float"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type Global = Document & {
  __typename?: "Global";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  address?: Maybe<Scalars["String"]["output"]>;
  companyName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  registrationNumber?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

export type GlobalFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  companyName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  vatNumber?: InputMaybe<StringFilter>;
};

export type GlobalSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  registrationNumber?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  vatNumber?: InputMaybe<SortOrder>;
};

export type Home = Document & {
  __typename?: "Home";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  copyImage?: Maybe<Image>;
  copyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the copy heading */
  copySubtitle?: Maybe<Scalars["String"]["output"]>;
  /** H1 */
  copyTitle?: Maybe<Scalars["String"]["output"]>;
  featuredProjects?: Maybe<Array<Maybe<Project>>>;
  gallery?: Maybe<Array<Maybe<Image>>>;
  /** Text to accompany the hero image */
  heroHeadline?: Maybe<Scalars["String"]["output"]>;
  heroImages?: Maybe<Array<Maybe<Image>>>;
  mobileHeroImages?: Maybe<Array<Maybe<Image>>>;
  /** Text above the projects heading */
  projectsSubtitle?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  /** Testimonial to display on the homepage */
  testimonial?: Maybe<Scalars["String"]["output"]>;
  /** The author of the testimonial */
  testimonialAuthor?: Maybe<Scalars["String"]["output"]>;
  /** Only used to generate the slug. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type HomeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  copyImage?: InputMaybe<ImageFilter>;
  copySubtitle?: InputMaybe<StringFilter>;
  copyTitle?: InputMaybe<StringFilter>;
  heroHeadline?: InputMaybe<StringFilter>;
  projectsSubtitle?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  testimonial?: InputMaybe<StringFilter>;
  testimonialAuthor?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  copyImage?: InputMaybe<ImageSorting>;
  copySubtitle?: InputMaybe<SortOrder>;
  copyTitle?: InputMaybe<SortOrder>;
  heroHeadline?: InputMaybe<SortOrder>;
  projectsSubtitle?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  testimonial?: InputMaybe<SortOrder>;
  testimonialAuthor?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["ID"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["ID"]["input"]>;
  nin?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type Image = {
  __typename?: "Image";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Landing = Document & {
  __typename?: "Landing";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  landingImage?: Maybe<Image>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type LandingFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  landingImage?: InputMaybe<ImageFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LandingSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  landingImage?: InputMaybe<ImageSorting>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Project = Document & {
  __typename?: "Project";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  featuredProjectGallery?: Maybe<Array<Maybe<Image>>>;
  gallery?: Maybe<Array<Maybe<Image>>>;
  heroImages?: Maybe<Array<Maybe<Image>>>;
  mobileHeroImages?: Maybe<Array<Maybe<Image>>>;
  orderRank?: Maybe<Scalars["String"]["output"]>;
  projectCopyImage?: Maybe<Image>;
  projectCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Involvement in the project */
  projectInvolvement?: Maybe<Scalars["String"]["output"]>;
  /** Location of the project */
  projectLocation?: Maybe<Scalars["String"]["output"]>;
  /** Value of the project */
  projectValue?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  /** Project title */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  orderRank?: InputMaybe<StringFilter>;
  projectCopyImage?: InputMaybe<ImageFilter>;
  projectInvolvement?: InputMaybe<StringFilter>;
  projectLocation?: InputMaybe<StringFilter>;
  projectValue?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  orderRank?: InputMaybe<SortOrder>;
  projectCopyImage?: InputMaybe<ImageSorting>;
  projectInvolvement?: InputMaybe<SortOrder>;
  projectLocation?: InputMaybe<SortOrder>;
  projectValue?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Projects = Document & {
  __typename?: "Projects";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  introCopyRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Text above the intro heading */
  introSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** Introduction title at the top of the page */
  introTitle?: Maybe<Scalars["String"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  /** Only used to generate the slug. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  introSubtitle?: InputMaybe<StringFilter>;
  introTitle?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  introSubtitle?: InputMaybe<SortOrder>;
  introTitle?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: "RootQuery";
  About?: Maybe<About>;
  Contact?: Maybe<Contact>;
  Document?: Maybe<Document>;
  Global?: Maybe<Global>;
  Home?: Maybe<Home>;
  Landing?: Maybe<Landing>;
  Project?: Maybe<Project>;
  Projects?: Maybe<Projects>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Team?: Maybe<Team>;
  TeamMember?: Maybe<TeamMember>;
  Testimonial?: Maybe<Testimonial>;
  allAbout: Array<About>;
  allContact: Array<Contact>;
  allDocument: Array<Document>;
  allGlobal: Array<Global>;
  allHome: Array<Home>;
  allLanding: Array<Landing>;
  allProject: Array<Project>;
  allProjects: Array<Projects>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allTeam: Array<Team>;
  allTeamMember: Array<TeamMember>;
  allTestimonial: Array<Testimonial>;
};

export type RootQueryAboutArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryContactArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryDocumentArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryGlobalArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryHomeArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryLandingArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryProjectsArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryTeamArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryTeamMemberArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryTestimonialArgs = {
  id: Scalars["ID"]["input"];
};

export type RootQueryAllAboutArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<AboutSorting>>;
  where?: InputMaybe<AboutFilter>;
};

export type RootQueryAllContactArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ContactSorting>>;
  where?: InputMaybe<ContactFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllGlobalArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<GlobalSorting>>;
  where?: InputMaybe<GlobalFilter>;
};

export type RootQueryAllHomeArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<HomeSorting>>;
  where?: InputMaybe<HomeFilter>;
};

export type RootQueryAllLandingArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<LandingSorting>>;
  where?: InputMaybe<LandingFilter>;
};

export type RootQueryAllProjectArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ProjectSorting>>;
  where?: InputMaybe<ProjectFilter>;
};

export type RootQueryAllProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ProjectsSorting>>;
  where?: InputMaybe<ProjectsFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllTeamArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TeamSorting>>;
  where?: InputMaybe<TeamFilter>;
};

export type RootQueryAllTeamMemberArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TeamMemberSorting>>;
  where?: InputMaybe<TeamMemberFilter>;
};

export type RootQueryAllTestimonialArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TestimonialSorting>>;
  where?: InputMaybe<TestimonialFilter>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars["String"]["output"]>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars["String"]["output"]>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: "SanityFileAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: "SanityImageAsset";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  altText?: Maybe<Scalars["String"]["output"]>;
  assetId?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  extension?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  originalFilename?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  sha1hash?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars["String"]["output"]>;
  uploadId?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  bottom?: Maybe<Scalars["Float"]["output"]>;
  left?: Maybe<Scalars["Float"]["output"]>;
  right?: Maybe<Scalars["Float"]["output"]>;
  top?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  aspectRatio?: Maybe<Scalars["Float"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Float"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
  x?: Maybe<Scalars["Float"]["output"]>;
  y?: Maybe<Scalars["Float"]["output"]>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  blurHash?: Maybe<Scalars["String"]["output"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]["output"]>;
  isOpaque?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars["String"]["output"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  background?: Maybe<Scalars["String"]["output"]>;
  foreground?: Maybe<Scalars["String"]["output"]>;
  population?: Maybe<Scalars["Float"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Seo = {
  __typename?: "Seo";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Description for search engines. */
  metaDesc?: Maybe<Scalars["String"]["output"]>;
  /** Title used for search engines and browsers. */
  metaTitle?: Maybe<Scalars["String"]["output"]>;
  shareGraphic?: Maybe<Image>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  metaDesc?: InputMaybe<StringFilter>;
  metaTitle?: InputMaybe<StringFilter>;
  shareGraphic?: InputMaybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  metaDesc?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  shareGraphic?: InputMaybe<ImageSorting>;
};

export type Slug = {
  __typename?: "Slug";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  current?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = "ASC",
  /** Sorts on the value in descending order. */
  Desc = "DESC",
}

export type Span = {
  __typename?: "Span";
  _key?: Maybe<Scalars["String"]["output"]>;
  _type?: Maybe<Scalars["String"]["output"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type Team = Document & {
  __typename?: "Team";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  team?: Maybe<Array<Maybe<TeamMember>>>;
  /** Text above the team members heading */
  teamSubtitle?: Maybe<Scalars["String"]["output"]>;
  /** Team title */
  teamTitle?: Maybe<Scalars["String"]["output"]>;
  /** Only used to generate the slug. */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type TeamFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  teamSubtitle?: InputMaybe<StringFilter>;
  teamTitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TeamMember = Document & {
  __typename?: "TeamMember";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  bioRaw?: Maybe<Scalars["JSON"]["output"]>;
  /** Email address of the team member */
  email?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Image>;
  /** Name of the team member */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Phone number of the team member */
  phone?: Maybe<Scalars["String"]["output"]>;
};

export type TeamMemberFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
};

export type TeamMemberSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
};

export type TeamSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  teamSubtitle?: InputMaybe<SortOrder>;
  teamTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Testimonial = Document & {
  __typename?: "Testimonial";
  /** Date the document was created */
  _createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Document ID */
  _id?: Maybe<Scalars["ID"]["output"]>;
  _key?: Maybe<Scalars["String"]["output"]>;
  /** Current document revision */
  _rev?: Maybe<Scalars["String"]["output"]>;
  /** Document type */
  _type?: Maybe<Scalars["String"]["output"]>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** Project testimonial */
  testimonial?: Maybe<Scalars["String"]["output"]>;
  /** Who wrote this testimonial? */
  testimonialAuthor?: Maybe<Scalars["String"]["output"]>;
};

export type TestimonialFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  testimonial?: InputMaybe<StringFilter>;
  testimonialAuthor?: InputMaybe<StringFilter>;
};

export type TestimonialSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  testimonial?: InputMaybe<SortOrder>;
  testimonialAuthor?: InputMaybe<SortOrder>;
};

export type ImageHotspotFragment = {
  __typename?: "SanityImageHotspot";
  x?: number | null | undefined;
  y?: number | null | undefined;
  width?: number | null | undefined;
  height?: number | null | undefined;
};

export type ImageCropFragment = {
  __typename?: "SanityImageCrop";
  top?: number | null | undefined;
  bottom?: number | null | undefined;
  left?: number | null | undefined;
  right?: number | null | undefined;
};

export type SeoFragment = {
  __typename?: "Seo";
  metaTitle?: string | null | undefined;
  metaDesc?: string | null | undefined;
  keywords?: Array<string | null | undefined> | null | undefined;
  shareGraphic?:
    | {
        __typename?: "Image";
        asset?:
          | {
              __typename?: "SanityImageAsset";
              url?: string | null | undefined;
              altText?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ImageAssetFragment = {
  __typename?: "SanityImageAsset";
  url?: string | null | undefined;
  altText?: string | null | undefined;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeQuery = {
  __typename?: "RootQuery";
  allHome: Array<{
    __typename?: "Home";
    heroHeadline?: string | null | undefined;
    copySubtitle?: string | null | undefined;
    copyTitle?: string | null | undefined;
    copyRaw?: any | null | undefined;
    projectsSubtitle?: string | null | undefined;
    mobileHeroImages?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    heroImages?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    copyImage?:
      | {
          __typename?: "Image";
          asset?:
            | {
                __typename?: "SanityImageAsset";
                url?: string | null | undefined;
                altText?: string | null | undefined;
              }
            | null
            | undefined;
          hotspot?:
            | {
                __typename?: "SanityImageHotspot";
                x?: number | null | undefined;
                y?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
              }
            | null
            | undefined;
          crop?:
            | {
                __typename?: "SanityImageCrop";
                top?: number | null | undefined;
                bottom?: number | null | undefined;
                left?: number | null | undefined;
                right?: number | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    featuredProjects?:
      | Array<
          | {
              __typename?: "Project";
              title?: string | null | undefined;
              slug?:
                | { __typename?: "Slug"; current?: string | null | undefined }
                | null
                | undefined;
              featuredProjectGallery?:
                | Array<
                    | {
                        __typename?: "Image";
                        asset?:
                          | {
                              __typename?: "SanityImageAsset";
                              url?: string | null | undefined;
                              altText?: string | null | undefined;
                            }
                          | null
                          | undefined;
                        hotspot?:
                          | {
                              __typename?: "SanityImageHotspot";
                              x?: number | null | undefined;
                              y?: number | null | undefined;
                              width?: number | null | undefined;
                              height?: number | null | undefined;
                            }
                          | null
                          | undefined;
                        crop?:
                          | {
                              __typename?: "SanityImageCrop";
                              top?: number | null | undefined;
                              bottom?: number | null | undefined;
                              left?: number | null | undefined;
                              right?: number | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
              gallery?:
                | Array<
                    | {
                        __typename?: "Image";
                        asset?:
                          | {
                              __typename?: "SanityImageAsset";
                              url?: string | null | undefined;
                              altText?: string | null | undefined;
                            }
                          | null
                          | undefined;
                        hotspot?:
                          | {
                              __typename?: "SanityImageHotspot";
                              x?: number | null | undefined;
                              y?: number | null | undefined;
                              width?: number | null | undefined;
                              height?: number | null | undefined;
                            }
                          | null
                          | undefined;
                        crop?:
                          | {
                              __typename?: "SanityImageCrop";
                              top?: number | null | undefined;
                              bottom?: number | null | undefined;
                              left?: number | null | undefined;
                              right?: number | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    gallery?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
  testimonials: Array<{
    __typename?: "Testimonial";
    testimonial?: string | null | undefined;
    testimonialAuthor?: string | null | undefined;
  }>;
};

export type GetAboutQueryVariables = Exact<{ [key: string]: never }>;

export type GetAboutQuery = {
  __typename?: "RootQuery";
  allAbout: Array<{
    __typename?: "About";
    firstSubtitle?: string | null | undefined;
    firstTitle?: string | null | undefined;
    firstCopyRaw?: any | null | undefined;
    secondSubtitle?: string | null | undefined;
    secondTitle?: string | null | undefined;
    secondCopyRaw?: any | null | undefined;
    thirdSubtitle?: string | null | undefined;
    thirdTitle?: string | null | undefined;
    thirdCopyRaw?: any | null | undefined;
    copyImage?:
      | {
          __typename?: "Image";
          asset?:
            | {
                __typename?: "SanityImageAsset";
                url?: string | null | undefined;
                altText?: string | null | undefined;
              }
            | null
            | undefined;
          hotspot?:
            | {
                __typename?: "SanityImageHotspot";
                x?: number | null | undefined;
                y?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
              }
            | null
            | undefined;
          crop?:
            | {
                __typename?: "SanityImageCrop";
                top?: number | null | undefined;
                bottom?: number | null | undefined;
                left?: number | null | undefined;
                right?: number | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    thirdCopyImage?:
      | {
          __typename?: "Image";
          asset?:
            | {
                __typename?: "SanityImageAsset";
                url?: string | null | undefined;
                altText?: string | null | undefined;
              }
            | null
            | undefined;
          hotspot?:
            | {
                __typename?: "SanityImageHotspot";
                x?: number | null | undefined;
                y?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
              }
            | null
            | undefined;
          crop?:
            | {
                __typename?: "SanityImageCrop";
                top?: number | null | undefined;
                bottom?: number | null | undefined;
                left?: number | null | undefined;
                right?: number | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetTeamQueryVariables = Exact<{ [key: string]: never }>;

export type GetTeamQuery = {
  __typename?: "RootQuery";
  allTeam: Array<{
    __typename?: "Team";
    teamSubtitle?: string | null | undefined;
    teamTitle?: string | null | undefined;
    team?:
      | Array<
          | {
              __typename?: "TeamMember";
              name?: string | null | undefined;
              email?: string | null | undefined;
              phone?: string | null | undefined;
              bioRaw?: any | null | undefined;
              image?:
                | {
                    __typename?: "Image";
                    asset?:
                      | {
                          __typename?: "SanityImageAsset";
                          url?: string | null | undefined;
                          altText?: string | null | undefined;
                        }
                      | null
                      | undefined;
                    hotspot?:
                      | {
                          __typename?: "SanityImageHotspot";
                          x?: number | null | undefined;
                          y?: number | null | undefined;
                          width?: number | null | undefined;
                          height?: number | null | undefined;
                        }
                      | null
                      | undefined;
                    crop?:
                      | {
                          __typename?: "SanityImageCrop";
                          top?: number | null | undefined;
                          bottom?: number | null | undefined;
                          left?: number | null | undefined;
                          right?: number | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetContactQueryVariables = Exact<{ [key: string]: never }>;

export type GetContactQuery = {
  __typename?: "RootQuery";
  allContact: Array<{
    __typename?: "Contact";
    introSubtitle?: string | null | undefined;
    introTitle?: string | null | undefined;
    introCopyRaw?: any | null | undefined;
    team?:
      | Array<
          | {
              __typename?: "TeamMember";
              name?: string | null | undefined;
              email?: string | null | undefined;
              phone?: string | null | undefined;
              bioRaw?: any | null | undefined;
              image?:
                | {
                    __typename?: "Image";
                    asset?:
                      | {
                          __typename?: "SanityImageAsset";
                          url?: string | null | undefined;
                          altText?: string | null | undefined;
                        }
                      | null
                      | undefined;
                    hotspot?:
                      | {
                          __typename?: "SanityImageHotspot";
                          x?: number | null | undefined;
                          y?: number | null | undefined;
                          width?: number | null | undefined;
                          height?: number | null | undefined;
                        }
                      | null
                      | undefined;
                    crop?:
                      | {
                          __typename?: "SanityImageCrop";
                          top?: number | null | undefined;
                          bottom?: number | null | undefined;
                          left?: number | null | undefined;
                          right?: number | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    gallery?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetProjectSingletonQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectSingletonQuery = {
  __typename?: "RootQuery";
  page: Array<{
    __typename?: "Projects";
    introSubtitle?: string | null | undefined;
    introTitle?: string | null | undefined;
    introCopyRaw?: any | null | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
  projects: Array<{
    __typename?: "Project";
    title?: string | null | undefined;
    projectLocation?: string | null | undefined;
    heroImages?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export type GetProjectQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetProjectQuery = {
  __typename?: "RootQuery";
  project: Array<{
    __typename?: "Project";
    title?: string | null | undefined;
    projectCopyRaw?: any | null | undefined;
    projectLocation?: string | null | undefined;
    projectValue?: string | null | undefined;
    projectInvolvement?: string | null | undefined;
    mobileHeroImages?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    heroImages?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    projectCopyImage?:
      | {
          __typename?: "Image";
          asset?:
            | {
                __typename?: "SanityImageAsset";
                url?: string | null | undefined;
                altText?: string | null | undefined;
              }
            | null
            | undefined;
          hotspot?:
            | {
                __typename?: "SanityImageHotspot";
                x?: number | null | undefined;
                y?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
              }
            | null
            | undefined;
          crop?:
            | {
                __typename?: "SanityImageCrop";
                top?: number | null | undefined;
                bottom?: number | null | undefined;
                left?: number | null | undefined;
                right?: number | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    gallery?:
      | Array<
          | {
              __typename?: "Image";
              asset?:
                | {
                    __typename?: "SanityImageAsset";
                    url?: string | null | undefined;
                    altText?: string | null | undefined;
                  }
                | null
                | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    width?: number | null | undefined;
                    height?: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
    slug?:
      | { __typename?: "Slug"; current?: string | null | undefined }
      | null
      | undefined;
    seo?:
      | {
          __typename?: "Seo";
          metaTitle?: string | null | undefined;
          metaDesc?: string | null | undefined;
          keywords?: Array<string | null | undefined> | null | undefined;
          shareGraphic?:
            | {
                __typename?: "Image";
                asset?:
                  | {
                      __typename?: "SanityImageAsset";
                      url?: string | null | undefined;
                      altText?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }>;
};

export const ImageHotspotFragmentDoc = gql`
  fragment imageHotspot on SanityImageHotspot {
    x
    y
    width
    height
  }
`;
export const ImageCropFragmentDoc = gql`
  fragment imageCrop on SanityImageCrop {
    top
    bottom
    left
    right
  }
`;
export const SeoFragmentDoc = gql`
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
export const ImageAssetFragmentDoc = gql`
  fragment imageAsset on SanityImageAsset {
    url
    altText
  }
`;
export const GetHomeDoc = gql`
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
  ${SeoFragmentDoc}
`;
export const GetAboutDoc = gql`
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
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
`;
export const GetTeamDoc = gql`
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
export const GetContactDoc = gql`
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
export const GetProjectSingletonDoc = gql`
  query GetProjectSingleton {
    page: allProjects {
      introSubtitle
      introTitle
      introCopyRaw
      slug {
        current
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
  ${SeoFragmentDoc}
  ${ImageAssetFragmentDoc}
  ${ImageCropFragmentDoc}
  ${ImageHotspotFragmentDoc}
`;
export const GetProjectDoc = gql`
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
    }
  }
  ${ImageAssetFragmentDoc}
  ${ImageHotspotFragmentDoc}
  ${ImageCropFragmentDoc}
  ${SeoFragmentDoc}
`;
export const GetHome = (
  options: Omit<WatchQueryOptions<GetHomeQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetHomeQuery> & {
    query: ObservableQuery<GetHomeQuery, GetHomeQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetHomeDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetHomeQuery> & {
      query: ObservableQuery<GetHomeQuery, GetHomeQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};

export const GetAbout = (
  options: Omit<WatchQueryOptions<GetAboutQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetAboutQuery> & {
    query: ObservableQuery<GetAboutQuery, GetAboutQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetAboutDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetAboutQuery> & {
      query: ObservableQuery<GetAboutQuery, GetAboutQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};

export const GetTeam = (
  options: Omit<WatchQueryOptions<GetTeamQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetTeamQuery> & {
    query: ObservableQuery<GetTeamQuery, GetTeamQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetTeamDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetTeamQuery> & {
      query: ObservableQuery<GetTeamQuery, GetTeamQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};

export const GetContact = (
  options: Omit<WatchQueryOptions<GetContactQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetContactQuery> & {
    query: ObservableQuery<GetContactQuery, GetContactQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetContactDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetContactQuery> & {
      query: ObservableQuery<GetContactQuery, GetContactQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};

export const GetProjectSingleton = (
  options: Omit<WatchQueryOptions<GetProjectSingletonQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetProjectSingletonQuery> & {
    query: ObservableQuery<
      GetProjectSingletonQuery,
      GetProjectSingletonQueryVariables
    >;
  }
> => {
  const q = client.watchQuery({
    query: GetProjectSingletonDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetProjectSingletonQuery> & {
      query: ObservableQuery<
        GetProjectSingletonQuery,
        GetProjectSingletonQueryVariables
      >;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};

export const GetProject = (
  options: Omit<WatchQueryOptions<GetProjectQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetProjectQuery> & {
    query: ObservableQuery<GetProjectQuery, GetProjectQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetProjectDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetProjectQuery> & {
      query: ObservableQuery<GetProjectQuery, GetProjectQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};
