// seedData.js — Run with: npm run seed
import "dotenv/config";
import connectDB from "./configs/db.js";
import User from "./models/user.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";
import Hospitality from "./models/Hospitality.js";
import bcrypt from "bcryptjs";

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log("Connected to DB. Seeding...");

    // ── 1. Create Sobana users ──
    const hashedPw = await bcrypt.hash("Sobana123", 10);
    
    // Owner
    const dummyOwnerId = "seed_owner_001";
    await User.findByIdAndUpdate(dummyOwnerId, {
      email: "owner@Sobana.com",
      password: hashedPw,
      username: "Sobana Hotel Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      role: "hotelOwner",
      ownerStatus: "approved",
    }, { upsert: true });

    // Admin
    const dummyAdminId = "seed_admin_001";
    await User.findByIdAndUpdate(dummyAdminId, {
      email: "admin@Sobana.com",
      password: hashedPw,
      username: "Sobana Admin",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
      role: "admin",
    }, { upsert: true, setDefaultsOnInsert: true });

    // Normal User
    const dummyUserId = "seed_user_001";
    await User.findByIdAndUpdate(dummyUserId, {
      email: "user@Sobana.com",
      password: hashedPw,
      username: "Sobana User",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
      role: "user",
    }, { upsert: true, setDefaultsOnInsert: true });

    console.log("✅ Sobana users created: admin@Sobana.com, owner@Sobana.com, user@Sobana.com");

    // ── 2. Clear old seed data ──
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await Hospitality.deleteMany({});
    console.log("🧹 All existing hotels, rooms, and hospitalities cleared");

    // ── 3. Hotels ──
    const hotelsData = [
      {
        name: "Sobana Hotel",
        address: "Main Road, City Center",
        contact: "+251 911 234 567",
        city: "Arba Minch",
        description: "A modern luxury hotel in the heart of the city, featuring exquisite dining, a relaxing pool, and spacious rooms tailored for both business and leisure travelers.",
        owner: dummyOwnerId,
        status: "approved",
      },
    ];

    const createdHotels = await Hotel.insertMany(hotelsData);
    console.log(`✅ ${createdHotels.length} hotels created`);

    // ── 4. Rooms (6 per hotel = 24 total) ──
    const roomTemplates = [
      {
        title: "Deluxe King Suite",
        description: "Spacious king-size suite with a private balcony, marble bathroom, minibar, and breathtaking views. Perfect for couples seeking luxury.",
        roomType: "Luxury Room",
        pricePerNight: 4500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Mountain View", "Air Conditioning"],
        images: [
          "/src/assets/sobana/10001.jpg",
          "/src/assets/sobana/10002.jpg",
        ],
      },
      {
        title: "Executive Double Room",
        description: "Elegantly furnished double room with premium linens, work desk, and high-speed internet. Ideal for business travelers.",
        roomType: "Double Bed",
        pricePerNight: 3200,
        amenities: ["Free Wifi", "Free Breakfast", "Air Conditioning", "Room Service"],
        images: [
          "/src/assets/sobana/10003.jpg",
          "/src/assets/sobana/10004.jpg",
        ],
      },
      {
        title: "Premium Single Room",
        description: "A simple, comfortable room with everything you need for a good night's sleep. Includes a nice queen bed and a clean, modern bathroom.",
        roomType: "Single Bed",
        pricePerNight: 1800,
        amenities: ["Free Wifi", "Air Conditioning", "Housekeeping"],
        images: [
          "/src/assets/sobana/10008.jpg",
          "/src/assets/sobana/10011.jpg",
        ],
      },
      {
        title: "Family Suite",
        description: "Plenty of room for the whole family to stretch out. Comes with a separate living space, two bathrooms, and we'll even cover breakfast for everyone.",
        roomType: "Family Suite",
        pricePerNight: 5500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Parking", "Air Conditioning"],
        images: [
          "/src/assets/sobana/10001.jpg",
          "/src/assets/sobana/10003.jpg",
        ],
      },
      {
        title: "Ocean View Penthouse",
        description: "The best room we have. Huge windows, your own private terrace, and amazing views from the top floor.",
        roomType: "Luxury Room",
        pricePerNight: 8500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Mountain View", "Parking", "Air Conditioning"],
        images: [
          "/src/assets/sobana/10002.jpg",
          "/src/assets/sobana/10008.jpg",
        ],
      },
      {
        title: "Standard Comfort Room",
        description: "A great value option if you just need a clean, comfortable place to crash for the night without breaking the bank.",
        roomType: "Single Bed",
        pricePerNight: 1200,
        amenities: ["Free Wifi", "Housekeeping", "Air Conditioning"],
        images: [
          "/src/assets/sobana/10004.jpg",
          "/src/assets/sobana/10011.jpg",
        ],
      },
    ];

    const roomsToInsert = createdHotels.flatMap((hotel) =>
      roomTemplates.map((template) => ({
        ...template,
        hotel: hotel._id.toString(),
        isAvailable: true,
      }))
    );
    await Room.insertMany(roomsToInsert);
    console.log(`✅ ${roomsToInsert.length} rooms created`);

    // ── 5. Hospitality Items (food/services, 5 per hotel = 20 total) ──
    const hospitalityTemplates = [
      {
        title: "Traditional Ethiopian Breakfast",
        description: "Start your morning with freshly brewed Ethiopian coffee, injera with various wots, fresh fruit platter, and pastries.",
        category: "Breakfast",
        price: 450,
        features: ["Organic Coffee", "Fresh Injera", "Seasonal Fruits", "Vegan Options"],
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
      },
      {
        title: "Signature Spa Treatment",
        description: "Full-body relaxation package with hot stone massage, aromatherapy, and a rejuvenating facial using local botanical ingredients.",
        category: "Spa",
        price: 2800,
        features: ["Hot Stone Massage", "Aromatherapy", "Facial Treatment", "Herbal Tea"],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
      },
      {
        title: "Gourmet Dinner Experience",
        description: "Five-course candlelit dinner featuring a fusion of Ethiopian and international cuisine, paired with fine wines.",
        category: "Dining",
        price: 3500,
        features: ["Five Courses", "Wine Pairing", "Live Music", "Private Table"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      },
      {
        title: "Fitness & Wellness Package",
        description: "Access to our state-of-the-art gym, yoga sessions, swimming pool, and a healthy smoothie bar throughout your stay.",
        category: "Fitness",
        price: 1200,
        features: ["Gym Access", "Yoga Classes", "Pool Access", "Smoothie Bar"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      },
      {
        title: "Sunset Cocktail Lounge",
        description: "Premium craft cocktails and appetizers served at our rooftop bar with stunning sunset views over the city.",
        category: "Bar",
        price: 800,
        features: ["Craft Cocktails", "Appetizers", "Rooftop Views", "Live DJ"],
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
      },
      {
        title: "Cultural City Tour",
        description: "Guided half-day tour exploring local landmarks, markets, and hidden gems with an experienced local guide.",
        category: "Tour",
        price: 2000,
        features: ["Local Guide", "Transport Included", "Market Visit", "Photo Stops"],
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop",
      },
      {
        title: "Afternoon Tea & Pastries",
        description: "Elegant afternoon tea service with a selection of premium teas, fresh pastries, finger sandwiches, and scones.",
        category: "Dining",
        price: 650,
        features: ["Premium Teas", "Fresh Pastries", "Finger Sandwiches", "Garden Seating"],
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop",
      },
    ];

    const hospitalityToInsert = createdHotels.flatMap((hotel) =>
      hospitalityTemplates.map((template) => ({
        ...template,
        hotel: hotel._id.toString(),
        isAvailable: true,
      }))
    );
    await Hospitality.insertMany(hospitalityToInsert);
    console.log(`✅ ${hospitalityToInsert.length} hospitality items created`);

    console.log("\n🎉 Seeding completed successfully!");
    console.log(`   Hotels: ${createdHotels.length}`);
    console.log(`   Rooms: ${roomsToInsert.length}`);
    console.log(`   Hospitality: ${hospitalityToInsert.length}`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
};

seedDatabase();
