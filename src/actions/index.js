/**
 * Actions.
 * @module actions
 */

import {
  ADD_CONTENT, ADD_CONTENT_SUCCESS, ADD_CONTENT_FAIL,
  DELETE_CONTENT, DELETE_CONTENT_SUCCESS, DELETE_CONTENT_FAIL,
  EDIT_CONTENT, EDIT_CONTENT_SUCCESS, EDIT_CONTENT_FAIL,
  GET_BREADCRUMBS, GET_BREADCRUMBS_SUCCESS, GET_BREADCRUMBS_FAIL,
  GET_NAVIGATION, GET_NAVIGATION_SUCCESS, GET_NAVIGATION_FAIL,
  GET_CONTENT, GET_CONTENT_SUCCESS, GET_CONTENT_FAIL,
  GET_SCHEMA, GET_SCHEMA_SUCCESS, GET_SCHEMA_FAIL,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT,
} from '../constants/ActionTypes';

/**
 * Get breadcrumbs.
 * @function getBreadcrumbs
 * @param {string} url Content url.
 * @returns {Object} Get breadcrumbs action.
 */
export function getBreadcrumbs(url) {
  return {
    types: [GET_BREADCRUMBS, GET_BREADCRUMBS_SUCCESS, GET_BREADCRUMBS_FAIL],
    promise: api => api.get(`${url}/@components/breadcrumbs`),
  };
}

/**
 * Get navigation.
 * @function getNavigation
 * @param {string} url Content url.
 * @returns {Object} Get navigation action.
 */
export function getNavigation(url) {
  return {
    types: [GET_NAVIGATION, GET_NAVIGATION_SUCCESS, GET_NAVIGATION_FAIL],
    promise: api => api.get(`${url}/@components/navigation`),
  };
}

/**
 * Get content function.
 * @function getContent
 * @param {string} url Content url.
 * @returns {Object} Get content action.
 */
export function getContent(url) {
  return {
    types: [GET_CONTENT, GET_CONTENT_SUCCESS, GET_CONTENT_FAIL],
    promise: api => api.get(url),
  };
}

/**
 * Add content function.
 * @function addContent
 * @param {string} url Parent url.
 * @param {Object} content Content data.
 * @returns {Object} Add content action.
 */
export function addContent(url, content) {
  return {
    types: [ADD_CONTENT, ADD_CONTENT_SUCCESS, ADD_CONTENT_FAIL],
    promise: api => api.post(url, { data: content }),
  };
}

/**
 * Delete content function.
 * @function deleteContent
 * @param {string} url Content url.
 * @returns {Object} Delete content action.
 */
export function deleteContent(url) {
  return {
    types: [DELETE_CONTENT, DELETE_CONTENT_SUCCESS, DELETE_CONTENT_FAIL],
    promise: api => api.del(url),
  };
}

/**
 * Edit content function.
 * @function editContent
 * @param {string} url Content url.
 * @param {Object} content Content data.
 * @returns {Object} Edit content action.
 */
export function editContent(url, content) {
  return {
    types: [EDIT_CONTENT, EDIT_CONTENT_SUCCESS, EDIT_CONTENT_FAIL],
    promise: api => api.patch(url, { data: content }),
  };
}

/**
 * Get schema function.
 * @function getSchema
 * @param {string} type Content type.
 * @returns {Object} Get schema action.
 */
export function getSchema(type) {
  return {
    types: [GET_SCHEMA, GET_SCHEMA_SUCCESS, GET_SCHEMA_FAIL],
    promise: api => api.get(`/@types/${type}`),
  };
}

/**
 * Login function.
 * @function login
 * @param {string} login Login.
 * @param {string} password Password.
 * @returns {Object} Login action.
 */
export function login(login, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: api => api.post('@login', { data: { login, password }}),
  };
}

/**
 * Logout function.
 * @function logout
 * @returns {Object} Logout action.
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}
