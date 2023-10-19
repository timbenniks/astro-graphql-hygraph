/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  iconCms: Array<Cms>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  posterTurboTutorial: Array<TurboTutorial>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetIconCmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CmsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CmsWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPosterTurboTutorialArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TurboTutorialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TurboTutorialWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  iconCms?: InputMaybe<CmsCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  posterTurboTutorial?: InputMaybe<TurboTutorialCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  iconCms_every?: InputMaybe<CmsWhereInput>;
  iconCms_none?: InputMaybe<CmsWhereInput>;
  iconCms_some?: InputMaybe<CmsWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  posterTurboTutorial_every?: InputMaybe<TurboTutorialWhereInput>;
  posterTurboTutorial_none?: InputMaybe<TurboTutorialWhereInput>;
  posterTurboTutorial_some?: InputMaybe<TurboTutorialWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  iconCms?: InputMaybe<CmsUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  posterTurboTutorial?: InputMaybe<TurboTutorialUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  iconCms_every?: InputMaybe<CmsWhereInput>;
  iconCms_none?: InputMaybe<CmsWhereInput>;
  iconCms_some?: InputMaybe<CmsWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  posterTurboTutorial_every?: InputMaybe<TurboTutorialWhereInput>;
  posterTurboTutorial_none?: InputMaybe<TurboTutorialWhereInput>;
  posterTurboTutorial_some?: InputMaybe<TurboTutorialWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Cms = Node & {
  __typename?: 'Cms';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Cms>;
  featureCdn?: Maybe<Scalars['String']['output']>;
  featureContentModelingCapabilities?: Maybe<Scalars['String']['output']>;
  featureDeliveryApIs?: Maybe<Scalars['String']['output']>;
  featureDeliveryModel?: Maybe<Scalars['String']['output']>;
  featureDevOpsAndApplicationManagementCapabilities?: Maybe<Scalars['String']['output']>;
  featureIntegrationAndPlugInFramework?: Maybe<Scalars['String']['output']>;
  featureMultilingualSupport?: Maybe<Scalars['String']['output']>;
  featurePreview?: Maybe<Scalars['String']['output']>;
  featureSdks?: Maybe<Scalars['String']['output']>;
  featureUxCustomizationFramework?: Maybe<Scalars['String']['output']>;
  featureWorkflows?: Maybe<Scalars['String']['output']>;
  /** List of Cms versions */
  history: Array<Version>;
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CmsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CmsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CmsHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CmsIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CmsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CmsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CmsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CmsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CmsWhereUniqueInput;
};

/** A connection to a list of items. */
export type CmsConnection = {
  __typename?: 'CmsConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CmsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CmsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureCdn?: InputMaybe<Scalars['String']['input']>;
  featureContentModelingCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryApIs?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryModel?: InputMaybe<Scalars['String']['input']>;
  featureDevOpsAndApplicationManagementCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureIntegrationAndPlugInFramework?: InputMaybe<Scalars['String']['input']>;
  featureMultilingualSupport?: InputMaybe<Scalars['String']['input']>;
  featurePreview?: InputMaybe<Scalars['String']['input']>;
  featureSdks?: InputMaybe<Scalars['String']['input']>;
  featureUxCustomizationFramework?: InputMaybe<Scalars['String']['input']>;
  featureWorkflows?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetCreateOneInlineInput>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CmsCreateManyInlineInput = {
  /** Connect multiple existing Cms documents */
  connect?: InputMaybe<Array<CmsWhereUniqueInput>>;
  /** Create and connect multiple existing Cms documents */
  create?: InputMaybe<Array<CmsCreateInput>>;
};

export type CmsCreateOneInlineInput = {
  /** Connect one existing Cms document */
  connect?: InputMaybe<CmsWhereUniqueInput>;
  /** Create and connect one Cms document */
  create?: InputMaybe<CmsCreateInput>;
};

/** An edge in a connection. */
export type CmsEdge = {
  __typename?: 'CmsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Cms;
};

/** Identifies documents */
export type CmsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CmsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CmsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CmsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CmsWhereStageInput>;
  documentInStages_none?: InputMaybe<CmsWhereStageInput>;
  documentInStages_some?: InputMaybe<CmsWhereStageInput>;
  featureCdn?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureCdn_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureCdn_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureCdn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureCdn_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureCdn_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureCdn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureCdn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureCdn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureCdn_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureContentModelingCapabilities?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureContentModelingCapabilities_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureContentModelingCapabilities_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureContentModelingCapabilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureContentModelingCapabilities_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureContentModelingCapabilities_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureContentModelingCapabilities_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureContentModelingCapabilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureContentModelingCapabilities_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureContentModelingCapabilities_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryApIs?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDeliveryApIs_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDeliveryApIs_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDeliveryApIs_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDeliveryApIs_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDeliveryApIs_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDeliveryApIs_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDeliveryApIs_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDeliveryApIs_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDeliveryApIs_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryModel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDeliveryModel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDeliveryModel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDeliveryModel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDeliveryModel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDeliveryModel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDeliveryModel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDeliveryModel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDeliveryModel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDeliveryModel_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDevOpsAndApplicationManagementCapabilities?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDevOpsAndApplicationManagementCapabilities_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDevOpsAndApplicationManagementCapabilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDevOpsAndApplicationManagementCapabilities_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDevOpsAndApplicationManagementCapabilities_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDevOpsAndApplicationManagementCapabilities_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDevOpsAndApplicationManagementCapabilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureIntegrationAndPlugInFramework?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureIntegrationAndPlugInFramework_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureIntegrationAndPlugInFramework_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureIntegrationAndPlugInFramework_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureIntegrationAndPlugInFramework_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureIntegrationAndPlugInFramework_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureIntegrationAndPlugInFramework_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureIntegrationAndPlugInFramework_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureIntegrationAndPlugInFramework_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureIntegrationAndPlugInFramework_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureMultilingualSupport?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureMultilingualSupport_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureMultilingualSupport_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureMultilingualSupport_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureMultilingualSupport_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureMultilingualSupport_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureMultilingualSupport_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureMultilingualSupport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureMultilingualSupport_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureMultilingualSupport_starts_with?: InputMaybe<Scalars['String']['input']>;
  featurePreview?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featurePreview_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featurePreview_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featurePreview_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featurePreview_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featurePreview_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featurePreview_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featurePreview_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featurePreview_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featurePreview_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureSdks?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureSdks_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureSdks_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureSdks_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureSdks_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureSdks_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureSdks_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureSdks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureSdks_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureSdks_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureUxCustomizationFramework?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureUxCustomizationFramework_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureUxCustomizationFramework_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureUxCustomizationFramework_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureUxCustomizationFramework_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureUxCustomizationFramework_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureUxCustomizationFramework_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureUxCustomizationFramework_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureUxCustomizationFramework_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureUxCustomizationFramework_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureWorkflows?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureWorkflows_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureWorkflows_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureWorkflows_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureWorkflows_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureWorkflows_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureWorkflows_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureWorkflows_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureWorkflows_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureWorkflows_starts_with?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CmsOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeatureCdnAsc = 'featureCdn_ASC',
  FeatureCdnDesc = 'featureCdn_DESC',
  FeatureContentModelingCapabilitiesAsc = 'featureContentModelingCapabilities_ASC',
  FeatureContentModelingCapabilitiesDesc = 'featureContentModelingCapabilities_DESC',
  FeatureDeliveryApIsAsc = 'featureDeliveryApIs_ASC',
  FeatureDeliveryApIsDesc = 'featureDeliveryApIs_DESC',
  FeatureDeliveryModelAsc = 'featureDeliveryModel_ASC',
  FeatureDeliveryModelDesc = 'featureDeliveryModel_DESC',
  FeatureDevOpsAndApplicationManagementCapabilitiesAsc = 'featureDevOpsAndApplicationManagementCapabilities_ASC',
  FeatureDevOpsAndApplicationManagementCapabilitiesDesc = 'featureDevOpsAndApplicationManagementCapabilities_DESC',
  FeatureIntegrationAndPlugInFrameworkAsc = 'featureIntegrationAndPlugInFramework_ASC',
  FeatureIntegrationAndPlugInFrameworkDesc = 'featureIntegrationAndPlugInFramework_DESC',
  FeatureMultilingualSupportAsc = 'featureMultilingualSupport_ASC',
  FeatureMultilingualSupportDesc = 'featureMultilingualSupport_DESC',
  FeaturePreviewAsc = 'featurePreview_ASC',
  FeaturePreviewDesc = 'featurePreview_DESC',
  FeatureSdksAsc = 'featureSdks_ASC',
  FeatureSdksDesc = 'featureSdks_DESC',
  FeatureUxCustomizationFrameworkAsc = 'featureUxCustomizationFramework_ASC',
  FeatureUxCustomizationFrameworkDesc = 'featureUxCustomizationFramework_DESC',
  FeatureWorkflowsAsc = 'featureWorkflows_ASC',
  FeatureWorkflowsDesc = 'featureWorkflows_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CmsUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  featureCdn?: InputMaybe<Scalars['String']['input']>;
  featureContentModelingCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryApIs?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryModel?: InputMaybe<Scalars['String']['input']>;
  featureDevOpsAndApplicationManagementCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureIntegrationAndPlugInFramework?: InputMaybe<Scalars['String']['input']>;
  featureMultilingualSupport?: InputMaybe<Scalars['String']['input']>;
  featurePreview?: InputMaybe<Scalars['String']['input']>;
  featureSdks?: InputMaybe<Scalars['String']['input']>;
  featureUxCustomizationFramework?: InputMaybe<Scalars['String']['input']>;
  featureWorkflows?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CmsUpdateManyInlineInput = {
  /** Connect multiple existing Cms documents */
  connect?: InputMaybe<Array<CmsConnectInput>>;
  /** Create and connect multiple Cms documents */
  create?: InputMaybe<Array<CmsCreateInput>>;
  /** Delete multiple Cms documents */
  delete?: InputMaybe<Array<CmsWhereUniqueInput>>;
  /** Disconnect multiple Cms documents */
  disconnect?: InputMaybe<Array<CmsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Cms documents */
  set?: InputMaybe<Array<CmsWhereUniqueInput>>;
  /** Update multiple Cms documents */
  update?: InputMaybe<Array<CmsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Cms documents */
  upsert?: InputMaybe<Array<CmsUpsertWithNestedWhereUniqueInput>>;
};

export type CmsUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  featureCdn?: InputMaybe<Scalars['String']['input']>;
  featureContentModelingCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryApIs?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryModel?: InputMaybe<Scalars['String']['input']>;
  featureDevOpsAndApplicationManagementCapabilities?: InputMaybe<Scalars['String']['input']>;
  featureIntegrationAndPlugInFramework?: InputMaybe<Scalars['String']['input']>;
  featureMultilingualSupport?: InputMaybe<Scalars['String']['input']>;
  featurePreview?: InputMaybe<Scalars['String']['input']>;
  featureSdks?: InputMaybe<Scalars['String']['input']>;
  featureUxCustomizationFramework?: InputMaybe<Scalars['String']['input']>;
  featureWorkflows?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CmsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CmsUpdateManyInput;
  /** Document search */
  where: CmsWhereInput;
};

