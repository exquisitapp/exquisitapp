// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);
$(document).ready( ()=> {
  $("#get-new-gif").click( () => getRandomGif());
  getRandomGif();

})

const getRandomGif = () => {
  axios
  .get("https://api.giphy.com/v1/gifs/random?api_key=uw1HhStph2PM0kvkyYgYPt8e8V4JT3kj")
  .then( giphy => {
    let gifUrl = giphy.data.data.image_original_url;
    $('#giphy-image-randomizer img').prop("src", gifUrl);
    $('#image_url').val(gifUrl)
  })
  .catch(err => console.log(err))
}