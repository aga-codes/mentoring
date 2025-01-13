

// Task 7

// You have an array of album objects. Each album has:
// ● title (string)
// ● artist (string)
// ● releaseYear (number)
// ● genres (array of strings)
// ● tracks (array of objects with title (string), duration (number, seconds), plays
// (number))
// You need to:
// ● Group albums by their primary genre (the first in the genres array).
// ● For each genre group, determine the album with the highest average track duration.
// ● Gather all tracks from all albums and find the top 5 tracks by plays.
// ● Return a summary of how many albums each genre has, which album in each genre
// has the highest average track duration (and what that duration is), and a list of the
// top 5 most played track titles with their play counts.
// Example Input:
// const albums = [
// {
// title: "Blue Horizon",
// artist: "The Sea Birds",
// releaseYear: 1990,
// genres: ["Rock", "Indie"],
// tracks: [
// { title: "Waves", duration: 180, plays: 500 },
// { title: "Dusk", duration: 200, plays: 300 }
// ]
// },
// {

// title: "Silent Echoes",
// artist: "Amber Sky",
// releaseYear: 1995,
// genres: ["Jazz", "Blues"],
// tracks: [
// { title: "Nightfall", duration: 240, plays: 150 },
// { title: "Whispers", duration: 220, plays: 1000 },
// { title: "Misty", duration: 260, plays: 750 }
// ]
// }
// ];

// Example Final Result (format):
// {
// genres: {
// Rock: {
// albumCount: 1,
// highestAverageDurationAlbum: {
// title: "Blue Horizon",
// averageTrackDuration: 190.00
// }
// },
// Jazz: {
// albumCount: 1,

// highestAverageDurationAlbum: {
// title: "Silent Echoes",
// averageTrackDuration: 240.00
// }
// }
// },
// topTracks: [
// { title: "Whispers", plays: 1000 },
// { title: "Misty", plays: 750 },
// { title: "Waves", plays: 500 },
// { title: "Dusk", plays: 300 },
// { title: "Nightfall", plays: 150 }
// ]
// }