export type CmsUpdateOneInlineInput = {
  /** Connect existing Cms document */
  connect?: InputMaybe<CmsWhereUniqueInput>;
  /** Create and connect one Cms document */
  create?: InputMaybe<CmsCreateInput>;
  /** Delete currently connected Cms document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Cms document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Cms document */
  update?: InputMaybe<CmsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cms document */
  upsert?: InputMaybe<CmsUpsertWithNestedWhereUniqueInput>;
};

export type CmsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CmsUpdateInput;
  /** Unique document search */
  where: CmsWhereUniqueInput;
};

export type CmsUpsertInput = {
  /** Create document if it didn't exist */
  create: CmsCreateInput;
  /** Update document if it exists */
  update: CmsUpdateInput;
};

export type CmsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CmsUpsertInput;
  /** Unique document search */
  where: CmsWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CmsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CmsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CmsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CmsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CmsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CmsWhereStageInput>;
  documentInStages_none?: InputMaybe<CmsWhereStageInput>;
  documentInStages_some?: InputMaybe<CmsWhereStageInput>;
  featureCdn?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureCdn_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureCdn_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureCdn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureCdn_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureCdn_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureCdn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureCdn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureCdn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureCdn_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureContentModelingCapabilities?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureContentModelingCapabilities_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureContentModelingCapabilities_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureContentModelingCapabilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureContentModelingCapabilities_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureContentModelingCapabilities_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureContentModelingCapabilities_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureContentModelingCapabilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureContentModelingCapabilities_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureContentModelingCapabilities_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryApIs?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDeliveryApIs_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDeliveryApIs_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDeliveryApIs_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDeliveryApIs_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDeliveryApIs_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDeliveryApIs_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDeliveryApIs_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDeliveryApIs_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDeliveryApIs_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDeliveryModel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDeliveryModel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDeliveryModel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDeliveryModel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDeliveryModel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDeliveryModel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDeliveryModel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDeliveryModel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDeliveryModel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDeliveryModel_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureDevOpsAndApplicationManagementCapabilities?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureDevOpsAndApplicationManagementCapabilities_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureDevOpsAndApplicationManagementCapabilities_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureDevOpsAndApplicationManagementCapabilities_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureDevOpsAndApplicationManagementCapabilities_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureDevOpsAndApplicationManagementCapabilities_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureDevOpsAndApplicationManagementCapabilities_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureDevOpsAndApplicationManagementCapabilities_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureIntegrationAndPlugInFramework?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureIntegrationAndPlugInFramework_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureIntegrationAndPlugInFramework_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureIntegrationAndPlugInFramework_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureIntegrationAndPlugInFramework_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureIntegrationAndPlugInFramework_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureIntegrationAndPlugInFramework_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureIntegrationAndPlugInFramework_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureIntegrationAndPlugInFramework_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureIntegrationAndPlugInFramework_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureMultilingualSupport?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureMultilingualSupport_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureMultilingualSupport_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureMultilingualSupport_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureMultilingualSupport_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureMultilingualSupport_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureMultilingualSupport_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureMultilingualSupport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureMultilingualSupport_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureMultilingualSupport_starts_with?: InputMaybe<Scalars['String']['input']>;
  featurePreview?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featurePreview_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featurePreview_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featurePreview_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featurePreview_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featurePreview_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featurePreview_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featurePreview_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featurePreview_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featurePreview_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureSdks?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureSdks_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureSdks_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureSdks_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureSdks_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureSdks_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureSdks_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureSdks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureSdks_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureSdks_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureUxCustomizationFramework?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureUxCustomizationFramework_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureUxCustomizationFramework_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureUxCustomizationFramework_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureUxCustomizationFramework_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureUxCustomizationFramework_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureUxCustomizationFramework_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureUxCustomizationFramework_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureUxCustomizationFramework_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureUxCustomizationFramework_starts_with?: InputMaybe<Scalars['String']['input']>;
  featureWorkflows?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  featureWorkflows_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  featureWorkflows_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  featureWorkflows_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  featureWorkflows_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  featureWorkflows_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  featureWorkflows_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  featureWorkflows_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  featureWorkflows_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  featureWorkflows_starts_with?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CmsWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CmsWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CmsWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CmsWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CmsWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Cms record uniquely */
export type CmsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export enum Complexity {
  Complex = 'Complex',
  Easy = 'Easy',
  Intermediate = 'Intermediate'
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Copy = {
  __typename?: 'Copy';
  componentName?: Maybe<Scalars['String']['output']>;
  copy?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  space?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
};

export type CopyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CopyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CopyConnection = {
  __typename?: 'CopyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CopyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CopyCreateInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  copy?: InputMaybe<Scalars['RichTextAST']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CopyCreateManyInlineInput = {
  /** Create and connect multiple existing Copy documents */
  create?: InputMaybe<Array<CopyCreateInput>>;
};

export type CopyCreateOneInlineInput = {
  /** Create and connect one Copy document */
  create?: InputMaybe<CopyCreateInput>;
};

export type CopyCreateWithPositionInput = {
  /** Document to create */
  data: CopyCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CopyEdge = {
  __typename?: 'CopyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Copy;
};

/** Identifies documents */
export type CopyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CopyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CopyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CopyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CopyOrderByInput {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC'
}

export type CopyParent = Page | TwoColumn;

export type CopyParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  TwoColumn?: InputMaybe<TwoColumnConnectInput>;
};

export type CopyParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  TwoColumn?: InputMaybe<TwoColumnCreateInput>;
};

export type CopyParentCreateManyInlineInput = {
  /** Connect multiple existing CopyParent documents */
  connect?: InputMaybe<Array<CopyParentWhereUniqueInput>>;
  /** Create and connect multiple existing CopyParent documents */
  create?: InputMaybe<Array<CopyParentCreateInput>>;
};

export type CopyParentCreateOneInlineInput = {
  /** Connect one existing CopyParent document */
  connect?: InputMaybe<CopyParentWhereUniqueInput>;
  /** Create and connect one CopyParent document */
  create?: InputMaybe<CopyParentCreateInput>;
};

export type CopyParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateInput>;
};

export type CopyParentUpdateManyInlineInput = {
  /** Connect multiple existing CopyParent documents */
  connect?: InputMaybe<Array<CopyParentConnectInput>>;
  /** Create and connect multiple CopyParent documents */
  create?: InputMaybe<Array<CopyParentCreateInput>>;
  /** Delete multiple CopyParent documents */
  delete?: InputMaybe<Array<CopyParentWhereUniqueInput>>;
  /** Disconnect multiple CopyParent documents */
  disconnect?: InputMaybe<Array<CopyParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CopyParent documents */
  set?: InputMaybe<Array<CopyParentWhereUniqueInput>>;
  /** Update multiple CopyParent documents */
  update?: InputMaybe<Array<CopyParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CopyParent documents */
  upsert?: InputMaybe<Array<CopyParentUpsertWithNestedWhereUniqueInput>>;
};

