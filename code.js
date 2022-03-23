const youtube = require('youtube-metadata-from-url');
const url = 'https://youtu.be/TRqiFPpw2fY';

youtube.metadata(url).then(function(json) {
    console.log(json);
}, function(err){
    console.log(err);
});
