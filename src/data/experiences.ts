export interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const EXPERIENCES: Experience[] = [
  // --- ADVENTURE (20 items) ---
  {
    id: "exp-1",
    title: "Skydive over Queenstown Lakes",
    description: "Feel the ultimate rush of freefalling from 15,000 feet above the stunning Southern Alps and pristine alpine lakes.",
    category: "Adventure",
    destination: "Queenstown, New Zealand",
    price: 299,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1521459467263-8519cfd7b6f5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-2",
    title: "Scuba Diving in the Great Barrier Reef",
    description: "Explore vibrant coral gardens and swim alongside majestic sea turtles in the world's largest reef system.",
    category: "Adventure",
    destination: "Cairns, Australia",
    price: 180,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-3",
    title: "Inca Trail Trek to Machu Picchu",
    description: "Embark on a legendary 4-day hike through Andean cloud forests, ancient ruins, and dramatic mountain passes.",
    category: "Adventure",
    destination: "Cusco, Peru",
    price: 450,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-4",
    title: "Ice Climbing on Solheimajokull Glacier",
    description: "Equip your crampons and ice axe to scale the towering blue ice walls of an active Icelandic glacier.",
    category: "Adventure",
    destination: "Reykjavik, Iceland",
    price: 145,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-5",
    title: "White Water Rafting on the Ayung River",
    description: "Navigate wild class II and III rapids surrounded by lush tropical rainforests and cascading waterfalls.",
    category: "Adventure",
    destination: "Bali, Indonesia",
    price: 45,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-6",
    title: "Hot Air Ballooning over Cappadocia",
    description: "Float silently at sunrise above the whimsical fairy chimneys and unique volcanic rock formations.",
    category: "Adventure",
    destination: "Göreme, Turkey",
    price: 220,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-7",
    title: "Sandboarding in the Huacachina Dunes",
    description: "Experience the thrill of sliding down massive desert sand dunes on a customized board under the Peru sun.",
    category: "Adventure",
    destination: "Ica, Peru",
    price: 35,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-8",
    title: "Zipline Canopy Tour in Monteverde",
    description: "Swoop through the misty canopy of the famous cloud forest on one of the longest ziplines in the world.",
    category: "Adventure",
    destination: "Monteverde, Costa Rica",
    price: 85,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-9",
    title: "Night Kayaking in Bio-Bay",
    description: "Paddle through glowing bioluminescent waters under a starry sky and watch the water light up with every stroke.",
    category: "Adventure",
    destination: "Vieques, Puerto Rico",
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-10",
    title: "Cage Diving with Great White Sharks",
    description: "Get face-to-face with the ocean's most formidable predator from the safety of a secure underwater cage.",
    category: "Adventure",
    destination: "Cape Town, South Africa",
    price: 210,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1560275669-46c5a89d7a45?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-11",
    title: "Rock Climbing in Railay Beach",
    description: "Scale the majestic limestone cliffs rising directly from the turquoise Andaman Sea with expert guides.",
    category: "Adventure",
    destination: "Krabi, Thailand",
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-12",
    title: "Canyoning in the Swiss Alps",
    description: "Abseil down spectacular waterfalls, slide down natural rock chutes, and jump into deep mountain pools.",
    category: "Adventure",
    destination: "Interlaken, Switzerland",
    price: 135,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-13",
    title: "Sailing the Dalmatian Coast",
    description: "Navigate the pristine blue waters of the Adriatic Sea, stopping at hidden coves and historic island ports.",
    category: "Adventure",
    destination: "Split, Croatia",
    price: 490,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505080856163-267d49b30626?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-14",
    title: "Quad Biking in the Sahara Desert",
    description: "Roar across the golden sand dunes of the Sahara on a high-powered ATV during a sunset expedition.",
    category: "Adventure",
    destination: "Merzouga, Morocco",
    price: 55,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-15",
    title: "Hang Gliding over Rio Beaches",
    description: "Launch from the Pedra Bonita ramp and glide over Tijuca Forest before landing on the sands of São Conrado.",
    category: "Adventure",
    destination: "Rio de Janeiro, Brazil",
    price: 160,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-16",
    title: "Volcano Boarding down Cerro Negro",
    description: "Slide down the steep black ash slopes of an active volcano on a custom wooden sled at thrilling speeds.",
    category: "Adventure",
    destination: "Leon, Nicaragua",
    price: 40,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-17",
    title: "Husky Sledding in the Arctic Circle",
    description: "Command a team of enthusiastic Siberian huskies through pristine snow-covered forests and frozen valleys.",
    category: "Adventure",
    destination: "Tromsø, Norway",
    price: 195,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-18",
    title: "Caving Expedition in Waitomo",
    description: "Abseil, zipline, and float through underground cave systems illuminated by thousands of magical glowworms.",
    category: "Adventure",
    destination: "Waitomo, New Zealand",
    price: 120,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-19",
    title: "Cycled Descent down Death Road",
    description: "Hurtle down the world's most dangerous road on a full-suspension mountain bike, descending 3,000 meters.",
    category: "Adventure",
    destination: "La Paz, Bolivia",
    price: 80,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-20",
    title: "Via Ferrata Climbing in the Dolomites",
    description: "Scale high-altitude rock faces safely using iron rungs, suspension bridges, and steel cables.",
    category: "Adventure",
    destination: "Cortina d'Ampezzo, Italy",
    price: 150,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&h=400&q=80"
  },

  // --- CULTURE (20 items) ---
  {
    id: "exp-21",
    title: "Private Tea Ceremony with a Geisha",
    description: "Experience a deeply traditional Japanese tea ritual in a historic teahouse located in the Gion district.",
    category: "Culture",
    destination: "Kyoto, Japan",
    price: 120,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-22",
    title: "After-Hours Colosseum Tour",
    description: "Explore the underground chambers, arena floor, and tiers of the ancient amphitheater under the night sky.",
    category: "Culture",
    destination: "Rome, Italy",
    price: 95,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-23",
    title: "Giza Pyramids & Sphinx Private Tour",
    description: "Uncover the secrets of the ancient Pharaohs on a guided journey through the iconic pyramids and tombs.",
    category: "Culture",
    destination: "Cairo, Egypt",
    price: 60,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-24",
    title: "Louvre Museum VIP Guided Tour",
    description: "Skip the massive lines and discover the museum's greatest masterpieces with a certified art historian.",
    category: "Culture",
    destination: "Paris, France",
    price: 110,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9647a64db0?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-25",
    title: "Taj Mahal Sunrise Guided Visit",
    description: "Witness the breathtaking marble mausoleum glowing in pink and gold hues during the quiet morning hours.",
    category: "Culture",
    destination: "Agra, India",
    price: 40,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-26",
    title: "Broadway Backstage Tour & Show",
    description: "Go behind the scenes of a legendary theatre, meet cast members, and watch an award-winning musical.",
    category: "Culture",
    destination: "New York, USA",
    price: 240,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1513829096970-cf9989577dfc?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-27",
    title: "Temples of Angkor Wat Sunrise Bike Tour",
    description: "Cycle along ancient jungle pathways to explore the monumental stone temples of the Khmer Empire.",
    category: "Culture",
    destination: "Siem Reap, Cambodia",
    price: 50,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-28",
    title: "Traditional Flamenco Show in a Cave",
    description: "Feel the raw passion of authentic Andalusian flamenco music and dance inside a historic cave venue.",
    category: "Culture",
    destination: "Granada, Spain",
    price: 35,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-29",
    title: "Day of the Dead Celebration Workshop",
    description: "Create traditional sugar skulls and floral altars while learning about the rich history of this festive ritual.",
    category: "Culture",
    destination: "Oaxaca, Mexico",
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-30",
    title: "Gothic Quarter History Walking Tour",
    description: "Stroll through narrow medieval lanes, discovering Roman ruins and hidden squares with a local storyteller.",
    category: "Culture",
    destination: "Barcelona, Spain",
    price: 25,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-31",
    title: "Maori Cultural Experience & Hangi Feast",
    description: "Participate in a traditional greeting ritual, watch a haka dance, and enjoy a slow-cooked earth oven feast.",
    category: "Culture",
    destination: "Rotorua, New Zealand",
    price: 90,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-32",
    title: "Royal Palace & Emerald Buddha Tour",
    description: "Marvel at the spectacular architecture and intricate golden spires of Thailand's most sacred temple complex.",
    category: "Culture",
    destination: "Bangkok, Thailand",
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-33",
    title: "Vatican Museums & Sistine Chapel Tour",
    description: "Admire Michelangelo's breathtaking ceiling and masterworks of the Renaissance on a curated museum route.",
    category: "Culture",
    destination: "Rome, Italy",
    price: 85,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-34",
    title: "Calligraphy Masterclass with a Shodo Master",
    description: "Learn the elegant art of Japanese brush calligraphy and paint your own meaningful kanji character.",
    category: "Culture",
    destination: "Kyoto, Japan",
    price: 55,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-35",
    title: "Sultanahmet Mosque & Hagia Sophia Tour",
    description: "Trace the layers of Byzantine and Ottoman history inside these towering architectural masterpieces.",
    category: "Culture",
    destination: "Istanbul, Turkey",
    price: 30,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-36",
    title: "Native American Cultural Arts Tour",
    description: "Meet local weavers and potters, exploring the rich heritage and symbolism of Southwestern tribal arts.",
    category: "Culture",
    destination: "Santa Fe, USA",
    price: 70,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-37",
    title: "Traditional Fado Music Dinner Show",
    description: "Listen to the soulful, melancholic melodies of classical Portuguese Fado in the historic Alfama district.",
    category: "Culture",
    destination: "Lisbon, Portugal",
    price: 65,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-38",
    title: "Samba School Rehearsal & Dance Lesson",
    description: "Feel the rhythm of Rio by joining an energetic community rehearsal for the world-famous Carnival parade.",
    category: "Culture",
    destination: "Rio de Janeiro, Brazil",
    price: 50,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1481134685563-d37d59a29bf7?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-39",
    title: "Sacred Temples of Bali Heritage Tour",
    description: "Visit the iconic water temples of Tanah Lot and Uluwatu, witnessing a traditional Kecak fire dance at sunset.",
    category: "Culture",
    destination: "Bali, Indonesia",
    price: 55,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-40",
    title: "Sikh Golden Temple Community Kitchen",
    description: "Volunteer at the kitchen feeding 100,000 people daily, experiencing the profound culture of selfless service.",
    category: "Culture",
    destination: "Amritsar, India",
    price: 20,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&h=400&q=80"
  },

  // --- FOOD (20 items) ---
  {
    id: "exp-41",
    title: "Michelin Street Food Tour by Tuk-Tuk",
    description: "Zip through bustling night markets to taste legendary crab omelettes, pad thai, and mango sticky rice.",
    category: "Food",
    destination: "Bangkok, Thailand",
    price: 45,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-42",
    title: "Pasta & Tiramisu Making Class",
    description: "Learn the secrets of rolling perfect egg pasta and layering rich tiramisu from a professional Italian chef.",
    category: "Food",
    destination: "Rome, Italy",
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-43",
    title: "Tapas & Wine Tasting in El Born",
    description: "Stroll between historic taverns sampling gourmet cured meats, local cheeses, and matching regional wines.",
    category: "Food",
    destination: "Barcelona, Spain",
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1515003844864-2254e4fdb0a3?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-44",
    title: "Tsukiji Outer Market Sushi Tour",
    description: "Savor incredibly fresh sashimi and hand-rolled nigiri while exploring the alleys of the historic market.",
    category: "Food",
    destination: "Tokyo, Japan",
    price: 85,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-45",
    title: "Oaxaca Street Food & Market Tour",
    description: "Taste smoky tlayudas, sweet tamales, and rich grasshopper tacos in the heart of Mexico's culinary capital.",
    category: "Food",
    destination: "Oaxaca, Mexico",
    price: 35,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-46",
    title: "French Wine & Cheese Tasting",
    description: "Sample premium wines from Bordeaux and Burgundy paired with hand-selected artisanal cheeses in a cozy cellar.",
    category: "Food",
    destination: "Paris, France",
    price: 95,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-47",
    title: "Private Chef Kaiseki Dining",
    description: "Indulge in a seasonal multi-course masterpiece of artistic Japanese cuisine in a private riverview salon.",
    category: "Food",
    destination: "Kyoto, Japan",
    price: 220,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-48",
    title: "Artisanal Pizza Masterclass",
    description: "Master the physics of wood-fired Neapolitan pizza, from stretching the dough to choosing fresh toppings.",
    category: "Food",
    destination: "Naples, Italy",
    price: 50,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-49",
    title: "Street Food & Craft Beer Crawl",
    description: "Discover local microbreweries paired with gourmet food truck sliders in the hip neighborhoods of Brooklyn.",
    category: "Food",
    destination: "New York, USA",
    price: 80,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-50",
    title: "Cape Winelands Vineyard Lunch & Tour",
    description: "Stroll through historic vineyards, sample award-winning vintages, and enjoy a farm-to-table estate lunch.",
    category: "Food",
    destination: "Stellenbosch, South Africa",
    price: 110,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-51",
    title: "Traditional Balinese Cooking School",
    description: "Harvest fresh herbs in an organic garden and grind spices to cook authentic satay and chicken betutu.",
    category: "Food",
    destination: "Bali, Indonesia",
    price: 40,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-52",
    title: "Pastry & Croissant Baking Workshop",
    description: "Learn the delicate techniques of laminating buttery dough to bake golden, flaky croissants.",
    category: "Food",
    destination: "Paris, France",
    price: 70,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-53",
    title: "Spicy Sichuan Hotpot Masterclass",
    description: "Learn to blend fiery chili oils and Sichuan peppercorns for a spectacular interactive dining experience.",
    category: "Food",
    destination: "Chengdu, China",
    price: 55,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-54",
    title: "Santorini Sunset Wine Tasting Tour",
    description: "Savor crisp, volcanic Assyrtiko wines paired with local mezze plates as the sun sinks into the Aegean.",
    category: "Food",
    destination: "Santorini, Greece",
    price: 125,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-55",
    title: "Vietnamese Pho & Summer Roll Class",
    description: "Brew rich beef broths and roll fresh summer rolls under the guidance of a passionate home cook.",
    category: "Food",
    destination: "Hanoi, Vietnam",
    price: 30,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-56",
    title: "High-End Caviar & Vodka Tasting",
    description: "Experience a luxurious tasting flight of premium sturgeon caviars paired with ice-cold single-estate vodkas.",
    category: "Food",
    destination: "Warsaw, Poland",
    price: 190,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-57",
    title: "Belgian Chocolate Making Workshop",
    description: "Tempering, molding, and piping rich Belgian chocolate to create your own box of custom pralines.",
    category: "Food",
    destination: "Brussels, Belgium",
    price: 60,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-58",
    title: "Moroccan Tagine & Mint Tea Masterclass",
    description: "Learn the perfect balance of cumin, cinnamon, and saffron to cook a tender lamb and apricot tagine.",
    category: "Food",
    destination: "Marrakech, Morocco",
    price: 45,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-59",
    title: "Borough Food Market History & Tasting",
    description: "Explore the historic market arches, sampling gourmet sausage rolls, fresh oysters, and British fudges.",
    category: "Food",
    destination: "London, UK",
    price: 50,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-60",
    title: "Traditional Peruvian Ceviche Class",
    description: "Learn to cure ultra-fresh sea bass in sharp lime juice with native chili peppers and sweet potato.",
    category: "Food",
    destination: "Lima, Peru",
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&h=400&q=80"
  },

  // --- WELLNESS (20 items) ---
  {
    id: "exp-61",
    title: "Sound Bath & Meditation in a Forest",
    description: "Rebalance your nervous system with healing frequencies of crystal singing bowls nestled in a redwood grove.",
    category: "Wellness",
    destination: "Kyoto, Japan",
    price: 65,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-62",
    title: "Balinese Thermal Spa & Flower Bath",
    description: "Soak in hot volcanic mineral pools followed by a luxurious bath covered in fragrant frangipani petals.",
    category: "Wellness",
    destination: "Bali, Indonesia",
    price: 90,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-63",
    title: "Blue Lagoon Geothermal Bathing",
    description: "Soak in mineral-rich, milky-blue waters surrounded by dramatic volcanic lava fields.",
    category: "Wellness",
    destination: "Reykjavik, Iceland",
    price: 115,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-64",
    title: "Sunrise Yoga & Meditation at Wat Pho",
    description: "Flow through a gentle Hatha sequence in the peaceful gardens of the temple before the crowds arrive.",
    category: "Wellness",
    destination: "Bangkok, Thailand",
    price: 35,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-65",
    title: "Authentic Hammam Steam & Scrub",
    description: "Experience a deep-cleansing black soap wash and vigorous kessa mitt exfoliation in a marble bathhouse.",
    category: "Wellness",
    destination: "Marrakech, Morocco",
    price: 55,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-66",
    title: "Forest Bathing & Tea Ceremony",
    description: "Immerse your senses in the healing compounds of native pine forests during a slow guided walk.",
    category: "Wellness",
    destination: "Portland, USA",
    price: 45,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-67",
    title: "Silent Meditation Retreat Day",
    description: "Unplug from digital life and enjoy a structured day of walking, sitting, and mindful eating meditations.",
    category: "Wellness",
    destination: "Chiang Mai, Thailand",
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-68",
    title: "Traditional Ayurvedic Oil Massage",
    description: "Rejuvenate your body with a rhythmic four-hand herbal oil massage tailored to your unique dosha.",
    category: "Wellness",
    destination: "Kerala, India",
    price: 70,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-69",
    title: "Hot Stone Therapy & Reflexology",
    description: "Release chronic muscle tension with smooth, heated basalt stones placed on key energy meridians.",
    category: "Wellness",
    destination: "Rome, Italy",
    price: 95,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1519823551276-6467c6e14a62?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-70",
    title: "Rooftop Oasis Vinyasa Yoga",
    description: "Practice energizing yoga overlooking the city skyline, followed by fresh organic cold-pressed juices.",
    category: "Wellness",
    destination: "New York, USA",
    price: 40,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-71",
    title: "Sunset Paddleboard Yoga",
    description: "Test your balance by flowing through yoga poses on a stable stand-up paddleboard in a calm lagoon.",
    category: "Wellness",
    destination: "Honolulu, USA",
    price: 60,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-72",
    title: "Onsen Hot Springs Ritual",
    description: "Bathe in mineral-rich, volcanic hot springs overlooking the misty peak of Mount Fuji.",
    category: "Wellness",
    destination: "Hakone, Japan",
    price: 85,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-73",
    title: "Tibetan Singing Bowls Sound Healing",
    description: "Relax deeply as harmonic vibrations from metal bowls resonate through your body to clear mental blocks.",
    category: "Wellness",
    destination: "Kathmandu, Nepal",
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-74",
    title: "Thalassotherapy Marine Treatment",
    description: "Enjoy ocean-facing hydro-massage pools and mineral wraps utilizing organic harvested seaweed.",
    category: "Wellness",
    destination: "Santorini, Greece",
    price: 140,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-75",
    title: "Temazcal Shamanic Sweat Lodge",
    description: "Participate in a traditional Mesoamerican purification ceremony led by an experienced local shaman.",
    category: "Wellness",
    destination: "Tulum, Mexico",
    price: 95,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-76",
    title: "Alpine Sauna & Cold Plunge",
    description: "Sweat out toxins in a panoramic wood-fired sauna before plunging into a crystal-clear mountain stream.",
    category: "Wellness",
    destination: "Interlaken, Switzerland",
    price: 80,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-77",
    title: "Organic Essential Oil Blending",
    description: "Learn the benefits of aromatherapy and formulate your own customized calming massage oil to take home.",
    category: "Wellness",
    destination: "Paris, France",
    price: 50,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-78",
    title: "Qi Gong & Tai Chi Sunrise Session",
    description: "Align breath, movement, and awareness with slow fluid exercises overlooking the peaceful West Lake.",
    category: "Wellness",
    destination: "Hangzhou, China",
    price: 30,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-79",
    title: "Nordic Spa Hydrotherapy Circuit",
    description: "Invigorate your circulation by cycling between hot outdoor pools, steam rooms, and icy waterfalls.",
    category: "Wellness",
    destination: "Quebec City, Canada",
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-80",
    title: "Breathwork & Cold Water Therapy",
    description: "Learn controlled hyperventilation techniques before entering an ice bath to conquer stress responses.",
    category: "Wellness",
    destination: "Queenstown, New Zealand",
    price: 90,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&h=400&q=80"
  },

  // --- NATURE (20 items) ---
  {
    id: "exp-81",
    title: "Northern Lights Jeep Expedition",
    description: "Hunt the elusive Aurora Borealis across dark snowscapes in a custom-built 4x4 super jeep.",
    category: "Nature",
    destination: "Reykjavik, Iceland",
    price: 160,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1482355343995-15a0c30089e9?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-82",
    title: "Arashiyama Bamboo Grove Walk",
    description: "Walk under towering green bamboo stalks at sunrise, listening to the soothing rustle of the wind.",
    category: "Nature",
    destination: "Kyoto, Japan",
    price: 25,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-83",
    title: "Table Mountain Guided Hike",
    description: "Climb the iconic flat-topped peak via a scenic ravine, enjoying 360-degree views of the Atlantic coast.",
    category: "Nature",
    destination: "Cape Town, South Africa",
    price: 45,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-84",
    title: "Milford Sound Wilderness Cruise",
    description: "Sail beneath towering granite cliffs, cascading waterfalls, and spot playful seals in the fjord.",
    category: "Nature",
    destination: "Queenstown, New Zealand",
    price: 95,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-85",
    title: "Trekking through the Sacred Valley",
    description: "Hike along ancient agricultural terraces and scenic alpine lakes beneath towering snow-capped peaks.",
    category: "Nature",
    destination: "Cusco, Peru",
    price: 110,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-86",
    title: "Sunset Sailing & Dolphin Spotting",
    description: "Coast along the gorgeous red volcanic cliffs of Oia on a luxury catamaran, spotting wild dolphins.",
    category: "Nature",
    destination: "Santorini, Greece",
    price: 130,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505080856163-267d49b30626?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-87",
    title: "Doubtful Sound Kayak Expedition",
    description: "Paddle through the deep, silent waters of New Zealand's most remote and untouched coastal fjords.",
    category: "Nature",
    destination: "Queenstown, New Zealand",
    price: 175,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-88",
    title: "Wildlife Safari in Kruger Park",
    description: "Embark on an open-vehicle game drive to search for lions, leopards, rhinos, elephants, and buffalos.",
    category: "Nature",
    destination: "Kruger, South Africa",
    price: 350,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-89",
    title: "Amazon Rainforest Canopy Walk",
    description: "Traverse suspension bridges hung high in the treetops to spot exotic birds and colorful tree frogs.",
    category: "Nature",
    destination: "Iquitos, Peru",
    price: 140,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-90",
    title: "Mount Batur Sunrise Volcano Trek",
    description: "Hike up the active volcano in the cool night air to witness a spectacular sunrise over Lake Batur.",
    category: "Nature",
    destination: "Bali, Indonesia",
    price: 55,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-91",
    title: "Klong Canal Birdwatching Boat Tour",
    description: "Ride a traditional wooden longtail boat through hidden mangrove canals, spotting rare aquatic birds.",
    category: "Nature",
    destination: "Bangkok, Thailand",
    price: 40,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-92",
    title: "Parnitha Mountain Hiking Trail",
    description: "Hike through lush fir forests to the summit of the mountain guarding Athens, seeing wild deer.",
    category: "Nature",
    destination: "Athens, Greece",
    price: 35,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-93",
    title: "Scenic Coastal Hike in Costa Brava",
    description: "Follow rugged cliff pathways above crystal-clear turquoise waters and hidden pine-fringed beaches.",
    category: "Nature",
    destination: "Barcelona, Spain",
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-94",
    title: "Eulogy of Trees: Redwood Hike",
    description: "Walk under some of the tallest living organisms on Earth in the quiet, misty mornings of Northern California.",
    category: "Nature",
    destination: "San Francisco, USA",
    price: 65,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-95",
    title: "Grand Canyon South Rim Trail Walk",
    description: "Stroll along the rim of the world's most famous canyon, viewing millions of years of geological history.",
    category: "Nature",
    destination: "Grand Canyon, USA",
    price: 30,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-96",
    title: "Plitvice Lakes Boardwalk Stroll",
    description: "Walk on wooden pathways hovering over interconnected terraced lakes and spectacular travertine waterfalls.",
    category: "Nature",
    destination: "Plitvice, Croatia",
    price: 80,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-97",
    title: "Fuji Five Lakes Scenic Cycle Tour",
    description: "Cycle along the shores of Lake Kawaguchiko, taking in postcards views of the snow-dusted volcano.",
    category: "Nature",
    destination: "Hakone, Japan",
    price: 70,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-98",
    title: "Whale Watching in the Atlantic Bay",
    description: "Board a specialized vessel to spot humpbacks, minkes, and harbor porpoises feeding in cold coastal waters.",
    category: "Nature",
    destination: "Reykjavik, Iceland",
    price: 90,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-99",
    title: "Tijuca Rainforest Waterfall Trek",
    description: "Hike through the world's largest urban forest, stopping to swim under refreshing jungle waterfalls.",
    category: "Nature",
    destination: "Rio de Janeiro, Brazil",
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: "exp-100",
    title: "Appalachian Trail Autumn Walk",
    description: "Hike a scenic segment of the trail surrounded by spectacular displays of red, orange, and gold leaves.",
    category: "Nature",
    destination: "Asheville, USA",
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&h=400&q=80"
  }
];