export type CopyParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateManyWithNestedWhereInput>;
};

export type CopyParentUpdateOneInlineInput = {
  /** Connect existing CopyParent document */
  connect?: InputMaybe<CopyParentWhereUniqueInput>;
  /** Create and connect one CopyParent document */
  create?: InputMaybe<CopyParentCreateInput>;
  /** Delete currently connected CopyParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CopyParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CopyParent document */
  update?: InputMaybe<CopyParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CopyParent document */
  upsert?: InputMaybe<CopyParentUpsertWithNestedWhereUniqueInput>;
};

export type CopyParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateWithNestedWhereUniqueInput>;
};

export type CopyParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpsertWithNestedWhereUniqueInput>;
};

export type CopyParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereInput>;
};

export type CopyParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereUniqueInput>;
};

export type CopyUpdateInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  copy?: InputMaybe<Scalars['RichTextAST']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CopyUpdateManyInlineInput = {
  /** Create and connect multiple Copy component instances */
  create?: InputMaybe<Array<CopyCreateWithPositionInput>>;
  /** Delete multiple Copy documents */
  delete?: InputMaybe<Array<CopyWhereUniqueInput>>;
  /** Update multiple Copy component instances */
  update?: InputMaybe<Array<CopyUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Copy component instances */
  upsert?: InputMaybe<Array<CopyUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CopyUpdateManyInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  copy?: InputMaybe<Scalars['RichTextAST']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CopyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CopyUpdateManyInput;
  /** Document search */
  where: CopyWhereInput;
};

export type CopyUpdateOneInlineInput = {
  /** Create and connect one Copy document */
  create?: InputMaybe<CopyCreateInput>;
  /** Delete currently connected Copy document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Copy document */
  update?: InputMaybe<CopyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Copy document */
  upsert?: InputMaybe<CopyUpsertWithNestedWhereUniqueInput>;
};

export type CopyUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CopyUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CopyWhereUniqueInput;
};

export type CopyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CopyUpdateInput;
  /** Unique document search */
  where: CopyWhereUniqueInput;
};

export type CopyUpsertInput = {
  /** Create document if it didn't exist */
  create: CopyCreateInput;
  /** Update document if it exists */
  update: CopyUpdateInput;
};

export type CopyUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CopyUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CopyWhereUniqueInput;
};

export type CopyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CopyUpsertInput;
  /** Unique document search */
  where: CopyWhereUniqueInput;
};

/** Identifies documents */
export type CopyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CopyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CopyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CopyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
};

/** References Copy record uniquely */
export type CopyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type List = {
  __typename?: 'List';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  perPage?: Maybe<Scalars['Int']['output']>;
  readMoreLink?: Maybe<Scalars['String']['output']>;
  showAmount?: Maybe<Scalars['Boolean']['output']>;
  space?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  typeOfList?: Maybe<ListType>;
};

/** A connection to a list of items. */
export type ListConnection = {
  __typename?: 'ListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ListCreateInput = {
  perPage?: InputMaybe<Scalars['Int']['input']>;
  readMoreLink?: InputMaybe<Scalars['String']['input']>;
  showAmount?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeOfList?: InputMaybe<ListType>;
};

export type ListCreateWithPositionInput = {
  /** Document to create */
  data: ListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ListEdge = {
  __typename?: 'ListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: List;
};

/** Identifies documents */
export type ListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  perPage_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  perPage_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  perPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  perPage_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  perPage_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  perPage_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  perPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readMoreLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readMoreLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readMoreLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readMoreLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readMoreLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readMoreLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readMoreLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readMoreLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readMoreLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readMoreLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  showAmount?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showAmount_not?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  typeOfList?: InputMaybe<ListType>;
  /** All values that are contained in given list. */
  typeOfList_in?: InputMaybe<Array<InputMaybe<ListType>>>;
  /** Any other value that exists and is not equal to the given value. */
  typeOfList_not?: InputMaybe<ListType>;
  /** All values that are not contained in given list. */
  typeOfList_not_in?: InputMaybe<Array<InputMaybe<ListType>>>;
};

export enum ListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PerPageAsc = 'perPage_ASC',
  PerPageDesc = 'perPage_DESC',
  ReadMoreLinkAsc = 'readMoreLink_ASC',
  ReadMoreLinkDesc = 'readMoreLink_DESC',
  ShowAmountAsc = 'showAmount_ASC',
  ShowAmountDesc = 'showAmount_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeOfListAsc = 'typeOfList_ASC',
  TypeOfListDesc = 'typeOfList_DESC'
}

export enum ListType {
  Articles = 'Articles',
  Talks = 'Talks',
  Videos = 'Videos'
}

export type ListUpdateInput = {
  perPage?: InputMaybe<Scalars['Int']['input']>;
  readMoreLink?: InputMaybe<Scalars['String']['input']>;
  showAmount?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeOfList?: InputMaybe<ListType>;
};

export type ListUpdateManyInput = {
  perPage?: InputMaybe<Scalars['Int']['input']>;
  readMoreLink?: InputMaybe<Scalars['String']['input']>;
  showAmount?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeOfList?: InputMaybe<ListType>;
};

export type ListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ListUpdateManyInput;
  /** Document search */
  where: ListWhereInput;
};

export type ListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListWhereUniqueInput;
};

export type ListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ListUpdateInput;
  /** Unique document search */
  where: ListWhereUniqueInput;
};

export type ListUpsertInput = {
  /** Create document if it didn't exist */
  create: ListCreateInput;
  /** Update document if it exists */
  update: ListUpdateInput;
};

export type ListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ListWhereUniqueInput;
};

export type ListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ListUpsertInput;
  /** Unique document search */
  where: ListWhereUniqueInput;
};

/** Identifies documents */
export type ListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  perPage_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  perPage_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  perPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  perPage_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  perPage_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  perPage_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  perPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readMoreLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  readMoreLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  readMoreLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  readMoreLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  readMoreLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  readMoreLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  readMoreLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  readMoreLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  readMoreLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  readMoreLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  showAmount?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  showAmount_not?: InputMaybe<Scalars['Boolean']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  typeOfList?: InputMaybe<ListType>;
  /** All values that are contained in given list. */
  typeOfList_in?: InputMaybe<Array<InputMaybe<ListType>>>;
  /** Any other value that exists and is not equal to the given value. */
  typeOfList_not?: InputMaybe<ListType>;
  /** All values that are not contained in given list. */
  typeOfList_not_in?: InputMaybe<Array<InputMaybe<ListType>>>;
};

