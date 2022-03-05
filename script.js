// const elementById = (id) => {
//   return document.getElementById(id);
// };

let elementId = (idName)=>{
return document.getElementById(idName);
};
const handleSearch = () => {
  const keyword = elementId("keyword").value;
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => showArtists(data.artists));
    elementId("keyword").value="";
};
// strGenre
const showArtists = (data) => {
  const artistContainer = elementId("artists");
  // console.log(artistContainer);
  data?.forEach(artist => {
    console.log(artist);
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img
        src="${artist.strArtistThumb}"
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist}</h1>
    <p>Country: ${artist.strCountry}</p>
    <p>Style: ${artist.strGenre}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
  </button>`;
    artistContainer.appendChild(div);
  });
    elementId("albums").innerHTML=""
};

const fetchAlbums = (id) => {
  const url = `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAlbum(data.album));
    
  const artistContainer = elementId("artists");
  artistContainer.innerHTML = "";
 
};

const showAlbum = (album) => {
  const albumContainer = elementId("albums");
  album?.forEach(item => {
    // console.log(item);
    const div = document.createElement("div");
    div.classList.add("album");
    div.innerHTML = `
        <div class="album-image-container">
          <img
            src="${item.strAlbumThumb}"
            alt=""
          />
        </div>
        <div class="album-name">
          <h3>${item.strAlbum}</h3>
        </div>
      `;

    albumContainer.appendChild(div);
   
  });
  
};
