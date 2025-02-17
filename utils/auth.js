//User authentication
const withAuth = (req, res, next) => {
    console.log(req.session.logged_in);
    //If the user is not logged in. redirect the request to login route
    if(!req.session.logged_in) {
        res.redirect("/login");
    } else {
        next();
    }
};

//Export
module.exports = withAuth;