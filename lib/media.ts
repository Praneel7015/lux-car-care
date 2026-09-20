/** Curated Unsplash / Pexels stock imagery for car wash & detailing (free commercial use). */

export type StockImage = {
  src: string;
  alt: string;
  credit?: string;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const p = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const MEDIA = {
  hero: {
    src: u("photo-1607860108855-64acf2078ed9"),
    alt: "Car covered in thick soap foam during a professional wash",
    credit: "Unsplash",
  },
  foamSuv: {
    src: p("29504457"),
    alt: "Modern SUV covered in soap suds at a car wash",
    credit: "Pexels",
  },
  pressureWash: {
    src: p("6872149"),
    alt: "Pressure washer rinsing soap from a dark car",
    credit: "Pexels",
  },
  detailingHand: {
    src: u("photo-1619642751034-765dfdf7c58e"),
    alt: "Hand polishing a car panel with a microfiber cloth",
    credit: "Unsplash",
  },
  headlightDetail: {
    src: u("photo-1489824904134-891ab64532f1"),
    alt: "Close-up of a clean car headlight and front bumper",
    credit: "Unsplash",
  },
  waterBeading: {
    src: u("photo-1558618666-fcd25c85cd64"),
    alt: "Water beading on a freshly washed glossy car panel",
    credit: "Unsplash",
  },
  cleanBlackCar: {
    src: u("photo-1492144534655-ae79c964c9d7"),
    alt: "Glossy black sports car with a mirror shine finish",
    credit: "Unsplash",
  },
  wheelDetail: {
    src: u("photo-1617531653332-bd46c24f2068"),
    alt: "Clean alloy wheel after professional tyre and rim care",
    credit: "Unsplash",
  },
  interiorClean: {
    src: u("photo-1503376780353-7e6692767b70"),
    alt: "Clean modern car interior cabin",
    credit: "Unsplash",
  },
  interiorDetail: {
    src: u("photo-1549317661-bd32c8ce0db2"),
    alt: "Detailed car dashboard and steering wheel",
    credit: "Unsplash",
  },
  foamClose: {
    src: u("photo-1601362840469-51e4d8d58785"),
    alt: "Thick cleaning foam covering a car hood",
    credit: "Unsplash",
  },
  handWash: {
    src: p("6873088"),
    alt: "Technician hand-washing a car with a sponge and foam",
    credit: "Pexels",
  },
  rinseSide: {
    src: p("6872148"),
    alt: "Car being rinsed during a full exterior wash",
    credit: "Pexels",
  },
  polishShine: {
    src: p("3802510"),
    alt: "Shiny black luxury car exterior after detailing",
    credit: "Pexels",
  },
  dustyCar: {
    src: u("photo-1449965408869-eaa3f722e40d"),
    alt: "Dusty car exterior before washing",
    credit: "Unsplash",
  },
  muddyCar: {
    src: u("photo-1563720360172-67b8f3dce741"),
    alt: "Dirty car body needing a thorough wash",
    credit: "Unsplash",
  },
  bikeWash: {
    src: u("photo-1558981806-ec527fa84c39"),
    alt: "Motorcycle ready for an exterior rinse and shine",
    credit: "Unsplash",
  },
  garageBay: {
    src: p("6872598"),
    alt: "Car wash bay with foam and cleaning equipment",
    credit: "Pexels",
  },
  waxApplicator: {
    src: p("6872661"),
    alt: "Detailing pad applying product to a car surface",
    credit: "Pexels",
  },
} as const satisfies Record<string, StockImage>;

export const GALLERY_IMAGES: StockImage[] = [
  MEDIA.foamSuv,
  MEDIA.handWash,
  MEDIA.pressureWash,
  MEDIA.detailingHand,
  MEDIA.foamClose,
  MEDIA.wheelDetail,
  MEDIA.waterBeading,
  MEDIA.interiorClean,
  MEDIA.rinseSide,
  MEDIA.polishShine,
  MEDIA.waxApplicator,
  MEDIA.garageBay,
];

export const BEFORE_AFTER_PAIRS: {
  before: StockImage;
  after: StockImage;
  label: string;
}[] = [
  {
    label: "Exterior dust to gloss",
    before: MEDIA.dustyCar,
    after: MEDIA.cleanBlackCar,
  },
  {
    label: "Dirty body to foam wash",
    before: MEDIA.muddyCar,
    after: MEDIA.foamSuv,
  },
  {
    label: "Dull panel to hand polish",
    before: {
      src: u("photo-1503376780353-7e6692767b70", 800),
      alt: "Car cabin and panels before a deep clean",
      credit: "Unsplash",
    },
    after: MEDIA.detailingHand,
  },
  {
    label: "Rinse to water beading shine",
    before: MEDIA.rinseSide,
    after: MEDIA.waterBeading,
  },
];

export const HOME_STRIP: StockImage[] = [
  MEDIA.foamSuv,
  MEDIA.handWash,
  MEDIA.wheelDetail,
  MEDIA.waterBeading,
];

export const SERVICE_IMAGES: Record<string, StockImage> = {
  "express-exterior": MEDIA.pressureWash,
  "exterior-interior": MEDIA.handWash,
  "exterior-interior-underbody": MEDIA.foamSuv,
  "full-detailing": MEDIA.detailingHand,
  "ceramic-coating": MEDIA.waterBeading,
  "express-bike-wash": MEDIA.bikeWash,
};

/** Default Open Graph / social share image */
export const OG_IMAGE = MEDIA.hero;
