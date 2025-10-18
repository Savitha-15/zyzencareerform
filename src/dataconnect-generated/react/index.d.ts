import { CreateApplicantData, CreateApplicantVariables, GetJobOpeningsData, CreateApplicationData, CreateApplicationVariables, GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateApplicant(options?: useDataConnectMutationOptions<CreateApplicantData, FirebaseError, CreateApplicantVariables>): UseDataConnectMutationResult<CreateApplicantData, CreateApplicantVariables>;
export function useCreateApplicant(dc: DataConnect, options?: useDataConnectMutationOptions<CreateApplicantData, FirebaseError, CreateApplicantVariables>): UseDataConnectMutationResult<CreateApplicantData, CreateApplicantVariables>;

export function useGetJobOpenings(options?: useDataConnectQueryOptions<GetJobOpeningsData>): UseDataConnectQueryResult<GetJobOpeningsData, undefined>;
export function useGetJobOpenings(dc: DataConnect, options?: useDataConnectQueryOptions<GetJobOpeningsData>): UseDataConnectQueryResult<GetJobOpeningsData, undefined>;

export function useCreateApplication(options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;
export function useCreateApplication(dc: DataConnect, options?: useDataConnectMutationOptions<CreateApplicationData, FirebaseError, CreateApplicationVariables>): UseDataConnectMutationResult<CreateApplicationData, CreateApplicationVariables>;

export function useGetApplicationsForJobOpening(vars: GetApplicationsForJobOpeningVariables, options?: useDataConnectQueryOptions<GetApplicationsForJobOpeningData>): UseDataConnectQueryResult<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
export function useGetApplicationsForJobOpening(dc: DataConnect, vars: GetApplicationsForJobOpeningVariables, options?: useDataConnectQueryOptions<GetApplicationsForJobOpeningData>): UseDataConnectQueryResult<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