/** References List record uniquely */
export type ListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cms */
  createCms?: Maybe<Cms>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one tag */
  createTag?: Maybe<Tag>;
  /** Create one talk */
  createTalk?: Maybe<Talk>;
  /** Create one turboTutorial */
  createTurboTutorial?: Maybe<TurboTutorial>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cms from _all_ existing stages. Returns deleted document. */
  deleteCms?: Maybe<Cms>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Cms documents
   * @deprecated Please use the new paginated many mutation (deleteManyCmssConnection)
   */
  deleteManyCmss: BatchPayload;
  /** Delete many Cms documents, return deleted documents */
  deleteManyCmssConnection: CmsConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: BatchPayload;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: TagConnection;
  /**
   * Delete many Talk documents
   * @deprecated Please use the new paginated many mutation (deleteManyTalksConnection)
   */
  deleteManyTalks: BatchPayload;
  /** Delete many Talk documents, return deleted documents */
  deleteManyTalksConnection: TalkConnection;
  /**
   * Delete many TurboTutorial documents
   * @deprecated Please use the new paginated many mutation (deleteManyTurboTutorialsConnection)
   */
  deleteManyTurboTutorials: BatchPayload;
  /** Delete many TurboTutorial documents, return deleted documents */
  deleteManyTurboTutorialsConnection: TurboTutorialConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag?: Maybe<Tag>;
  /** Delete one talk from _all_ existing stages. Returns deleted document. */
  deleteTalk?: Maybe<Talk>;
  /** Delete one turboTutorial from _all_ existing stages. Returns deleted document. */
  deleteTurboTutorial?: Maybe<TurboTutorial>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cms */
  publishCms?: Maybe<Cms>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Cms documents
   * @deprecated Please use the new paginated many mutation (publishManyCmssConnection)
   */
  publishManyCmss: BatchPayload;
  /** Publish many Cms documents */
  publishManyCmssConnection: CmsConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: BatchPayload;
  /** Publish many Tag documents */
  publishManyTagsConnection: TagConnection;
  /**
   * Publish many Talk documents
   * @deprecated Please use the new paginated many mutation (publishManyTalksConnection)
   */
  publishManyTalks: BatchPayload;
  /** Publish many Talk documents */
  publishManyTalksConnection: TalkConnection;
  /**
   * Publish many TurboTutorial documents
   * @deprecated Please use the new paginated many mutation (publishManyTurboTutorialsConnection)
   */
  publishManyTurboTutorials: BatchPayload;
  /** Publish many TurboTutorial documents */
  publishManyTurboTutorialsConnection: TurboTutorialConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one tag */
  publishTag?: Maybe<Tag>;
  /** Publish one talk */
  publishTalk?: Maybe<Talk>;
  /** Publish one turboTutorial */
  publishTurboTutorial?: Maybe<TurboTutorial>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cms */
  schedulePublishCms?: Maybe<Cms>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one tag */
  schedulePublishTag?: Maybe<Tag>;
  /** Schedule to publish one talk */
  schedulePublishTalk?: Maybe<Talk>;
  /** Schedule to publish one turboTutorial */
  schedulePublishTurboTutorial?: Maybe<TurboTutorial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cms from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCms?: Maybe<Cms>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTag?: Maybe<Tag>;
  /** Unpublish one talk from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTalk?: Maybe<Talk>;
  /** Unpublish one turboTutorial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTurboTutorial?: Maybe<TurboTutorial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cms from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCms?: Maybe<Cms>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Cms documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCmssConnection)
   */
  unpublishManyCmss: BatchPayload;
  /** Find many Cms documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCmssConnection: CmsConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: BatchPayload;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: TagConnection;
  /**
   * Unpublish many Talk documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTalksConnection)
   */
  unpublishManyTalks: BatchPayload;
  /** Find many Talk documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTalksConnection: TalkConnection;
  /**
   * Unpublish many TurboTutorial documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTurboTutorialsConnection)
   */
  unpublishManyTurboTutorials: BatchPayload;
  /** Find many TurboTutorial documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTurboTutorialsConnection: TurboTutorialConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag?: Maybe<Tag>;
  /** Unpublish one talk from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTalk?: Maybe<Talk>;
  /** Unpublish one turboTutorial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTurboTutorial?: Maybe<TurboTutorial>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cms */
  updateCms?: Maybe<Cms>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cmss
   * @deprecated Please use the new paginated many mutation (updateManyCmssConnection)
   */
  updateManyCmss: BatchPayload;
  /** Update many Cms documents */
  updateManyCmssConnection: CmsConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: BatchPayload;
  /** Update many Tag documents */
  updateManyTagsConnection: TagConnection;
  /**
   * Update many talks
   * @deprecated Please use the new paginated many mutation (updateManyTalksConnection)
   */
  updateManyTalks: BatchPayload;
  /** Update many Talk documents */
  updateManyTalksConnection: TalkConnection;
  /**
   * Update many turboTutorials
   * @deprecated Please use the new paginated many mutation (updateManyTurboTutorialsConnection)
   */
  updateManyTurboTutorials: BatchPayload;
  /** Update many TurboTutorial documents */
  updateManyTurboTutorialsConnection: TurboTutorialConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one tag */
  updateTag?: Maybe<Tag>;
  /** Update one talk */
  updateTalk?: Maybe<Talk>;
  /** Update one turboTutorial */
  updateTurboTutorial?: Maybe<TurboTutorial>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cms */
  upsertCms?: Maybe<Cms>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one tag */
  upsertTag?: Maybe<Tag>;
  /** Upsert one talk */
  upsertTalk?: Maybe<Talk>;
  /** Upsert one turboTutorial */
  upsertTurboTutorial?: Maybe<TurboTutorial>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCmsArgs = {
  data: CmsCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTalkArgs = {
  data: TalkCreateInput;
};


export type MutationCreateTurboTutorialArgs = {
  data: TurboTutorialCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCmsArgs = {
  where: CmsWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCmssArgs = {
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationDeleteManyCmssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyTagsArgs = {
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationDeleteManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationDeleteManyTalksArgs = {
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationDeleteManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationDeleteManyTurboTutorialsArgs = {
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationDeleteManyTurboTutorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTalkArgs = {
  where: TalkWhereUniqueInput;
};


export type MutationDeleteTurboTutorialArgs = {
  where: TurboTutorialWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCmsArgs = {
  to?: Array<Stage>;
  where: CmsWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCmssArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationPublishManyCmssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyTagsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationPublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationPublishManyTalksArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationPublishManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationPublishManyTurboTutorialsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationPublishManyTurboTutorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishTagArgs = {
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationPublishTalkArgs = {
  to?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationPublishTurboTutorialArgs = {
  to?: Array<Stage>;
  where: TurboTutorialWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCmsArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CmsWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishTagArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationSchedulePublishTalkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationSchedulePublishTurboTutorialArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TurboTutorialWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCmsArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CmsWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishTagArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TagWhereUniqueInput;
};


export type MutationScheduleUnpublishTalkArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TalkWhereUniqueInput;
};


export type MutationScheduleUnpublishTurboTutorialArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TurboTutorialWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCmsArgs = {
  from?: Array<Stage>;
  where: CmsWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCmssArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationUnpublishManyCmssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyTagsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUnpublishManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUnpublishManyTalksArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUnpublishManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUnpublishManyTurboTutorialsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationUnpublishManyTurboTutorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishTagArgs = {
  from?: Array<Stage>;
  where: TagWhereUniqueInput;
};


export type MutationUnpublishTalkArgs = {
  from?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationUnpublishTurboTutorialArgs = {
  from?: Array<Stage>;
  where: TurboTutorialWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCmsArgs = {
  data: CmsUpdateInput;
  where: CmsWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCmssArgs = {
  data: CmsUpdateManyInput;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationUpdateManyCmssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CmsUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CmsManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyTagsArgs = {
  data: TagUpdateManyInput;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUpdateManyTagsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TagUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagManyWhereInput>;
};


export type MutationUpdateManyTalksArgs = {
  data: TalkUpdateManyInput;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUpdateManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TalkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUpdateManyTurboTutorialsArgs = {
  data: TurboTutorialUpdateManyInput;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationUpdateManyTurboTutorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TurboTutorialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TurboTutorialManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTalkArgs = {
  data: TalkUpdateInput;
  where: TalkWhereUniqueInput;
};


export type MutationUpdateTurboTutorialArgs = {
  data: TurboTutorialUpdateInput;
  where: TurboTutorialWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCmsArgs = {
  upsert: CmsUpsertInput;
  where: CmsWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  upsert: TagUpsertInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertTalkArgs = {
  upsert: TalkUpsertInput;
  where: TalkWhereUniqueInput;
};


export type MutationUpsertTurboTutorialArgs = {
  upsert: TurboTutorialUpsertInput;
  where: TurboTutorialWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  blocks: Array<PageblocksUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  navigationLabel?: Maybe<Scalars['String']['output']>;
  navigationOrder?: Maybe<Scalars['Int']['output']>;
  ogDescription?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Scalars['Json']['output']>;
  ogTitle?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  blocks?: InputMaybe<PageblocksUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  navigationOrder?: InputMaybe<Scalars['Int']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['Json']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  blocks_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  blocks_some?: InputMaybe<PageblocksUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  navigationOrder?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  navigationOrder_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  navigationOrder_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  navigationOrder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  navigationOrder_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  navigationOrder_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  navigationOrder_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  navigationOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  ogImage_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  ogImage_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationLabelAsc = 'navigationLabel_ASC',
  NavigationLabelDesc = 'navigationLabel_DESC',
  NavigationOrderAsc = 'navigationOrder_ASC',
  NavigationOrderDesc = 'navigationOrder_DESC',
  OgDescriptionAsc = 'ogDescription_ASC',
  OgDescriptionDesc = 'ogDescription_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  blocks?: InputMaybe<PageblocksUnionUpdateManyInlineInput>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  navigationOrder?: InputMaybe<Scalars['Int']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['Json']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  navigationOrder?: InputMaybe<Scalars['Int']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogImage?: InputMaybe<Scalars['Json']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  blocks_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  blocks_some?: InputMaybe<PageblocksUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigationLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  navigationLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  navigationLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  navigationLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  navigationLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  navigationLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  navigationLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  navigationLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  navigationLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  navigationOrder?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  navigationOrder_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  navigationOrder_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  navigationOrder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  navigationOrder_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  navigationOrder_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  navigationOrder_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  navigationOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  ogImage_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  ogImage_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ogTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ogTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ogTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ogTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PageblocksUnion = Copy | SingleImage | TwoColumn;

export type PageblocksUnionConnectInput = {
  Copy?: InputMaybe<CopyConnectInput>;
  SingleImage?: InputMaybe<SingleImageConnectInput>;
  TwoColumn?: InputMaybe<TwoColumnConnectInput>;
};

export type PageblocksUnionCreateInput = {
  Copy?: InputMaybe<CopyCreateInput>;
  SingleImage?: InputMaybe<SingleImageCreateInput>;
  TwoColumn?: InputMaybe<TwoColumnCreateInput>;
};

export type PageblocksUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PageblocksUnion documents */
  create?: InputMaybe<Array<PageblocksUnionCreateInput>>;
};

export type PageblocksUnionCreateOneInlineInput = {
  /** Create and connect one PageblocksUnion document */
  create?: InputMaybe<PageblocksUnionCreateInput>;
};

export type PageblocksUnionCreateWithPositionInput = {
  Copy?: InputMaybe<CopyCreateWithPositionInput>;
  SingleImage?: InputMaybe<SingleImageCreateWithPositionInput>;
  TwoColumn?: InputMaybe<TwoColumnCreateWithPositionInput>;
};

export type PageblocksUnionUpdateInput = {
  Copy?: InputMaybe<CopyUpdateInput>;
  SingleImage?: InputMaybe<SingleImageUpdateInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateInput>;
};

export type PageblocksUnionUpdateManyInlineInput = {
  /** Create and connect multiple PageblocksUnion component instances */
  create?: InputMaybe<Array<PageblocksUnionCreateWithPositionInput>>;
  /** Delete multiple PageblocksUnion documents */
  delete?: InputMaybe<Array<PageblocksUnionWhereUniqueInput>>;
  /** Update multiple PageblocksUnion component instances */
  update?: InputMaybe<Array<PageblocksUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageblocksUnion component instances */
  upsert?: InputMaybe<Array<PageblocksUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageblocksUnionUpdateManyWithNestedWhereInput = {
  Copy?: InputMaybe<CopyUpdateManyWithNestedWhereInput>;
  SingleImage?: InputMaybe<SingleImageUpdateManyWithNestedWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateManyWithNestedWhereInput>;
};

export type PageblocksUnionUpdateOneInlineInput = {
  /** Create and connect one PageblocksUnion document */
  create?: InputMaybe<PageblocksUnionCreateInput>;
  /** Delete currently connected PageblocksUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageblocksUnion document */
  update?: InputMaybe<PageblocksUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageblocksUnion document */
  upsert?: InputMaybe<PageblocksUnionUpsertWithNestedWhereUniqueInput>;
};

export type PageblocksUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueAndPositionInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PageblocksUnionUpdateWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateWithNestedWhereUniqueInput>;
};

export type PageblocksUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueAndPositionInput>;
  TwoColumn?: InputMaybe<TwoColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PageblocksUnionUpsertWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpsertWithNestedWhereUniqueInput>;
};

export type PageblocksUnionWhereInput = {
  Copy?: InputMaybe<CopyWhereInput>;
  SingleImage?: InputMaybe<SingleImageWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereInput>;
};

export type PageblocksUnionWhereUniqueInput = {
  Copy?: InputMaybe<CopyWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  articledatacollection?: Maybe<TimBenniksApi_ArticleDataCollection>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cms */
  cms?: Maybe<Cms>;
  /** Retrieve document version */
  cmsVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cmss */
  cmss: Array<Cms>;
  /** Retrieve multiple cmss using the Relay connection interface */
  cmssConnection: CmsConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single tag */
  tag?: Maybe<Tag>;
  /** Retrieve document version */
  tagVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<Tag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: TagConnection;
  /** Retrieve a single talk */
  talk?: Maybe<Talk>;
  /** Retrieve document version */
  talkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple talks */
  talks: Array<Talk>;
  /** Retrieve multiple talks using the Relay connection interface */
  talksConnection: TalkConnection;
  /** Retrieve a single turboTutorial */
  turboTutorial?: Maybe<TurboTutorial>;
  /** Retrieve document version */
  turboTutorialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple turboTutorials */
  turboTutorials: Array<TurboTutorial>;
  /** Retrieve multiple turboTutorials using the Relay connection interface */
  turboTutorialsConnection: TurboTutorialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  videoDataCollection?: Maybe<TimBenniksApi_VideoDataCollection>;
};


export type QueryArticledatacollectionArgs = {
  collection_id?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCmsArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CmsWhereUniqueInput;
};


export type QueryCmsVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCmssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CmsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CmsWhereInput>;
};


export type QueryCmssConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CmsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CmsWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTagArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TagWhereUniqueInput;
};


export type QueryTagVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryTalkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TalkWhereUniqueInput;
};


export type QueryTalkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTalksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TalkWhereInput>;
};


export type QueryTalksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TalkWhereInput>;
};


export type QueryTurboTutorialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TurboTutorialWhereUniqueInput;
};


export type QueryTurboTutorialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTurboTutorialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TurboTutorialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TurboTutorialWhereInput>;
};


export type QueryTurboTutorialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TurboTutorialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TurboTutorialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVideoDataCollectionArgs = {
  per_page?: InputMaybe<Scalars['Int']['input']>;
  playlist_id: Scalars['String']['input'];
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Cms | Page | Tag | Talk | TurboTutorial;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SingleImage = {
  __typename?: 'SingleImage';
  cloudinaryImage?: Maybe<Scalars['Json']['output']>;
  componentName?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  space?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
};

export type SingleImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SingleImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type SingleImageConnection = {
  __typename?: 'SingleImageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SingleImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SingleImageCreateInput = {
  cloudinaryImage?: InputMaybe<Scalars['Json']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SingleImageCreateManyInlineInput = {
  /** Create and connect multiple existing SingleImage documents */
  create?: InputMaybe<Array<SingleImageCreateInput>>;
};

export type SingleImageCreateOneInlineInput = {
  /** Create and connect one SingleImage document */
  create?: InputMaybe<SingleImageCreateInput>;
};

export type SingleImageCreateWithPositionInput = {
  /** Document to create */
  data: SingleImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SingleImageEdge = {
  __typename?: 'SingleImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SingleImage;
};

/** Identifies documents */
export type SingleImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  cloudinaryImage_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  cloudinaryImage_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SingleImageOrderByInput {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC'
}

export type SingleImageParent = Page | TwoColumn;

export type SingleImageParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  TwoColumn?: InputMaybe<TwoColumnConnectInput>;
};

export type SingleImageParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  TwoColumn?: InputMaybe<TwoColumnCreateInput>;
};

export type SingleImageParentCreateManyInlineInput = {
  /** Connect multiple existing SingleImageParent documents */
  connect?: InputMaybe<Array<SingleImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing SingleImageParent documents */
  create?: InputMaybe<Array<SingleImageParentCreateInput>>;
};

export type SingleImageParentCreateOneInlineInput = {
  /** Connect one existing SingleImageParent document */
  connect?: InputMaybe<SingleImageParentWhereUniqueInput>;
  /** Create and connect one SingleImageParent document */
  create?: InputMaybe<SingleImageParentCreateInput>;
};

export type SingleImageParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateInput>;
};

export type SingleImageParentUpdateManyInlineInput = {
  /** Connect multiple existing SingleImageParent documents */
  connect?: InputMaybe<Array<SingleImageParentConnectInput>>;
  /** Create and connect multiple SingleImageParent documents */
  create?: InputMaybe<Array<SingleImageParentCreateInput>>;
  /** Delete multiple SingleImageParent documents */
  delete?: InputMaybe<Array<SingleImageParentWhereUniqueInput>>;
  /** Disconnect multiple SingleImageParent documents */
  disconnect?: InputMaybe<Array<SingleImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SingleImageParent documents */
  set?: InputMaybe<Array<SingleImageParentWhereUniqueInput>>;
  /** Update multiple SingleImageParent documents */
  update?: InputMaybe<Array<SingleImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SingleImageParent documents */
  upsert?: InputMaybe<Array<SingleImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type SingleImageParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateManyWithNestedWhereInput>;
};

export type SingleImageParentUpdateOneInlineInput = {
  /** Connect existing SingleImageParent document */
  connect?: InputMaybe<SingleImageParentWhereUniqueInput>;
  /** Create and connect one SingleImageParent document */
  create?: InputMaybe<SingleImageParentCreateInput>;
  /** Delete currently connected SingleImageParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SingleImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SingleImageParent document */
  update?: InputMaybe<SingleImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SingleImageParent document */
  upsert?: InputMaybe<SingleImageParentUpsertWithNestedWhereUniqueInput>;
};

export type SingleImageParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpdateWithNestedWhereUniqueInput>;
};

export type SingleImageParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnUpsertWithNestedWhereUniqueInput>;
};

export type SingleImageParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereInput>;
};

export type SingleImageParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  TwoColumn?: InputMaybe<TwoColumnWhereUniqueInput>;
};

export type SingleImageUpdateInput = {
  cloudinaryImage?: InputMaybe<Scalars['Json']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SingleImageUpdateManyInlineInput = {
  /** Create and connect multiple SingleImage component instances */
  create?: InputMaybe<Array<SingleImageCreateWithPositionInput>>;
  /** Delete multiple SingleImage documents */
  delete?: InputMaybe<Array<SingleImageWhereUniqueInput>>;
  /** Update multiple SingleImage component instances */
  update?: InputMaybe<Array<SingleImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SingleImage component instances */
  upsert?: InputMaybe<Array<SingleImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SingleImageUpdateManyInput = {
  cloudinaryImage?: InputMaybe<Scalars['Json']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SingleImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SingleImageUpdateManyInput;
  /** Document search */
  where: SingleImageWhereInput;
};

export type SingleImageUpdateOneInlineInput = {
  /** Create and connect one SingleImage document */
  create?: InputMaybe<SingleImageCreateInput>;
  /** Delete currently connected SingleImage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SingleImage document */
  update?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SingleImage document */
  upsert?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueInput>;
};

export type SingleImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SingleImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SingleImageWhereUniqueInput;
};

export type SingleImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SingleImageUpdateInput;
  /** Unique document search */
  where: SingleImageWhereUniqueInput;
};

export type SingleImageUpsertInput = {
  /** Create document if it didn't exist */
  create: SingleImageCreateInput;
  /** Update document if it exists */
  update: SingleImageUpdateInput;
};

export type SingleImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SingleImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SingleImageWhereUniqueInput;
};

export type SingleImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SingleImageUpsertInput;
  /** Unique document search */
  where: SingleImageWhereUniqueInput;
};

/** Identifies documents */
export type SingleImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SingleImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  cloudinaryImage_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  cloudinaryImage_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
};

/** References SingleImage record uniquely */
export type SingleImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Tag = Node & {
  __typename?: 'Tag';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Tag>;
  /** List of Tag versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TagCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TagDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TagHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TagPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TagScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TagUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TagConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TagWhereUniqueInput;
};

/** A connection to a list of items. */
export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TagCreateInput = {
  clmyr9wj208vy01uo16dhhl9n?: InputMaybe<TurboTutorialCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagCreateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Create and connect multiple existing Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagCreateOneInlineInput = {
  /** Connect one existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tag;
};

/** Identifies documents */
export type TagManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TagOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TagUpdateInput = {
  clmyr9wj208vy01uo16dhhl9n?: InputMaybe<TurboTutorialUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect?: InputMaybe<Array<TagConnectInput>>;
  /** Create and connect multiple Tag documents */
  create?: InputMaybe<Array<TagCreateInput>>;
  /** Delete multiple Tag documents */
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update?: InputMaybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert?: InputMaybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TagUpdateManyInput;
  /** Document search */
  where: TagWhereInput;
};

export type TagUpdateOneInlineInput = {
  /** Connect existing Tag document */
  connect?: InputMaybe<TagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create?: InputMaybe<TagCreateInput>;
  /** Delete currently connected Tag document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Tag document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Tag document */
  update?: InputMaybe<TagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert?: InputMaybe<TagUpsertWithNestedWhereUniqueInput>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TagUpdateInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

export type TagUpsertInput = {
  /** Create document if it didn't exist */
  create: TagCreateInput;
  /** Update document if it exists */
  update: TagUpdateInput;
};

export type TagUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TagUpsertInput;
  /** Unique document search */
  where: TagWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TagWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TagWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TagWhereStageInput>;
  documentInStages_none?: InputMaybe<TagWhereStageInput>;
  documentInStages_some?: InputMaybe<TagWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TagWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TagWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TagWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TagWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Conference talk model */
export type Talk = Node & {
  __typename?: 'Talk';
  conference: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Talk>;
  /** List of Talk versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  talk: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Conference talk model */
export type TalkCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Conference talk model */
export type TalkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Conference talk model */
export type TalkHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Conference talk model */
export type TalkPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Conference talk model */
export type TalkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Conference talk model */
export type TalkUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TalkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TalkWhereUniqueInput;
};

/** A connection to a list of items. */
export type TalkConnection = {
  __typename?: 'TalkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TalkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TalkCreateInput = {
  conference: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  talk: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TalkCreateManyInlineInput = {
  /** Connect multiple existing Talk documents */
  connect?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Create and connect multiple existing Talk documents */
  create?: InputMaybe<Array<TalkCreateInput>>;
};

export type TalkCreateOneInlineInput = {
  /** Connect one existing Talk document */
  connect?: InputMaybe<TalkWhereUniqueInput>;
  /** Create and connect one Talk document */
  create?: InputMaybe<TalkCreateInput>;
};

/** An edge in a connection. */
export type TalkEdge = {
  __typename?: 'TalkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Talk;
};

/** Identifies documents */
export type TalkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  conference?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  conference_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  conference_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  conference_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  conference_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  conference_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  conference_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  conference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  conference_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  conference_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<TalkWhereStageInput>;
  documentInStages_none?: InputMaybe<TalkWhereStageInput>;
  documentInStages_some?: InputMaybe<TalkWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  talk?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  talk_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  talk_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  talk_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  talk_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  talk_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  talk_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  talk_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  talk_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  talk_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TalkOrderByInput {
  ConferenceAsc = 'conference_ASC',
  ConferenceDesc = 'conference_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TalkAsc = 'talk_ASC',
  TalkDesc = 'talk_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TalkUpdateInput = {
  conference?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  talk?: InputMaybe<Scalars['String']['input']>;
};

export type TalkUpdateManyInlineInput = {
  /** Connect multiple existing Talk documents */
  connect?: InputMaybe<Array<TalkConnectInput>>;
  /** Create and connect multiple Talk documents */
  create?: InputMaybe<Array<TalkCreateInput>>;
  /** Delete multiple Talk documents */
  delete?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Disconnect multiple Talk documents */
  disconnect?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Talk documents */
  set?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Update multiple Talk documents */
  update?: InputMaybe<Array<TalkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Talk documents */
  upsert?: InputMaybe<Array<TalkUpsertWithNestedWhereUniqueInput>>;
};

export type TalkUpdateManyInput = {
  conference?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  talk?: InputMaybe<Scalars['String']['input']>;
};

export type TalkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TalkUpdateManyInput;
  /** Document search */
  where: TalkWhereInput;
};

export type TalkUpdateOneInlineInput = {
  /** Connect existing Talk document */
  connect?: InputMaybe<TalkWhereUniqueInput>;
  /** Create and connect one Talk document */
  create?: InputMaybe<TalkCreateInput>;
  /** Delete currently connected Talk document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Talk document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Talk document */
  update?: InputMaybe<TalkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Talk document */
  upsert?: InputMaybe<TalkUpsertWithNestedWhereUniqueInput>;
};

export type TalkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TalkUpdateInput;
  /** Unique document search */
  where: TalkWhereUniqueInput;
};

export type TalkUpsertInput = {
  /** Create document if it didn't exist */
  create: TalkCreateInput;
  /** Update document if it exists */
  update: TalkUpdateInput;
};

export type TalkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TalkUpsertInput;
  /** Unique document search */
  where: TalkWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TalkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TalkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  conference?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  conference_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  conference_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  conference_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  conference_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  conference_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  conference_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  conference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  conference_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  conference_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<TalkWhereStageInput>;
  documentInStages_none?: InputMaybe<TalkWhereStageInput>;
  documentInStages_some?: InputMaybe<TalkWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  talk?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  talk_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  talk_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  talk_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  talk_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  talk_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  talk_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  talk_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  talk_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  talk_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TalkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalkWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalkWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalkWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TalkWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Talk record uniquely */
export type TalkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TimBenniksApi_Article = {
  __typename?: 'TimBenniksApi_Article';
  collection_id: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  published_timestamp: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TimBenniksApi_ArticleDataCollection = {
  __typename?: 'TimBenniksApi_ArticleDataCollection';
  articles?: Maybe<Array<Maybe<TimBenniksApi_Article>>>;
  meta?: Maybe<Scalars['Json']['output']>;
};

export type TimBenniksApi_Video = {
  __typename?: 'TimBenniksApi_Video';
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  videoId?: Maybe<Scalars['String']['output']>;
};

export type TimBenniksApi_VideoDataCollection = {
  __typename?: 'TimBenniksApi_VideoDataCollection';
  meta?: Maybe<Scalars['Json']['output']>;
  videos?: Maybe<Array<Maybe<TimBenniksApi_Video>>>;
};

export type TurboTutorial = Node & {
  __typename?: 'TurboTutorial';
  complexity?: Maybe<Complexity>;
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<TurboTutorial>;
  githubLink?: Maybe<Scalars['String']['output']>;
  /** List of TurboTutorial versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  poster?: Maybe<Asset>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']['output']>;
  transcript?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoId?: Maybe<Scalars['String']['output']>;
};


export type TurboTutorialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TurboTutorialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TurboTutorialHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TurboTutorialPosterArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TurboTutorialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TurboTutorialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TurboTutorialTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type TurboTutorialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TurboTutorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TurboTutorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TurboTutorialConnection = {
  __typename?: 'TurboTutorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TurboTutorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TurboTutorialCreateInput = {
  complexity?: InputMaybe<Complexity>;
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubLink?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<AssetCreateOneInlineInput>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type TurboTutorialCreateManyInlineInput = {
  /** Connect multiple existing TurboTutorial documents */
  connect?: InputMaybe<Array<TurboTutorialWhereUniqueInput>>;
  /** Create and connect multiple existing TurboTutorial documents */
  create?: InputMaybe<Array<TurboTutorialCreateInput>>;
};

export type TurboTutorialCreateOneInlineInput = {
  /** Connect one existing TurboTutorial document */
  connect?: InputMaybe<TurboTutorialWhereUniqueInput>;
  /** Create and connect one TurboTutorial document */
  create?: InputMaybe<TurboTutorialCreateInput>;
};

/** An edge in a connection. */
export type TurboTutorialEdge = {
  __typename?: 'TurboTutorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TurboTutorial;
};

/** Identifies documents */
export type TurboTutorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  complexity?: InputMaybe<Complexity>;
  /** All values that are contained in given list. */
  complexity_in?: InputMaybe<Array<InputMaybe<Complexity>>>;
  /** Any other value that exists and is not equal to the given value. */
  complexity_not?: InputMaybe<Complexity>;
  /** All values that are not contained in given list. */
  complexity_not_in?: InputMaybe<Array<InputMaybe<Complexity>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TurboTutorialWhereStageInput>;
  documentInStages_none?: InputMaybe<TurboTutorialWhereStageInput>;
  documentInStages_some?: InputMaybe<TurboTutorialWhereStageInput>;
  githubLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  githubLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  githubLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  githubLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  githubLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  githubLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  githubLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  githubLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  githubLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  poster?: InputMaybe<AssetWhereInput>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  publicationDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  publicationDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  publicationDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  publicationDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  publicationDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publicationDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  publicationDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  transcript_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  transcript_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  transcript_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  transcript_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  transcript_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  transcript_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  transcript_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  transcript_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  transcript_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TurboTutorialOrderByInput {
  ComplexityAsc = 'complexity_ASC',
  ComplexityDesc = 'complexity_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubLinkAsc = 'githubLink_ASC',
  GithubLinkDesc = 'githubLink_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublicationDateAsc = 'publicationDate_ASC',
  PublicationDateDesc = 'publicationDate_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TranscriptAsc = 'transcript_ASC',
  TranscriptDesc = 'transcript_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export type TurboTutorialUpdateInput = {
  complexity?: InputMaybe<Complexity>;
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubLink?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<AssetUpdateOneInlineInput>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type TurboTutorialUpdateManyInlineInput = {
  /** Connect multiple existing TurboTutorial documents */
  connect?: InputMaybe<Array<TurboTutorialConnectInput>>;
  /** Create and connect multiple TurboTutorial documents */
  create?: InputMaybe<Array<TurboTutorialCreateInput>>;
  /** Delete multiple TurboTutorial documents */
  delete?: InputMaybe<Array<TurboTutorialWhereUniqueInput>>;
  /** Disconnect multiple TurboTutorial documents */
  disconnect?: InputMaybe<Array<TurboTutorialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TurboTutorial documents */
  set?: InputMaybe<Array<TurboTutorialWhereUniqueInput>>;
  /** Update multiple TurboTutorial documents */
  update?: InputMaybe<Array<TurboTutorialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TurboTutorial documents */
  upsert?: InputMaybe<Array<TurboTutorialUpsertWithNestedWhereUniqueInput>>;
};

export type TurboTutorialUpdateManyInput = {
  complexity?: InputMaybe<Complexity>;
  content?: InputMaybe<Scalars['RichTextAST']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type TurboTutorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TurboTutorialUpdateManyInput;
  /** Document search */
  where: TurboTutorialWhereInput;
};

export type TurboTutorialUpdateOneInlineInput = {
  /** Connect existing TurboTutorial document */
  connect?: InputMaybe<TurboTutorialWhereUniqueInput>;
  /** Create and connect one TurboTutorial document */
  create?: InputMaybe<TurboTutorialCreateInput>;
  /** Delete currently connected TurboTutorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TurboTutorial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TurboTutorial document */
  update?: InputMaybe<TurboTutorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TurboTutorial document */
  upsert?: InputMaybe<TurboTutorialUpsertWithNestedWhereUniqueInput>;
};

export type TurboTutorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TurboTutorialUpdateInput;
  /** Unique document search */
  where: TurboTutorialWhereUniqueInput;
};

export type TurboTutorialUpsertInput = {
  /** Create document if it didn't exist */
  create: TurboTutorialCreateInput;
  /** Update document if it exists */
  update: TurboTutorialUpdateInput;
};

export type TurboTutorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TurboTutorialUpsertInput;
  /** Unique document search */
  where: TurboTutorialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TurboTutorialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TurboTutorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TurboTutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  complexity?: InputMaybe<Complexity>;
  /** All values that are contained in given list. */
  complexity_in?: InputMaybe<Array<InputMaybe<Complexity>>>;
  /** Any other value that exists and is not equal to the given value. */
  complexity_not?: InputMaybe<Complexity>;
  /** All values that are not contained in given list. */
  complexity_not_in?: InputMaybe<Array<InputMaybe<Complexity>>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TurboTutorialWhereStageInput>;
  documentInStages_none?: InputMaybe<TurboTutorialWhereStageInput>;
  documentInStages_some?: InputMaybe<TurboTutorialWhereStageInput>;
  githubLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  githubLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  githubLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  githubLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  githubLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  githubLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  githubLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  githubLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  githubLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  poster?: InputMaybe<AssetWhereInput>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  publicationDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  publicationDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  publicationDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  publicationDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  publicationDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publicationDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  publicationDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  transcript?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  transcript_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  transcript_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  transcript_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  transcript_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  transcript_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  transcript_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  transcript_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  transcript_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  transcript_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TurboTutorialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TurboTutorialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TurboTutorialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TurboTutorialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TurboTutorialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References TurboTutorial record uniquely */
export type TurboTutorialWhereUniqueInput = {
  githubLink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type TwoColumn = {
  __typename?: 'TwoColumn';
  componentName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  sideA: Array<TwoColumnsideAUnion>;
  sideB: Array<TwoColumnsideBUnion>;
  space?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type TwoColumnSideAArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TwoColumnSideBArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TwoColumnConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TwoColumnWhereUniqueInput;
};

/** A connection to a list of items. */
export type TwoColumnConnection = {
  __typename?: 'TwoColumnConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TwoColumnEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TwoColumnCreateInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  sideA?: InputMaybe<TwoColumnsideAUnionCreateManyInlineInput>;
  sideB?: InputMaybe<TwoColumnsideBUnionCreateManyInlineInput>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoColumnCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumn documents */
  create?: InputMaybe<Array<TwoColumnCreateInput>>;
};

export type TwoColumnCreateOneInlineInput = {
  /** Create and connect one TwoColumn document */
  create?: InputMaybe<TwoColumnCreateInput>;
};

export type TwoColumnCreateWithPositionInput = {
  /** Document to create */
  data: TwoColumnCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TwoColumnEdge = {
  __typename?: 'TwoColumnEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TwoColumn;
};

/** Identifies documents */
export type TwoColumnManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  sideA_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sideA_some?: InputMaybe<TwoColumnsideAUnionWhereInput>;
  /** All values in which the union is empty. */
  sideB_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sideB_some?: InputMaybe<TwoColumnsideBUnionWhereInput>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TwoColumnOrderByInput {
  ComponentNameAsc = 'componentName_ASC',
  ComponentNameDesc = 'componentName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TwoColumnParent = Page;

export type TwoColumnParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type TwoColumnParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type TwoColumnParentCreateManyInlineInput = {
  /** Connect multiple existing TwoColumnParent documents */
  connect?: InputMaybe<Array<TwoColumnParentWhereUniqueInput>>;
  /** Create and connect multiple existing TwoColumnParent documents */
  create?: InputMaybe<Array<TwoColumnParentCreateInput>>;
};

export type TwoColumnParentCreateOneInlineInput = {
  /** Connect one existing TwoColumnParent document */
  connect?: InputMaybe<TwoColumnParentWhereUniqueInput>;
  /** Create and connect one TwoColumnParent document */
  create?: InputMaybe<TwoColumnParentCreateInput>;
};

export type TwoColumnParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type TwoColumnParentUpdateManyInlineInput = {
  /** Connect multiple existing TwoColumnParent documents */
  connect?: InputMaybe<Array<TwoColumnParentConnectInput>>;
  /** Create and connect multiple TwoColumnParent documents */
  create?: InputMaybe<Array<TwoColumnParentCreateInput>>;
  /** Delete multiple TwoColumnParent documents */
  delete?: InputMaybe<Array<TwoColumnParentWhereUniqueInput>>;
  /** Disconnect multiple TwoColumnParent documents */
  disconnect?: InputMaybe<Array<TwoColumnParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TwoColumnParent documents */
  set?: InputMaybe<Array<TwoColumnParentWhereUniqueInput>>;
  /** Update multiple TwoColumnParent documents */
  update?: InputMaybe<Array<TwoColumnParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TwoColumnParent documents */
  upsert?: InputMaybe<Array<TwoColumnParentUpsertWithNestedWhereUniqueInput>>;
};

export type TwoColumnParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type TwoColumnParentUpdateOneInlineInput = {
  /** Connect existing TwoColumnParent document */
  connect?: InputMaybe<TwoColumnParentWhereUniqueInput>;
  /** Create and connect one TwoColumnParent document */
  create?: InputMaybe<TwoColumnParentCreateInput>;
  /** Delete currently connected TwoColumnParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TwoColumnParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnParent document */
  update?: InputMaybe<TwoColumnParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnParent document */
  upsert?: InputMaybe<TwoColumnParentUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type TwoColumnParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type TwoColumnUpdateInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  sideA?: InputMaybe<TwoColumnsideAUnionUpdateManyInlineInput>;
  sideB?: InputMaybe<TwoColumnsideBUnionUpdateManyInlineInput>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoColumnUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumn component instances */
  create?: InputMaybe<Array<TwoColumnCreateWithPositionInput>>;
  /** Delete multiple TwoColumn documents */
  delete?: InputMaybe<Array<TwoColumnWhereUniqueInput>>;
  /** Update multiple TwoColumn component instances */
  update?: InputMaybe<Array<TwoColumnUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumn component instances */
  upsert?: InputMaybe<Array<TwoColumnUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnUpdateManyInput = {
  componentName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TwoColumnUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TwoColumnUpdateManyInput;
  /** Document search */
  where: TwoColumnWhereInput;
};

export type TwoColumnUpdateOneInlineInput = {
  /** Create and connect one TwoColumn document */
  create?: InputMaybe<TwoColumnCreateInput>;
  /** Delete currently connected TwoColumn document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumn document */
  update?: InputMaybe<TwoColumnUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumn document */
  upsert?: InputMaybe<TwoColumnUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TwoColumnUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoColumnWhereUniqueInput;
};

export type TwoColumnUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TwoColumnUpdateInput;
  /** Unique document search */
  where: TwoColumnWhereUniqueInput;
};

export type TwoColumnUpsertInput = {
  /** Create document if it didn't exist */
  create: TwoColumnCreateInput;
  /** Update document if it exists */
  update: TwoColumnUpdateInput;
};

export type TwoColumnUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TwoColumnUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoColumnWhereUniqueInput;
};

export type TwoColumnUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TwoColumnUpsertInput;
  /** Unique document search */
  where: TwoColumnWhereUniqueInput;
};

/** Identifies documents */
export type TwoColumnWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  componentName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  sideA_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sideA_some?: InputMaybe<TwoColumnsideAUnionWhereInput>;
  /** All values in which the union is empty. */
  sideB_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  sideB_some?: InputMaybe<TwoColumnsideBUnionWhereInput>;
  space?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  space_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TwoColumn record uniquely */
export type TwoColumnWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TwoColumnsideAUnion = Copy | SingleImage;

export type TwoColumnsideAUnionConnectInput = {
  Copy?: InputMaybe<CopyConnectInput>;
  SingleImage?: InputMaybe<SingleImageConnectInput>;
};

export type TwoColumnsideAUnionCreateInput = {
  Copy?: InputMaybe<CopyCreateInput>;
  SingleImage?: InputMaybe<SingleImageCreateInput>;
};

export type TwoColumnsideAUnionCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumnsideAUnion documents */
  create?: InputMaybe<Array<TwoColumnsideAUnionCreateInput>>;
};

export type TwoColumnsideAUnionCreateOneInlineInput = {
  /** Create and connect one TwoColumnsideAUnion document */
  create?: InputMaybe<TwoColumnsideAUnionCreateInput>;
};

export type TwoColumnsideAUnionCreateWithPositionInput = {
  Copy?: InputMaybe<CopyCreateWithPositionInput>;
  SingleImage?: InputMaybe<SingleImageCreateWithPositionInput>;
};

export type TwoColumnsideAUnionUpdateInput = {
  Copy?: InputMaybe<CopyUpdateInput>;
  SingleImage?: InputMaybe<SingleImageUpdateInput>;
};

export type TwoColumnsideAUnionUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumnsideAUnion component instances */
  create?: InputMaybe<Array<TwoColumnsideAUnionCreateWithPositionInput>>;
  /** Delete multiple TwoColumnsideAUnion documents */
  delete?: InputMaybe<Array<TwoColumnsideAUnionWhereUniqueInput>>;
  /** Update multiple TwoColumnsideAUnion component instances */
  update?: InputMaybe<Array<TwoColumnsideAUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumnsideAUnion component instances */
  upsert?: InputMaybe<Array<TwoColumnsideAUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnsideAUnionUpdateManyWithNestedWhereInput = {
  Copy?: InputMaybe<CopyUpdateManyWithNestedWhereInput>;
  SingleImage?: InputMaybe<SingleImageUpdateManyWithNestedWhereInput>;
};

export type TwoColumnsideAUnionUpdateOneInlineInput = {
  /** Create and connect one TwoColumnsideAUnion document */
  create?: InputMaybe<TwoColumnsideAUnionCreateInput>;
  /** Delete currently connected TwoColumnsideAUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnsideAUnion document */
  update?: InputMaybe<TwoColumnsideAUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnsideAUnion document */
  upsert?: InputMaybe<TwoColumnsideAUnionUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnsideAUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnsideAUnionUpdateWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnsideAUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnsideAUnionUpsertWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnsideAUnionWhereInput = {
  Copy?: InputMaybe<CopyWhereInput>;
  SingleImage?: InputMaybe<SingleImageWhereInput>;
};

export type TwoColumnsideAUnionWhereUniqueInput = {
  Copy?: InputMaybe<CopyWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageWhereUniqueInput>;
};

export type TwoColumnsideBUnion = Copy | SingleImage;

export type TwoColumnsideBUnionConnectInput = {
  Copy?: InputMaybe<CopyConnectInput>;
  SingleImage?: InputMaybe<SingleImageConnectInput>;
};

export type TwoColumnsideBUnionCreateInput = {
  Copy?: InputMaybe<CopyCreateInput>;
  SingleImage?: InputMaybe<SingleImageCreateInput>;
};

export type TwoColumnsideBUnionCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumnsideBUnion documents */
  create?: InputMaybe<Array<TwoColumnsideBUnionCreateInput>>;
};

export type TwoColumnsideBUnionCreateOneInlineInput = {
  /** Create and connect one TwoColumnsideBUnion document */
  create?: InputMaybe<TwoColumnsideBUnionCreateInput>;
};

export type TwoColumnsideBUnionCreateWithPositionInput = {
  Copy?: InputMaybe<CopyCreateWithPositionInput>;
  SingleImage?: InputMaybe<SingleImageCreateWithPositionInput>;
};

export type TwoColumnsideBUnionUpdateInput = {
  Copy?: InputMaybe<CopyUpdateInput>;
  SingleImage?: InputMaybe<SingleImageUpdateInput>;
};

export type TwoColumnsideBUnionUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumnsideBUnion component instances */
  create?: InputMaybe<Array<TwoColumnsideBUnionCreateWithPositionInput>>;
  /** Delete multiple TwoColumnsideBUnion documents */
  delete?: InputMaybe<Array<TwoColumnsideBUnionWhereUniqueInput>>;
  /** Update multiple TwoColumnsideBUnion component instances */
  update?: InputMaybe<Array<TwoColumnsideBUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumnsideBUnion component instances */
  upsert?: InputMaybe<Array<TwoColumnsideBUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnsideBUnionUpdateManyWithNestedWhereInput = {
  Copy?: InputMaybe<CopyUpdateManyWithNestedWhereInput>;
  SingleImage?: InputMaybe<SingleImageUpdateManyWithNestedWhereInput>;
};

export type TwoColumnsideBUnionUpdateOneInlineInput = {
  /** Create and connect one TwoColumnsideBUnion document */
  create?: InputMaybe<TwoColumnsideBUnionCreateInput>;
  /** Delete currently connected TwoColumnsideBUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnsideBUnion document */
  update?: InputMaybe<TwoColumnsideBUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnsideBUnion document */
  upsert?: InputMaybe<TwoColumnsideBUnionUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnsideBUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnsideBUnionUpdateWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpdateWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnsideBUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueAndPositionInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnsideBUnionUpsertWithNestedWhereUniqueInput = {
  Copy?: InputMaybe<CopyUpsertWithNestedWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnsideBUnionWhereInput = {
  Copy?: InputMaybe<CopyWhereInput>;
  SingleImage?: InputMaybe<SingleImageWhereInput>;
};

export type TwoColumnsideBUnionWhereUniqueInput = {
  Copy?: InputMaybe<CopyWhereUniqueInput>;
  SingleImage?: InputMaybe<SingleImageWhereUniqueInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type ArticlesQueryVariables = Exact<{
  username: Scalars['String']['input'];
  collection_id: Scalars['Int']['input'];
  per_page: Scalars['Int']['input'];
}>;


export type ArticlesQuery = { __typename?: 'Query', articledatacollection?: { __typename?: 'TimBenniksApi_ArticleDataCollection', articles?: Array<{ __typename?: 'TimBenniksApi_Article', collection_id: number, description: string, image: string, published_timestamp: string, title: string, url: string } | null> | null } | null };


export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"per_page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articledatacollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"collection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"per_page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"per_page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"published_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;