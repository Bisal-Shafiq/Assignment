"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Teen albums banayen
let album1 = make_album("Artist One", "Album One");
let album2 = make_album("Artist Two", "Album Two");
let album3 = make_album("Artist Three", "Album Three", 12);
// Albums ko print karna
console.log(album1);
console.log(album2);
console.log(album3);
