const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'zyzen-careers-form',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createApplicantRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplicant', inputVars);
}
createApplicantRef.operationName = 'CreateApplicant';
exports.createApplicantRef = createApplicantRef;

exports.createApplicant = function createApplicant(dcOrVars, vars) {
  return executeMutation(createApplicantRef(dcOrVars, vars));
};

const getJobOpeningsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJobOpenings');
}
getJobOpeningsRef.operationName = 'GetJobOpenings';
exports.getJobOpeningsRef = getJobOpeningsRef;

exports.getJobOpenings = function getJobOpenings(dc) {
  return executeQuery(getJobOpeningsRef(dc));
};

const createApplicationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateApplication', inputVars);
}
createApplicationRef.operationName = 'CreateApplication';
exports.createApplicationRef = createApplicationRef;

exports.createApplication = function createApplication(dcOrVars, vars) {
  return executeMutation(createApplicationRef(dcOrVars, vars));
};

const getApplicationsForJobOpeningRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetApplicationsForJobOpening', inputVars);
}
getApplicationsForJobOpeningRef.operationName = 'GetApplicationsForJobOpening';
exports.getApplicationsForJobOpeningRef = getApplicationsForJobOpeningRef;

exports.getApplicationsForJobOpening = function getApplicationsForJobOpening(dcOrVars, vars) {
  return executeQuery(getApplicationsForJobOpeningRef(dcOrVars, vars));
};
