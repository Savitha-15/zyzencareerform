import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Applicant_Key {
  id: UUIDString;
  __typename?: 'Applicant_Key';
}

export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface CreateApplicantData {
  applicant_insert: Applicant_Key;
}

export interface CreateApplicantVariables {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  linkedInProfile?: string | null;
}

export interface CreateApplicationData {
  application_insert: Application_Key;
}

export interface CreateApplicationVariables {
  applicantId: UUIDString;
  jobOpeningId: UUIDString;
  coverLetterText?: string | null;
  status: string;
}

export interface Document_Key {
  id: UUIDString;
  __typename?: 'Document_Key';
}

export interface GetApplicationsForJobOpeningData {
  applications: ({
    id: UUIDString;
    applicant: {
      id: UUIDString;
      firstName: string;
      lastName: string;
      email: string;
    } & Applicant_Key;
      coverLetterText?: string | null;
      status: string;
      submissionDate: TimestampString;
  } & Application_Key)[];
}

export interface GetApplicationsForJobOpeningVariables {
  jobOpeningId: UUIDString;
}

export interface GetJobOpeningsData {
  jobOpenings: ({
    id: UUIDString;
    title: string;
    description: string;
    department: string;
    location?: string | null;
    salaryRange?: string | null;
  } & JobOpening_Key)[];
}

export interface JobOpening_Key {
  id: UUIDString;
  __typename?: 'JobOpening_Key';
}

export interface Note_Key {
  id: UUIDString;
  __typename?: 'Note_Key';
}

interface CreateApplicantRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicantVariables): MutationRef<CreateApplicantData, CreateApplicantVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateApplicantVariables): MutationRef<CreateApplicantData, CreateApplicantVariables>;
  operationName: string;
}
export const createApplicantRef: CreateApplicantRef;

export function createApplicant(vars: CreateApplicantVariables): MutationPromise<CreateApplicantData, CreateApplicantVariables>;
export function createApplicant(dc: DataConnect, vars: CreateApplicantVariables): MutationPromise<CreateApplicantData, CreateApplicantVariables>;

interface GetJobOpeningsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetJobOpeningsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetJobOpeningsData, undefined>;
  operationName: string;
}
export const getJobOpeningsRef: GetJobOpeningsRef;

export function getJobOpenings(): QueryPromise<GetJobOpeningsData, undefined>;
export function getJobOpenings(dc: DataConnect): QueryPromise<GetJobOpeningsData, undefined>;

interface CreateApplicationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
  operationName: string;
}
export const createApplicationRef: CreateApplicationRef;

export function createApplication(vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;
export function createApplication(dc: DataConnect, vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface GetApplicationsForJobOpeningRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetApplicationsForJobOpeningVariables): QueryRef<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetApplicationsForJobOpeningVariables): QueryRef<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
  operationName: string;
}
export const getApplicationsForJobOpeningRef: GetApplicationsForJobOpeningRef;

export function getApplicationsForJobOpening(vars: GetApplicationsForJobOpeningVariables): QueryPromise<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
export function getApplicationsForJobOpening(dc: DataConnect, vars: GetApplicationsForJobOpeningVariables): QueryPromise<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;

