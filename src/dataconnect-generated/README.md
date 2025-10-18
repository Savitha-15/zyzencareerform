# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetJobOpenings*](#getjobopenings)
  - [*GetApplicationsForJobOpening*](#getapplicationsforjobopening)
- [**Mutations**](#mutations)
  - [*CreateApplicant*](#createapplicant)
  - [*CreateApplication*](#createapplication)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetJobOpenings
You can execute the `GetJobOpenings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getJobOpenings(): QueryPromise<GetJobOpeningsData, undefined>;

interface GetJobOpeningsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetJobOpeningsData, undefined>;
}
export const getJobOpeningsRef: GetJobOpeningsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getJobOpenings(dc: DataConnect): QueryPromise<GetJobOpeningsData, undefined>;

interface GetJobOpeningsRef {
  ...
  (dc: DataConnect): QueryRef<GetJobOpeningsData, undefined>;
}
export const getJobOpeningsRef: GetJobOpeningsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getJobOpeningsRef:
```typescript
const name = getJobOpeningsRef.operationName;
console.log(name);
```

### Variables
The `GetJobOpenings` query has no variables.
### Return Type
Recall that executing the `GetJobOpenings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetJobOpeningsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetJobOpenings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getJobOpenings } from '@dataconnect/generated';


// Call the `getJobOpenings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getJobOpenings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getJobOpenings(dataConnect);

console.log(data.jobOpenings);

// Or, you can use the `Promise` API.
getJobOpenings().then((response) => {
  const data = response.data;
  console.log(data.jobOpenings);
});
```

### Using `GetJobOpenings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getJobOpeningsRef } from '@dataconnect/generated';


// Call the `getJobOpeningsRef()` function to get a reference to the query.
const ref = getJobOpeningsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getJobOpeningsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.jobOpenings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.jobOpenings);
});
```

## GetApplicationsForJobOpening
You can execute the `GetApplicationsForJobOpening` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getApplicationsForJobOpening(vars: GetApplicationsForJobOpeningVariables): QueryPromise<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;

interface GetApplicationsForJobOpeningRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetApplicationsForJobOpeningVariables): QueryRef<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
}
export const getApplicationsForJobOpeningRef: GetApplicationsForJobOpeningRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getApplicationsForJobOpening(dc: DataConnect, vars: GetApplicationsForJobOpeningVariables): QueryPromise<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;

interface GetApplicationsForJobOpeningRef {
  ...
  (dc: DataConnect, vars: GetApplicationsForJobOpeningVariables): QueryRef<GetApplicationsForJobOpeningData, GetApplicationsForJobOpeningVariables>;
}
export const getApplicationsForJobOpeningRef: GetApplicationsForJobOpeningRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getApplicationsForJobOpeningRef:
```typescript
const name = getApplicationsForJobOpeningRef.operationName;
console.log(name);
```

### Variables
The `GetApplicationsForJobOpening` query requires an argument of type `GetApplicationsForJobOpeningVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetApplicationsForJobOpeningVariables {
  jobOpeningId: UUIDString;
}
```
### Return Type
Recall that executing the `GetApplicationsForJobOpening` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetApplicationsForJobOpeningData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetApplicationsForJobOpening`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getApplicationsForJobOpening, GetApplicationsForJobOpeningVariables } from '@dataconnect/generated';

// The `GetApplicationsForJobOpening` query requires an argument of type `GetApplicationsForJobOpeningVariables`:
const getApplicationsForJobOpeningVars: GetApplicationsForJobOpeningVariables = {
  jobOpeningId: ..., 
};

