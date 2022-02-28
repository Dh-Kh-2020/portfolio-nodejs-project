exports.homeRoutes = (req, res)=>{
    res.render('index', {title: 'Dhoha Alkhorasani | Personal Profile'});
}

exports.signup = (req, res)=>{
    res.render('signup', {title: 'Sign Up'});
}

exports.update_user = (req, res)=>{
    res.render('update_user');
}

exports.login = (req, res)=>{
    res.render('login', {title: 'Login to dashboard'});
}

exports.dashboard = (req, res)=>{
    res.render('dashboard', {title: 'Dashboard'});
}

exports.skills = (req, res)=>{
    res.render('skills', {title: 'Skills'});
}

exports.experience = (req, res)=>{
    res.render('experience', {title: 'Experience'});
}

exports.education = (req, res)=>{
    res.render('education', {title: 'Education'});
}

exports.course = (req, res)=>{
    res.render('course', {title: 'Courses'});
}

exports.notFound = (req, res)=>{
    res.status(404).render('404');
}