/**
 * If the response is not OK, then send a response with the specified message and code.
 * @param res - The response object
 * @param [message=SOMETHING_WENT_WRONG] - The error message to be sent to the client.
 * @param [code=403] - The HTTP status code to send back to the client.
 */
const handleHttpErrors = (res, message = 'SOMETHING_WENT_WRONG', code = 403) =>
  res.status(code).json({ error: message });

export { handleHttpErrors };
