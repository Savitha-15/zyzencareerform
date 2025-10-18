import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'zyzen-careers-form',
  location: 'us-east4'
};

export const createApplicantRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplicant', inputVars);
}
createApplicantRef.operationName = 'CreateApplicant';

export function createApplicant(dcOrVars, vars) {
  return executeMutation(createApplicantRef(dcOrVars, vars));
}

export const getJobOpeningsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJobOpenings');
}
getJobOpeningsRef.operationName = 'GetJobOpenings';

export function getJobOpenings(dc) {
  return executeQuery(getJobOpeningsRef(dc));
}

export const createApplicationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplication', inputVars);
}
createApplicationRef.operationName = 'CreateApplication';

export function createApplication(dcOrVars, vars) {
  return executeMutation(createApplicationRef(dcOrVars, vars));
}

export const getApplicationsForJobOpeningRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetApplicationsForJobOpening', inputVars);
}
getApplicationsForJobOpeningRef.operationName = 'GetApplicationsForJobOpening';

export function getApplicationsForJobOpening(dcOrVars, vars) {
  return executeQuery(getApplicationsForJobOpeningRef(dcOrVars, vars));
}

