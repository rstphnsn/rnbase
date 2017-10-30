const HttpErrors = {
  BAD_REQUEST: 'bad_request',
  CONNECTION_ERROR: 'connection_error',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
  UNPROCESSABLE_ENTITY: 'unprocessable_entity',
  SERVER_ERROR: 'server_error',
  UNKNOWN: 'unknown'
};

const HttpMethods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH'
};

const unauthorize = status => {
  throw new Error(HttpErrors.UNAUTHORIZED, status);
};

const badRequestMessage = responseBody => {
  if (responseBody.message) {
    return responseBody.message;
  }
  return HttpErrors.BAD_REQUEST;
};

const unauthorizedMessage = (responseBody, status) => {
  if (responseBody.error &&
    responseBody.error === 'invalid_user_password') {
    throw new Error(responseBody.error, status);
  } else {
    unauthorize(401);
  }
};

function checkResponseCodes(response, responseBody) {
  switch (response.status) {
    case 200:
    case 201:
    case 202:
      return responseBody;
    case 400:
      throw new Error(badRequestMessage(responseBody), 0);
    case 401:
      unauthorizedMessage(responseBody, response.status);
      break;
    case 403:
      unauthorize(403);
      break;
    case 404:
      throw new Error(HttpErrors.NOT_FOUND, response.status);
    case 422:
      throw new Error(HttpErrors.UNPROCESSABLE_ENTITY, response.status);
    case 500:
      throw new Error(HttpErrors.SERVER_ERROR, response.status);
    default:
      throw new Error(HttpErrors.UNKNOWN, response.status);
  }
  return null;
}

async function getResponseBody(response) {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function unauthenticatedPost(url, body) {
  let response;
  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: HttpMethods.POST,
      body: JSON.stringify(body)
    });
  } catch (error) {
    throw new Error('connection_error');
  }

  return checkResponseCodes(response, await getResponseBody(response));
}

async function request(url, userToken, body, method) {
  let response;
  try {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json; charset=utf-8;'
      },
      method,
      body: JSON.stringify(body)
    });
  } catch (error) {
    throw new Error('connection_error');
  }

  return checkResponseCodes(response, await getResponseBody(response));
}

async function get(url, userToken) {
  let response;

  try {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      method: HttpMethods.GET
    });
  } catch (error) {
    throw new Error('connection_error');
  }

  return checkResponseCodes(response, await getResponseBody(response));
}

async function post(url, userToken, body) {
  return request(url, userToken, body, HttpMethods.POST);
}

async function patch(url, userToken, body) {
  return request(url, userToken, body, HttpMethods.PATCH);
}

async function put(url, userToken, body) {
  return request(url, userToken, body, HttpMethods.PUT);
}

export {
  get,
  post,
  patch,
  put,
  unauthenticatedPost,
  HttpErrors,
  HttpMethods
};
