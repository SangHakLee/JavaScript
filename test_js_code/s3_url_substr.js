var url = 'https://serverselphone.s3.amazonaws.com/users/70cfb72ff6fa8b6766413afbfc1ff6b4.png';


// console.log(url.replace(/https:\/\/|http:\/\//gi, ''));

// console.log(url.replace(/https:\/\/|http:\/\//gi, '').split('/')[2]);

var userPictureObjectName = function(url){
	return url.replace(/https:\/\/|http:\/\//gi, '').split('/')[2]
}

console.log(userPictureObjectName(url));