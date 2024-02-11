const createPoint = (longitude: number, latitude: number) => {
   return `POINT(${longitude}, ${latitude})`;
};

const imagesData = [
   {
      id: "144875fe-e638-4dea-9857-40f861c9774c",
      name: "14307831110_350606dea3_k.jpg",
      location: createPoint(-122.47826583238584, 37.82003874891632),
      city: "San Francisco",
      country: "USA",
      collection_id: "134875ee-e638-4dea-9857-40f861c9774c",
      user_id: "174875ee-e638-4dea-9857-40f861c9774c",
   },
   {
      id: "244875ee-e638-4dea-9857-40f861c9774c",
      name: "15277086457_c1bce3fc74_h.jpg",
      location: createPoint(-122.50381814896568, 37.7587790941495),
      city: "San Francisco",
      country: "USA",
      collection_id: "134875ee-e638-4dea-9857-40f861c9774c",
      user_id: "174875ee-e638-4dea-9857-40f861c9774c",
   },
   {
      id: "344875ee-e638-4dea-9857-40f861c9774c",
      name: "15638909130_216c5fbba4_k.jpg",
      location: createPoint(-122.39818839966847, 37.79948963479045),
      city: "San Francisco",
      country: "USA",
      collection_id: "134875ee-e638-4dea-9857-40f861c9774c",
      user_id: "174875ee-e638-4dea-9857-40f861c9774c",
   },
   {
      id: "444875ee-e638-4dea-9857-40f861c9774c",
      name: "4097407674_54529b3e55_k.jpeg",
      location: createPoint(-122.41952101704452, 37.80217691604457),
      city: "San Francisco",
      country: "USA",
      collection_id: "134875ee-e638-4dea-9857-40f861c9774c",
      user_id: "174875ee-e638-4dea-9857-40f861c9774c",
   },
];

export default imagesData;
