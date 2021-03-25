const router = require("express").Router();

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// // GET /api/set-token-cookie
// // test route that will test the setTokenCookie function by getting
// // the demo user and calling setTokenCookie
// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth.js");
// const { User } = require("../../db/models");
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "demo",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// // GET /api/restore-user
// // test the restoreUser middleware by connecting the middleware and
// // checking whether or not the req.user key has been populated by the middleware properly.
// const { restoreUser } = require("../../utils/auth.js");
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });


// // GET /api/require-auth
// // test requireAuth middleware that will return an error if
// // there is no session user, otherwise
// // return the session user's information.
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
