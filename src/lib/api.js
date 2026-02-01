/**
 * @typedef {Object} ApiError
 * @property {number} status
 * @property {boolean} notFound
 * @property {string} message
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * @param {string} path
 * @param {RequestInit} [options]
 */
export async function apiFetch(path, options = {}) {
  if (!API_BASE_URL) {
    throw createError(500, 'VITE_API_BASE_URL is not set');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    const message = await readErrorMessage(response);
    const error = createError(response.status, message);
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
}

/**
 * @param {number} status
 * @param {string} message
 * @returns {ApiError}
 */
function createError(status, message) {
  return {
    status,
    notFound: status === 404,
    message: message || 'Request failed'
  };
}

async function readErrorMessage(response) {
  try {
    const data = await response.json();
    if (data?.message) return data.message;
    return response.statusText || 'Request failed';
  } catch {
    return response.statusText || 'Request failed';
  }
}
