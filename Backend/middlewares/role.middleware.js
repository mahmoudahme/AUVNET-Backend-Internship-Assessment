export const isAdmin = (req, res, next) => {
  if (req.user?.type !== 'admin') {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
