// constant/requestHandler.ts
export const RequestHandler = {
  // Generic
  UNEXPECTED_ERROR: "An unexpected error occurred. Please try again later.",

  // Network & timeout
  NETWORK_ERROR: "Network error. Check your internet connection.",
  TIMEOUT_ERROR: "The request timed out. Please retry.",

  // Authentication
  UNAUTHORIZED: "You must be logged in to perform this action.",
  FORBIDDEN: "You don't have permission to access this resource.",

  // Resource
  NOT_FOUND: "The requested resource could not be found.",
  CONFLICT: "This resource already exists or is in conflict.",

  // Validation
  BAD_REQUEST: "Invalid request data. Please check and try again.",
  VALIDATION_ERROR: "Some fields contain invalid or missing data.",

  // Server
  INTERNAL_SERVER_ERROR: "Server error. Our team has been notified.",
};
