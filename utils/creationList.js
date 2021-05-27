export const creationListMobile = [
  {
    id: "01",
    src: "/images/mobile/image-deep-earth.jpg",
    alt: "DEEP EARTH",
  },
  {
    id: "02",
    src: "/images/mobile/image-night-arcade.jpg",
    alt: "NIGHT ARCADE",
  },
  {
    id: "03",
    src: "/images/mobile/image-soccer-team.jpg",
    alt: "SOCCER TEAM VR",
  },
  {
    id: "04",
    src: "/images/mobile/image-grid.jpg",
    alt: "THE GRID",
  },
  {
    id: "05",
    src: "/images/mobile/image-from-above.jpg",
    alt: "FROM UP ABOVE VR",
  },
  {
    id: "06",
    src: "/images/mobile/image-pocket-borealis.jpg",
    alt: "POCKET BOREALIS",
  },
  {
    id: "07",
    src: "/images/mobile/image-curiosity.jpg",
    alt: "THE CURIOSITY",
  },
  {
    id: "08",
    src: "/images/mobile/image-fisheye.jpg",
    alt: "MAKE IT FISHEYE",
  },
];

export const creationListDesktop = creationListMobile.map(({ src, alt }) => {
  return {
    src: src.replace("/mobile/", "/desktop/"),
    alt,
  };
});
