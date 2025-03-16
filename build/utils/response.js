const responseWithMessage = (c, code, message) => {
    c.status(code);
    return c.json({ message });
};
const responseWithData = (c, code, data) => {
    c.status(code);
    return c.json({ data: data });
};
const responseWithMetadata = (c, code, data, metadata) => {
    c.status(code);
    return c.json({ data: data, metadata: metadata });
};
export { responseWithMessage, responseWithData, responseWithMetadata };
//# sourceMappingURL=response.js.map