// Call the `getApplicationsForJobOpening()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getApplicationsForJobOpening(getApplicationsForJobOpeningVars);
// Variables can be defined inline as well.
const { data } = await getApplicationsForJobOpening({ jobOpeningId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getApplicationsForJobOpening(dataConnect, getApplicationsForJobOpeningVars);

console.log(data.applications);

// Or, you can use the `Promise` API.
getApplicationsForJobOpening(getApplicationsForJobOpeningVars).then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

### Using `GetApplicationsForJobOpening`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getApplicationsForJobOpeningRef, GetApplicationsForJobOpeningVariables } from '@dataconnect/generated';

// The `GetApplicationsForJobOpening` query requires an argument of type `GetApplicationsForJobOpeningVariables`:
const getApplicationsForJobOpeningVars: GetApplicationsForJobOpeningVariables = {
  jobOpeningId: ..., 
};

// Call the `getApplicationsForJobOpeningRef()` function to get a reference to the query.
const ref = getApplicationsForJobOpeningRef(getApplicationsForJobOpeningVars);
// Variables can be defined inline as well.
const ref = getApplicationsForJobOpeningRef({ jobOpeningId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getApplicationsForJobOpeningRef(dataConnect, getApplicationsForJobOpeningVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.applications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateApplicant
You can execute the `CreateApplicant` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createApplicant(vars: CreateApplicantVariables): MutationPromise<CreateApplicantData, CreateApplicantVariables>;

interface CreateApplicantRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicantVariables): MutationRef<CreateApplicantData, CreateApplicantVariables>;
}
export const createApplicantRef: CreateApplicantRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createApplicant(dc: DataConnect, vars: CreateApplicantVariables): MutationPromise<CreateApplicantData, CreateApplicantVariables>;

interface CreateApplicantRef {
  ...
  (dc: DataConnect, vars: CreateApplicantVariables): MutationRef<CreateApplicantData, CreateApplicantVariables>;
}
export const createApplicantRef: CreateApplicantRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createApplicantRef:
```typescript
const name = createApplicantRef.operationName;
console.log(name);
```

### Variables
The `CreateApplicant` mutation requires an argument of type `CreateApplicantVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateApplicantVariables {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  linkedInProfile?: string | null;
}
```
### Return Type
Recall that executing the `CreateApplicant` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateApplicantData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateApplicantData {
  applicant_insert: Applicant_Key;
}
```
### Using `CreateApplicant`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createApplicant, CreateApplicantVariables } from '@dataconnect/generated';

// The `CreateApplicant` mutation requires an argument of type `CreateApplicantVariables`:
const createApplicantVars: CreateApplicantVariables = {
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  phoneNumber: ..., 
  linkedInProfile: ..., // optional
};

// Call the `createApplicant()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createApplicant(createApplicantVars);
// Variables can be defined inline as well.
const { data } = await createApplicant({ firstName: ..., lastName: ..., email: ..., phoneNumber: ..., linkedInProfile: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createApplicant(dataConnect, createApplicantVars);

console.log(data.applicant_insert);

// Or, you can use the `Promise` API.
createApplicant(createApplicantVars).then((response) => {
  const data = response.data;
  console.log(data.applicant_insert);
});
```

### Using `CreateApplicant`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createApplicantRef, CreateApplicantVariables } from '@dataconnect/generated';

// The `CreateApplicant` mutation requires an argument of type `CreateApplicantVariables`:
const createApplicantVars: CreateApplicantVariables = {
  firstName: ..., 
  lastName: ..., 
  email: ..., 
  phoneNumber: ..., 
  linkedInProfile: ..., // optional
};

// Call the `createApplicantRef()` function to get a reference to the mutation.
const ref = createApplicantRef(createApplicantVars);
// Variables can be defined inline as well.
const ref = createApplicantRef({ firstName: ..., lastName: ..., email: ..., phoneNumber: ..., linkedInProfile: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createApplicantRef(dataConnect, createApplicantVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.applicant_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.applicant_insert);
});
```

## CreateApplication
You can execute the `CreateApplication` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createApplication(vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface CreateApplicationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
}
export const createApplicationRef: CreateApplicationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createApplication(dc: DataConnect, vars: CreateApplicationVariables): MutationPromise<CreateApplicationData, CreateApplicationVariables>;

interface CreateApplicationRef {
  ...
  (dc: DataConnect, vars: CreateApplicationVariables): MutationRef<CreateApplicationData, CreateApplicationVariables>;
}
export const createApplicationRef: CreateApplicationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createApplicationRef:
```typescript
const name = createApplicationRef.operationName;
console.log(name);
```

### Variables
The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateApplicationVariables {
  applicantId: UUIDString;
  jobOpeningId: UUIDString;
  coverLetterText?: string | null;
  status: string;
}
```
### Return Type
Recall that executing the `CreateApplication` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateApplicationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateApplicationData {
  application_insert: Application_Key;
}
```
### Using `CreateApplication`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createApplication, CreateApplicationVariables } from '@dataconnect/generated';

// The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`:
const createApplicationVars: CreateApplicationVariables = {
  applicantId: ..., 
  jobOpeningId: ..., 
  coverLetterText: ..., // optional
  status: ..., 
};

// Call the `createApplication()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createApplication(createApplicationVars);
// Variables can be defined inline as well.
const { data } = await createApplication({ applicantId: ..., jobOpeningId: ..., coverLetterText: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createApplication(dataConnect, createApplicationVars);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
createApplication(createApplicationVars).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

### Using `CreateApplication`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createApplicationRef, CreateApplicationVariables } from '@dataconnect/generated';

// The `CreateApplication` mutation requires an argument of type `CreateApplicationVariables`:
const createApplicationVars: CreateApplicationVariables = {
  applicantId: ..., 
  jobOpeningId: ..., 
  coverLetterText: ..., // optional
  status: ..., 
};

// Call the `createApplicationRef()` function to get a reference to the mutation.
const ref = createApplicationRef(createApplicationVars);
// Variables can be defined inline as well.
const ref = createApplicationRef({ applicantId: ..., jobOpeningId: ..., coverLetterText: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createApplicationRef(dataConnect, createApplicationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

