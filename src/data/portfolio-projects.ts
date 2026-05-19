export type ProjectCategory =
  | "Fashion"
  | "Beauty"
  | "Jewelry"
  | "Watches"
  | "Food & Bakery"
  | "Furniture"
  | "Photography"
  | "Wedding"
  | "Healthcare"
  | "Hair Care"
  | "Education";

export interface Project {
  title: string;
  desc: string;
  category: ProjectCategory;
  img: string;
  client: string;
}

export const projects: Project[] = [
  { title: "Elegant Home Living", desc: "Premium Furniture & Home Decor", category: "Furniture", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609496/IMG-20250921-WA0089_xhiy3t.jpg", client: "home_stylist_elite" },
  { title: "SmoothSkin Pro", desc: "Advanced At-Home Hair Removal", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609476/IMG-20250921-WA0079_odyztd.jpg", client: "skin_care_innovator" },
  { title: "Urban Style Collective", desc: "Trendsetting Apparel & Accessories", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609479/IMG-20250921-WA0080_mpyull.jpg", client: "fashion_forward_23" },
  { title: "Gilded Treasures", desc: "Handcrafted Fine Jewelry", category: "Jewelry", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609484/IMG-20250921-WA0081_xj5aud.jpg", client: "sparkle_and_shine_co" },
  { title: "Timeless Elegance", desc: "Premium Watch Collection", category: "Watches", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609485/IMG-20250921-WA0082_lco1hc.jpg", client: "watch_enthusiast_88" },
  { title: "Golden Crust Bakery", desc: "Fresh Bread & Pastries Daily", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609486/IMG-20250921-WA0083_o3a777.jpg", client: "baking_artisan_co" },
  { title: "Wellness & Learning Hub", desc: "Integrated Health & Education Services", category: "Healthcare", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609467/IMG-20250921-WA0073_mmzmw8.jpg", client: "community_care_network" },
  { title: "Glamour Palette", desc: "Professional Makeup Studio", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609467/IMG-20250921-WA0074_kvcopb.jpg", client: "makeup_maestro_art" },
  { title: "Precision Timekeepers", desc: "Luxury Watch Boutique", category: "Watches", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609469/IMG-20250921-WA0075_nqp3sx.jpg", client: "timepiece_connoisseur" },
  { title: "Cozy Comfort Wear", desc: "Premium Loungewear Collection", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609475/IMG-20250921-WA0076_xlzml9.jpg", client: "comfort_lifestyle_co" },
  { title: "Home Harmony", desc: "Furniture & Home Accessories", category: "Furniture", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609475/IMG-20250921-WA0077_p04ox5.jpg", client: "interior_design_pro" },
  { title: "Elegance Defined", desc: "Women's Fashion & Dresses", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609456/IMG-20250921-WA0068_asizxc.jpg", client: "style_curator_ella" },
  { title: "Radiant Beauty", desc: "Premium Beauty Collection", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609457/IMG-20250921-WA0069_iipeyp.jpg", client: "glow_aesthetics_co" },
  { title: "Skin Revival", desc: "Advanced Skincare Solutions", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609457/IMG-20250921-WA0070_s15bju.jpg", client: "dermatology_specialist" },
  { title: "Frame Perfect Photography", desc: "Professional Photo Studio", category: "Photography", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609458/IMG-20250921-WA0071_utlrrb.jpg", client: "lens_master_pro" },
  { title: "Model Portfolio Pro", desc: "Professional Modeling Showcase", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609466/IMG-20250921-WA0072_rosja2.jpg", client: "model_management_elite" },
  { title: "Pure Glow Essentials", desc: "Beauty & Skincare Collection", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609446/IMG-20250921-WA0063_n9ina9.jpg", client: "skin_care_specialist" },
  { title: "Hair Revival System", desc: "Complete Hair Care Routine", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609447/IMG-20250921-WA0064_favzad.jpg", client: "hair_expert_studio" },
  { title: "StyleCraft Hair Studio", desc: "Professional Hairdressing Services", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609447/IMG-20250921-WA0066_fx6zvo.jpg", client: "master_stylist_co" },
  { title: "Artisan Bread Haven", desc: "Freshly Baked Bread Daily", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609448/IMG-20250921-WA0065_hrogzu.jpg", client: "baker_craft_master" },
  { title: "Timepiece Elegance", desc: "Premium Wristwatch Collection", category: "Watches", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609455/IMG-20250921-WA0067_feqvr9.jpg", client: "watch_collector_elite" },
  { title: "ElanWear Active", desc: "Performance Activewear Brand", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609429/IMG-20250921-WA0056_lwbf74.jpg", client: "active_lifestyle_co" },
  { title: "Eternal Moments Photography", desc: "Wedding & Special Events", category: "Photography", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609429/IMG-20250921-WA0057_rlf6ji.jpg", client: "wedding_photographer_pro" },
  { title: "Vitality Healthcare", desc: "Comprehensive Medical Services", category: "Healthcare", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609432/IMG-20250921-WA0058_yhjjbq.jpg", client: "health_wellness_group" },
  { title: "Decadent Delights", desc: "Artisan Chocolate Collection", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609437/IMG-20250921-WA0059_jb4hjr.jpg", client: "chocolate_connoisseur" },
  { title: "Feminine Elegance", desc: "Women's Wear Collection", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609438/IMG-20250921-WA0060_uegleg.jpg", client: "style_curator_ella" },
  { title: "Sparkle & Shine", desc: "Rings, Bangles & Necklaces", category: "Jewelry", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609418/IMG-20250921-WA0051_trgfmv.jpg", client: "jewelry_design_house" },
  { title: "Gemstone Elegance", desc: "Premium Jewelry Collection", category: "Jewelry", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609422/IMG-20250921-WA0052_aeyhws.jpg", client: "luxury_gems_direct" },
  { title: "Wig Couture", desc: "Premium Wig Collection", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609422/IMG-20250921-WA0053_pyyn9d.jpg", client: "hair_transformation_co" },
  { title: "Femme Wig Boutique", desc: "Women's Wig Specialists", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609423/IMG-20250921-WA0054_na1zyp.jpg", client: "wig_stylist_elite" },
  { title: "Hair Revival Shampoo", desc: "Professional Hair Care Solutions", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609428/IMG-20250921-WA0055_bihrmh.jpg", client: "hair_care_laboratory" },
  { title: "Academic Excellence Hub", desc: "School Admission Services", category: "Education", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609403/IMG-20250921-WA0041_j6rrds.jpg", client: "education_consultant_pro" },
  { title: "Cocoa Delights", desc: "Premium Chocolate Collection", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609409/IMG-20250921-WA0045_fmchvc.jpg", client: "chocolate_artisan_co" },
  { title: "Nutritional Wellness", desc: "Therapeutic Nutrition Services", category: "Healthcare", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609410/IMG-20250921-WA0047_as8q55.jpg", client: "nutrition_therapy_expert" },
  { title: "Home Style Sanctuary", desc: "Interior Decor & Accessories", category: "Furniture", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609410/IMG-20250921-WA0048_g7xsu1.jpg", client: "home_decor_specialist" },
  { title: "Sweet Treats Bakery", desc: "Bagels, Doughnuts & More", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609412/IMG-20250921-WA0049_mour35.jpg", client: "bakery_delights_co" },
  { title: "Model Wear Collection", desc: "Professional Modeling Attire", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609395/IMG-20250921-WA0036_pd32aq.jpg", client: "model_fashion_house" },
  { title: "Comfort Couture", desc: "Comfy Wears for Women", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609396/IMG-20250921-WA0037_w7p61m.jpg", client: "comfort_fashion_co" },
  { title: "Dream Wristwatch", desc: "Complete Wristwatches Coordination", category: "Watches", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609397/IMG-20250921-WA0038_rhhbbb.jpg", client: "watch_coordinator_pro" },
  { title: "Gourmet Event Catering", desc: "Premium Catering for Events", category: "Wedding", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609402/IMG-20250921-WA0039_htnlsc.jpg", client: "event_catering_expert" },
  { title: "Chronograph Masters", desc: "Premium Wristwatch Collection", category: "Watches", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609402/IMG-20250921-WA0040_trxzvg.jpg", client: "watch_aficionado_co" },
  { title: "Doughnut Delights", desc: "Artisan Doughnut Creations", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609382/IMG-20250921-WA0029_dcgxl0.jpg", client: "doughnut_artisan_co" },
  { title: "Makeup Artistry Pro", desc: "Professional Makeup Collection", category: "Beauty", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609382/IMG-20250921-WA0031_v4z4og.jpg", client: "makeup_artist_elite" },
  { title: "Wig Emporium", desc: "Premium Wig Shop", category: "Hair Care", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609388/IMG-20250921-WA0032_wsumfr.jpg", client: "wig_boutique_direct" },
  { title: "Nutritional Balance", desc: "Professional Nutritionist Services", category: "Healthcare", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609395/IMG-20250921-WA0035_el4z5x.jpg", client: "nutrition_expert_co" },
  { title: "Women's Fashion Hub", desc: "Contemporary Women's Wear", category: "Fashion", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609389/IMG-20250921-WA0033_crg1lz.jpg", client: "fashion_design_studio" },
  { title: "Celebration Treats", desc: "Treats for Any Occasion", category: "Food & Bakery", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609391/IMG-20250921-WA0034_ororfg.jpg", client: "sweet_celebrations_co" },
  { title: "Creative Lens Photography", desc: "Professional Photography Studio", category: "Photography", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609381/IMG-20250921-WA0027_gf1wfr.jpg", client: "photo_artist_collective" },
  { title: "Memorable Moments Photography", desc: "Wedding & Event Photography", category: "Photography", img: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609381/IMG-20250921-WA0028_bwhztb.jpg", client: "wedding_photography_pro" },
];

export const featuredImages: string[] = [
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609488/IMG-20250921-WA0084_wa8sbj.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609494/IMG-20250921-WA0085_r0wxvo.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609495/IMG-20250921-WA0087_vuocad.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609495/IMG-20250921-WA0088_kardpv.jpg",
];

export const allCategories: ProjectCategory[] = [
  "Fashion","Beauty","Jewelry","Watches","Food & Bakery","Furniture","Photography","Wedding","Healthcare","Hair Care","Education",
];
