// src/middleware/auditMiddleware.js
module.exports = function (req, res, next) {
    if (req.method === 'PUT') {
      const originalData = req.body; // This represents the new data to be saved.
      req.body.changes = {
        timestamp: new Date(),
        changes: originalData
      };
    }
    next();
  };
  